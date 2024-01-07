export interface SummonerData {
    id: string;
    accountId: string;
    puuid: string;
    name: string;
    profileIconId: number;
    revisionDate: number;
    summonerLevel: number;
  }
  
export interface RankedStatsEntry {
  queueType: string;
  tier: string;
}