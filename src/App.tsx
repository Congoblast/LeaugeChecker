import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import styled from "styled-components";
import SearchButton from "./Components/SearchButton";

interface SummonerData {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
}

function App() {
  const [searchText, setSearchText] = useState("Ahsokaa");
  const APIKEY = "RGAPI-918cea10-67ac-4215-a726-8ba0280bf971";
  const BASE_URL =
    "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" +
    searchText +
    "?api_key=" +
    APIKEY;
  const [summonerData, setSummonerData] = useState<SummonerData | null>(null);
  const [error, setError] = useState("");

  const searchPlayer = async () => {
    try {
      const response = await fetch(BASE_URL);
      const result = await response.json();
      setSummonerData(result);
      setError(""); // Reset error state on successful fetch
      console.log(result);
    } catch (error) {
      setSummonerData(null); // Reset data on error
      setError("Summoner does not exist");
    }
  };

  return (
    <div className="App">
      <SearchBar onChange={(text: string) => setSearchText(text)} />
      <SearchButton searchPlayer={searchPlayer} />
      {summonerData && (
        <div>
          <h1>Summoner Level: {summonerData.summonerLevel}</h1>
        </div>
      )}
      <div>{error}</div>
    </div>
  );
}

export default App;
