import React, { ChangeEvent, useState, useRef } from "react";

const NewsLetter = ({ className }: { className?: string }) => {
  const inputEl = useRef(null) as any

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState('')

  const inputChangeHandler = (e: ChangeEvent) => {};

  const formSubmitHandler = async (e : any) => {
    e.preventDefault()


    console.log("INPUT", inputEl)



    const res = await fetch(`/api/subscribe`, {
      body: JSON.stringify({
        email: inputEl?.current?.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })


    const { error } = await res.json()

    if (error) {
      setMessage(error)
      return;
    }

    inputEl.current.value = ''

    setMessage('Success!')

  };

  return (
    <form onSubmit={formSubmitHandler} className={className}>
      <div className="flex flex-col sm:flex-row">
        <input
          aria-label="Email for Early Access"
          type="email"
          className="border-2 border-[#8B12FC] rounded-t-xl sm:rounded-l-xl sm:rounded-r-none max-w-96 w-64 sm:w-48 md:w-96 p-2 outline-none text-center sm:text-left"
          placeholder="Enter Your Email"
          ref={inputEl}
        />
        <button type='submit' className="bg-[#8B12FC] text-white py-3 px-2 md:px-4 rounded-b-xl sm:rounded-r-xl sm:rounded-l-none ">
          Get Early Access
        </button>
      </div>
    </form>
  );
};

export default NewsLetter;
