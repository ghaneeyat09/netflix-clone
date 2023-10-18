import React from 'react'

const Footer2: React.FC = () => {
  return (
    <div className="w-full bg-black-100 mt-0 semi-midi:mt-20">
        <div className="w-[70%] mx-auto pt-6 pb-14">
        <a href="/" className="text-gray text-base">Questions?Contact us</a>
        <div className="grid grid-cols-4 grid-rows-2 mt-4">
            <a className="text-gray text-sm mt-3 font-extralight" href="/">FAQ</a>
            <a className="text-gray text-sm mt-3 font-extralight" href="/">Help center</a>
            <a className="text-gray text-sm mt-3 font-extralight" href="/">Terms of Use</a>
            <a className="text-gray text-sm mt-3 font-extralight" href="/">Privacy</a>
            <a className="text-gray text-sm mt-3 font-extralight" href="/">Cookie Prefrences</a>
            <a className="text-gray text-sm mt-3 font-extralight" href="/">Corporate Information</a>
        </div>
        <p>a better way to live</p>
        </div>
    </div>
  )
}

export default Footer2
