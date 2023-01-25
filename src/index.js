import util from "./utility";

const { canvas, ctx } = util.createCanvas()

util.setBackgroundColor(ctx)
util.drawRandomShape(canvas, ctx)
