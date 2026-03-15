import { useParams, useNavigate } from "react-router";
import { useState } from "react";
import toast from "react-hot-toast";
import movies from "../data/Movie.js";
import Button from './../components/Button.jsx';


function Booking() {
    const { id } = useParams();
    const navigate = useNavigate();
    const movie = movies.find(m => m.id === id);
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);

    const timings = ["9:00 AM", "12:00 PM", "3:00 PM", "8:00 PM"];
    const dates = ["Today", "Tomorrow", "DayAfter"];

    if (!movie) {
        return <p className="text-white">Movie not found</p>;
    }

    return (
        <>
            <div className="min-h-screen bg-[#F2EFE7]  bg-cover text-white p-4 md:p-6 pt-16">


                <div className="max-w-4xl mx-auto bg-[#006A71]  rounded-lg p-4 mt-20 md:p-6 flex flex-col md:flex-row gap-6">

                    <img
                        src={movie.image}
                        alt={movie.name}
                        className="w-full md:w-[220px] rounded"
                    />

                    <div className="flex-1">
                        <h1 className="text-2xl md:text-3xl font-bold">{movie.name}</h1>
                        <p className="text-white-300 mt-1">
                            {movie.language} • {movie.type}
                        </p>
                        <p className="text-white-300 mt-1">duration - {movie.duration}</p>


                        <h3 className="mt-3 mb-3 text-xl font-bold">Select Show Date</h3>

                        <div className="flex flex-wrap gap-3">
                            {dates.map(date => (
                                <button
                                    key={date}
                                    onClick={() => setSelectedDate(date)}
                                    className={`px-3 py-1 rounded border bg-[#9ACBD0] text-black
      ${selectedDate === date
                                            ? "border-white"
                                            : "border-[#456882]"
                                        }`}
                                >
                                    {date}
                                </button>
                            ))}
                        </div>


                        <h3 className="mt-2 mb-3 text-xl font-bold">Select Show Time</h3>

                        <div className="flex flex-wrap gap-3">
                            {timings.map(time => (
                                <button
                                    key={time}
                                    onClick={() => setSelectedTime(time)}
                                    className={`px-3 py-1 rounded border bg-[#9ACBD0] text-black
      ${selectedTime === time
                                            ? "border-white"
                                            : "border-[#456882]"
                                        }`}
                                >
                                    {time}
                                </button>
                            ))}
                        </div>

                        <div className="my-6">
                            <Button
                                title="Proceed"
                                variant="primary"
                                size="large"
                                onClick={() => {
                                    if (!selectedDate) {
                                        toast.error("Please select show date");
                                        return;
                                    }

                                    if (!selectedTime) {
                                        toast.error("Please select show timing");
                                        return;
                                    }

                                    toast.success("Show Selected");

                                    navigate("/seatselection");
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Booking;