"use client";

import "./globals.css";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showSidebar, setShowSidebar] = useState(false);
  const [username, setUsername] = useState("ユーザ"); // 初期値を「ユーザ」に設定

  useEffect(() => {
    const hideSidebarRoutes = ["/", "/login", "/register"];
    setShowSidebar(!hideSidebarRoutes.includes(pathname));
  }, [pathname]);

  return (
    <html lang="ja">
      <body>
        <div className="layout">
          {showSidebar && (
            <aside className="sidebar">
              <div className="user">
                <p className="username">{username}</p> {/* ユーザー名を表示 */}
              </div>
              <nav className="nav">
                <a href="/mypage">ホーム</a>
                <a href="/search">検索</a>
                <a href="/register-textbook">登録</a>
                <a href="/wishlist">欲しいリスト</a>
                <a href="/trade">取引</a>
                <a href="/" className="logout-button">ログアウト</a>
              </nav>
            </aside>
          )}
          <main className="content">{children}</main>
        </div>
      </body>
    </html>
  );
}
