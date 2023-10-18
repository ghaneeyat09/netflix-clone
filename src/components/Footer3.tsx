import React from "react";

const Footer3 = () => {
  return (
    <div className="w-full bg-gray-200 mt-10 pl-10 semi-midi-absolute bottom-0 semi-midi:pl-20 semi-midi:mt-36">
      <div className="semi-midi:w-[70%] pt-6 pb-14">
        <a href="/" className="text-grey-200 text-base">
          Questions?Contact us
        </a>
        <div className="grid grid-cols-1 semi-midi:grid-cols-4 semi-midi:grid-rows-2 mt-4">
          <a className="text-grey-200 text-sm mt-3" href="/">
            FAQ
          </a>
          <a className="text-grey-200 text-sm mt-3" href="/">
            Help center
          </a>
          <a className="text-grey-200 text-sm mt-3" href="/">
            Netflix Shop
          </a>
          <a className="text-grey-200 text-sm mt-3" href="/">
            Terms of Use
          </a>
          <a className="text-grey-200 text-sm mt-3" href="/">
            Privacy
          </a>
          <a className="text-grey-200 text-sm mt-3" href="/">
            Cookie Prefrences
          </a>
          <a className="text-grey-200 text-sm mt-3" href="/">
            Corporate Information
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer3;
