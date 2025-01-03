import React from 'react'
import illustration from "./../assets/illustration.svg"
import { useNavigate } from 'react-router'

export default function Singup() {
  const navigate = useNavigate();
  return (
    <div className="h-full w-full flex flex-row justify-evenly ">

      {/* Left Side Section */}
      <section className="flex flex-col w-[50%] h-full justify-center items-center bg-gray-50 px-[8%] py-[6%]">
        <div className='justify-center items-center flex flex-col'>
          <h1 class="animate-text mb-[4%] bg-gradient-to-tr from-blue-700 via-purple-500 to-orange-500 bg-clip-text text-5xl font-black text-transparent whitespace-nowrap">Welcome to Study Zone</h1>
        </div>

        <div className='flex  w-full justify-center items-center '>
          <form className="w-full py-4">

            <div className="mb-5w-full">
              <label for="name" className="m-2 block text-sm font-medium text-gray-900">Full Name *</label>
              <input type="name" placeholder="Your email" id="email" className=" block w-[100%]  rounded-lg border-2  p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500" required />
            </div>

            <div className="mb-5w-full">
              <label for="email" className="m-2 block text-sm font-medium text-gray-900">Email *</label>
              <input type="email" placeholder="Your email" id="email" className=" block w-[100%]  rounded-lg border-2  p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500" required />
            </div>

            <div className="w-full">
              <label for="password" className="m-2 block text-sm font-medium text-gray-900">Password *</label>
              <input type="password" placeholder="Password" id="password" className="block w-[100%] rounded-lg border-2 border-gray-300 s p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500" required />
            </div>

            <div className="w-full">
              <label for="password" className="m-2 block text-sm font-medium text-gray-900">Confirm Password *</label>
              <input type="password" placeholder="Password" id="password" className="block w-[100%] rounded-lg border-2 border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500" required />
            </div>

            <div className='flex flex-col justify-center w-full mt-5'>
              <button type="submit" className="w-full h-12 rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto">Create an account</button>
            </div>

            <div class="inline-flex items-center justify-center w-full">
              <hr class="w-[95%] h-0.5 my-8  border-0 rounded dark:bg-gray-700" />
              <div class="absolute px-4  bg-gray-50">
                or
              </div>
            </div>

            <div class="flex w-full justify-around">
              <button type="button" class="text-black w-[40%] border-2 bg-white hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center mr-2 mb-2">
                <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                  <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                </svg>
                Sign up with Google
              </button>
              <button type="button" class="text-black w-[40%] border-2 bg-white hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center mr-2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 640 640" className='h-6 w-6 mr-2 -ml-1'>
                  <path d="M494.782 340.02c-.803-81.025 66.084-119.907 69.072-121.832-37.595-54.993-96.167-62.552-117.037-63.402-49.843-5.032-97.242 29.362-122.565 29.362-25.253 0-64.277-28.607-105.604-27.85-54.32.803-104.4 31.594-132.403 80.245C29.81 334.457 71.81 479.58 126.816 558.976c26.87 38.882 58.914 82.56 100.997 81 40.512-1.594 55.843-26.244 104.848-26.244 48.993 0 62.753 26.245 105.64 25.406 43.606-.803 71.232-39.638 97.925-78.65 30.887-45.12 43.548-88.75 44.316-90.994-.969-.437-85.029-32.634-85.879-129.439l.118-.035zM414.23 102.178C436.553 75.095 451.636 37.5 447.514-.024c-32.162 1.311-71.163 21.437-94.253 48.485-20.729 24.012-38.836 62.28-33.993 99.036 35.918 2.8 72.591-18.248 94.926-45.272l.036-.047z" />
                </svg>
                Sign up with Apple
              </button>
            </div>

            <div class="flex gap-2 pt-5 justify-center items-center">
              <p class="text-gray-600 text-sm">Already have an account.</p><p class="text-gray-600 text-sm underline"
                onClick={() => {
                  navigate("../login")
                }}>Login</p>
            </div>

          </form>
        </div>
      </section>

      {/* Right Side Picture Section */}
      <section className="justify-center items-center w-[50%] h-full">
        <img src={illustration} className='h-full w-full' alt='sing-up pic' />
      </section>

    </div>
  )
}
