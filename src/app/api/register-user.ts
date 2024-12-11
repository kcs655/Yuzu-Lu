import { NextApiRequest, NextApiResponse } from 'next';
import prisma  from '../lib/prisma';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server'; // 必要に応じてNextResponseをインポート

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const hashedPassword = await bcrypt.hash(body.password, 10);

    const user = await prisma.user.create({
      data: {
        username: body.username,
        email: body.email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error('エラー:', error);
    return NextResponse.json({ error: 'User registration failed' });
  }
}
