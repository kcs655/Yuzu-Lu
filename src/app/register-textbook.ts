import { NextApiRequest, NextApiResponse } from "next";

// 仮のデータベース（実際のプロジェクトではデータベースを使用）
let textbookDatabase: any[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { title, subject, description, grade } = req.body;

    // 入力値のバリデーション
    if (!title || !subject || !description || !grade) {
      return res.status(400).json({ error: "すべてのフィールドを入力してください。" });
    }

    // データの保存（仮: メモリ内保存）
    const newTextbook = {
      id: textbookDatabase.length + 1,
      title,
      subject,
      description,
      grade,
    };

    textbookDatabase.push(newTextbook);

    return res.status(201).json({ message: "教科書が登録されました。", textbook: newTextbook });
  } else {
    // POST以外のHTTPメソッドは許可しない
    return res.status(405).json({ error: "このメソッドは許可されていません。" });
  }
}
