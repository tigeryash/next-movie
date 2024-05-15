import Link from "next/link";
import React from "react";

const MoviesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="p-10 container flex justify-between items-center">
        <Link href="/movies/upcoming" className="text-white">
          Upcoming
        </Link>
        <Link href="/movies/popular" className="text-white">
          Popular
        </Link>
        <Link href="/movies/top_rated" className="text-white">
          Top Rated
        </Link>
        <Link href="/movies/now_playing" className="text-white">
          Now Playing
        </Link>
      </div>
      {children}
    </>
  );
};

export default MoviesLayout;
