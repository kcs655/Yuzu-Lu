"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const userData = { email, password };

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        alert(`ログイン成功！${data.username}さん`);
        router.push("/mypage"); // ログイン成功したらmypageに遷移
      } else {
        alert("ログイン失敗");
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

      {/* ログインフォーム */}
      <div style={styles.loginBox}>
        <h2 style={styles.loginTitle}>ログイン</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
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
            ログイン
          </button>
        </form>
      </div>

      {/* フッター */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>
          アカウントをお持ちでない方はこちら{" "}
          <a href="/register" style={styles.link}>
            [新規登録]
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
  loginBox: {
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: "50px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "400px",
  },
  loginTitle: {
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
