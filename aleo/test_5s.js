const startingSupply = 1500000000000000;
const anchorTime = 25;
const blockTime = 5;
const anchorHeight = Math.floor(anchorTime / blockTime);

let combinedProofTarget = 0;
// if (solutions === null) {
//   combinedProofTarget = 0;
// } else {
// TODO: 这个需要复写rust的节点代码里的toTarget方法,比较困难,待实现
// combinedProofTarget = solutions.solutions.reduce((sum, s) => sum + s.partialSolution.commitment.toTarget(), 0);
combinedProofTarget = 4096;
// }

let coinbase_target = 524287;
let cumulative_weight = 0;
let height = 726;

// 剩下的coinbase_target
const remainingCoinbaseTarget = Math.max(
  0,
  coinbase_target - cumulative_weight
);
const remainingProofTarget = Math.min(
  combinedProofTarget,
  remainingCoinbaseTarget
);

const blockHeightAtYear10 = Math.floor(63072000 / 10) * 10;
const remainingBlocks = Math.max(0, blockHeightAtYear10 - height);
// 这一步就不一样了
const anchorBlockReward = Math.floor(
  (2 * startingSupply * anchorHeight * remainingBlocks) /
    (blockHeightAtYear10 * (blockHeightAtYear10 + 1))
);

console.log("anchorBlockReward", anchorBlockReward);

const coinbaseReward = Math.floor(
  (anchorBlockReward * remainingProofTarget) / coinbase_target
);

console.log("coinbaseReward", coinbaseReward);

const blockHeightAtYear1 = Math.floor(63072000 / 10);
const annualReward = Math.floor((startingSupply / 1000) * 50);

console.log("annualReward", annualReward);

const blockReward =
  Math.floor(annualReward / blockHeightAtYear1) +
  Math.floor(coinbaseReward / 2);


console.log("blockReward", blockReward);

const puzzleReward = Math.floor(coinbaseReward / 2); 
console.log("puzzleReward", puzzleReward);