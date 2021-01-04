import { getWeb3Provider } from "./getWeb3Provider";

// No TS defs yet provided https://github.com/OpenZeppelin/openzeppelin-test-helpers/pull/141
const { time } = require("@openzeppelin/test-helpers");
beforeEach(async () => {
  require("@openzeppelin/test-helpers/configure")({
    provider: await getWeb3Provider(),
  });
});

export async function advanceBlock(count: number) {
  console.log("Advancing time by " + count + " blocks");
  for (let i = 0; i < count; i++) {
    await time.advanceBlock();
    // Need to provide time between advances or it doesn't work
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  console.log("Finished advancing time.");
}