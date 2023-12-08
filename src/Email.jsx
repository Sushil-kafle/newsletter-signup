import { useState } from "react";
import { Button } from "./Button";

export const Email = ({ setSubscribed }) => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(newEmail));
  };

  return (
    <>
      <div className="mx-auto mt-10 w-5/6 sm:mt-3 sm:w-full">
        <h2 className="text-grey-charcol mb-3 font-bold">Email address</h2>
        <input
          className={`outline-grey-regular outline-3 focus:outline-grey-dark focus:outline-3 mb-6 block w-full rounded-xl border-none px-6 py-5 outline sm:mb-3 ${
            isValid ? "border" : "border-tomato"
          }`}
          type="email"
          placeholder="email@company.com"
          value={email}
          onChange={handleChange}
        />
        {!isValid && (
          <p className="text-tomato mb-3 text-sm">
            Please enter a valid email address.
          </p>
        )}
        <br />
        <Button
          text="Subscribe to monthly newsletter"
          email={email}
          setSubscribed={setSubscribed}
          isValid={isValid}
        />
      </div>
    </>
  );
};
