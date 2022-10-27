
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

function getRandomColorNumber() {
    return Math.random() * 255;
}

//----------------------------------
var num_of_collapses = 0
function Collapse(){
    num_of_collapses += 1
    if((num_of_collapses % 2) == 0){
        document.getElementById('On').style.display = "flex" //flex is just a value that I know will show on the page. It doesn't have any child elements though.
        document.getElementsByTagName('header')[0].style.display = 'none'
    }
    else{
        document.getElementById('On').style.display = "none"
        document.getElementsByTagName('header')[0].style.display = 'flex'
    }
}

//-----------------------------------

function makeBackgroundDifferentColor() {
    const red = getRandomColorNumber();
    const green = getRandomColorNumber();
    const blue = getRandomColorNumber();
    const color = `rgba(${red}, ${green}, ${blue}, 1)`
    window.document.body.style.background = color;
}

var num_of_toggle_shadows = -1
function ToggleShadow(){
    num_of_toggle_shadows += 1
}
function Change(){
    for(let i = 1; i < document.getElementsByTagName('marquee').length +1; i++){
        const red = getRandomColorNumber();
        const green = getRandomColorNumber();
        const blue = getRandomColorNumber();
        const Color = `rgb(${red}, ${green}, ${blue})`
        const max_scrollamount = Number(document.getElementById('MaxScrollAmount').value)
        const min_scrollamount = Number(document.getElementById('MinScrollAmount').value)
        var ScrollAmount = Math.random() * (max_scrollamount - min_scrollamount) + min_scrollamount; //This is the speed at which the marquee goes across the page
        const max_size = Number(document.getElementById('MaxSizeInput').value)
        const min_size = Number(document.getElementById('MinSizeInput').value)
        var FS = Math.random() * (max_size - min_size) + min_size
        document.getElementById(`${i}`).style.color = Color
        document.getElementById(`${i}`).style.fontSize = String(FS) + 'em' //I use em because it's responsive
        document.getElementById(`${i}`).setAttribute('scrollamount', ScrollAmount)
        if(num_of_toggle_shadows %2 == 0){
            document.getElementById(`${i}`).style.textShadow = `7px 5px 20px rgb(${green}, ${blue}, ${red})` //Yes, the red, green, and blue are mixed up.
        }
        else{
            document.getElementById(`${i}`).style.textShadow = `none`
        }
    }
}

function Flipper(){
    // const chance = (4/max) * 100
    // const max = 4/(chance/100)
    const chance = Number(document.getElementById('ChanceOfFlipping').value)
    const max_flip = (4/(chance/100)) //4 is the number of marquees
    let dec_Selected = Math.random() * (max_flip - 1) + 1 //10max = 40%chance, 20max = 20%chance,
    let selected = Math.floor(dec_Selected)
    if(selected >= 5){
        makeBackgroundDifferentColor()
    }
    else{
        document.getElementById(`${selected}`).style.transform = 'rotateX(0deg)' //This makes the text appear right side up
        setTimeout(FlipStart, 1000, selected) //Run the function FlipStart, after 1000 milliseconds (1 second), with the parameter selected passed in
    }
}
function FlipStart(selected){
    document.getElementById(`${selected}`).style.transform = 'rotateX(180deg)' //This makes the text appear upsidedown
    setTimeout(FlipEnd, 1000, selected)
}
function FlipEnd(selected){
    document.getElementById(`${selected}`).style.transform = 'rotateX(360deg)' //This flips the text back to right side up
}
//--------------------------
