import { Clock, Dot, HeartIcon } from "lucide-react";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import Button from "./Button";

function MovieCards({
    image,
    name,
    type,
    language,
    year,
    duration,
    description,
    id,
}) {
    const navigate = useNavigate();
    const [favState, setFavState] = useState(false);

    useEffect(() => {
        const favMovies = JSON.parse(localStorage.getItem("favoriateMovies") || "[]");
        const found = favMovies.some((movie) => movie.id === id);
        setFavState(found);
    }, [id]);

    const toggelFavIcon = () => {
        const favMovies = JSON.parse(localStorage.getItem("favoriateMovies") || "[]");
        const newState = !favState;
        setFavState(newState);

        if (newState) {
            favMovies.push({ id, image, name, type, language, year, duration });
            localStorage.setItem("favoriateMovies", JSON.stringify(favMovies));
        } else {
            const filtered = favMovies.filter((movie) => movie.id !== id);
            localStorage.setItem("favoriateMovies", JSON.stringify(filtered));
        }
    };

    return (
        <div className="w-full max-w-[260px] bg-[#234C6A] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-300">

            {/* Movie Poster */}
            <div className="relative overflow-hidden group aspect-[2/3] w-full">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-110 duration-300"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent"></div>

                {/* Heart Icon */}
                <span
                    onClick={toggelFavIcon}
                    className="absolute top-3 right-3 bg-black/60 p-2 rounded-full cursor-pointer hover:scale-110 duration-200"
                >
                    {favState ? (
                        <HeartIcon fill="red" color="red" size={18} />
                    ) : (
                        <HeartIcon color="white" size={18} />
                    )}
                </span>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3 p-4 text-[#E3E3E3]">

                {/* Title */}
                <h2 className="text-lg font-bold">{name}</h2>

                {/* Description */}
                <p className="text-gray-300 text-xs leading-relaxed line-clamp-3">
                    {description}
                </p>

                {/* Duration & Year */}
                <div className="flex items-center gap-4 text-gray-400 text-sm">
                    <span className="flex items-center gap-1">
                        <Clock size={14} /> {duration}
                    </span>
                    <span className="flex items-center">
                        <Dot /> {year}
                    </span>
                </div>

                {/* Tags */}
                <div className="flex gap-2 text-xs">
                    <span className="px-2 py-1 rounded-full bg-[#2c506b] border border-gray-500">
                        {type}
                    </span>
                    <span className="px-2 py-1 rounded-full bg-[#2c506b] border border-gray-500">
                        {language}
                    </span>
                </div>

                {/* Button */}
                <Button
                    title="Book Now"
                    variant="primary"
                    size="md"
                    onClick={() => navigate(`/booking/${id}`)}
                />
            </div>
        </div>
    );
}

export default MovieCards;