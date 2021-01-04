// Consolodated place where we can setup testing services

import sifServiceInitializer from "../../api/SifService";
import { TestSifAccount } from "./accounts";

export function createTestSifService(account?: TestSifAccount) {
  const sif = sifServiceInitializer({
    sifApiUrl: "http://localhost:1317",
    sifAddrPrefix: "sif",
    assets: [],
  });

  if (account) {
    sif.setPhrase(account.mnemonic);
  }

  return sif;
}