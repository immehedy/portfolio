import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { ImLinkedin, ImGithub, ImMail } from "react-icons/im";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="absolute mx-auto left-0 right-0 top-0 bottom-0 container px-4 md:px-0 grid md:grid-cols-3 items-center ">
      <div className="md:col-span-2">
        <h3 className="text-[40px] md:text-[60px] font-semibold text-gray-600">
          Mehedy Hassan
        </h3>
        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,
            "Software Engineer",
            2000,
            "Problem Solver",
            2000,
            "UI/UX Designer",
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "2em", color: "#565762", fontWeight: 400 }}
        />
        <p className="text-lg text-gray-800">
          Experienced full stack developer with expertise in React JS, Next JS,
          Tailwind CSS, JavaScript, Jest, Laravel, and PHP. Committed to
          high-quality code coverage, unit testing, and creating scalable and
          reliable solutions.
        </p>
        <div className="flex justify-center md:justify-start gap-3 my-2 text-[22px] text-gray-600">
          <Link href="https://www.linkedin.com/in/immehedy/">
            <ImLinkedin />
          </Link>
          <Link href="https://github.com/immehedy">
            <ImGithub />
          </Link>
          <Link href="mailto:dev.mehedy.hassan@gmail.com">
            <ImMail />
          </Link>
        </div>
      </div>
      <div className="mx-auto">
        <Image
          className="mx-auto"
          src="/images/avatar.png"
          height={400}
          width={400}
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Landing;
