import React from "react";
import StoryViewer from "../../Components/StoryComponents/StoryViewer";

const Story = () => {
  const story = [
    {
      image:
        "https://cdn.pixabay.com/photo/2024/01/22/16/33/pelican-8525794_1280.jpg",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2023/09/27/21/02/nature-8280318_1280.png",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2023/09/27/21/02/nature-8280318_1280.png",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2023/12/08/14/22/mushroom-8437670_1280.jpg",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2024/01/17/02/56/house-8513467_1280.jpg",
    },
  ];
  return (
    <div>
      <StoryViewer stories={story} />
    </div>
  );
};

export default Story;
