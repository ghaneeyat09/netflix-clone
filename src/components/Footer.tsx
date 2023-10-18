import React from 'react'

const Footer: React.FC = () => {
  return (
    <div className='w-[85%] py-32 mt-28 pb-14'>
        <a href="/" className="underline decoration-gray text-gray text-base">Questions?Contact us</a>
        <div className="mt-8 grid grid-cols-1 semi-midi:grid-cols-3 midi:grid-cols-4 midi:grid-rows-4">
                <a href="/" className="underline decoration-gray text-gray text-sm mt-3">FAQ</a>
                <a href="/" className="underline decoration-gray text-gray text-sm mt-3">Media Center</a>
                <a href="/" className="underline decoration-gray text-gray text-sm mt-3">Ways to Watch</a>
                <a href="/" className="underline decoration-gray text-gray text-sm mt-3">Cookie preference</a>
                <a href="/" className="underline decoration-gray text-gray text-sm mt-3">Speed Test</a>
                <a href="/" className="underline decoration-gray text-gray text-sm mt-3">Help Center</a>
                <a href="/" className="underline decoration-gray text-gray text-sm mt-3">Investor Relations</a>
                <a href="/" className="underline decoration-gray text-gray text-sm mt-3">Terms of Use</a>
                <a href="/" className="underline decoration-gray text-gray text-sm mt-3">Corporation Information</a>
                <a href="/" className="underline decoration-gray text-gray text-sm mt-3">Legal Notices</a>
                <a href="/" className="underline decoration-gray text-gray text-sm mt-3">Account</a>
                <a href="/" className="underline decoration-gray text-gray text-sm mt-3">Jobs</a>
                <a href="/" className="underline decoration-gray text-gray text-sm mt-3">Privacy</a>
                <a href="/" className="underline decoration-gray text-gray text-sm mt-3">Contact us</a>
                <a href="/" className="underline decoration-gray text-gray text-sm mt-3">Only on Netflix</a>
        </div>
        <p className='text-gray text-sm mt-12'>Netflix Nigeria</p>
    </div>
  )
}

export default Footer;