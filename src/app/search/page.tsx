"use client";

import { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("検索:", query);
  };

  return (
    <div>
      <h1>教科書検索</h1>
      <input
        type="text"
        placeholder="検索キーワードを入力"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>検索</button>
    </div>
  );
}
