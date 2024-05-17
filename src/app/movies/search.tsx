"use client";

import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";

const Search = ({
  category,
  search,
  page,
}: {
  category: string;
  search: string | undefined;
  page: number;
}) => {
  const router = useRouter();
  const [text, setText] = useState(search || "");
  const [query] = useDebounce(text, 500);

  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    if (!query && page === 1) {
      router.push(`/movies/${category}`);
    } else if (!query && page > 1) {
      router.push(`/movies/${category}?page=${page}`);
    } else if (query && page > 1) {
      router.push(`/movies/${category}?query=${query}&page=${page}`);
    } else {
      router.push(`/movies/${category}?query=${query}`);
    }
  }, [query, page, router, category]);

  return (
    <div className="w-2/4 flex">
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search for movies"
      />
    </div>
  );
};

export default Search;
