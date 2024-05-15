import { Movie } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const API_KEY = process.env.TMDB_API_KEY;

type PageProps = {
  params: {
    category: string;
  };
  searchParams: {
    page?: string;
  };
};

const Page = async ({ params, searchParams }: PageProps) => {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;

  const getMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${params.category}?api_key=${API_KEY}&language=en-US&page=${page}&limit=10`
    );
    const data = await response.json();
    return data.results;
  };

  const data: Movie[] = await getMovies();
  return (
    <div className="container">
      <Pagination className="w-full flex justify-end ">
        <PaginationContent className="space-x-7">
          <PaginationItem>
            <PaginationPrevious
              className={page === 1 ? "hidden" : ""}
              href={`${params.category}?page=${page > 1 ? page - 1 : 1}`}
            >
              Previous
            </PaginationPrevious>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href={`${params.category}?page=${page + 1}`}>
              Next
            </PaginationNext>
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      <div className=" grid sm:grid-cols-3 gap-4">
        {data.map((movie) => (
          <Card key={movie.id} className="overflow-hidden space-y-6">
            <CardContent className="px-0">
              <Image
                className="w-full object-cover "
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                width={500}
                height={750}
                alt={movie.title}
              />
            </CardContent>

            <CardTitle className="text-3xl">{movie.title}</CardTitle>

            <CardDescription className="h-20 text-pretty text-ellipsis overflow-hidden">
              {movie.overview}
            </CardDescription>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Page;
