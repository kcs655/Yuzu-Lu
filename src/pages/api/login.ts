import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { compare } from 'bcrypt';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (!user) {
        res.status(401).json({ message: 'ユーザーが見つかりません' });
        return;
      }

      const isValidPassword = await compare(password, user.password);

      if (!isValidPassword) {
        res.status(401).json({ message: 'パスワードが間違っています' });
        return;
      }

      res.status(200).json({ username: user.username });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'エラーが発生しました。' });
    }
  } else {
    res.status(405).json({ message: 'メソッドが不正です。' });
  }
}