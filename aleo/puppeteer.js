const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

puppeteer.use(StealthPlugin());

async function getNetworkSpeed() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://explorer.hamp.app/");
  await page.waitForSelector("body");

  const bodyHtml = await page.evaluate(() => document.body.innerHTML);

  console.log(bodyHtml);

  // 创建一个 JSDOM 实例
  let dom = new JSDOM(bodyHtml);

  // 获取所有的 'ticker-cell-title' 元素
  let cellTitles = Array.from(
    dom.window.document.querySelectorAll(".ticker-cell-title")
  );

  // 找到包含 "Estimated network speed (15m)" 的元素
  let speedTitle = cellTitles.find(
    (el) => el.textContent.trim() === "Estimated network speed (15m)"
  );

  // 获取对应的数字元素
  let speedElement = speedTitle.nextElementSibling;

  // 在该元素中匹配数字
  let speed = "";
  let numberParts = speedElement.querySelectorAll(".number-part");
  let numberDot = speedElement.querySelector(".number-dot");

  numberParts = Array.from(numberParts).slice(0, -1);
  for (let part of numberParts) {
    speed += part.textContent;
    console.log(part.textContent);
  }
  if (numberDot) {
    speed += "." + numberDot.nextElementSibling.textContent;
  }

  await browser.close();
  return speed;
}

async function test0() {
  speed = await run();
  console.log(speed);
}

test0();
