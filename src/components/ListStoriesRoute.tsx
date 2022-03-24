import { useContext } from "react";
import { Link } from "react-router-dom";
import StoriesContext from "../context/StoriesContext";
import "./ListStoriesRoute.css";

const ListStoriesRoute = () => {
  const { stories } = useContext(StoriesContext);

  return (
    <ul className="ListStoriesRoute">
      {stories.map((story) => (
        <Link to={`/stories/${encodeURIComponent(story.id!)}`} key={story.id}>
          <li>Mad Lib by: {story.author}</li>
        </Link>
      ))}
    </ul>
  );
};

export default ListStoriesRoute;
