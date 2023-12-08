import { Images } from "./Images";
import { Description } from "./Description";
import { Email } from "./Email";
import { Subscribe } from "./Subscribe";
import { useState } from "react";

const App = () => {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <>
      <div className="sm:bg-grey-charcol  sm:flex  sm:h-screen  sm:items-center sm:justify-center">
        {!subscribed ? (
          <div className=" flex flex-col gap-8 sm:flex-row-reverse sm:rounded-xl sm:bg-white sm:p-5 ">
            <Images />
            <div className="mx-auto sm:w-10/12">
              <Description />
              <Email setSubscribed={setSubscribed} />
            </div>
          </div>
        ) : (
          <Subscribe />
        )}
      </div>
    </>
  );
};

export default App;
