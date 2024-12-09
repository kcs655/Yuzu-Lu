"use client";
import Link from "next/link";


export default function Home() {
  return (
    <main style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>教科書譲渡アプリ</h1>
      <div>
        <Link href="/register">
          <button>新規登録</button>
        </Link>
      </div>
      <div>
        <Link href="/login">
          <button>ログイン</button>
        </Link>
      </div>
      <div>
        <button onClick={() => alert("利用規約をご確認ください")}>利用規約</button>
      </div>
    </main>
  );
}
