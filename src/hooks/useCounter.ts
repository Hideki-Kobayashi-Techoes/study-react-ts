'use client';

import { useCallback, useState } from "react";

export function useCounter() {
  const [count, setCount] = useState<number>(1)
  const [isShow, setIsShow] = useState<boolean>(true)

  const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + 1)
  }, [])

  const handleDisplay = useCallback(() => {
    setIsShow(prevIsShow => !prevIsShow)
  }, [])

  return {count, isShow, handleClick, handleDisplay}
}