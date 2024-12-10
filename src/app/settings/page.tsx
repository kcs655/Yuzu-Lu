"use client";

import { useState } from "react";

export default function Settings() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`メールアドレスを ${email} に変更しました。`);
    setEmail("");
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    alert("パスワードを変更しました。");
    setPassword("");
  };

  const handleAccountDeletion = () => {
    if (confirm("本当にアカウントを削除しますか？")) {
      alert("アカウントが削除されました。");
    }
  };

  return (
    <div style={styles.container}>
      <h1>設定</h1>

      <form style={styles.form} onSubmit={handleEmailChange}>
        <label style={styles.label}>
          新しいメールアドレス:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
        </label>
        <button type="submit" style={styles.button}>
          メールアドレスを変更
        </button>
      </form>

      <form style={styles.form} onSubmit={handlePasswordChange}>
        <label style={styles.label}>
          新しいパスワード:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
        </label>
        <button type="submit" style={styles.button}>
          パスワードを変更
        </button>
      </form>

      <button style={styles.deleteButton} onClick={handleAccountDeletion}>
        アカウントを削除
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "20px",
    padding: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "flex-start" as const,
    gap: "10px",
  },
  label: {
    fontWeight: "bold",
  },
  input: {
    width: "300px",
    padding: "8px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  deleteButton: {
    padding: "10px 20px",
    backgroundColor: "#FF5555",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
