import { LinkedBookDetails } from "@/components/LinkedBookDetails";
import { getBooksByKeyword } from "@/lib/getter";

// ルートパラメータ既定値はReact
export default async function BookResult({ params: { keyword = 'React' }}) {
  const books = await getBooksByKeyword(keyword)

  return (
    <>
      {books.map((book, index) => {
        <LinkedBookDetails book={book} index={index + 1} key={book.id} />
      })}
    </>
  )
}