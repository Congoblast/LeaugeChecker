import React from "react";
import { SummonerData } from "../types/SummonerTypes";

interface SummonerInfoProps {
  summonerData: SummonerData;
  summonerTier: string;
}

const SummonerInfo: React.FC<SummonerInfoProps> = ({ summonerData, summonerTier }) => {
  return (
    <div>
      <div>Summoner {summonerData.name} is Level: {summonerData.summonerLevel} and {summonerTier}</div>
    </div>
  );
};

export default SummonerInfo;
