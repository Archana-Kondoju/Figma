import { FaArrowRight } from "react-icons/fa";

export default function Breadcrumb() {
    return (
      <div className="container mx-auto mt-4 flex items-center text-sm">
      <nav className="container mx-auto mt-4 flex items-center text-sm">
        <a href="#" className="font-semibold font-xl text-teal-600">Home</a>
        <span className="mx-2 font-semibold font-xl text-teal-400"><FaArrowRight className="font-semibold font-xl text-teal-600" /></span>
        <a href="#" className="font-semibold font-xl text-teal-600">Livebestand</a>
        <span className="mx-2 font-semibold font-xl text-teal-400"><FaArrowRight className="font-semibold font-xl text-teal-600" /></span>
        <span className="font-bold font-xl text-teal-800 font-semibold">Cannabis Bluten</span>
      </nav>
      <div className="absolute right-12 mr-20 my-6">
        <h3 className="text-teal-800 font-semibold text-sm mb-2 mr-4">GKV mit Kostenubernahme?</h3>
        <button className="bg-white p-2 text-xl border border-teal-600 px-12 py-1 rounded-tl-3xl rounded-br-3xl font-semibold text-teal-800 text-sm">Preisoptionen</button>
      </div>
      </div>
    );
  }
  