'use client';

import { Header } from "@/components/Header";
import { useCounter } from "@/hooks/useCounter";

export default function Home() {
  const {count, isShow, handleClick, handleDisplay} =  useCounter();
  return (
    <>
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p>Counter Page</p>
        <p>カウンター</p>
        <div className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
          {isShow && count}
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            onClick={handleClick}
          >
            カウンター+1追加
          </button>
          <button
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            onClick={handleDisplay}
          >
            カウンター非表示
          </button>
        </div>
      </main>
    </>
  );
}
