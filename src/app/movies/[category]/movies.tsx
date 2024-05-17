import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Movie } from "@/lib/types";
import Image from "next/image";

const Movies = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className=" grid sm:grid-cols-3 gap-4 ">
      {movies.map((movie) => (
        <Card
          key={movie.id}
          className="overflow-hidden space-y-6 pb-4 lg:pb-10"
        >
          <CardContent className="p-0">
            <Image
              className="w-full object-cover "
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              width={500}
              height={750}
              alt={movie.title}
            />
          </CardContent>

          <CardTitle className="text-3xl px-4">{movie.title}</CardTitle>

          <CardDescription className="px-4  h-20 text-pretty text-ellipsis overflow-hidden">
            {movie.overview}
          </CardDescription>
        </Card>
      ))}
    </div>
  );
};

export default Movies;
