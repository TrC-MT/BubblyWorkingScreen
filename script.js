window.setTimeout(
    function(){
        Interval(); // Start the Interval function
    }, 1000 // After one second.
);

function Interval(){
    const max_interval = Number(document.getElementById('MaxIntervalInput').value) * 1000;
    const min_interval = Number(document.getElementById('MinIntervalInput').value) * 1000;
    var DecInterval = Math.random() * (max_interval - min_interval) + min_interval;
    var interval = Math.floor(DecInterval);
    setInterval(Change, interval);
    setInterval(makeBackgroundDifferentColor, interval/2);
    setInterval(Flipper, interval * 2);
    var intervalToChange = (max_interval + min_interval + interval) * 1.5;
    setTimeout(Interval, intervalToChange);
};

function getRandomColorNumber() {
    return Math.random() * 255;
};

//----------------------------------
var num_of_collapses = 0;
function Collapse(){
    num_of_collapses += 1;
    if((num_of_collapses % 2) == 0){
        document.getElementById('On').style.display = "block";
        document.getElementsByTagName('header')[0].style.display = 'none';
    }
    else{
        document.getElementById('On').style.display = "none";
        document.getElementsByTagName('header')[0].style.display = 'flex';
    };
};

//-----------------------------------

function makeBackgroundDifferentColor() {
    const red = getRandomColorNumber();
    const green = getRandomColorNumber();
    const blue = getRandomColorNumber();
    const color = `rgba(${red}, ${green}, ${blue}, 1)`;
    window.document.body.style.background = color;
};

var num_of_toggle_shadows = -1;
function ToggleShadow(){
    num_of_toggle_shadows += 1;
};

var num_of_behaviors = -1;
function BehaviorSwitch(){
    num_of_behaviors += 1;
};

function Change(){
    for(let i = 1; i < document.getElementsByClassName('Not-marquee').length +1; i++){
        const red = getRandomColorNumber();
        const green = getRandomColorNumber();
        const blue = getRandomColorNumber();
        const Color = `rgb(${red}, ${green}, ${blue})`;
        document.getElementById(`m-${i}`).style.color = Color;
        //___________________________
        const max_speed = Number(document.getElementById('SlowestSpeed').value);
        const min_speed = Number(document.getElementById('FastestSpeed').value);
        var speed = Math.random() * (max_speed - min_speed) + min_speed; //This is the duration it takes for the Not-marquee to go across the page
        document.getElementById(`m-${i}`).style.animationDuration = `${speed}s`;
        //______________________________
        const max_size = Number(document.getElementById('MaxSizeInput').value);
        const min_size = Number(document.getElementById('MinSizeInput').value);
        var FS = Math.random() * (max_size - min_size) + min_size;
        document.getElementById(`m-${i}`).style.fontSize = String(FS) + 'vw';
        //________________________________
        if(num_of_toggle_shadows %2 == 0){
            document.getElementById(`m-${i}`).style.textShadow = `7px 5px 20px rgb(${green}, ${blue}, ${red})`; //Yes, the red, green, and blue are mixed up.
        }
        else{
            document.getElementById(`m-${i}`).style.textShadow = `none`;
        };
        //___________________________________
        document.getElementById(`m-${i}`).innerHTML = String(document.getElementById('TextInput').value);
        //___
        if(num_of_behaviors%2 == 0){
            document.getElementById(`m-${i}`).style.animationName = 'Move_scroll';
            let way = Math.ceil(Math.random() * 2 + 1);
            if(way % 2 == 0){
             document.getElementById(`m-${i}`).style.animationDirection = 'normal'; //This makes the Not-marquee scroll to the right.
            }
            else{
            document.getElementById(`m-${i}`).style.animationDirection = 'reverse'; //This makes the Not-marquee scroll to the left.
            };
        }
        else{
            document.getElementById(`m-${i}`).style.animationName = 'Move_alternate';
        };
    };
};

function Flipper(){
    const chance = Number(document.getElementById('ChanceOfFlipping').value);
    const max_flip = (4/(chance/100)); //4 is the number of Not-marquees
    let dec_Selected = Math.random() * (max_flip - 1) + 1; //10max = 40%chance, 20max = 20%chance,
    let selected = Math.floor(dec_Selected);
    if(selected >= 5){
        makeBackgroundDifferentColor();
    }
    else{
        document.getElementById(`m-${selected}`).style.transform = 'rotateX(0deg)' //This makes the text appear right side up
        setTimeout(FlipStart, 1000, selected) //Run the function FlipStart, after 1000 milliseconds (1 second), with the parameter selected passed in
    };
};
function FlipStart(selected){
    let selected_behaviour = document.getElementById(`m-${selected}`).style.animationName;
    if(selected_behaviour == 'Move_scroll'){
        document.getElementById(`m-${selected}`).style.animationName = 'Flip_scroll'; //This makes the Not-marquee switch to a different animation that includes flipping
    }
    else if(selected_behaviour == 'Move_alternate'){
        document.getElementById(`m-${selected}`).style.animationName = 'Flip_alternate'; //This makes the Not-marquee switch to a different animation that includes flipping
    }
    else{
        console.log('selected_behaviour malfunctioned. ', selected_behaviour);
    };
    let duration_s = document.getElementById(`m-${selected}`).style.animationDuration; // animationDuration is a string of numbers with an s at the end.
    let duration_m = duration_s.slice(0, -1); // Return the string without the last character.
    let duration = Number(duration_m) * 1000; // Make duration_m into a number, then multiply by a thousand because setTimeout is in milliseconds.
    setTimeout(FlipEnd, duration, {selected, selected_behaviour}); //This makes the flipping animation last only as long as the animation-duration for the selected Not-marquee  STILL A PROBLEM HERE
};
function FlipEnd(selectedObj){
    if(selectedObj.selected_behaviour == 'Move_scroll'){
        document.getElementById(`m-${selectedObj.selected}`).style.animationName = 'Move_scroll'; //This makes the Not-marquee switch back to the animation without flipping
    }
    else if(selectedObj.selected_behaviour == 'Move_alternate'){
        document.getElementById(`m-${selectedObj.selected}`).style.animationName = 'Move_alternate'; //This makes the Not-marquee switch back to the animation without flipping
    }
    else{
        console.log('selected_behaviour malfunctioned. ', selected_behaviour)
    };
};
//--------------------------

audio_tag = document.getElementsByTagName('audio')[0];
audio_button = document.getElementById('audioControl');
let s = 0; // s standing for sound
function AudioControl(){
    if(s == 0){
        audio_tag.pause();
        s = 1;
        audio_button.style.backgroundColor = '#1623DB';
        audio_button.style.color = '#DBB216';
        audio_button.innerHTML = 'Play music';
    }
    else if(s == 1){
        audio_tag.play();
        s = 0;
        audio_button.style.backgroundColor = '#DBB216';
        audio_button.style.color = '#1623DB';
        audio_button.innerHTML = 'Pause music';
    }
    else{
        console.log('the s variable for the audio tag is not functioning.');
    };
};