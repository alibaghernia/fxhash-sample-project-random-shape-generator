
function getRandoomColor() {
    const maxVal = 0xFFFFFF
    const rand = fxrand()
    return '#' + Math.floor(rand * maxVal).toString(16)
}
function createCanvas() {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    return { canvas, ctx }
}

function setBackgroundColor(ctx) {
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = getRandoomColor();
    ctx.closePath()
    ctx.fill()
}

function drawArc(canvas, ctx) {
    let min = canvas.width > canvas.height ? canvas.height : canvas.width

    ctx.beginPath();
    ctx.arc(
        canvas.width / 2,
        canvas.height / 2,
        (min / 100) * 40,
        0,
        Math.PI * 2
    )
    ctx.fillStyle = getRandoomColor();
    ctx.closePath()
    ctx.fill()

    for (let index = 0; index < 10; index++) {
        const color = '#ffffff30'
        ctx.beginPath();
        ctx.arc(
            canvas.width / 2,
            canvas.height / 2,
            (min / 100 * 40) - index * 17,
            0,
            Math.PI * 2
        )
        ctx.fillStyle = color;
        ctx.closePath()
        ctx.fill()

    }
}
function drawRect(canvas, ctx) {
    let min = canvas.width > canvas.height ? canvas.height : canvas.width

    ctx.beginPath();
    ctx.rect(
        canvas.width / 2 - (min / 100 * 55 / 2),
        canvas.height / 2 - (min / 100 * 55 / 2),
        (min / 100) * 55,
        (min / 100) * 55,
    )
    ctx.fillStyle = getRandoomColor();
    ctx.closePath()
    ctx.fill()

    for (let index = 0; index < 10; index++) {
        const color = '#ffffff20'
        ctx.beginPath();
        ctx.rect(
            canvas.width / 2 - (min / 100 * 55 / 2) + index * 10,
            canvas.height / 2 - (min / 100 * 55 / 2) + index * 10,
            (min / 100 * 55) - (index * 20),
            (min / 100 * 55) - (index * 20),
        )
        ctx.fillStyle = color;
        ctx.closePath()
        ctx.fill()
    }
}
function drawTriangle(canvas, ctx) {
    let min = canvas.width > canvas.height ? canvas.height : canvas.width
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2 - min / 100 * 20);
    ctx.lineTo(canvas.width / 2 - min / 100 * 40, canvas.height / 2 + min / 100 * 20);
    ctx.lineTo(canvas.width / 2 + min / 100 * 40, canvas.height / 2 + min / 100 * 20);
    ctx.fillStyle = getRandoomColor();
    ctx.fill();

    for (let index = 0; index < 10; index++) {
        const color = '#ffffff20'
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, (canvas.height / 2) - (min / 100 * 20) + (index * 10));
        ctx.lineTo(
            (canvas.width / 2) - (min / 100 * 40) + (index * 10),
            (canvas.height / 2) + (min / 100 * 20) - (index * 5)
        );
        ctx.lineTo(
            (canvas.width / 2) + (min / 100 * 40) - (index * 10),
            (canvas.height / 2) + (min / 100 * 20) - (index * 5)
        );
        ctx.fillStyle = color;
        ctx.closePath()
        ctx.fill()
    }
}

function drawRandomShape(canvas, ctx) {
    const randomNumber = Math.floor(Math.random() * 3)

    if (randomNumber == 0) {
        drawTriangle(canvas, ctx)
    } else if (randomNumber == 1) {
        drawArc(canvas, ctx)
    } else {
        drawRect(canvas, ctx)
    }
}

module.exports = {
    getRandoomColor,
    createCanvas,
    setBackgroundColor,
    drawArc,
    drawRect,
    drawTriangle,
    drawRandomShape,
}