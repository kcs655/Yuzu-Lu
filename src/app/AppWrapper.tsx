"use client";

import { useEffect, useState } from "react";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true); // クライアントサイドの準備が整ったら状態を更新
  }, []);

  if (!isHydrated) {
    return <div>Loading...</div>; // ローディング状態を表示
  }

  return <div>{children}</div>;
}
