export default async function Page() {
  // ユーザ一覧を取得（存在しないURLを指定しているため失敗する）
  const response = await fetch('http://localhost:3000/hoge');
  // レスポンスがエラーの場合はエラーを投げる
  if (!response.ok) throw new Error("データの取得に失敗しました(テストです)");

  const users = await response.json();
  console.log(users);

  return (
    <div>失敗するとここは表示されない。error.jsが表示される</div>
  );
};