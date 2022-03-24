import { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import StoriesContext from "../context/StoriesContext";
import Story from "../models/Story";
import "./CreateStoryRoute.css";

const CreateStoryRoute = () => {
  const [author, setAuthor] = useState("");
  const [place, setPlace] = useState("");
  const [person, setPerson] = useState("");
  const [silly, setSilly] = useState("");
  const [occupation, setOccupation] = useState("");
  const [number, setNumber] = useState("");
  const [tagline, setTagline] = useState("");

  const { addStory } = useContext(StoriesContext);

  const navigate = useNavigate();

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    const newStory: Story = {
      author,
      word1: place,
      word2: person,
      word3: silly,
      word4: occupation,
      word5: number,
      word6: tagline,
    };
    addStory(newStory);
    navigate("/stories");
  };

  return (
    <form className="CreateStoryRoute" onSubmit={(e) => submitHandler(e)}>
      <label htmlFor="author">Author</label>
      <input
        type="text"
        name="author"
        id="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <label htmlFor="place">Place</label>
      <input
        type="text"
        name="place"
        id="place"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
      />
      <label htmlFor="person">Person</label>
      <input
        type="text"
        name="person"
        id="person"
        value={person}
        onChange={(e) => setPerson(e.target.value)}
      />
      <label htmlFor="silly">Silly Word</label>
      <input
        type="text"
        name="silly"
        id="silly"
        value={silly}
        onChange={(e) => setSilly(e.target.value)}
      />
      <label htmlFor="occupation">Occupation</label>
      <input
        type="text"
        name="occupation"
        id="occupation"
        value={occupation}
        onChange={(e) => setOccupation(e.target.value)}
      />
      <label htmlFor="number">Number</label>
      <input
        type="text"
        name="number"
        id="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <label htmlFor="tagline">Brand Tagline</label>
      <input
        type="text"
        name="tagline"
        id="tagline"
        value={tagline}
        onChange={(e) => setTagline(e.target.value)}
      />
      <button>Add Story</button>
    </form>
  );
};

export default CreateStoryRoute;
