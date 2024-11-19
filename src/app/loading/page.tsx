type User = {
  id: number,
  name: string
}

export default async function Home() {
  // 3秒待機
  await new Promise((resolve) => setTimeout(resolve, 3000));
  // ユーザ一覧を取得（前述のroute.jsで作ったAPIエンドポイントを叩く）
  const response = await fetch('http://localhost:3000/users');
  const users = await response.json();
  console.log(users);
  
  return (
    <div className="m-4">
      <h1 className="text-lg font-bold">ユーザ一覧</h1>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};