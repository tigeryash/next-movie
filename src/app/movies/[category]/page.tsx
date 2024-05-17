import { Movie } from "@/lib/types";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Search from "../search";
import Movies from "./movies";
import { Suspense } from "react";
import Skeleton from "./skeleton";

const API_KEY = process.env.TMDB_API_KEY;

type PageProps = {
  params: {
    category: string;
  };
  searchParams: {
    page?: string;
    query?: string;
  };
};

const Page = async ({ params, searchParams }: PageProps) => {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const query = searchParams.query || "";
  const searchResult = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`;
  const categoryResult = `https://api.themoviedb.org/3/movie/${params.category}?api_key=${API_KEY}&language=en-US&page=${page}`;

  const getMovies = async () => {
    const response = await fetch(query ? searchResult : categoryResult);
    const data = await response.json();
    return data.results;
  };

  const data: Movie[] = await getMovies();
  return (
    <div className="container space-y-6 ">
      <div className="flex justify-around items-center">
        <h1 className="w-1/3">Movies</h1>

        <Search category={params.category} search={query} page={page} />

        <Pagination className="flex justify-end mx-0 w-1/3">
          <PaginationContent className="space-x-7">
            <PaginationItem>
              <PaginationPrevious
                className={page === 1 ? "hidden" : ""}
                href={
                  query !== ""
                    ? `${params.category}?query=${query}&page=${
                        page > 1 ? page - 1 : 1
                      }`
                    : `${params.category}?page=${page > 1 ? page - 1 : 1}`
                }
              >
                Previous
              </PaginationPrevious>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                href={
                  query !== ""
                    ? `${params.category}?query=${query}&page=${page + 1}`
                    : `${params.category}?page=${page + 1}`
                }
              >
                Next
              </PaginationNext>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      <Suspense fallback={<Skeleton />}>
        <Movies movies={data} />
      </Suspense>
    </div>
  );
};

export default Page;
