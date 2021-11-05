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

const cd = $(".cd");
const header = $("header h2");
const cdThum = $(".cd-thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const player = $(".player");
const inputProgress = $(".progress");
//Đặt biến giống stackoverflow: để thay đổi css của: progress::-webkit-slider-thumb
var style = document.querySelector('[data="test"]');

const app = {
    currentIndex: 0, // chỉ mục đầu tiên của mảng
    isplaying: false, // đặt thuộc tính đang phát nhạc thành sai, khi đúng thì dừng nhạc

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
        // XỬ LÍ CD QUAY / DỪNG
        const cdAnimation = cdThum.animate([{ transform: "rotate(360deg)" }], {
            duration: 10000, // quay 1 vong trong 10s
            iteration: Infinity,
        });
        cdAnimation.pause();
        if (audio.play()) {
            cdAnimation.play();
        } else {
            cdAnimation.pause();
        }

        // XỬ LÍ PHÓNG TO THU NHỎ SINH VIÊN
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

        // XỬ LÍ ONCLICK
        playBtn.onclick = function () {
            // Logic cùi bắp
            if (app.isplaying) {
                audio.pause();
                // app.isplaying = false;
                // player.classList.remove("playing");
            } else {
                audio.play();
                // app.isplaying = true;
                // player.classList.add("playing");
            }

            // Khi song được play
            audio.onplay = function () {
                //Tư duy: lắng nghe sự kiện chơi của audio
                app.isplaying = true;
                player.classList.add("playing");
            };

            // Khi song bị pause
            audio.onpause = function () {
                app.isplaying = false;
                player.classList.remove("playing");
            };

            // Xử lí chạy tiến trình inputProgress - range
            // console.log(audio.duration);
            audio.ontimeupdate = function () {
                // const percentSong = audio.currentTime / audio.duration;
                // const widthThumbPlaying =
                //     percentSong * inputProgress.clientWidth;
                // style.innerHTML =
                //     ".progress::-webkit-slider-thumb { width: " +
                //     widthThumbPlaying +
                //     "px !important; }";

                if (audio.duration) {
                    const progressPercent = Math.floor(
                        (audio.currentTime / audio.duration) * 100
                    );
                    inputProgress.value = progressPercent;
                }
            };

            // Xử lí khi tua bài hát
            inputProgress.onchange = function (e) {
                //Bắt sự kiện thay đổi
                // Cách 1: của mình
                // const lengthSong = (inputProgress.value / 100) * audio.duration;
                // audio.currentTime = lengthSong;

                // Cách 2: của anh Sơn có lấy ra event trong function: e
                const lengthSong = (e.target.value / 100) * audio.duration;
                audio.currentTime = lengthSong;
            };
        };
    },

    loadCurrentSong: function () {
        header.textContent = this.currentSong.name;
        cdThum.style.backgroundImage = `url(${this.currentSong.image})`;
        audio.src = this.currentSong.path;
        // console.log([header, cdThum, audio]);
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
