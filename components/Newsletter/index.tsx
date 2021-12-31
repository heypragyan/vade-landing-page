import React, { ChangeEvent, useEffect, useState } from "react";

const KEY = "FORM_SUBMISSION_STATUS";
const STATUS = {
  submitted: "SUB",
  unsubmitted: "UNSUB"
}

const NewsLetter = ({ className, id }: { className?: string; id?: string }) => {

  const [email, setEmail] = useState("");

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    const form_status = window.localStorage.getItem(KEY);
    if (form_status === STATUS.unsubmitted) setFormState("unsubmitted")
    if (form_status === STATUS.submitted) setFormState("submitted")
  }, [])

  const [formState, setFormState] = useState<
    "submitting" | "unsubmitted" | "submitted" | "error"
  >("unsubmitted");

  const resendHandler = () => {
    setFormState("submitting");
    window.localStorage.setItem(KEY, STATUS.unsubmitted)
    setFormState("unsubmitted")
  };

  const formSubmitHandler = async (e: any) => {
    e.preventDefault();
    setFormState("submitting");

    const res = await fetch(`/api/subscribe`, {
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      setFormState("error");
      return;
    }

    window.localStorage.setItem(KEY, STATUS.submitted)
    setFormState("submitted");
  };

  return (
    <form onSubmit={formSubmitHandler} className={className}>
      <div className="flex flex-col sm:flex-row drop-shadow-lg">
        {formState === "unsubmitted" && (
          <>
            <input
              aria-label="Email for Early Access"
              type="email"
              className="border-2 border-[#8B12FC] rounded-t-xl sm:rounded-l-xl sm:rounded-r-none max-w-96 w-64 sm:w-48 md:w-96 p-2 outline-none text-center sm:text-left"
              placeholder="Enter Your Email"
              id={id}
              value={email}
              onChange={inputChangeHandler}
            />
            <button
              type="submit"
              className="bg-[#8B12FC] text-white py-3 px-2 md:px-4 rounded-b-xl sm:rounded-r-xl sm:rounded-l-none "
            >
              Get Early Access
            </button>
          </>
        )}
        {formState === "submitted" && (
          <div className="m-auto rounded-xl bg-[#8B12FC] py-3 px-4 font-light text-white text-xl w-[538px]">
            Thank You for Your Interest!
          </div>
        )}
        {formState === "submitting" && (
          <div className="flex flex-col">
            <div className="w-full md:w-full m-auto rounded-xl bg-[#8B12FC] py-3 px-28 font-light text-white text-xl">
              <Loader className="animate-spin h-6 w-6" />
            </div>
          </div>
        )}
        {formState === "error" && (
          <div className="flex flex-col w-full">
            <div className="flex flex-row">
              <input
                aria-label="Email for Early Access"
                type="email"
                className="border-2 border-[#f44336] rounded-t-xl sm:rounded-l-xl sm:rounded-r-none max-w-96 w-64 sm:w-48 md:w-96 p-2 outline-none text-center sm:text-left"
                placeholder="Enter Your Email"
                id={id}
                value={email}
                onChange={inputChangeHandler}
              />
              <button
                type="submit"
                className="bg-[#f44336] text-white py-3 px-2 md:px-4 rounded-b-xl sm:rounded-r-xl sm:rounded-l-none "
              >
                Get Early Access
              </button>
            </div>
            <span className="flex items-center font-medium tracking-wide text-[#f44336] text-xs mt-1 ml-1">
              Invalid username field !
            </span>
          </div>
        )}
      </div>
    </form>
  );
};

export default NewsLetter;

const Check = ({ className }: { className?: string }) => {
  return (
    <svg
      width="16"
      height="16"
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 7.36V8.004C14.9991 9.5135 14.5103 10.9823 13.6065 12.1913C12.7027 13.4003 11.4323 14.2847 9.98475 14.7127C8.5372 15.1407 6.99008 15.0893 5.57413 14.5662C4.15818 14.0431 2.94926 13.0763 2.12767 11.8099C1.30609 10.5436 0.915854 9.04565 1.01517 7.53942C1.11449 6.0332 1.69804 4.59943 2.6788 3.45196C3.65955 2.30448 4.98495 1.50477 6.45733 1.17211C7.92971 0.839444 9.47018 0.991643 10.849 1.60601"
        stroke="#3FCB29"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.9999 2.40234L7.9999 9.40934L5.8999 7.30934"
        stroke="#3FCB29"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const Resend = ({ className }: { className?: string }) => {
  return (
    <svg
      width="12"
      height="10"
      className={className}
      viewBox="0 0 12 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.81214 0.865774C7.96872 0.972429 8.07651 1.13691 8.1118 1.32304C8.1471 1.50917 8.10701 1.7017 8.00036 1.85827C7.8937 2.01485 7.72922 2.12264 7.54309 2.15793C7.35696 2.19323 7.16443 2.15314 7.00786 2.04649C6.34841 1.59819 5.55791 1.38348 4.76228 1.43656C3.96666 1.48963 3.21168 1.80744 2.61762 2.33936C2.02357 2.87127 1.62461 3.58669 1.4843 4.37165C1.34399 5.1566 1.47041 5.96593 1.84342 6.6707C2.21642 7.37548 2.81455 7.93515 3.54253 8.26056C4.2705 8.58597 5.08643 8.6584 5.86035 8.46631C6.63426 8.27422 7.32162 7.82866 7.81294 7.20062C8.30426 6.57257 8.57127 5.79817 8.57143 5.00077C8.57143 4.81133 8.64668 4.62965 8.78064 4.4957C8.91459 4.36174 9.09627 4.28649 9.28571 4.28649C9.47515 4.28649 9.65684 4.36174 9.79079 4.4957C9.92474 4.62965 10 4.81133 10 5.00077C9.99983 6.11719 9.62602 7.20144 8.93813 8.08076C8.25025 8.96008 7.28786 9.58389 6.20431 9.85279C5.12076 10.1217 3.97838 10.0202 2.95919 9.56454C1.94 9.10886 1.10263 8.32519 0.58051 7.33839C0.0583853 6.35158 -0.118458 5.21842 0.0781545 4.11945C0.274767 3.02048 0.833525 2.01892 1.6654 1.27436C2.49728 0.529796 3.55441 0.0850614 4.66838 0.0110141C5.78234 -0.0630332 6.88904 0.237867 7.81214 0.865774V0.865774Z"
        fill="#EE1100"
        fillOpacity="0.866667"
      />
      <path
        d="M7.52762 6.79182C7.4486 6.84237 7.36038 6.87687 7.26802 6.89334C7.17566 6.90981 7.08097 6.90792 6.98933 6.88779C6.8977 6.86766 6.81093 6.82968 6.73398 6.77602C6.65703 6.72235 6.5914 6.65406 6.54084 6.57503C6.49028 6.496 6.45578 6.40779 6.43931 6.31543C6.42285 6.22307 6.42473 6.12837 6.44486 6.03674C6.46499 5.94511 6.50297 5.85834 6.55664 5.78139C6.6103 5.70443 6.6786 5.6388 6.75763 5.58825L9.24477 3.99753C9.40432 3.89879 9.59633 3.86679 9.77928 3.90846C9.96224 3.95014 10.1215 4.06212 10.2225 4.22023C10.3236 4.37833 10.3583 4.56985 10.3193 4.7534C10.2803 4.93694 10.1707 5.09776 10.0141 5.2011L7.52762 6.79182V6.79182Z"
        fill="#EE1100"
        fillOpacity="0.866667"
      />
      <path
        d="M11.3594 6.72122C11.4323 6.89347 11.4347 7.08744 11.3662 7.26147C11.2976 7.4355 11.1635 7.57569 10.9927 7.65193C10.8219 7.72816 10.628 7.73436 10.4527 7.66918C10.2774 7.604 10.1346 7.47266 10.0551 7.30336L8.97794 4.88908C8.93756 4.80312 8.91473 4.70998 8.91077 4.6151C8.90682 4.52022 8.92183 4.4255 8.95492 4.33648C8.98801 4.24747 9.03852 4.16595 9.10349 4.09669C9.16847 4.02743 9.2466 3.97182 9.33332 3.93311C9.42004 3.89441 9.5136 3.87338 9.60854 3.87127C9.70349 3.86916 9.79789 3.886 9.88625 3.9208C9.97461 3.95561 10.0551 4.00769 10.1231 4.07399C10.1911 4.14029 10.2452 4.21948 10.2822 4.30693L11.3594 6.72122Z"
        fill="#EE1100"
        fillOpacity="0.866667"
      />
    </svg>
  );
};
const Loader = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
};
const Error = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M16.143 2l5.857 5.858v8.284l-5.857 5.858h-8.286l-5.857-5.858v-8.284l5.857-5.858h8.286zm.828-2h-9.942l-7.029 7.029v9.941l7.029 7.03h9.941l7.03-7.029v-9.942l-7.029-7.029zm-6.471 6h3l-1 8h-1l-1-8zm1.5 12.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" />
    </svg>
  );
};
