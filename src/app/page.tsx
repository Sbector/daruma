'use client'

import { Canvas } from "@react-three/fiber"
import Experience from "./_components/Experience"

export default function Home() {
  return (
    <>
      <Canvas
        // orthographic
        camera={{
          fov: 35,
          position: [0, 4, 0],
          // zoom: 220
        }}>
        <Experience />
      </Canvas>
      {/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-black">DARUMA</h1>
        <ol className="flex flex-row gap-[32px]">
          <a href="./">GET A NEW DARUMA</a>
          <a href="./">MY COLECTION</a>
        </ol>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        This is a footer
      </footer>
    </div> */}
    </>
  );
}
