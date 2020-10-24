import { reactive } from "@vue/reactivity";

import { Address, AssetAmount } from "../entities";

export type WalletStore = {
  eth: {
    balances: AssetAmount[];
    isConnected: boolean;
    address: Address;
  };
  sif: {
    balances: AssetAmount[];
    isConnected: boolean;
    address: Address;
  };
};

export const wallet = reactive({
  eth: {
    isConnected: false,
    address: "",
    balances: [],
  },
  sif: {
    isConnected: false,
    address: "",
    balances: [],
  },
}) as WalletStore;
