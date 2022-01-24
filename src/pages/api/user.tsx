import type { NextApiRequest, NextApiResponse } from 'next';

import { User } from './Models/User';
import UserController from './Controllers/UserController';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === 'POST') {
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
      password,
    } = req.body;

    const response = await UserController.post({
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
      password,
    } as User);

    if (response) {
      res.status(200).json(response);
    }

    return res.status(500).json({ Error: 'Aconteceu algum error' });
  } else if (req.method === 'GET') {
    const { email } = req.body;

    const response = await UserController.get(email);

    if (response) {
      res.status(200).json(response);
    }

    return res.status(500).json({ Error: 'Aconteceu algum error' });
  } else {
    res.status(400).json({ message: 'Error 404' });
  }
};
