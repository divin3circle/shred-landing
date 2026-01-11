"use client";
import { CarrotIcon, CommandIcon, CornerDownLeft } from "lucide-react";
import React from "react";

function SearchComponent() {
  const [query, setQuery] = React.useState("");
  return (
    <div className="mt-10 flex items-center justify-center w-full px-2 z-50">
      <div className="w-[90%] md:max-w-2xl rounded-4xl border border-gray-500 py-2 flex items-center justify-between">
        <div className="flex items-center px-4">
          <CarrotIcon className="size-6 text-gray-500" />
          <input
            type="text"
            placeholder="Find"
            className="bg-white text-gray-500 font-sans placeholder-gray-500 rounded-full px-4 py-2 focus:outline-none focus:ring-0 border-0 w-3/4 md:w-auto"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        {!query ? (
          <div className="text-3xl font-semibold text-gray-300 flex items-center justify-center font-mono px-4 animate-in fade-in slide-in-from-right-5 duration-300">
            <CommandIcon className="inline size-6" />F
          </div>
        ) : (
          <div className="text-xl font-semibold text-black flex items-center justify-center font-mono px-4 animate-in fade-in slide-in-from-right-5 duration-300">
            <CornerDownLeft className="inline size-6" />
            Find
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchComponent;
