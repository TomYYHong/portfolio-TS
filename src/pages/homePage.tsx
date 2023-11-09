import Particles from "react-tsparticles";
import self_logo from "../assets/hello.png";
import ParticleBackground from "../components/particleBackground";
import TechStack from "./techStack";

export default function homePage() {
  return (
    <>
      <div className="flex flex-col justify-center flex-wrap items-center">
        <div
          className="flex flex-col md:flex-nowrap h-fit md:w-max md:items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-20 mb-10
        sm:items-center sm:flex-warp animate-fade-up animate-once animate-duration-500 animate-ease-linear animate-normal"
        >
          <img
            className="object-cover max-h-60 rounded-t-lg h-60 w-auto max-[640px]:h-20 max-[640px]:aspect-auto max-[640px]:max-h-20 max-[640px]:w-fit"
            src={self_logo}
            alt="self logo"
          />
          <div className="flex flex-col justify-between p-4 leading-normal h-fit m-w-full">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Full Stack Developer
            </h5>
            <div className="mb-3 font-normal text-gray-700 dark:text-gray-400 whitespace-normal">
              An experienced, collaborative and Software Developer with
              expertise in <b>Java</b>, <b>Spring Boot</b>, <b>TypeScript</b>,
              <b>React</b>,<b>Microservices/APIs</b>, <b>MongoDB</b>,<b>SQL</b>,
              and more. Proficient in Agile methodologies and test-driven
              development, successfully worked with cross functional team to
              gather requirements, and led teams to develop cloud-based Restful
              applications.
            </div>
          </div>
        </div>

        <TechStack />
      </div>
    </>
  );
}
