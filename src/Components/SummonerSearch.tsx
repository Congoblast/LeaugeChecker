import React, { useState } from "react";
import SearchButton from "./SearchButton";
import SummonerInfo from "./SummonerInfo";
import { RankedStatsEntry, SummonerData } from "../types/SummonerTypes";

interface SummonerSearchProps {
  searchText: string;
}

const SummonerSearch: React.FC<SummonerSearchProps> = ({ searchText }) => {
  const [summonerData, setSummonerData] = useState<SummonerData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [summonerTier, setSummonerTier] = useState('');
  const API_KEY = "RGAPI-56c8dad1-bc05-4740-9f75-06206e30db6b";
  const BASE_URL =
    "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" +
    searchText +
    "?api_key=" +
    API_KEY;

  const searchPlayer = () => {
    setLoading(true);

    fetch(BASE_URL)
      .then(response => response.json())
      .then(result => {
        setSummonerData(result);
        setError("");
        const encryptedSummonerId = result.id;
        setTimeout(() => {
          getPlayerStats(encryptedSummonerId);
          setLoading(false);
        }, 1000);
      })
      .catch(error => {
        console.log(error);
        setSummonerData(null);
        setError("Summoner does not exist");
        setLoading(false);
        // Adjust better error messages
      });
  };

  const getPlayerStats: (encryptedSummonerId: string) => Promise<void> = async (encryptedSummonerId) => {
    try {
      const response = await fetch(
        `https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${encryptedSummonerId}?api_key=${API_KEY}`
      );
      const rankedStatsArray: RankedStatsEntry[] = await response.json();

      const soloRankedEntry = rankedStatsArray.find(
        (entry: RankedStatsEntry) => entry.queueType === "RANKED_SOLO_5x5"
      );

      if (soloRankedEntry) {
        const tier = soloRankedEntry.tier;
        setSummonerTier(tier);
      } else {
        setSummonerTier('has no rank');
      }
    } catch (error) {
      console.error("Error fetching champion rank:", error);
    }
  };

  return (
    <>
      <SearchButton searchPlayer={searchPlayer} />
      {loading && <p>Loading...</p>}
      {summonerData ? (
        <SummonerInfo summonerData={summonerData} summonerTier={summonerTier} />
      ) : (
        !loading && <p>What is the summoner's level?</p>
      )}
      <div>{error}</div>
    </>
  );
};

export default SummonerSearch;
