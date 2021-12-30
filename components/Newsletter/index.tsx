import React, { ChangeEvent, useState } from "react";

const NewsLetter = ({ className }: { className?: string }) => {
  const [email, setEmail] = useState("");

  const inputChangeHandler = (e: ChangeEvent) => {};

  const formSubmitHandler = () => {};

  return (
    <form onSubmit={formSubmitHandler} className={className}>
      <div className="flex">
        <input type="text" className="border-2 border-[#8B12FC] rounded-l-xl w-96"/>
        <button className="bg-[#8B12FC] text-white py-3 px-4 rounded-r-xl" >Get Early Access</button>
      </div>
    </form>
  );
};

export default NewsLetter;
