import { LinkedBookDetails } from "@/components/LinkedBookDetails";
import { getAllReviews } from "@/lib/getter";


export const metadata = {
  title: 'Reading Recorder',
  description: '自分が読んだ書籍を記録を残すためのアプリ',
}

// 常に最新情報を取得するためのコード
export const dynamic = 'force-dynamic';

export default async function Home() {
  const reviews = await getAllReviews();
  return (
    <>
      {reviews.map((book, index) => {
        <LinkedBookDetails book={book} index={index + 1} key={book.id} />
      })}
    </>
  );
}
