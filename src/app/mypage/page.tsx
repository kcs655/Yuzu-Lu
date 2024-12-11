"use client";

import { useState } from "react";

interface Textbook {
  id: number;
  title: string;
  imageUrl?: string; // 画像URLはオプション
}

export default function MyPage() {
  const [textbooks, setTextbooks] = useState<Textbook[]>([
    { id: 1, title: "数学Ⅰ", imageUrl: "/math1.jpg" },
    { id: 2, title: "英語Ⅱ", imageUrl: "" }, // 画像なしの場合
    { id: 3, title: "物理基礎" }, // imageUrl が指定されていない場合
  ]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>マイ教科書リスト</h1>
      <div style={styles.list}>
        {textbooks.map((textbook) => (
          <div key={textbook.id} style={styles.card}>
            <img
              src={textbook.imageUrl || "/images/no-image.png"} // 画像がない場合は No Image
              alt={textbook.title}
              style={styles.image}
            />
            <p style={styles.text}>{textbook.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  list: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "20px",
  },
  card: {
    width: "150px",
    textAlign: "center" as const,
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "10px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover" as const,
    borderRadius: "8px",
    marginBottom: "10px",
  },
  text: {
    fontSize: "16px",
    fontWeight: "bold" as const,
    color: "#333",
  },
};
