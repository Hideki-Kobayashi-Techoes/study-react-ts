'use client';

import Link from "next/link";

// エラー時に表示する画面
export default function Error({ error }) {
  return (
    <>
      <p>{error.message}</p>
      <Link href="/" className="hover:underline hover:underline-offset-4">
        戻る
      </Link>
    </>
  );
}