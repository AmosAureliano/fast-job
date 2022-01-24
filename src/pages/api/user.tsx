import type { NextApiRequest, NextApiResponse } from "next";
import connect from "../../../utils/database";

interface ResponseType {
  message: string;
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { db } = await connect();

  if (req.method === "POST") {
    const {
      name,
      email,
      birth_date,
      phone,
      objective,
      institution,
      course,
      period,
      admission,
      skills,
      github,
      user,
      password,
    } = req.body;

    const response = await db.collection("users").insertOne({
      name,
      email,
      birth_date,
      phone,
      objective,
      institution,
      course,
      period,
      admission,
      skills,
      github,
      user,
      password,
    });

    res.status(200).json(response.ops[0]);
  } else if (req.method === "GET") {
    const response = await db.collection("users").find().toArray();

    return res.status(200).json(response);
  } else {
    res.status(400).json({ message: "Error 404" });
  }
};

//User: ijob
//Password: MpjhsKM4p8c1UDnZ

//mongodb+srv://ijob:MpjhsKM4p8c1UDnZ@cluster0.v18wl.mongodb.net/test
