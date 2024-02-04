import React, { useState } from "react";
import { AiOutlineTable } from "react-icons/ai";
import { RiVideoAddLine } from "react-icons/ri";
import { BiBookmark } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import ReqUserPostCard from "./ReqUserPostCard";

const ReqUserPostPart = () => {
  const [activeTab, setActiveTab] = useState("Post"); // Set a default value

  const tabs = [
    { tab: "Post", icon: <AiOutlineTable></AiOutlineTable> },
    { tab: "Reels", icon: <RiVideoAddLine></RiVideoAddLine> },
    { tab: "Saved", icon: <BiBookmark /> },
    { tab: "Tagged", icon: <AiOutlineUser></AiOutlineUser> },
  ];

  return (
    <div>
      <div className="flex space-x-14 border-t relative">
        {tabs.map((item) => (
          <div
            key={item.tab} // Added a key for each mapped element
            onClick={() => setActiveTab(item.tab)}
            className={`${
              activeTab === item.tab ? "border-t border-black" : "opacity-60"
            } flex items-center cursor-pointer py-2 text-sm`}
          >
            <p>{item.icon}</p>
            <p className="ml-1 text-sm">{item.tab}</p>
          </div>
        ))}
      </div>
      <div>
        <div className="flex flex-wrap">
          {[1, 1, 1, 1, 1, 1].map((item) => (
            <ReqUserPostCard />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReqUserPostPart;
