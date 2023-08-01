'use client'


import Image from 'next/image'


function HandlerPaste({onPaste}) {
  return (
    <>
      <textarea onPaste={onPaste} placeholder='请填写信息'></textarea>
    </>
  )
}

export default function Home() {
  const handlerPaste = (event) => {
    const paste = (event.clipboardData || window.clipboardData).getData("text");
    console.log(paste)
  }

  return (
    <>
      <h1>welcome to you</h1>
      <HandlerPaste onPaste={handlerPaste} />
    </>
  )
}
