import { List } from "./List";

const titles = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!",
];

export const Description = () => {
  return (
    <>
      <div className="mx-auto w-10/12 space-y-5 sm:mb-10  sm:w-full ">
        <h1 className="text-grey text-grey-dark text-lg font-bold  sm:mt-20 sm:text-[42px]">
          Stay Updated!
        </h1>

        <p className="text-grey-charcol sm:mx-auto">
          Join 60,000+ product managers receiving monthly upadtes on:
        </p>
        <ul className=" space-y-4 ">
          {titles.map((e, i) => {
            return <List title={e} key={i} />;
          })}
        </ul>
      </div>
    </>
  );
};
