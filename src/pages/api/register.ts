// api/register-user.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, email, password } = req.body;

    const hashedPassword = await hash(password, 10);

    try {
        await prisma.user.create({
          data: {
            username,
            email,
            password: hashedPassword,
          },
        });
      
        res.status(200).json({ message: 'ユーザーが登録されました！' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'エラーが発生しました。' });
      }
  } else {
    res.status(405).json({ message: 'メソッドが不正です。' });
  }
}