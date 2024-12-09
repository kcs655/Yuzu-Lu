"use client";

import { useState } from "react";

export default function RegisterTextbook() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, description });
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
          />
        </label>
        <label>
          説明
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </label>
        <button type="submit">登録</button>
      </form>
    </div>
  );
}
