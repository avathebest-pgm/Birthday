/* =========================
   OPEN GIFT
========================= */

function openGift() {

    const opening =
        document.getElementById(
            "opening"
        );


    opening.classList.add(
        "hide"
    );


    /* CONFETTI */

    createConfetti();


    setTimeout(
        createConfetti,
        300
    );


    setTimeout(
        createConfetti,
        700
    );


    /* OPEN BIRTHDAY PAGE */

    setTimeout(() => {

        const content =
            document.getElementById(
                "birthday-content"
            );

        content.classList.add(
            "show"
        );


        /* MUSIC */

        const music =
            document.getElementById(
                "birthday-music"
            );


        music.play()
            .then(() => {

                document
                    .getElementById(
                        "music-button"
                    )
                    .textContent =
                    "🎵 Pause Music";

            })
            .catch(() => {

                console.log(
                    "Music could not start."
                );

            });


        /* HEARTS */

        for (
            let i = 0;
            i < 18;
            i++
        ) {

            setTimeout(
                createHeart,
                i * 120
            );

        }

    }, 700);

}


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    const effects =
        document.getElementById(
            "effects"
        );


    const colors = [

        "#ff6f9f",
        "#ffb3c6",
        "#ffd166",
        "#cdb4db",
        "#a2d2ff",
        "#ffffff",
        "#f78fb3"

    ];


    for (
        let i = 0;
        i < 130;
        i++
    ) {

        const piece =
            document.createElement(
                "div"
            );


        piece.className =
            "confetti";


        piece.style.left =
            Math.random() * 100 +
            "vw";


        const size =
            5 +
            Math.random() * 7;


        piece.style.width =
            size + "px";


        piece.style.height =
            size * 1.6 + "px";


        piece.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        if (
            Math.random() > 0.5
        ) {

            piece.style.borderRadius =
                "50%";

        } else {

            piece.style.borderRadius =
                "2px";

        }


        piece.style.animationDuration =
            (
                2.5 +
                Math.random() * 2.5
            ) + "s";


        piece.style.animationDelay =
            (
                Math.random() * 0.8
            ) + "s";


        effects.appendChild(
            piece
        );


        setTimeout(() => {

            piece.remove();

        }, 6000);

    }

}


/* =========================
   HEART
========================= */

function createHeart() {

    const effects =
        document.getElementById(
            "effects"
        );


    const heart =
        document.createElement(
            "div"
        );


    heart.className =
        "heart";


    const heartTypes = [

        "💗",
        "💕",
        "💖",
        "💓",
        "💞"

    ];


    heart.textContent =
        heartTypes[
            Math.floor(
                Math.random() *
                heartTypes.length
            )
        ];


    heart.style.left =
        Math.random() * 100 +
        "vw";


    heart.style.animationDuration =
        (
            3 +
            Math.random() * 3
        ) + "s";


    effects.appendChild(
        heart
    );


    setTimeout(() => {

        heart.remove();

    }, 7000);

}


/* =========================
   MUSIC
========================= */

function toggleMusic() {

    const music =
        document.getElementById(
            "birthday-music"
        );


    const button =
        document.getElementById(
            "music-button"
        );


    if (
        music.paused
    ) {

        music.play()
            .then(() => {

                button.textContent =
                    "🎵 Pause Music";

            });

    } else {

        music.pause();

        button.textContent =
            "🎵 Play Music";

    }

}


/* =========================
   MAKE A WISH
========================= */

function makeWish() {

    const message =
        document.getElementById(
            "wish-message"
        );


    message.textContent =
        "✨ Your wish will come true. 💗✨";


    message.classList.add(
        "show"
    );


    /* SPARKLES */

    for (
        let i = 0;
        i < 30;
        i++
    ) {

        setTimeout(
            createSparkle,
            i * 70
        );

    }


    /* CONFETTI AGAIN */

    setTimeout(
        createConfetti,
        200
    );

}


/* =========================
   SPARKLE
========================= */

function createSparkle() {

    const effects =
        document.getElementById(
            "effects"
        );


    const sparkle =
        document.createElement(
            "div"
        );


    sparkle.className =
        "sparkle";


    sparkle.textContent =
        "✨";


    sparkle.style.left =
        Math.random() * 100 +
        "vw";


    sparkle.style.top =
        Math.random() * 100 +
        "vh";


    effects.appendChild(
        sparkle
    );


    setTimeout(() => {

        sparkle.remove();

    }, 1600);

}


/* =========================
   PHOTO ZOOM
========================= */

function zoomPhoto() {

    const zoom =
        document.getElementById(
            "photo-zoom"
        );


    zoom.classList.add(
        "show"
    );

}


/* =========================
   CLOSE PHOTO
========================= */

function closePhoto() {

    const zoom =
        document.getElementById(
            "photo-zoom"
        );


    zoom.classList.remove(
        "show"
    );

}


/* =========================
   AUTO HEARTS
========================= */

setInterval(() => {

    const content =
        document.getElementById(
            "birthday-content"
        );


    if (
        content.classList.contains(
            "show"
        )
    ) {

        createHeart();

    }

}, 2000);