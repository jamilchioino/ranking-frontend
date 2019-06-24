import axios, { AxiosInstance } from 'axios';

export interface Player {
    id: number;
    nickname: string;
    reduced_nickname: string;
    name?: string;
    country: string;
    district?: string;
    city?: string;
}

export interface Result {
    id: number;
    Player: Player;
    PlayerID: number;
    date: Date;
    mean: number;
    deviation: number;
    volatility: number;
    points: number;
}

export interface RankingResult {
    result: Result[];
}

export default class RankingClient {

    private client: AxiosInstance

    constructor() {
        this.client = axios.create({
            baseURL: "//206.189.224.54:8080"
        })
    }

    public async getRanking(): Promise<RankingResult> {
        const today = Math.floor(Date.now() / 1000)
        const result = await this.client.get<RankingResult>(`/ranking/${today}`)
        return result.data
    }
}