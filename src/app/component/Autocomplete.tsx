"use client"
import { useState,useEffect } from "react";
const suggestions = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Grape",
    "Mango",
    "Orange",
  ];
const AutocompleteInput = ({setSearchText}:{setSearchText: React.Dispatch<React.SetStateAction<string>>}) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value)
    // Filter suggestions based on the current query
    if (value) {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().startsWith(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchText(query)
    }
  };
  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion); // Set the input value to the clicked suggestion
    setSearchText(suggestion)
    setFilteredSuggestions([]); // Clear the suggestions
  };

  return (
    <div className="relative w-full mt-2 px-2">
      {/* Input Field */}
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown} // Detect Enter key press
        placeholder="Type something..."
        className="w-full border border-gray-300 rounded-lg  py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Suggestions List */}
      {filteredSuggestions.length > 0 && (
        <ul className="absolute z-10 bg-white border border-gray-300 rounded-lg mt-2 w-full shadow-lg">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutocompleteInput;
