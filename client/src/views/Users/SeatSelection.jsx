import { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../../components/UserNavbar";
import Footer from "../../components/Footer";
import toast, { Toaster } from "react-hot-toast";
import { Tickets } from "lucide-react";
const SeatSelection = () => {
    const rows = ["A", "B", "C", "D", "E"];
    const cols = 8;
    const seatPrice = 200;

    const navigate = useNavigate();
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const toggleSeat = (seat) => {
        setSelectedSeats((prev) => {
            if (prev.includes(seat)) {
                setTotalPrice((price) => price - seatPrice);
                return prev.filter((s) => s !== seat);
            } else {
                setTotalPrice((price) => price + seatPrice);
                return [...prev, seat];
            }
        });
    };

    const handlePayment = () => {
        if (selectedSeats.length === 0) {
            toast.error("Please select at least one seat before payment");
        } else {
            toast.success(`Seats ${selectedSeats.join(", ")} selected successfully! get payment now`);

            setTimeout(() => {
                navigate("/payment");
            }, 1500);
        }
    };

    return (
        <>
            <Navbar />
            <Toaster position="top-center" />

            <main
                className="min-h-screen mt-16 pt-16 pb-12 flex flex-col items-center px-6 md:px-4 bg-[#F2EFE7]"
                style={{ color: "#E3E3E3" }}
            >
                <h1 className="flex items-center gap-2 text-xl text-black md:text-2xl lg:text-3xl font-bold mb-6">
                    <Tickets size={28} />
                    Select Your Seats
                </h1>

                <div className="bg-[#48A6A7] p-5 rounded-xl shadow-lg">
                    <div className="space-y-3">
                        {rows.map((row) => (
                            <div key={row} className="flex justify-center gap-3 md:gap-2">
                                {[...Array(cols)].map((_, index) => {
                                    const seat = `${row}${index + 1}`;
                                    const isSelected = selectedSeats.includes(seat);

                                    return (
                                        <button
                                            key={seat}
                                            onClick={() => toggleSeat(seat)}
                                            className="w-10 h-10 md:w-9 md:h-9 text-xs rounded-md font-semibold transition-all cursor-pointer"
                                            style={{
                                                backgroundColor: isSelected ? "#9ACBD0" : "#006A71",
                                                color: "black",
                                            }}
                                        >
                                            {seat}
                                        </button>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-sm mt-5 text-black text-center">
                    Selected Seats:{" "}
                    <span className="font-semibold">
                        {selectedSeats.length ? selectedSeats.join(", ") : "None"}
                    </span>
                </div>

                <div className="text-lg text-black font-semibold">
                    Total Price: ₹{totalPrice}
                </div>

                <button
                    className="px-8 py-2 mt-5 rounded-lg font-semibold transition hover:scale-105 cursor-pointer"
                    style={{ backgroundColor: "#48A6A7", color: "black" }}
                    onClick={handlePayment}
                >
                    Pay Now
                </button>
            </main>

            <Footer />
        </>
    );
};

export default SeatSelection;