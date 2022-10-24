function getRandomColorNumber() {
    return Math.random() * 255;
}

function makeBackgroundDifferentColor() {
    const red = getRandomColorNumber();
    const green = getRandomColorNumber();
    const blue = getRandomColorNumber();
    const color = `rgba(${red}, ${green}, ${blue}, 1)`
    window.document.body.style.background = color;
}


window.setTimeout(
    function(){
        Interval()
    }, 1000
);

function Interval(){
    const max = 6000
    const min = 2000
    var DecInterval = Math.random() * (max - min) + min;
    var interval = Math.floor(DecInterval)
    setInterval(Change, interval)
    setInterval(makeBackgroundDifferentColor, interval/2)
    setInterval(Flipper, interval * 2)
    var intervalToChange = (max + min + interval)*1.5
    setTimeout(Interval, intervalToChange)
}

function Change(){
    for(let i = 1; i < document.getElementsByTagName('marquee').length +1; i++){
        const red = getRandomColorNumber();
        const green = getRandomColorNumber();
        const blue = getRandomColorNumber();
        const Color = `rgb(${red}, ${green}, ${blue})`
        var ScrollAmount = Math.random() * (60 - 18) + 18;
        var FS = Math.random() * (300 - 100) + 100

        document.getElementById(`${i}`).style.color = Color
        document.getElementById(`${i}`).style.fontSize = String(FS) + 'px'
        document.getElementById(`${i}`).setAttribute('scrollamount', ScrollAmount)
    }
}

function Flipper(){
    let dec_Selected = Math.random() * (10 - 1) + 1
    let selected = Math.floor(dec_Selected)
    console.log(selected)
    if(selected >= 5){
        makeBackgroundDifferentColor()
    }
    else{
        document.getElementById(`${selected}`).style.transform = 'rotateX(0deg)'
        setTimeout(FlipStart, 1000, selected)
    }
}
function FlipStart(selected){
    document.getElementById(`${selected}`).style.transform = 'rotateX(180deg)'
    setTimeout(FlipEnd, 1000, selected)
}
function FlipEnd(selected){
    document.getElementById(`${selected}`).style.transform = 'rotateX(360deg)'
}