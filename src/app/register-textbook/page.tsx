"use client";

import { useState } from "react";

export default function RegisterTextbook() {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [author, setAuthor] = useState("");
  const [grade, setGrade] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !subject || !author || !grade || !description || !image) {
      alert("すべての項目を入力してください。");
      return;
    }

    // FormDataを使って画像ファイルと他のデータを送信
    const formData = new FormData();
    formData.append("title", title);
    formData.append("subject", subject);
    formData.append("author", author);
    formData.append("grade", grade);
    formData.append("description", description);
    formData.append("image", image);

    try {
      const response = await fetch("/api/register-textbook", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("教科書が登録されました！");
        setTitle("");
        setSubject("");
        setAuthor("");
        setGrade("");
        setDescription("");
        setImage(null);
      } else {
        alert("教科書の登録に失敗しました。");
      }
    } catch (error) {
      console.error("エラー:", error);
      alert("エラーが発生しました。");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>教科書登録</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>
          教科書名:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          科目:
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          著者名:
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          利用学年:
          <input
            type="text"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          説明:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={styles.textarea}
            required
          ></textarea>
        </label>
        <label style={styles.label}>
          画像:
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
            style={styles.fileInput}
            required
          />
        </label>
        <button type="submit" style={styles.button}>
          登録
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
    textAlign: "center" as const,
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "15px",
  },
  label: {
    fontWeight: "bold",
    fontSize: "16px",
  },
  input: {
    padding: "10px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "100%",
  },
  textarea: {
    padding: "10px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "100%",
    minHeight: "100px",
  },
  fileInput: {
    padding: "5px",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    fontWeight: "bold" as const,
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textAlign: "center" as const,
  },
};
