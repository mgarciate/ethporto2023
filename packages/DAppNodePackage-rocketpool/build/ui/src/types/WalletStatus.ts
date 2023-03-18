export interface WalletStatus {
  status: string;
  error: string;
  passwordSet: boolean;
  walletInitialized: boolean;
  accountAddress: string;
}
