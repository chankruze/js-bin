/*
Author: chankruze (chankruze@gmail.com)
Created: Mon May 23 2022 22:56:48 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

tickers = ["AAPL", "398.00", "MSFT", "199.54", "IBM", "54.23"];
portfolio = ["MSFT", "IBM"];
// output = [ 'AAPL,398.00,N', 'MSFT,199.54,Y', 'IBM,54.23,Y' ]

const out = [];
const map = new Map(portfolio.map((el) => [el, 0]));

console.time("t");
for (let i = 0; i < tickers.length; i += 2) {
  const isExists = map.has(tickers[i]);
  out.push(`${tickers[i]},${tickers[i + 1]},${isExists ? "Y" : "N"}`);
}
console.timeEnd("t");

console.log(out);


