import React from 'react'

export default function Contact() {
  return (
    <>
    <div className="px-[8%] lg:px-[16%] py-20 contact flex justify-center md:justify-end" id='contact'>
        <div className="bg-white w-110 p-10 rounded-md">
        <h2 className='text-black text-5xl font-bold Rethink'> Have question? Get in touch!</h2>
                <div className="space-y-5 pt-10">
                    <div className="">
                        <input type="text" className='border border-gray-300 w-full px-4 py-3 text-black Rethink font-medium hover:border-(--prim) outline-none rounded-xl' placeholder='Name' />
                    </div>
                    <div className="">
                        <input type="email" className='border border-gray-300 w-full px-4 py-3 text-black Rethink font-medium hover:border-(--prim) outline-none rounded-xl' placeholder='Email' />
                    </div>
                    <div className="">
                        <input type="text" className='border border-gray-300 w-full px-4 py-3 text-black Rethink font-medium hover:border-(--prim) outline-none rounded-xl' placeholder='Subject' />
                    </div>
                    <div className="">
                        <textarea rows={5} className='border border-gray-300 w-full px-4 py-3 text-black Rethink font-medium hover:border-(--prim) outline-none rounded-xl' placeholder='Message' />
                    </div>
                    <button className='btn w-full text-white Rethink text-xl py-3 rounded-md font-semibold bg-(--prim) transition-all duration-300 cursor-pointer hover:bg-[#a99246]'>Send Message</button>
                </div>
        </div>
        </div> 
    </>
  )
}
