import React from "react";
import Footer3 from "../components/Footer3";
import { useNavigate } from "react-router-dom";

const RegStep0: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <section className="w-full flex justify-center items-center h-[86px] px-10">
        <div className="w-1/2">
          <img src="./images/logo.png" alt="logo" className="w-24 h-8 semi-midi:w-41 semi-midi:h-14" />
        </div>
        <div className="w-1/2 text-right">
          <p className="capitalize font-semibold text-lg">sign in</p>
        </div>
      </section>
      <hr className="text-gray-200" />
      <section>
        <div className="w-full px-10 mx-auto text-center semi-midi:w-[500px]">
          <div className="w-[200px] mx-auto mt-32 semi-midi:w-[270px] semi-midi:h-[70px]">
            <img
              src="./images/netflix-image11.png"
              alt="img"
              className="w-full h-full"
            />
          </div>
          <p className="uppercase mt-10 text-sm">
            step <strong>1</strong> of <strong>3</strong>
          </p>
          <h1 className="font-bold text-4xl">Finish setting up your account</h1>
          <div className="w-full mx-auto mt-4 semi-midi:w-[300px]">
            <p className="text-lg leading-6">
              Netflix is personalized for you.
            </p>
            <p className="text-lg leading-6">
              Create a password to watch on any device at any time.
            </p>
          </div>
          <button
            className="w-full bg-red text-white py-3.5 text-2xl rounded mt-6 semi-midi:w-[370px]"
            onClick={() => navigate("/registration-step1")}
          >
            Next
          </button>
        </div>
      </section>
      <Footer3 />
    </div>
  );
};

export default RegStep0;
