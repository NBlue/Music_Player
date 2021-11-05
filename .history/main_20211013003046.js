/**
 * CÔNG VIỆC PHẢI LÀM:
 * 1. Render songs
 * 2. Scroll top
 * 3. Play / pause / seek
 * 4. CD rotate
 * 5. Next / prev
 * 6. Random
 * 7. Next / Repeat when ended
 * 8. Active song
 * 9. Scroll active song into view
 * 10. Play song when click
 */

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const songs = [
    {
        name: "Axel F",
        singer: "Crazy Frog",
        path: "./assets/music/Song1.mp3",
        image: "./assets/img/Song1.png",
    },
    {
        name: "Lạnh Lẽo",
        singer: "Aska Yang",
        path: "./assets/music/Song2.mp3",
        image: "./assets/img/Song2.png",
    },
    {
        name: "Mình cùng nhau đóng băng",
        singer: "Thùy Chi",
        path: "./assets/music/Song3.mp3",
        image: "./assets/img/Song3.png",
    },
    {
        name: "My Love",
        singer: "Westlife",
        path: "./assets/music/Song4.mp3",
        image: "./assets/img/Song4.png",
    },
    {
        name: "Nevada",
        singer: "Victone",
        path: "./assets/music/Song5.mp3",
        image: "./assets/img/Song5.png",
    },
    {
        name: "Sai người sai thời điểm",
        singer: "Thanh Hưng",
        path: "./assets/music/Song6.mp3",
        image: "./assets/img/Song6.png",
    },
    {
        name: "Summertime",
        singer: "K-391",
        path: "./assets/music/Song7.mp3",
        image: "./assets/img/Song7.png",
    },
    {
        name: "Sunshine in the rain",
        singer: "Ryan Farish",
        path: "./assets/music/Song8.mp3",
        image: "./assets/img/Song8.png",
    },
    {
        name: "The Fat Rat",
        singer: "Xenogenesis",
        path: "./assets/music/Song9.mp3",
        image: "./assets/img/Song9.png",
    },
    {
        name: "What is Love",
        singer: "Lost Frequencies",
        path: "./assets/music/Song10.mp3",
        image: "./assets/img/Song10.png",
    },
];
