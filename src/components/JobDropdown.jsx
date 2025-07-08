import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Dropdown = ({
  label,
  options,
  value,
  onChange,
  placeholder = "Select...",
}) => {
  const [open, setOpen] = useState(false);
  // On utilise useRef pour détecter les clics en dehors du menu déroulant
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Permet de fermer le menu si on clique ailleurs sur la page
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {label && (
        <label className="mb-1 font-medium text-sm text-gray-500 block">
          {label}
        </label>
      )}
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-gray-300 transition text-sm"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span>{value || placeholder}</span>
          <ChevronDown
            strokeWidth={1.2}
            size={18}
            className={`transition-transform ${
              open ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
        <div
          className={`absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-all duration-200 origin-top *:text-sm p-1 space-y-1 ${
            open
              ? "scale-y-100 opacity-100"
              : "scale-y-95 opacity-0 pointer-events-none"
          }`}
          style={{ transformOrigin: "top" }}
          tabIndex={-1}
        >
          <div
            className={`cursor-pointer px-4 py-2 hover:bg-gray-50 transition-colors rounded-sm ${
              value === "" ? "bg-gray-100" : ""
            }`}
            onClick={() => {
              onChange("");
              setOpen(false);
            }}
          >
            {placeholder}
          </div>
          {/* On map sur les options pour générer chaque choix du menu */}
          {options.map((option) => (
            <div
              key={option}
              className={`cursor-pointer px-4 py-2 hover:bg-gray-50 transition-colors rounded-sm ${
                value === option ? "bg-gray-100" : ""
              }`}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
