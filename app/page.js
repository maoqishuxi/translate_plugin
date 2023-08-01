'use client'


export default function Home() {
  const handlerPaste = (event) => {
    const paste = (event.clipboardData || window.clipboardData).getData("text");
    console.log(paste)
  }

  return (
    <>
      <h1>welcome to you</h1>
      <textarea onPaste={handlerPaste}></textarea>
    </>
  )
}
