import { useOutletContext } from "react-router-dom";
import { MovieContext } from "../../types";
import AddMovieForm from "../AddMovieForm/AddMovieForm";
import PageTitle from "../PageTitle";

const AddMoviePage = () => {
  const { addMovie }: MovieContext = useOutletContext();
  return (
    <div>
      <PageTitle title="Add a movie" />
      <AddMovieForm onMovieAdded={addMovie} />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default AddMoviePage;
