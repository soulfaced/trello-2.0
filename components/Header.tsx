'use client'

import Image from "next/image";
import {MagnifyingGlassIcon,UserCircleIcon} from "@heroicons/react/24/solid";
import Avatar from "react-avatar";

function Header() 
{
  return (
    <header>

      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
        <div
          className="
          absolute
          top-0
          left-0
          w-full
          h-96
          bg-gradient-to-br
          from-pink-400
          to-[#0055D1]
          rounded-md
          filter
          blur-3xl
          opacity-50
          -z-50
          "
        />
      <Image
      src="https://links.papareact.com/c2cdd5"
      alt="trello-logo"
      width={300}
      height={100}
      className="w-44 md:w-56 pb-10 md:pb-0 object-contain" 
      />
      <div className="flex items-center space-x-5 flex-1 justify-end w-full" >
        {/* search box  */}
        <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
          <MagnifyingGlassIcon className="h-6 w-6 text-grey-400 "/>
          <input type="text" placeholder="Search" className="flex-1 outline-none p-2" />
          <button type="submit" hidden>search </button>
        </form>
        {/* avatar  */}
        <Avatar name = 'sanchit padwekar' size="50" round color="#005501" />
      </div>
      </div>

      <div className="flex items-center  justify-center px-5 PY-2 md:py-5">
        <p className=" flex items-center bg-white p-5 text-sm font-light pr-5 shadow-xl rounded-xl w-fit ng-white italic max-w-3xl text-[#005501]">
          <UserCircleIcon className="inline-block h-10 w-10 text-[##005501] mr-1" />
          This is GPT summary . data in this field will be added later.
        </p>
      </div>
    </header>
  )
}

export default Header