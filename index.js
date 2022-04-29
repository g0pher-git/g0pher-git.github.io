
start_typewrite();

const links = [
    {
        link : "https://github.com/g0pher98",
        img : "./img/thin_github.png"
    },
    {
        link : "https://fb.com/g0pherbook",
        img : "./img/thin_facebook.png"
    },
    {
        link : "https://instagram.com/g0pher_",
        img : "./img/thin_instagram.png"
    },
    {
        link : "https://www.linkedin.com/in/jseung",
        img : "./img/thin_linkedin.png"
    }
]

let timerId = setInterval(function() {
    idx = Math.round(Math.random() * (links.length - 1));
    o = links[idx]
    rain_random(o.link, o.img);
}, 1000);