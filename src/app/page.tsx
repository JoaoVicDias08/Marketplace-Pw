import Navbar from "@/components/navbar";


import { oswald } from "./fonts";

export default function Home() {
  return (
    <>
    <Navbar />
      <div className="h-screen bg-slate-900 flex justify-center items-center">
        <h1 className={`${oswald.className} text-4xl text-white`}>Título com Oswald</h1>
      </div>
    </>
  )
}
