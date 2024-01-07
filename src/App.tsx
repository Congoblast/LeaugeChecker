import React, { useState } from "react";
import SearchBar from "./Components/SearchBar";
import SummonerSearch from "./Components/SummonerSearch";

function App() {
  const [searchText, setSearchText] = useState("Ahsokaa");

  return (
    <div className="Content">
      <SearchBar onChange={(text: string) => setSearchText(text)} />
      <SummonerSearch searchText={searchText} />
    </div>
  );
}

export default App;