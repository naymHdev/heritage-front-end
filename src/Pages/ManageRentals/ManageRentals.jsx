import { FaUserCircle, FaBell, FaEye, FaHeart } from "react-icons/fa";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ManageRentals = () => {
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
    <div className="min-h-screen bg-[#F7F7F7] p-6">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search here.."
            className="px-4 py-2 rounded-full border border-gray-300"
          />
          <FaBell className="text-xl text-gray-600" />
          <button className="bg-[#FF6B6B] text-white px-4 py-2 rounded-full">
            Add Listing
          </button>
          <FaUserCircle className="text-3xl text-gray-600" />
        </div>
      </header>

      <section className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-xl text-center shadow-md">
          <p className="text-lg font-semibold">All Properties</p>
          <p className="text-2xl font-bold">1.7k+</p>
        </div>
        <div className="bg-white p-6 rounded-xl text-center shadow-md">
          <p className="text-lg font-semibold">Total Pending</p>
          <p className="text-2xl font-bold">03</p>
        </div>
        <div className="bg-white p-6 rounded-xl text-center shadow-md">
          <FaEye className="text-2xl mx-auto mb-2" />
          <p className="text-lg font-semibold">Total Views</p>
          <p className="text-2xl font-bold">4.8k</p>
        </div>
        <div className="bg-white p-6 rounded-xl text-center shadow-md">
          <FaHeart className="text-2xl mx-auto mb-2" />
          <p className="text-lg font-semibold">Total Favourites</p>
          <p className="text-2xl font-bold">07</p>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Property View</h2>
            <select className="px-4 py-2 border border-gray-300 rounded-full">
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
          </div>
          {/* Bar chart rendering */}
          <Bar data={data} options={options} />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Messages</h2>
          <ul>
            <li className="mb-4">
              <p className="font-bold">Jenny Rio.</p>
              <p className="text-gray-500 text-sm">Work inquiry from Google.</p>
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
  );
};

export default ManageRentals;
