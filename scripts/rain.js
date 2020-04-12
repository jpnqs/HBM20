function drop() {

    let x = Math.floor(Math.random() * window.innerWidth)

    let cl = "drop" + Math.floor(Math.random() * 5);

    // create rain drop
    let drop = $(`
        <div class="drop ${cl}"></div>
    `)
    
    drop.css({
        top: "0px",
        left: x + "px"
    })
    drop.appendTo(body);
    
    drop.animate({
        top: window.innerHeight + "px"
    }, 1000, 'linear',function () {
        this.remove();
    }.bind(drop))

}

var isRaining = false;

async function rain() {
    if (!isRaining) return;
    let x = Math.floor(Math.random() * 50) + 100;
    await wait(x);
    drop();

    rain();
}

function removeAllDrops() {
    let drops = document.getElementsByClassName("drop");
    for (let i=0;i <drops.length; i++) {
        let drop = drops[i];
        drop.classList.add("dropInvisible");
    }
}

function startRain() {
    isRaining = true;
    rain();
}

function endRain() {
    isRaining = false;
    removeAllDrops();
}
