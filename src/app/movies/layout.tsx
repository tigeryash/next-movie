import Link from "next/link";
import React from "react";

const MoviesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="container  md:p-10 flex justify-between items-center">
        <Link href="/movies/upcoming" className="text-xs sm:text-2xl">
          Upcoming
        </Link>
        <Link href="/movies/popular" className="text-xs sm:text-2xl">
          Popular
        </Link>
        <Link href="/movies/top_rated" className="text-xs sm:text-2xl">
          Top Rated
        </Link>
        <Link href="/movies/now_playing" className="text-xs sm:text-2xl">
          Now Playing
        </Link>
      </div>
      {children}
    </>
  );
};

export default MoviesLayout;
