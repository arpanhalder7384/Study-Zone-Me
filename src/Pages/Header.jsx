import React from 'react'
import studyZone2 from "./../assets/studyZone2.jpg"
import { NavLink, useNavigate } from "react-router-dom"
export default function Header() {
  const navigate = useNavigate();

  // const navLinkStyle=({isActive})=>{
  //   return{
  //     fontWeight:isActive?'bold':'normal'
  //   }
  // }

  return (
    <header class='flex sticky top-0 border-b py-3 px-3 sm:px-10 font-[sans-serif] min-h-[70px] tracking-wide relative z-50 bg-white'>
      <div class='flex items-center gap-5 w-full justify-between'>
        <div className='justify-start items-center flex flex-col'>
          <h1 class="animate-text bg-gradient-to-tr from-blue-700 via-purple-500 to-orange-500 bg-clip-text text-4xl font-black text-transparent whitespace-nowrap">Study Zone</h1>
        </div>

        <div id="collapseMenu" class='flex flex-row justify-between w-[60%]'>
          <div className='flex'>
            <ul className='flex justify-evenly items-center'>
              <li class='mb-6 hidden max-lg:block'>
                <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' />
                </a>
              </li>
              <li class='max-lg:border-b max-lg:py-3 px-3 '>
                <NavLink to='/'
                  // state={navLinkStyle}
                  class='lg:hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px] active:bg-blue-600'>Home</NavLink>
              </li>
              <li class='max-lg:border-b max-lg:py-3 px-3'>
                <NavLink to='/courses'
                  class='lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px] '>Courses</NavLink>
              </li>
              <li class='max-lg:border-b max-lg:py-3 px-3'>
                <NavLink to='/test-series'
                  class='lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Test Series</NavLink>
              </li>
              <li class='max-lg:border-b max-lg:py-3 px-3'>
                <NavLink to='/book-demo'
                  class='lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Book Demo</NavLink>
              </li>
              <li class='max-lg:border-b max-lg:py-3 px-3'>
                <NavLink to='/about'
                  class='lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>About</NavLink>
              </li>
            </ul>
          </div>

          <div class='flex justify-center'>
            <div class='flex xl:w-80 max-xl:w-full bg-gray-100 px-6 py-3 rounded outline outline-transparent focus-within:outline-[#007bff] focus-within:bg-transparent justify-between'>
              <input type='text' placeholder='Search something...'
                class='text-sm bg-transparent rounded outline-none pr-2' />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
                class="cursor-pointer fill-gray-400">
                <path
                  d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                </path>
              </svg>
            </div>
          </div>

        </div>

        <div className='flex flex-row justify-between '>
          <button type="submit" className="w-12 h-10 rounded-3xl bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto"
            onClick={() => {
              navigate("./login")
            }}
          >Login</button>
          <button type="submit" className="w-12 h-10 ml-3 rounded-3xl bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto"
            onClick={() => {
              navigate("./singup")
            }}
          >Sing up</button>
        </div>

        <button id="toggleOpen" class='lg:hidden ml-auto'>
          <svg class="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd">
            </path>
          </svg>
        </button>


      </div>
    </header>
  )
}
