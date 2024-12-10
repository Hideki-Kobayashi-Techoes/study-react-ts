'use client';

import { Header } from "@/components/Header";
import { useInputArray } from "@/hooks/useInputArray";

export default function Home() {
  const {text, array, handleChange, handleAdd} = useInputArray()
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p>Input Page</p>
        <p>インプット</p>
        <p>配列の中身</p>
        <ul className="border">
          {array.map(item => {
            return <li key={item}>{item}</li>
          })}
        </ul>
        <label htmlFor="input">入力↓</label>
        <input id="input" className="border border-black" type="text" value={text} onChange={handleChange}/>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            onClick={handleAdd}
          >
            追加
          </button>
        </div>
      </main>
    </div>
  );
}
