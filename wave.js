
const ctx = document.querySelector('#canvas').getContext('2d')
let increment = 0.15
let angle = 0
let amplitude = 120
let waveEffect = 360
let activeColor = false
function Wave() {
  const wave = {}
  wave.draw = function () {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.01)'
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    angle = increment
    ctx.beginPath()
    ctx.moveTo(-1, ctx.canvas.height / 2)
    for(let x = 0; x < ctx.canvas.width; x++) {
      let rad = Math.sin(angle * Math.PI * 2 / waveEffect)
      * Math.sin(x * Math.PI / 270)
      ctx.lineTo(x, ctx.canvas.height / 2 + amplitude * rad)
      angle += 1
    }
    if (activeColor) {
      ctx.strokeStyle = `hsl(${255 * Math.sin(angle * Math.PI / 180)}, 50%, 50%)`
    } else {
      ctx.strokeStyle = `hsl(200, 50%, 50%)`

    }
    ctx.stroke()
    increment += 0.5

  }
  wave.update = function () {

  }
  return wave
}



const wave = Wave()
function loop() {
  requestAnimationFrame(loop)

  wave.draw()
  wave.update()
}


loop()