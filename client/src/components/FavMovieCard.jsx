import { HeartIcon, Dot, Clock } from "lucide-react";
import { useNavigate } from "react-router";
import Button from "./Button";

function FavMovieCard({ movie, onRemoveFav }) {
  const navigate = useNavigate();

  return (
    <div className="group w-[240px] bg-[#006A71] rounded-xl shadow-lg overflow-hidden 
                    transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="h-[300px] overflow-hidden">
        <img
          src={movie?.image}
          alt={movie?.name}
          className="h-full w-full object-cover 
                     transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-4 text-[#E3E3E3] flex flex-col gap-2">

        <div className="flex justify-between items-start">
          <h2 className="text-lg font-semibold line-clamp-1">
            {movie?.name}
          </h2>

          <HeartIcon
            fill="white"
            className="cursor-pointer hover:scale-125 hover:text-red-400 transition"
            onClick={() => onRemoveFav?.(movie?.id)}
          />
        </div>

        <p className="text-black text-sm flex gap-2 items-center">
          {movie?.language}
          <span className="flex items-center gap-1">
            <Dot size={14} /> {movie?.type}
          </span>
        </p>

        <div className="flex items-center gap-2 text-black text-sm">
          <Clock size={14} /> {movie?.duration}
        </div>
        <div className="mt-3">
          <Button
            title="Book Now"
            variant="primary"
            size="md"
            onClick={() => navigate(`/booking/${movie.id}`)}
            className="w-full px-6 py-5 text-center"
          />
        </div>

      </div>
    </div>
  );
}

export default FavMovieCard;