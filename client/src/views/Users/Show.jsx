import { useEffect, useState } from "react";
import axios from "axios";
import UserNavbar from "../../components/UserNavbar";
import PhotoViewer from "../../components/PhotoViewer";
import toast from "react-hot-toast";

function Show() {

  const [movies, setMovies] = useState([]);

  const getMovies = async () => {

    try {

      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/get-movie`
      );

      if (response.data.success) {
        setMovies(response.data.data);
      }

    } catch (error) {

      console.log(error);
      toast.error("Failed to fetch movies");

    }

  };

  useEffect(() => {
    getMovies();
  }, []);

  return (

    <div>

      <UserNavbar />

      <h1 className="text-center mt-10 text-xl font-semibold">
        All Movies 🎬
      </h1>

      <div className="grid grid-cols-4 gap-6 p-10">

        {movies.map((movie) => (

          <div key={movie._id} className="border p-4 rounded-lg shadow">

            <PhotoViewer imgUrl={movie.poster} />

            <h2 className="text-lg font-semibold mt-2">
              {movie.title}
            </h2>

            <p className="text-sm text-gray-600">
              {movie.description}
            </p>

            <p className="text-sm">
              Release: {movie.releaseDate}
            </p>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Show;