import React from 'react'

function Contactus() {
    return (
        <div>
    <div className="flex justify-center items-center h-screen mx-auto bg-gray-100">
    <form action="#" className="w-full md:w-3/4 lg:w-3/6 p-4">
      <div className="p-3">
        <input className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 
        rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300" 
        type="text" placeholder="Name" required/>
      </div>
      <div className="p-3">
        <input className="block appearance-none
         placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full 
         py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
          type="email" placeholder="Email " required/>
      </div>
      <div className="p-3">
        <input className="block appearance-none placeholder-gray-500 placeholder-opacity-100
         border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none 
         focus:ring-2 focus:ring-light-blue-300" type="number" placeholder="Mobile Number" required/>
      </div>
      <div className="p-3">
        <textarea className="resize-none border rounded-md block appearance-none placeholder-gray-500 
        placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5
         focus:outline-none focus:ring-2 focus:ring-light-blue-300 h-56" placeholder="Message" required></textarea>
      </div>
      <div className="p-3 pt-4">
      <button className="w-full bg-gray-700 hover:bg-gray-900 text-white font-bold py-3 px-4 rounded text-2xl">
      Send
      </button>
      </div>
    </form>
  </div>
        </div>
    )
}

export default Contactus
