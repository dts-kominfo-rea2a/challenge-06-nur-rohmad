// TODO: import module bila dibutuhkan di sini

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fncalback) => {
  // require untuk funsi read data
  const fs = require("fs");
  // variabel untuk menampung data hasil bacaan
  let dataKeseluruhan = [];
  // baca data pertama
  fs.readFile(file1, "utf8", (err, data) => {
    // handler ketika ada error pada pembacaan data pertama
    if (err) return fncalback(err, null);
    // jika tidak ada error maka data akan ditampung pada variabel data1
    const data1 = JSON.parse(data).message.slice(5);
    // pembacaan data file ke dua
    fs.readFile(file2, "utf8", (err, data) => {
      //  handler ketika ada error pada pembacaan data kedua
      if (err) return fncalback(err, null);
      // jika tidak ada error maka data akan ditampung pada variabel data2
      let data2 = JSON.parse(data)[0].message.slice(5);
      // pembacaan data file ke tiga
      fs.readFile(file3, "utf8", (err, data) => {
        // handler ketika ada error pada pembacaan data ketiga
        if (err) return fncalback(err, null);
        // jika tidak ada error maka data akan ditampung pada variabel data3
        let data3 = JSON.parse(data)[0].data.message.slice(5);
        // push data ke dalam variabel data keseluruhan
        dataKeseluruhan.push(data1, data2, data3);
        // memanggil fungsi callback dengan  null untuk parameter 1 dan datakeseluruhan untuk parameter kedua
        fncalback(null, dataKeseluruhan);
      });
    });
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
