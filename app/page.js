'use client'

import { useState, useEffect, useRef } from "react";


export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  )
}

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    isPlaying ? (
      ref.current.play()
    ) : (
      ref.current.pause()
    )
  }, [isPlaying])

  return <video ref={ref} src={src} loop playsInline />;
}
