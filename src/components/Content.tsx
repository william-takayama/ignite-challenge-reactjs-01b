import { useEffect, useState } from "react";
import { GenreResponseProps } from "../@types/Genres";
import { MovieProps } from "../@types/Movies";
import { api } from "../services/api";
import { MovieCard } from "./MovieCard";

interface ContentProps {
  selectedGenre: GenreResponseProps;
  selectedGenreId: number;
}

export function Content({ selectedGenre, selectedGenreId }: ContentProps) {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    api
      .get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`)
      .then((response) => {
        setMovies(response.data);
      });
  }, [selectedGenreId]);

  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(({ imdbID, Title, Poster, Runtime, Ratings }) => (
            <MovieCard
              key={imdbID}
              title={Title}
              poster={Poster}
              runtime={Runtime}
              rating={Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
