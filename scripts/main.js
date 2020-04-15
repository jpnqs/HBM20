// dummy loading der bilder um delay innerhalb der nachricht
// zu minimieren
Presenter.dummyLoad([
    "https://jpnqs.github.io/HBM20/images/free-hug.gif",
    "https://jpnqs.github.io/HBM20/images/virtual-hug.gif"
]);

const button = $("#repeat");
const sun = $("#sun");
sun.css({
    display: "none"
});
(_ => {
    document.title = "Happy Birthday Milena! ❤️";
    window.onload = startAnimation;
})();

async function startAnimation() {
    let effects = Presenter.Effects;

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
    effects.Rain.start();
    await Presenter.text({
        content: "Wegen der\nblöden\nSituation\nleider nur virtuell\n<span class=\"emoji\">😢</span>",
        color: "linear-gradient(to bottom, #202020, #111119)",
        duration: 5000
    })
    effects.Rain.end();
    effects.Sun.show();
    await Presenter.text({
        content: "Aber\ntrotzdem\n<span class=\"emoji\">😄</span>",
        color: "#2EB5E5",
        duration: 2000
    })
    effects.Sun.hide();
    await Presenter.background("#ffffff");
    await wait(500);
    await Presenter.image({
        url: "https://jpnqs.github.io/HBM20/images/virtual-hug.gif",
        duration: 2900
    })
    await Presenter.image({
        url: "https://jpnqs.github.io/HBM20/images/free-hug.gif",
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

const mediaQuery = query => image.css(
    query.matches 
    ? {
        height: "100%",
        width: "auto"
    }
    : {
        width: "100%",
        height: "auto"
    }
);

var query = window.matchMedia("(orientation: landscape)");
mediaQuery(query);
query.addListener(mediaQuery);
