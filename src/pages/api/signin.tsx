import type { NextApiRequest, NextApiResponse } from 'next';

import { User } from './Models/User';
import SignInController from './Controllers/SignInController';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === 'GET') {
    const { password, email } = req.body;

    const response = await SignInController.signIn(email, password);

    if (response) {
      res.status(200).json(response);
    }

    return res.status(500).json({ Error: 'Aconteceu algum error' });
  } else {
    res.status(400).json({ message: 'Error 404' });
  }
};
