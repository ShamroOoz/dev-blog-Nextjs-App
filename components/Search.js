import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import SearchResults from "./SearchResults";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const getResults = async () => {
      if (searchTerm === "") {
        setSearchResults([]);
      } else {
        const res = await fetch(`/api/search?q=${searchTerm}`);
        const { results } = await res.json();
        setSearchResults(results);
      }
    };

    getResults();
  }, [searchTerm]);

  return (
    <>
      <div className="inline-flex items-center w-full max-w-md p-4 bg-white border-4 border-indigo-900 rounded shadow ">
        <a className="text-indigo-900 hover:text-indigo-800" href="#">
          <FaSearch className="w-5 h-5" />
        </a>
        <input
          className="px-3 text-lg font-extrabold text-indigo-900 placeholder-indigo-900 bg-transparent outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Posts..."
          type="search"
          name="search"
          id="search"
        />
      </div>

      <SearchResults results={searchResults} />
    </>
  );
};

export default Search;
