import Header from "@/components/layout/Header"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation";

const Landing = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-[100vh]">
      <Header/>
      <div className="container mx-auto grid md:grid-cols-2 md:gap-2 items-center">
        <div className="px-4">
          <h3 className="text-[60px] font-semibold text-white">Mehedy Hassan</h3>
          <TypeAnimation
      sequence={[
        'Full Stack Developer', // Types 'One'
        2000, // Waits 1s
        'Software Engineer', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Problem Solver',

        () => {
          console.log('Sequence completed'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', color: '#d1d5da', fontWeight: 400  }}
    />
        </div>
      <Image className="mx-auto" src="/images/avatar.png" height={400} width={400} alt="avatar"/>
      </div>
    </div>
  )
}

export default Landing