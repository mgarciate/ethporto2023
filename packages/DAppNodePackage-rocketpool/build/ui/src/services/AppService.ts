import axios from "axios";
import { WalletStatus } from "../types/WalletStatus";
import { NodeStatus } from "../types/NodeStatus";

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
  public async getEnvironment(key: string): Promise<string> {
    const response = await this.api.get(`/api/v1/environment/${key}`);
    return response.data.value;
  }
  public async getWalletStatus(): Promise<WalletStatus> {
    const response = await this.api.post(`/api/v1/rocketpool-command`, {
      cmd: "wallet status",
    });
    return response.data;
  }
  public async getNodeStatus(): Promise<NodeStatus> {
    const response = await this.api.post(`/api/v1/rocketpool-command`, {
      cmd: "node status",
    });
    return response.data;
  }
  public async walletInit(): Promise<string> {
    const response = await this.api.post(`/api/v1/rocketpool-command`, {
      cmd: `wallet init`,
    });
    return response.data.mnemonic;
  }
  public async walletRecover(mnemonic: string): Promise<string> {
    const response = await this.api.post(`/api/v1/rocketpool-command`, {
      cmd: `wallet recover ${mnemonic}`,
    });
    return response.data.accountAddress;
  }
}
