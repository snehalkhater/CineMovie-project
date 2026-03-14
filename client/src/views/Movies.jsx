import React from 'react'
import { useState } from 'react'
import movies from '../data/Movie.js';
import { Clapperboard } from 'lucide-react'
import SelectBox from "../components/SelectBox"
import MovieCards from '../components/MovieCard'
import Slider from '../components/Slider';

function Movie() {
  const [searchMovies, setSearchMovies] = useState("");
  const [movieType, setMovieType] = useState("All");
  const [movieLang, setMovieLang] = useState("All");

  const filteredMovies = movies.filter((movie) => {
    const newMatch = movie.name.toLowerCase().includes(searchMovies.toLowerCase());
    const typeMatch = movieType === "All" || movie.type === movieType;
    const languageMatch = movieLang === "All" || movie.language === movieLang;
    return typeMatch && languageMatch && newMatch;
  });

  return (
    <div className='mt-[-10px] bg-[#F2EFE7] min-h-screen pt-10'>

      {/* Slider */}
      <Slider />

      {/* Heading BELOW Slider */}
      <div className="text-center mt-6">
        <h1 className="text-3xl md:text-5xl font-bold text-[#213555]">
          Discover Movies You’ll Love
        </h1>

        <p className="text-lg md:text-xl mt-2 text-gray-600">
          Browse by genre, language & book instantly
        </p>
      </div>

      {/* Search + Filters */}
      <div className='flex flex-col items-center gap-7 px-4 md:px-0 py-6'>

        <div className='flex flex-col w-[90%] mx-auto md:flex-row gap-5 items-center justify-center'>

          <div className='md:w-[50%] w-full'>
            <input
              type='text'
              placeholder='Search Movies by title ....'
              onChange={(e) => {
                setSearchMovies(e.target.value)
              }}
              className='border px-5 w-full text-lg py-2 text-gray-700 focus:outline-none rounded border-[#006A71]'
            />
          </div>

          <SelectBox
            value={movieType}
            onChange={(e) => setMovieType(e.target.value)}
            options={["All", "Action", "Comedy", "Drama", "Horror", "Romance", "Thriller"]}
          />

          <SelectBox
            value={movieLang}
            onChange={(e) => setMovieLang(e.target.value)}
            options={["All", "English", "Hindi", "Marathi", "Tamil"]}
          />

        </div>
      </div>

      {/* Movie Cards */}
      <div className='flex gap-10 p-7 items-center justify-center flex-wrap'>
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie, index) => (
            <MovieCards key={index} {...movie} />
          ))
        ) : (
          <p className="text-[#213555] text-2xl flex items-center gap-4">
            No movies found <Clapperboard />
          </p>
        )}
      </div>

    </div>
  )
}

export default Movie