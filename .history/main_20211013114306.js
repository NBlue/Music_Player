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
    currentIndex: 0, // chỉ mục đầu tiên của mảng

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

    // Hàm định nghĩa ra các thuộc tính
    defineProperties: function () {
        // Khi gọi hàm này: Định nghĩa ra thuộc tính currentSong của đốit ượng app
        Object.defineProperty(this, "currentSong", {
            get: function () {
                return this.songs[this.currentIndex];
            },
        });
    },

    handleEvent: function () {
        const cd = $(".cd");
        // console.log(cd); console ra element để xem có các thuộc tính gì -> xđ được ofsetWidth = 200
        const cdWidth = cd.offsetWidth; // chiều ngang hiện tại

        document.onscroll = function () {
            //console.log(document.documentElement.scrollTop); // Lấy ra giá trị thay đổi khi scroll màn hình, từ số liệu đó để tính toán lập trình
            //console.log(window.scrollY); // bằng cái kia
            const scrollTop =
                document.documentElement.scrollTop || window.scrollY;
            const newCdWidth = cdWidth - scrollTop;
            cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
            cd.style.opacity = newCdWidth / cdWidth;
        };
    },

    loadCurrentSong: function () {
        const header = $("header h2");
        const cdThum = $(".cd-thumb");
        const audio = $("#audio");

        header.textContent = this.currentSong.name;
        cdThum.style.backgroundImage = `url(${this.currentSong.image})`;
        audio.src = this.currentSong.path;
        console.log([header, cdThum, audio]);
    },

    // cái này giống phương thức mặc định trong javafx (OOP) để thực thi các hàm trong đó khi start app
    start: function () {
        // Định nghĩa các thuộc tính cho object (app)
        this.defineProperties();

        // Lắng nghe và xử lí các sự kiện
        this.handleEvent();

        // Tải thông tin bài hát đầu tien vào UI khi chạy
        this.loadCurrentSong();

        // Render playlist
        this.render();
    },
};
app.start();
