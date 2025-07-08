import { Search } from "lucide-react";

const SearchInput = ({ value, onChange, placeholder = "Search..." }) => (
  <div>
    <label className="mb-1 font-medium text-sm text-gray-500 flex items-center gap-1">
      <Search size={16} />
      Search
    </label>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
      value={value}
      onChange={onChange}
    />
  </div>
);

export default SearchInput;
