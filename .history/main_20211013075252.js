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

const app = {
    songs: [
        {
            name: "Axel F",
            singer: "Crazy Frog",
            path: "./assets/music/Song1.mp3",
            image: "./assets/img/Song1.jpg",
        },
        {
            name: "Lạnh Lẽo",
            singer: "Aska Yang",
            path: "./assets/music/Song2.mp3",
            image: "./assets/img/Song2.jpg",
        },
        {
            name: "Mình cùng nhau đóng băng",
            singer: "Thùy Chi",
            path: "./assets/music/Song3.mp3",
            image: "./assets/img/Song3.jpg",
        },
        {
            name: "My Love",
            singer: "Westlife",
            path: "./assets/music/Song4.mp3",
            image: "./assets/img/Song4.jpg",
        },
        {
            name: "Nevada",
            singer: "Victone",
            path: "./assets/music/Song5.mp3",
            image: "./assets/img/Song5.jpg",
        },
        {
            name: "Sai người sai thời điểm",
            singer: "Thanh Hưng",
            path: "./assets/music/Song6.mp3",
            image: "./assets/img/Song6.jpg",
        },
        {
            name: "Summertime",
            singer: "K-391",
            path: "./assets/music/Song7.mp3",
            image: "./assets/img/Song7.jpg",
        },
        {
            name: "Sunshine in the rain",
            singer: "Ryan Farish",
            path: "./assets/music/Song8.mp3",
            image: "./assets/img/Song8.jpg",
        },
        {
            name: "The Fat Rat",
            singer: "Xenogenesis",
            path: "./assets/music/Song9.mp3",
            image: "./assets/img/Song9.jpg",
        },
        {
            name: "What is Love",
            singer: "Lost Frequencies",
            path: "./assets/music/Song10.mp3",
            image: "./assets/img/Song10.jpg",
        },
    ],
    render: function () {
        // console.log(123);
        const html = this.songs.map((song) => {
            return `
                <div class="song">
                    <div
                        class="thumb"
                        style="
                            background-image: url(${song.image});
                        "
                    ></div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            `;
        });
        // console.log(html);
        $(".playlist").innerHTML = html.join("");
    },

    handleEvent: function () {
        document.onscroll = function () {
            console.log(window.scrollY);
        };
    },

    start: function () {
        // cái này giống phương thức mặc định trong javafx (OOP) để thực thi các hàm trong đó khi start app
        this.handleEvent();
        this.render();
    },
};
app.start();
