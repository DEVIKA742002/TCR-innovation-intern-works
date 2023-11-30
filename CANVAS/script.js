const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

//// fillRect()
//x.fillRect(x, y, width, height)

// ctx.fillStyle='red'
// ctx.fillRect(200,20,150,100)
// ctx.fillStyle='green'
// ctx.fillRect(20,20,150,100)


// //strckRect()
// ///ctx.strokeRect(x, y, width, height)
// ctx.lineWidth=5;
// ctx.strokeStyle='blue'
// ctx.strokeRect(200, 400, 150, 100)

////clearRect()
// ctx.clearRect(0,0,1000,9000)

// //// filltext()
// ctx.font='20px Arial'
// ctx.fillStyle='green'
// ctx.fillText('hello world',40,50)

// // //stroketext()
// ctx.lineWidth=1;
// ctx.strokeStyle='blue'
// ctx.strokeText('hello world',300,50)

//Line

// ctx.beginPath();
// ctx.moveTo(50,50)
// ctx.lineTo(150,50)
// ctx.lineTo(100,400)
// // ctx.lineTo(50,50)
// ctx.closePath()
// ctx.fillStyle='red'
// ctx.fill()
// ctx.stroke()


// //full circle
// const centerX=canvas.width/2
// const centerY=canvas.height/2
// ctx.beginPath();
// ctx.arc(centerX,centerY,200,90,Math.PI*2,true)
// ctx.stroke()


//half circle
// ctx.beginPath();
// ctx.arc(75,75,35,0,Math.PI,false)
// ctx.stroke()

// for(var i=0; i<5000; i++){
// ctx.beginPath();
// ctx.lineWidth=1;
// var x=Math.random()*window.innerHeight
// var y=Math.random()*window.innerWidth
// ctx.arc(x,y,60,0,Math.PI*2)
// ctx.strokeStyle='red'
// ctx.stroke()
// }


var x=Math.random()*window.innerHeight
var dx=(Math.random()-0.5)*8
var y=Math.random()*window.innerWidth
var dy=(Math.random()-0.5)*8
radius=35

function animate(){
  requestAnimationFrame(animate)
// console.log('hello');

ctx.clearRect(0,0,innerWidth,innerHeight);

ctx.beginPath();
ctx.arc(x,y,radius,0,Math.PI*2)
ctx.strokeStyle='red'
ctx.stroke()
// x+=1

if(x+radius>innerWidth || x-radius<0){
dx=-dx
}
x+=dx

if(y+radius>innerWidth || y-radius<0){
    dy=-dy
    }
    y+=dy
}
animate()




