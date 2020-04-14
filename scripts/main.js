// dummy loading der bilder um delay innerhalb der nachricht
// zu minimieren
var dummy = new Image();
dummy.src = "/images/free-hug.gif"  // "/images/free-hug.webp"; //https://i.giphy.com/media/Bj9k1U69GZ8Iw/giphy.webp";
var dummy1 = new Image();
dummy1.src = "/virtual-hug.gif" // "/images/virtual-hug.webp";//"https://i.giphy.com/media/wIePCLOwUQ4RW/giphy.webp";
var button = $("#repeat");

window.onload = startAnimation;

document.title = "Happy Birthday Milena! ❤️";

async function startAnimation() {                            
    button.prop("disabled", true)
    .animate({
        opacity: 0
    }, 400);
    await wait(750);
    await Presenter.text({
        content: "Happy\nBirthday\nMilena!\n<span class=\"emoji\">🥳</span>",
        color: "#4287f5",
        duration: 2500
    })
    startRain();
    await Presenter.text({
        content: "Wegen der\nblöden\nSituation\nleider nur virtuell\n<span class=\"emoji\">😢</span>",
        color: "linear-gradient(to bottom, #202020, #111119)", //'black',
        duration: 5000
    })
    endRain();
    await Presenter.text({
        content: "Aber\ntrotzdem\n<span class=\"emoji\">😄</span>",
        color: "#edca3b",
        duration: 2000
    })
    await Presenter.background("#ffffff");
    await wait(500);
    await Presenter.newImage({
        url: "/images/virtual-hug.gif",
        duration: 2900
    })
    await Presenter.newImage({
        url: "/images/free-hug.gif",
        duration: 3500
    })
    await Presenter.text({
        content: "Viel Glück und Erfolg bei allem was du anpackst!\n<span class=\"emoji\">🙂</span>",
        color: "#d1403b",
        duration: 5000
    })
    await Presenter.text({
        content: "Schön,\ndass\nes Dich\ngibt!\n<span class=\"emoji\">🤗</span>",
        color: "#3fd476",
        duration: 3500
    })
    await Presenter.text({
        content: "Bleib so\nwie Du\nbist!\n<span class=\"emoji\">😊</span>",
        color: "#6d3fd4",
        duration: 3500
    })
    Presenter.end();
}


function wait(ms) {
    return new Promise(resolve => {
        setTimeout(_ => {
            resolve();
        }, ms);
    });
}

function mediaQuery(query) {
    if (query.matches) {
        image.css({
            height: "100%",
            width: "auto"
        })
    } else {
        image.css({
            width: "100%",
            height: "auto"
        })
    }
}

var query = window.matchMedia("(orientation: landscape)");
mediaQuery(query);
query.addListener(mediaQuery);
