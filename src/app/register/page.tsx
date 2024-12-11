"use client";

import { useState } from 'react';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const userData = { username, email, password };

    try {
      const response = await fetch('/api/register-user', { // APIエンドポイントが正しいか確認
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        alert('ユーザーが登録されました！');
        setUsername('');
        setEmail('');
        setPassword('');
      } else {
        alert('ユーザー登録に失敗しました。');
      }
    } catch (error) {
      console.error('エラー:', error);
      alert('エラーが発生しました。');
    }
  };

  return (
    <div>
      <h1>新規登録</h1>
      <form onSubmit={handleSubmit}>
        <label>
          ユーザ名
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          メールアドレス
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          パスワード
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">登録</button>
      </form>
    </div>
  );
}
