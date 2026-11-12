
// ======================================
// BIRTHDAY WEBSITE FOR JP
// DECEMBER 12, 2026
// ======================================


// CREATE BACKGROUND STARS

const stars = document.getElementById("stars");

for (let i = 0; i < 90; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay =
        Math.random() * 3 + "s";

    stars.appendChild(star);

}


// ======================================
// OPEN LETTER
// ======================================

const openBtn = document.getElementById("openBtn");
const letter = document.getElementById("letter");

openBtn.addEventListener("click", () => {

    letter.classList.remove("hidden");

    openBtn.style.display = "none";

    launchFireworks();

    letter.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});


// ======================================
// PLOT TWIST
// ======================================

const surpriseBtn =
    document.getElementById("surpriseBtn");

const surprise =
    document.getElementById("surprise");

surpriseBtn.addEventListener("click", () => {

    surprise.classList.remove("hidden");

    // BIG FIREWORKS CELEBRATION

    for (let i = 0; i < 10; i++) {

        setTimeout(() => {
            launchFireworks();
        }, i * 400);

    }

    surprise.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});


// ======================================
// FIREWORKS ANIMATION
// ======================================

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

let particles = [];

function resizeCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);


// LAUNCH FIREWORKS

function launchFireworks() {

    for (let i = 0; i < 8; i++) {

        const x = Math.random() * canvas.width;

        const y = Math.random() * canvas.height * 0.65;

        const color =
            `hsl(${Math.random() * 360},100%,65%)`;

        for (let j = 0; j < 55; j++) {

            const angle =
                Math.random() * Math.PI * 2;

            const speed =
                Math.random() * 5 + 1;

            particles.push({

                x: x,
                y: y,

                dx: Math.cos(angle) * speed,
                dy: Math.sin(angle) * speed,

                life: 100,
                color: color

            });

        }

    }

}


// ANIMATE PARTICLES

function animate() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    particles.forEach(p => {

        p.x += p.dx;
        p.y += p.dy;

        p.dy += 0.025;

        p.life--;

        ctx.globalAlpha =
            Math.max(0, p.life / 100);

        ctx.fillStyle = p.color;

        ctx.beginPath();

        ctx.arc(
            p.x,
            p.y,
            3,
            0,
            Math.PI * 2
        );

        ctx.fill();

    });


    // REMOVE OLD PARTICLES

    particles = particles.filter(
        p => p.life > 0
    );

    ctx.globalAlpha = 1;

    requestAnimationFrame(animate);

}

animate();


// ======================================
// REPLAY FIREWORKS
// ======================================

function celebrateAgain() {

    for (let i = 0; i < 6; i++) {

        setTimeout(
            launchFireworks,
            i * 500
        );

    }

}


// ======================================
// FINAL THANK YOU ANIMATION
// ======================================

const thankyouBtn =
    document.getElementById("thankyouBtn");

const finalThankYou =
    document.getElementById("finalThankYou");

const typingText =
    document.getElementById("typingText");


const finalMessage = `
Tol, gusto ko lang sabihin na sobrang
thankful ako sa lahat ng bagay na nagawa mo.

Salamat kasi lagi kang nandiyan.
Salamat sa oras, effort, tulong,
at sa lahat ng times na sinamahan mo ako.

Salamat sa mga tawanan, kulitan,
at sa mga simpleng bagay na
naging memorable dahil kasama kita.

Hindi ko man palaging nasasabi,
pero naa-appreciate ko talaga lahat.

Sana hindi mo makalimutan na
kahit may kanya-kanya tayong buhay,
isa ka sa mga taong thankful akong
nakilala at naging parte ng buhay ko.

Hindi ko alam kung paano ko
masusuklian lahat ng nagawa mo,
pero sana malaman mong
sobrang halaga mo bilang tropa.

Thank you for staying, tol.
Thank you for everything.

HAPPY BIRTHDAY, JP!

SOLID KA PALAGI. ❤️
`;


// OPEN FINAL MESSAGE

thankyouBtn.addEventListener("click", () => {

    thankyouBtn.style.display = "none";

    finalThankYou.classList.remove("hidden");

    // GRAND FIREWORKS

    for (let i = 0; i < 12; i++) {

        setTimeout(() => {
            launchFireworks();
        }, i * 450);

    }

    // SCROLL TO FINAL MESSAGE

    finalThankYou.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });


    // TYPING EFFECT

    typingText.textContent = "";

    let index = 0;

    function typeMessage() {

        if (index < finalMessage.length) {

            typingText.textContent +=
                finalMessage[index];

            index++;

            setTimeout(typeMessage, 38);

        }

    }

    setTimeout(typeMessage, 1200);

});
