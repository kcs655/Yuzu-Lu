import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const formData = req.body;

    // ファイル保存（仮）
    const filePath = path.join(process.cwd(), "public/uploads", formData.image.name);
    fs.writeFileSync(filePath, formData.image.data);

    res.status(200).json({ message: "教科書が登録されました！" });
  } else {
    res.status(405).json({ error: "メソッドが許可されていません。" });
  }
}
