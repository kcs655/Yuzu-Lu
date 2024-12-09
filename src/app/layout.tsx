"use client";

import "./globals.css";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // サイドバーを非表示にするパスを指定
  const hideSidebarRoutes = ["/", "/login", "/register"];
  const showSidebar = !hideSidebarRoutes.includes(pathname);

  return (
    <html lang="ja">
      <body>
        <div className="layout">
          {showSidebar && (
            <aside className="sidebar">
              <div className="user">
                <img src="/user-icon.png" alt="ユーザーアイコン" className="user-icon" />
                <p>ユーザー</p>
              </div>
              <nav className="nav">
                <a href="/">ホーム</a>
                <a href="/search">検索</a>
                <a href="/register-textbook">登録</a> {/* 修正箇所 */}
                <a href="/wishlist">欲しいリスト</a>
                <a href="/trade">取引</a>
              </nav>
            </aside>
          )}
          <main className="content">{children}</main>
        </div>
      </body>
    </html>
  );
}
