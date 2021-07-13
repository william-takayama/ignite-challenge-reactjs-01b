import { useState } from "react";
import { GenreResponseProps } from "./@types/Genres";
import { Content } from "./components/Content";
import { SideBar } from "./components/SideBar";

import "./styles/content.scss";
import "./styles/global.scss";
import "./styles/sidebar.scss";

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  );

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
        selectedGenreId={selectedGenreId}
        setSelectedGenreId={setSelectedGenreId}
        setSelectedGenre={setSelectedGenre}
      />

      <Content
        selectedGenre={selectedGenre}
        selectedGenreId={selectedGenreId}
      />
    </div>
  );
}
