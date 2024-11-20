import { useCallback, useState } from "react";

export function useInputArray() {
  const [text, setText] = useState<string>("")
  const [array, setArray] = useState<string[]>([])

  const handleChange = useCallback((e :React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value.trim())
  }, [])

  const handleAdd = useCallback(() => {
    setArray(prevArray => {
      if(prevArray.includes(text)) {
        alert("同じ要素が既に存在しています")
        return prevArray
      }
      setText("")
      return [...prevArray, text]
    })
  }, [text])
  

  return {text, array, handleChange, handleAdd}
}