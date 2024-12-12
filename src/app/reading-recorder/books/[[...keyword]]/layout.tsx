'use client';
import { useRouter } from "next/router";

export function BooksLayout({ children }) {
  const router = useRouter();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const keywordInput = form.keyword as HTMLInputElement;
    const keyword = keywordInput.value;
    router.push(`/books/${keyword}`);
  }

  return (
    <>
      <form className="mt-2 mb-4" onSubmit={handleSearch}>
        <label htmlFor="keyword">keyword</label>
        <input id="keyword" name="keyword" type="text" className="bg-gray-100 text-black border border-gray-600 rounded mr-2 px-2 py-2 focus:bg-white focus:outline-none focus:border-red-500" />
        <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-500">検索</button>
      </form>
      <hr />
      {children}
    </>
  )
}