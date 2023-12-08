export const Button = ({ text, setSubscribed, isValid, email }) => {
  const handleSubmit = () => {
    if (email !== "" && setSubscribed) {
      setSubscribed(isValid);
    }
  };
  return (
    <>
      <button
        className="bg-grey-dark text-md hover:from-tomato mb-5 w-full rounded-xl px-6 py-5 font-bold text-white hover:bg-gradient-to-l hover:to-pink-500 hover:shadow-2xl"
        onClick={handleSubmit}
      >
        {text}
      </button>
    </>
  );
};
