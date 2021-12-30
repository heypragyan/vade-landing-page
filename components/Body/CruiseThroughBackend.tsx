import Image from "next/image";
import React from "react";
import integrationGif from "../assets/Assets/Gifs/1. Add Integrations.gif";
import configureGif from "../assets/Assets/Gifs/2. Edit Integrations.gif"
import testGif from "../assets/Assets/Gifs/3. Test.gif"

const CruiseThroughBackend = () => {
  return (
    <div className="pt-36 px-36">
      <h1 className="font-bold text-6xl pb-20">
        <span className="text-[#8B12FC]">Cruise </span>
        Through Backend
      </h1>
      <div className="flex flex-col md:flex-row space-around relative text-left">
        <div className="w-full m-8">
          <h1 className="text-9xl text-gray-300 font-bold absolute -top-16 left-0 z-0">
            #1
          </h1>
          <h1 className="font-semibold text-3xl w-3/4 z-20 text-black">
            Choose from 100+ integrations.
          </h1>
          <p className="my-5 text-gray-500">
            Vade Studio is designed to work seamlessly with your favourite
            databases or web services.
            <strong className="text-gray-700">
              {" "}
              Tweak a template or start from scratch.
            </strong>
            <br />
            <br />
            We've baked-in over 100 integrations directly into the platform, so
            you can integrate quickly and easily with other services, databases
            and applications out there.
          </p>
        </div>
        <div className="w-full m-8">
          <Image src={integrationGif} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse space-around relative text-left md:text-right">
        <div className="w-full m-8">
          <h1 className="text-9xl text-gray-300 font-bold absolute -top-16 left-0 md:right-0 z-0">
            #2
          </h1>
          <h1 className="font-semibold text-3xl w-3/4 ml-auto z-20 text-black">
          Configure & Connect.
          </h1>
          <p className="my-5 text-gray-500">
          Get all of your 

            <strong className="text-gray-700">
              {" "}
              data sources connected into a content mesh, in the same place, in real time.
            </strong>
            <br />
            <br />
            This provides you a unified API for data navigation across all your integrated services.
          </p>
        </div>
        <div className="w-full m-8">
          <Image src={configureGif} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row space-around relative text-left">
        <div className="w-full m-8">
          <h1 className="text-9xl text-gray-300 font-bold absolute -top-16 left-0 z-0">
            #3
          </h1>
          <h1 className="font-semibold text-3xl w-3/4 z-20 text-black">
          Test. Build. Deploy.
          </h1>
          <p className="my-5 text-gray-500">
          

            <strong className="text-gray-700">
              {" "}
              Play around with the generated APIs.
            </strong>
            <br />
            <br />
            Once configured – test, build and deploy the unified API into our secure and reliable infrastructure.
          </p>
        </div>
        <div className="w-full m-8">
          <Image src={testGif} />
        </div>
      </div>
    </div>
  );
};

export default CruiseThroughBackend;
