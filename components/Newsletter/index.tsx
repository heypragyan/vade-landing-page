import React, { ChangeEvent, useState } from "react";

const NewsLetter = ({ className }: { className?: string }) => {
  const [email, setEmail] = useState("");

  const inputChangeHandler = (e: ChangeEvent) => {};

  const formSubmitHandler = () => {};

  return (
    <form onSubmit={formSubmitHandler} className={className}>
      <div className="flex flex-col sm:flex-row">
        <input
          type="text"
          className="border-2 border-[#8B12FC] rounded-t-xl sm:rounded-l-xl sm:rounded-r-none max-w-96 w-64 sm:w-48 md:w-96 p-2 outline-none text-center sm:text-left"
          placeholder="Enter Your Email"
        />
        <button className="bg-[#8B12FC] text-white py-3 px-2 md:px-4 rounded-b-xl sm:rounded-r-xl sm:rounded-l-none ">
          Get Early Access
        </button>
      </div>
    </form>
  );
};

export default NewsLetter;
