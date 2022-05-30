import React, { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/outline";

const Faqs = ({ ans, que }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center w-full">
        <h3 className="font-bold text-lg text-black my-2">
          {que}
        </h3>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <MinusIcon className="h-5" />
          ) : (
            <PlusIcon className="h-5" />
          )}
        </button>
      </div>
      {isOpen && (
        <p className="text-base text-gray-500 font-semibold p-3 rounded-md block">
          {ans}
        </p>
      )}
      <hr className="bg-gray-700 w-full border my-2" />
    </div>
  );
};

export default Faqs;
