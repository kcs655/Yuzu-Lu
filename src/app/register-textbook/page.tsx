"use client";

import { useState } from "react";


export default function RegisterTextbook() {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [grade, setGrade] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const textbookData = { title, subject, description, grade };

    try {
      const response = await fetch("/api/register-textbook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(textbookData),
      });

      if (response.ok) {
        alert("教科書が登録されました！");
        setTitle("");
        setSubject("");
        setDescription("");
        setGrade("");
      } else {
        alert("教科書の登録に失敗しました。");
      }
    } catch (error) {
      console.error("エラー:", error);
      alert("エラーが発生しました。");
    }
  };

  return (
    <div>
      <h1>教科書登録</h1>
      <form onSubmit={handleSubmit}>
        <label>
          教科書名
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          科目
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </label>
        <label>
          説明
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </label>
        <label>
          学年
          <input
            type="text"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            required
          />
        </label>
        <button type="submit">登録</button>
      </form>
    </div>
  );
}
