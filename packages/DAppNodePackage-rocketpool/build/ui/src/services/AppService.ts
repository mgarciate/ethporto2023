import axios from "axios";
import { WalletStatus } from "../types/WalletStatus";

export class AppService {
  public api = axios.create({
    baseURL: "http://rocketpool.public.dappnode:3000",
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  public async getVersion(): Promise<string> {
    const response = await this.api.get("/api/v1/version");
    return response.data;
  }
  public async getNetwork(): Promise<string> {
    const response = await this.api.get(`/api/v1/environment/NETWORK`);
    return response.data.value;
  }
  public async getWalletStatus(): Promise<WalletStatus> {
    const response = await this.api.post(`/api/v1/rocketpool-command`, {
      cmd: "wallet status",
    });
    return response.data;
  }
  // public async getAccount(): Promise<any> {
  //     const response = await axios.get('/api/account');
  //     return response.data;
  // }
  // public async getCurrentBlock(): Promise<any> {
  //     const response = await axios.get('/api/currentBlock');
  //     return response.data.height;
  // }

  // public async stake(stakeAmount: number, chains: string) {
  //     const amount = Math.floor(stakeAmount * 1000000);
  //     const response = await axios.post(`/api/stake`, {amount, chains});
  //     return response.data;
  // }

  // public async replaceChains(chains: string) {
  //     const response = await axios.post(`/api/replaceChains`, {chains});
  //     return response.data;
  // }
}
