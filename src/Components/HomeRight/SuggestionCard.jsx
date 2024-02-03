import React from "react";

const SuggestionCard = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <img
          className="w-9 h-9 rounded-full"
          src="https://cdn.pixabay.com/photo/2023/12/29/17/37/monstera-8476616_1280.jpg"
          alt=""
        />
        <div className="ml-2">
          <p className="text-sm font-semibold  text-start">username</p>
          <p className="text-sm font-semibold opacity-65m text-start">
            Follows you
          </p>
        </div>
      </div>
      <p className="text-blue-700 text-sm font-semibold text-start">Follow</p>
    </div>
  );
};

export default SuggestionCard;
