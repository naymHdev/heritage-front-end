import { FaEye, FaHeart, FaBookmark } from "react-icons/fa";
import { MdGroup } from "react-icons/md";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import useAllProperty from "../../Hooks/useAllProperty";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ManageRentals = () => {
  const [allProperty] = useAllProperty();

  const data = {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Total Views",
        data: [20000, 8000, 16000, 18000, 10000, 12000, 15000],
        backgroundColor: "#FF6B6B",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <div className="min-h-screen">
        <header className="flex flex-col md:flex-row items-center justify-between mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">
            Dashboard
          </h1>
        </header>

        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 md:mb-8">
          <div className="bg-white p-4 md:p-6 rounded-xl text-center shadow-md">
            <MdGroup className="text-xl md:text-2xl mx-auto mb-2" />
            <p className="text-md md:text-lg font-semibold">All Properties</p>
            <p className="text-xl md:text-2xl font-bold">
              {allProperty.length}+
            </p>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-xl text-center shadow-md">
            <FaBookmark className="text-xl md:text-2xl mx-auto mb-2" />
            <p className="text-md md:text-lg font-semibold">Total Pending</p>
            <p className="text-xl md:text-2xl font-bold">03+</p>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-xl text-center shadow-md">
            <FaEye className="text-xl md:text-2xl mx-auto mb-2" />
            <p className="text-md md:text-lg font-semibold">Total Views</p>
            <p className="text-xl md:text-2xl font-bold">4.8k+</p>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-xl text-center shadow-md">
            <FaHeart className="text-xl md:text-2xl mx-auto mb-2" />
            <p className="text-md md:text-lg font-semibold">Total Favourites</p>
            <p className="text-xl md:text-2xl font-bold">07+</p>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-md lg:col-span-2">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-0">
                Property View
              </h2>
              <select className="px-3 py-2 border border-gray-300 rounded-full">
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>
            {/* Bar chart rendering */}
            <div className="h-64">
              <Bar data={data} options={options} />
            </div>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-md">
            <h2 className="text-lg md:text-xl font-semibold mb-4">
              Recent Bids
            </h2>
            <ul>
              <li className="mb-4">
                <p className="font-bold">Jenny Rio.</p>
                <p className="text-gray-500 text-sm">
                  Work inquiry from Google.
                </p>
                <p className="text-gray-400 text-xs">Aug 22</p>
              </li>
              <li className="mb-4">
                <p className="font-bold">Hasan Islam.</p>
                <p className="text-gray-500 text-sm">
                  Product Designer Opportunities
                </p>
                <p className="text-gray-400 text-xs">May 22</p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default ManageRentals;
