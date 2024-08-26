import { FaLeaf, FaList, FaSearch } from "react-icons/fa";
import { MdToggleOn } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";

export default function SearchBar() {
    return (
      <div className="container mx-auto flex justify-between items-center mt-12">
        <div className="relative">
            <FaLeaf className="absolute mr-4 text-xl top-1/4 text-teal-600"/>
            <h1 className="text-3xl pl-8 text-teal-800 font-bold">Blutin</h1>
        </div>
        <div className="flex items-center space-x-4">
        <div className="relative">
            <input
            type="text"
            placeholder="Suchen"
            className="bg-[#F1F9F9] rounded-full p-2 pl-4 pr-10 w-[400px] text-sm"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-teal-600" />
        </div>
        <div className="relative">
    <button className="bg-teal-100 px-4 py-2 font-bold text-teal-800 text-sm flex items-center space-x-2">
      <span>Sortieren nach</span>
      <RiArrowDownSLine className="text-xl text-teal-600" />
    </button>
  </div>

  {/* Availability Button */}
  <div className="relative">
    <button className="bg-teal-100 px-4 py-2 font-bold text-teal-800 text-sm flex items-center">
      <span>Verfugbarkeit</span>
      <MdToggleOn className="ml-2 text-2xl text-teal-600" />
    </button>
  </div>
          <button className="bg-teal-100 p-3 font-bold text-teal-800 text-sm"><FaList/></button>
        </div>
      </div>
    );
  }
  