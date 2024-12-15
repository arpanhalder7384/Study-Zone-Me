import React from 'react'
import studyZone from "./../assets/studyZone.jpg"

export default function BookDemo() {
    return (
        <div className='flex flex-row justify-between w-full min-w-min h-fit'>
            <div className=' w-[50%]'>
                <img src={studyZone}></img>
            </div>
            <div className='bg-white w-[50%] p-8 '>
                <div className='justify-center items-center flex flex-col p-[8%]  bg-teal-100 rounded-lg'>
                    <p className='text-center text-5xl text-violet-500'>Our experts are a form away</p>
                    <div className='mt-[10%] border-2 border-gray-400 w-full rounded-lg'>
                        <form className="w-full  p-4">
                            <div className='flex flex-row justify-between w-[100%]'>
                                <div className="mb-5w-full">
                                    <label for="name" className="m-2 block text-sm font-medium text-gray-900">Full Name *</label>
                                    <input type="name" placeholder="Your email" id="email" className=" block w-60  rounded-lg border-2  p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500" required />
                                </div>

                                <div className="mb-5w-full ml-[5%]">
                                    <label for="email" className="m-2 block text-sm font-medium text-gray-900">Email *</label>
                                    <input type="email" placeholder="Your email" id="email" className=" block w-60 rounded-lg border-2  p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500" required />
                                </div>
                            </div>

                            <div className='flex flex-row justify-between w-[100%]'>
                                <div className="mb-5w-full">
                                    <label for="phnNo" className="m-2 block text-sm font-medium text-gray-900">Phone Number *</label>
                                    <input type="text" placeholder="Your Phone Number" id="phoneno" className=" block w-60  rounded-lg border-2  p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500" required />
                                </div>

                                <div className="mb-5w-full">
                                    <label for="altPhnNo" className="m-2 block text-sm font-medium text-gray-900">Alternative Phone Number</label>
                                    <input type="text" placeholder="Alternative Phone Number" id="altphoneno" className=" block w-60  rounded-lg border-2  p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500" />
                                </div>
                            </div>
                            <div className='mt-[4%]'>

                                <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Ask your question *</label>
                                <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Briefly let us know about your requirements" required></textarea>

                            </div>

                            <div className='mt-[4%] overflow-visible'>
                                <label for="countries" class="block mb-2 text-sm font-medium text-gray-900">Select an option</label>
                                <select id="countries" class="bg-gray-50 border h-10 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.">
                                    <option selected>Choose a slot</option>
                                    <option value="firstSlot">9 A.M. - 12 P.M.</option>
                                    <option value="secondSlot">12 P.M. - 3 P.M.</option>
                                    <option value="thirdSlot"> 4 P.M. - 7 P.M.</option>
                                    <option value="forthSlot">7 P.M. - 10 P.M.</option>
                                </select>
                            </div>
                            <div className='flex flex-row justify-center w-[100%] mt-[4%]'>
                                <button class="flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                                    Submit
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
