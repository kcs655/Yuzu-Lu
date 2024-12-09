export default function MyPage() {
  const textbooks = [
    { id: 1, title: "数学Ⅰ", description: "高校1年生用" },
    { id: 2, title: "英語Ⅱ", description: "高校2年生用" },
  ];

  return (
    <div>
      <h1>マイ教科書リスト</h1>
      <div className="grid">
        {textbooks.map((book) => (
          <div key={book.id} className="card">
            <h2>{book.title}</h2>
            <p>{book.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
