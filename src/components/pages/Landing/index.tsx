import Header from "@/components/layout/Header"
import Image from "next/image"

const Landing = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-[100vh]">
      <Header/>
      <div className="p-4">
      <Image className="mx-auto" src="/images/pp.png" height={400} width={400} alt="avatar"/>
      </div>
    </div>
  )
}

export default Landing