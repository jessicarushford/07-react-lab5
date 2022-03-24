import { ReactNode, useState } from "react";
import Story from "../models/Story";
import StoriesContext from "./StoriesContext";

interface Props {
  children: ReactNode;
}

const StoriesContextProvider = ({ children }: Props) => {
  const [stories, setStories] = useState<Story[]>([
    {
      id: 1,
      author: "Jess",
      word1: "Auburn Hills",
      word2: "Michael",
      word3: "poop",
      word4: "chef",
      word5: "9",
      word6: "just do it",
    },
  ]);

  const addStory = (story: Story): void => {
    stories.length >= 1
      ? (story.id = stories[stories.length - 1].id! + 1)
      : (story.id = 1);
    // if (stories.length > 1) {
    //   story.id = stories[stories.length - 1].id! + 1;
    // } else {
    //   story.id = 1;
    // }

    setStories((prev) => [...prev, story]);
  };

  return (
    <StoriesContext.Provider value={{ stories, addStory }}>
      {children}
    </StoriesContext.Provider>
  );
};

export default StoriesContextProvider;
