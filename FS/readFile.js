/*
 * @Author: xs
 * @Date: 2023-03-07 21:02:20
 */
const fs = require("fs");

fs.readFile("./text.txt", "utf-8", (err, data) => {
  console.log("data :>> ", data); //xs
});

fs.writeFile("./text.txt", "111abcdsadsa", (err, data) => {});
