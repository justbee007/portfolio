import React from "react"
import headerimage from "../../images/home.jpg"
import shopping from '../../images/shopping.jpg'
import { Link } from "gatsby"
import Typewriter from 'typewriter-effect';
const Header = () => {
  return (
    <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-row space-x-96">
          <div className="mr-5">
          <h2 className="text-white font-poppins opacity-50 font-semibold mt-20 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-xl">
            Hola todos
          </h2>
          <h1 className="text-white font-poppins font-semibold text-2xl xxs:text-2xl xs:text-2xl sm:text-lg md:text-2xl lg:text-4xl xl:text-3xl 2xl:text-4xl">
          <Typewriter
  options={{
    strings: ['I am Abhinav Manoj Menon'],
    autoStart: true,
    loop: true,
  }}
/>
             <br></br> a{" "}
            <span class="text-gradient bg-gradient-to-r from-red-400 to-green-500">
              Software Developer
            </span>
          </h1>
          </div>
          <div className="rounded-xl w-56 h-12 ml-55 mt-32 flex flex-col content-center justify-center align-middle text-center bg-gradient-to-r bg-white bg-opacity-10 hover:from-blue-400 hover:to-gren-300 transition duration-500 ease-in-out">
            <h1 className="text-white text-xl"> <a
                  className="text-white cursor-pointer font-poppins"
                  href="https://drive.google.com/file/d/1dp42MtrnDcZE6h5Wfsg4bS-AzDgZS9Ou/view?usp=sharing" target="_blank">
                  Go to Resume
                </a></h1>
          </div>
        </div>
        

      <div className="max-w-7xl mx-auto mt-10">
        <div className="w-full h-auto overflow-hidden rounded-xl">
          {/* <img className="w-full h-full" src={shopping} alt="Header"></img> */}
        </div>
      </div>
        <div className="w-full flex flex-row justify-between mt-10 xxs:flex-col xs:flex-col sm:flex-row">
          <div className="rounded-xl w-full h-52 flex flex-col content-center justify-center align-middle text-center m-5 bg-gradient-to-r bg-white bg-opacity-10 hover:from-blue-400 hover:to-green-300 transition duration-500 ease-in-out">
            <h1 className="text-white text-4xl">
              {" "}
              <Link
                className="text-white cursor-pointer font-poppins"
                to="/about"
              >
                About
              </Link>
            </h1>
          </div>
          <div className="rounded-xl w-full h-52 flex flex-col content-center justify-center align-middle text-center m-5 bg-gradient-to-r bg-white bg-opacity-10 hover:from-blue-400 hover:to-green-300 transition duration-500 ease-in-out">
            <h1 className="text-white text-4xl"> <Link
                  className="text-white cursor-pointer font-poppins"
                  to="/education"
                >
                  Education
                </Link></h1>
            
          </div>
          <div className="rounded-xl w-full h-52 flex flex-col content-center justify-center align-middle text-center m-5 bg-gradient-to-r bg-white bg-opacity-10 hover:from-blue-400 hover:to-green-300 transition duration-500 ease-in-out">
            <h1 className="text-white text-4xl"> <Link
                  className="text-white cursor-pointer font-poppins"
                  to="/work"
                >
                  Work
                </Link></h1>
          </div>
          <div className="rounded-xl w-full h-52 flex flex-col content-center justify-center align-middle text-center m-5 bg-gradient-to-r bg-white bg-opacity-10 hover:from-blue-400 hover:to-green-300 transition duration-500 ease-in-out">
            <h1 className="text-white text-4xl"> <Link
                  className="text-white cursor-pointer font-poppins"
                  to="/projects"
                >
                  Projects
                </Link></h1>
          </div>
        </div>
    </div>
  )
}

export default Header
