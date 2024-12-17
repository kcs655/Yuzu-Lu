"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const userData = { username, email, password };

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        alert("新規登録成功！");
        router.push("/login"); // 新規登録成功後にログイン画面に遷移
      } else {
        alert("新規登録失敗");
      }
    } catch (error) {
      console.error("エラー:", error);
      alert("エラーが発生しました。");
    }
  };

  return (
    <div style={styles.container}>
      {/* ヘッダー */}
      <header style={styles.header}>
        <h1 style={styles.title}>Yuzu➡Lu</h1>
      </header>

      {/* 新規登録フォーム */}
      <div style={styles.registerBox}>
        <h2 style={styles.registerTitle}>新規登録</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>
            ユーザー名
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
              required
            />
          </label>
          <label style={styles.label}>
            メールアドレス
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </label>
          <label style={styles.label}>
            パスワード
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </label>
          <button type="submit" style={styles.button}>
            新規登録
          </button>
        </form>
      </div>

      {/* フッター */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>
          アカウントをお持ちの方はこちら{" "}
          <a href="/login" style={styles.link}>
            [ログイン]
          </a>
        </p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f9f9f9",
    position: "relative" as const,
  },
  header: {
    position: "absolute" as const,
    top: "0",
    width: "100%",
    textAlign: "center" as const,
    backgroundColor: "#007BFF",
    color: "#ffffff",
    padding: "10px 0",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold" as const,
    margin: 0,
  },
  registerBox: {
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "400px",
  },
  registerTitle: {
    fontSize: "20px",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "15px",
    width: "70%",
  },
  label: {
    fontSize: "14px",
    fontWeight: "bold" as const,
    color: "#555",
  },
  input: {
    padding: "10px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "100%",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "white",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textAlign: "center" as const,
  },
  footer: {
    position: "fixed" as const,
    bottom: "0",
    width: "100%",
    backgroundColor: "#f0f0f0",
    textAlign: "center" as const,
    padding: "10px 0",
    boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.1)",
  },
  footerText: {
    margin: 0,
    fontSize: "14px",
    color: "#555",
  },
  link: {
    color: "#007BFF",
    textDecoration: "none",
    fontWeight: "bold" as const,
  },
};
