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
    const max_interval = Number(document.getElementById('MaxIntervalInput').value) * 1000 
    const min_interval = Number(document.getElementById('MinIntervalInput').value) * 1000
    var DecInterval = Math.random() * (max_interval - min_interval) + min_interval;
    var interval = Math.floor(DecInterval)
    setInterval(Change, interval)
    setInterval(makeBackgroundDifferentColor, interval/2)
    setInterval(Flipper, interval * 2)
    var intervalToChange = (max_interval + min_interval + interval)*1.5
    setTimeout(Interval, intervalToChange)
}

function Change(){
    for(let i = 1; i < document.getElementsByTagName('marquee').length +1; i++){
        const red = getRandomColorNumber();
        const green = getRandomColorNumber();
        const blue = getRandomColorNumber();
        const Color = `rgb(${red}, ${green}, ${blue})`
        var ScrollAmount = Math.random() * (60 - 18) + 18;
        const max_size = Number(document.getElementById('MaxSizeInput').value)
        const min_size = Number(document.getElementById('MinSizeInput').value)
        var FS = Math.random() * (max_size - min_size) + min_size
        document.getElementById(`${i}`).style.color = Color
        document.getElementById(`${i}`).style.fontSize = String(FS) + 'em'
        document.getElementById(`${i}`).setAttribute('scrollamount', ScrollAmount)
    }
}

function Flipper(){
    // const chance = (4/max) * 100
    // const max = 4/(chance/100)
    const chance = Number(document.getElementById('ChanceOfFlipping').value)
    const max_flip = (4/(chance/100))
    let dec_Selected = Math.random() * (max_flip - 1) + 1 //10max = 40%chance, 20max = 20%chance,
    let selected = Math.floor(dec_Selected)
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