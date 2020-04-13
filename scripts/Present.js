/**
 * Jonas-typisch muss alles reusable sein (der typ muss autismus oder so haben)
 * deswegen, feel free es wieder zu verwenden und etwas eigenes daraus zu machen :)
 */
var text = $("#text");
var body = $("#body");
var image = $("#image");
var i = $("#i");

const Presenter = {

    image: async ({url, duration}) => {
        return new Promise(async (resolve) => {
            await wait(250);
            text.animate({
                fontSize: "4rem",
                opacity:"0"
            })
            body.animate({
                backgroundColor: "#ffffff"
            }, 200)
            i.prop("src", url);
            i.on("load",async () => {
                image.animate({
                    opacity: "1"
                })
                await wait(duration);
                image.animate({
                    opacity: "0"
                })
                await wait(500);
                resolve();
            });
        });
    },

    background: async (color) => {
        return new Promise(resolve => {
            body.animate({
                backgroundColor: color
            }, 200, resolve)
        });
    },

    end: async () => {
        // heart
        text.animate({
            fontSize: "4rem",
            opacity:"0"
        })
        body.animate({
            backgroundColor: "#ffffff"
        }, 200)
        body.animate({
            backgroundColor: "#d1403b"
        }, 400)
        text.html("<span class=\"emoji\">❤️</span>")
        .animate({
            fontSize: "5rem",
            opacity: "1"
        }, 300)
        .animate({
            fontSize:"4.8rem"
        }, 200);
        await wait(2500);
        text.animate({
            fontSize: "4rem",
            opacity:"0"
        })
        body.animate({
            backgroundColor: "#ffffff"
        }, 200)
        await wait(500);
        button.prop("disabled", false);
        button.animate({
            opacity: 1
        }, 400);
    },

    text: async ({content, color, duration}) => {
        return new Promise(resolve => {
            // neue zeile mit <br> für html ersetzen
            content = content.replace(/\n/g, "<br>");

            // text zu standard css werten setzen
            // (kleiner als der spätere text für coolen zoom effekt :))
            text.css({
                fontSize: "4rem",
                opacity:"0"
            })
            // setze den neuen text der angezeigt werden soll!
            .html(content)

            // animiere den hintegrund zu weiß (für coolen white-fade effekt :))
            body.animate({
                backgroundColor: "#ffffff"
            }, 200, 
            async _ => {
                // animiere den hintegrund zur mitgegebenen farbe
                body.animate({
                    backgroundColor: color
                }, 400)
                // kleiner delay das die schrift nicht gleich mit kommt
                await wait(250)
                // animiere das einfaden des textes (mit coolem plop effekt am ende)
                text.animate({
                    fontSize: "5rem",
                    opacity: "1"
                }, 300)
                .animate({
                    fontSize:"4.8rem"
                }, 200, 
                async _ => {
                    // warte die angegebene zeit, damit die 
                    // Nachricht auch gelesen werden kann...
                    await wait(duration);

                    // lass die nachricht wieder mit einer 
                    // coolen weißblende verschwinden!
                    text.animate({
                        fontSize: "4rem",
                        opacity:"0"
                    }, resolve);
                });

            })
        });
    },

    newImage: async ({url, duration}) => {
        return new Promise(async resolve => {
            // await wait(250);
            text.animate({
                fontSize: "4rem",
                opacity:"0"
            })
            body.animate({
                backgroundColor: "#ffffff"
            }, 200)
            // i.prop("src", url);
            // i.on("load",async () => {
                image.animate({
                    opacity: "1"
                }, 400,async _ => {
                    await wait(duration);
                    image.animate({
                        opacity: "0"
                    }, 400, resolve);
                })
            // });
        });
    }


}