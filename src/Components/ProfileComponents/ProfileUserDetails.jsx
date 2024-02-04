import React from "react";
import { TbCircleDashed } from "react-icons/tb";

export const ProfileUserDetails = () => {
  return (
    <div className="py-10 w-full ">
      <div className="flex items-center">
        <div className="w-[15%]">
          <img
            className="w-32 h-32 rounded-full "
            src="https://cdn.pixabay.com/photo/2023/10/27/14/28/alps-8345488_1280.jpg"
            alt=""
          />
        </div>

        <div className="space-y-5 ">
          <div className="flex space-x-10 items-center">
            <p>username</p>
            <button>Edit Profile</button>
            <TbCircleDashed></TbCircleDashed>
          </div>
          <div className="flex space-x-10">
            <div>
              <span className="font-semibold mr-2">10</span>
              <span>posts</span>
            </div>

            <div>
              <span className="font-semibold mr-2">5</span>
              <span>Followers</span>
            </div>

            <div>
              <span className="font-semibold mr-2">7</span>
              <span>Following</span>
            </div>
          </div>
          <div>
            <p className="font-semibold ml-0 text-start">Full Name</p>
            <p className="font-thin textsm">
              👑Bindass Lady👑 🔥Royal Hindu🩸 🔥Attitude level💯😎 💪Gym
              Lover🏋️ ❣️Love my Family ♥️ 😘Stay Single😘 😍27 November 🎂
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
