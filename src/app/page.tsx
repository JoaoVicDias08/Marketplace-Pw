import Navbar from "@/components/navbar";


import { oswald } from "./fonts";

export default function Home() {
  return (
    <>
    <Navbar />
      <section id="home" className="h-screen bg-slate-900 flex justify-center">
        <h1 className={`${oswald.className} text-5xl text-white mt-12`}>VNShip</h1>
      </section>
    </>
  )
}
