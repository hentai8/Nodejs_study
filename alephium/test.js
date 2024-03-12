const time = new Date().getTime();

console.log(time);

const time_2 = time - 100000;

console.log(time_2);

const blocks = require("./blocks.json").blocks;

let hashrate = 0;
let height = 0;
let difficulty = 0;
let reward = 0;

for (let i = 0; i < blocks.length; i++) {
  if (blocks[i].length === 0) {
    continue;
  } else {
    for (let j = 0; j < blocks[i].length; j++) {
      if (
        blocks[i][j].height != undefined &&
        blocks[i][j].height > height &&
        blocks[i][j].height != null
      ) {
        height = blocks[i][j].height;
        for (let k = 0; k < blocks[i][j].transactions.length; k++) {
          if (blocks[i][j].transactions[k].unsigned.inputs.length === 0) {
            reward =
              blocks[i][j].transactions[k].unsigned.fixedOutputs[0]
                .attoAlphAmount;
          }
        }
      }
    }
  }
}

console.log({
  height,
  difficulty,
  hashrate,
  reward,
});
