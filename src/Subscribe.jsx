import { Button } from "./Button";

export const Subscribe = () => {
  return (
    <>
      <div className="mx-auto mt-36 w-10/12 sm:mt-5 sm:w-[30%] sm:rounded-3xl sm:bg-white sm:p-10">
        <svg
          className="mb-10"
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
        >
          <defs>
            <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#FF6A3A" />
              <stop offset="100%" stopColor="#FF527B" />
            </linearGradient>
          </defs>
          <g fill="none">
            <circle cx="32" cy="32" r="32" fill="url(#a)" />
            <path
              stroke="#FFF"
              strokeWidth="4"
              d="m18.286 34.686 8.334 7.98 19.094-18.285"
            />
          </g>
        </svg>

        <h1 className="text-grey-dark mb-5 w-9/12 text-[42px] font-bold leading-tight ">
          Thanks for subscribing!
        </h1>

        <p className="mb-40 w-11/12 sm:mb-10">
          A confirmation email has been sent to{" "}
          <span className="text-grey-charcol font-bold">
            ash@loremcompany.com.
          </span>
          Please open it and click the button inside to confirm your
          subscription.
        </p>
        <Button text="Dismiss message" />
      </div>
    </>
  );
};
