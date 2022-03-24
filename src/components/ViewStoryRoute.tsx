import { useContext } from "react";
import { useParams } from "react-router-dom";
import StoriesContext from "../context/StoriesContext";
import Story from "../models/Story";
import "./ViewStoryRoute.css";

const ViewStoryRoute = () => {
  const id: number | undefined = parseInt(useParams().id!);
  const { stories } = useContext(StoriesContext);
  const found: Story | undefined = stories.find((story) => story.id === id);

  return (
    <div className="ViewStoryRoute">
      <p>
        On my way to {found?.word1}, I met {found?.word2}.
        {/* the ? says DO NOT BREAK MY CODE IF IT IS UNDEFINED */}
      </p>
      <p>
        They were in quite a hurry because they were meeting {found?.word3}, the{" "}
        {found?.word4}, in {found?.word5} minutes!
      </p>
      <p>So we said, "{found?.word6}" and parted ways.</p>
    </div>
  );
};

export default ViewStoryRoute;
