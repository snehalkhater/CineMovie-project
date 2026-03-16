import Movie from "../models/Movie.js";

const addMovie = async (req, res) => {
  try {

    console.log(req.body)   // ⭐ हे add कर

    const { title, description, poster, releaseDate } = req.body;

    const newMovie = new Movie({
      title,
      description,
      poster,
      releaseDate
    });

    const savedMovie = await newMovie.save();

    res.status(201).json({
      success: true,
      message: "Movie Added Successfully",
      data: savedMovie
    });

  } catch (error) {

    console.log(error) // ⭐ हे add कर

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

 const getAllMovies = async (req, res) => {

  try {

    const movies = await Movie.find();

    res.status(200).json({
      success: true,
      data: movies
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};

export {addMovie, getAllMovies};