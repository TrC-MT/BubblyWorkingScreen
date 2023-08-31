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
    setInterval(makeBackgroundDifferentColor, interval/2);
    setInterval(CnumBubbles, interval/2, interval)
    var intervalToChange = (max_interval + min_interval + interval) * 1.5;
    setTimeout(Interval, intervalToChange);
};
//----------------------
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

//-------------------------

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
//-------------------------------------------------------
let bubblify_count = 0;
function bubblify(num_bubbles){
    console.log('Running bubblify', num_bubbles);
    document.getElementById('begin-message').style.display = 'none';
    for(let i = 1; i <= num_bubbles; i++){
        let x_s = document.getElementById(`b-${i}`).style.left;
        console.log('x_s ', x_s, " i ", i)
        console.log(x_s) //Outputs nothing????
        console.log('^')
        let x = Number(x_s.slice(0, -1)); // Return the string without the last character (In this case a %), then turn it into a number
        let y_s = document.getElementById(`b-${i}`).style.top;
        console.log('y_s ', y_s, " i ", i)
        console.log(y_s) //Outputs nothing????
        console.log('^')
        let y = Number(y_s.slice(0, -1)); // Return the string without the last character (In this case a %), then turn it into a number
        let d = Math.random();
        let x_direction = 'right';
        if(d >= .5){
            x_direction = 'right';
        }
        else{
            x_direction = 'left';
        }

        let d2 = Math.random();
        let y_direction = 'down';
        if(d2 >= .5){
            y_direction = 'down';
        }
        else{
            y_direction = 'up';
        }
        if(x == 0){
            x = 1
            x_direction = 'right';
        }
        if(y == 0){
            y = 9
            y_direction = 'down';
        }
        let p = {i: i, x: x, y: y, xd:  x_direction, yd: y_direction};
        console.log('p ', p)
        R(p);
    }
    bubblify_count += 1;

    function R(p){
        let x_min_interval = 60;
        let x_max_interval = 20;
        let y_min_interval = 60;
        let y_max_interval = 20;
        var r_x = (Math.random() * (x_max_interval + x_min_interval) + x_min_interval);
        console.log('r_x ', r_x, ' i ', p.i);
        let x_interval = setInterval(X, r_x, p);
        var r_y = (Math.random() * (y_max_interval + y_min_interval) + y_min_interval);
        console.log('r_y ', r_y, ' i ', p.i);
        let y_interval = setInterval(Y, r_y, p);
        if(bubblify_count != 0){
            clearInterval(x_interval);
            clearInterval(y_interval);
        };
    };

    function X(p){
        if(p.i == 6){
            console.log('i 6 x is ', p.x) //This doesn't run, even when there are 6 bubbles.
        }
        if(p.xd == 'right'){
            p.x += 1;
            document.getElementById(`b-${p.i}`).style.left = `${p.x}%`;
            if(p.x >= 97){
                p.xd = 'left';
            };
        }
        else if(p.xd == 'left'){
            p.x -= 1;
            document.getElementById(`b-${p.i}`).style.left = `${p.x}%`;
            if(p.x <= .1){
                p.xd = 'right';
                p.x = 1;
            };
        };
    };
    function Y(p){
        if(p.i == 6){
            console.log('i 6 y is ', p.y)
        }
        if(p.yd == 'down'){
            p.y += 1;
            document.getElementById(`b-${p.i}`).style.top = `${p.y}%`;
            if(p.y >= 88){
                p.yd = 'up';
            };
        }
        else if(p.yd == 'up'){
            p.y -= 1;
            document.getElementById(`b-${p.i}`).style.top = `${p.y}%`;
            if(p.y <= 8){
                p.yd = 'down';
                p.y = 9
            };
        };
    };
};
//--------------------------------------
var num_of_toggle_shadows = -1;
function ToggleShadow(){
    num_of_toggle_shadows += 1;
};
function Change(num_bubbles){
    console.log('Running Change ', num_bubbles);
    for(let i = 1; i <= num_bubbles; i++){
        const red = getRandomColorNumber();
        const green = getRandomColorNumber();
        const blue = getRandomColorNumber();
        const Color = `rgb(${red}, ${green}, ${blue})`;
        document.getElementById(`b-${i}`).style.color = Color;
        document.getElementById(`b-${i}`).style.backgroundColor = Color;
        if(num_of_toggle_shadows %2 == 0){
            document.getElementById(`b-${i}`).style.boxShadow = `0px 0px 20px 10px rgb(${green}, ${blue}, ${red})`; //Yes, the red, green, and blue are mixed up.
        }
        else{
            document.getElementById(`b-${i}`).style.boxShadow = `none`;
        };
    }
}
//-------------------
function Flipper(num_bubbles){
    console.log('Running Flipper ', num_bubbles);
    const chance = Number(document.getElementById('ChanceOfFlipping').value);
    const max_flip = num_bubbles/(chance/100);
    let dec_Selected = Math.random() * (max_flip - 1) + 1; //10max = 40%chance, 20max = 20%chance,
    let selected = Math.floor(dec_Selected);
    if(selected >= num_bubbles){
        makeBackgroundDifferentColor();
    }
    else{
        document.getElementById(`b-${selected}`).style.animationName = 'Flip';
        setTimeout(document.getElementById(`b-${selected}`).style.animationName = 'none', 5000);
    };
}
//----------------------
let check_right_count = 0;
let cnumbubbles_count = 0;
function CnumBubbles(interval){
    cnumbubbles_count += 1;
    if(cnumbubbles_count < 2){
        document.getElementById('maxBubbles').value = 100;
    }
    if(cnumbubbles_count == 3){
        document.getElementById('maxBubbles').value = 4;
        document.getElementById('mb-message').style.display = 'none';
        document.getElementById('maxBubbles').style.display = 'block';
    }
    console.log('Running CnumBubbles');
    let max_bubbles = document.getElementById('maxBubbles').value;
    console.log('max_bubbles ', max_bubbles);
    if (max_bubbles < 4){
        max_bubbles = 4;
        console.log('max_bubbles was less than 4')
    }
    else if(max_bubbles > 100){
        max_bubbles = 100;
        console.log('max_bubbles was more than 100')
    }
    else{
        Check(interval);
        function Check(interval){
            console.log('running check')
            let num_bubbles = document.getElementsByClassName('bubble').length; //Declaring this globally doesn't change anything.
            console.log('num_bubbles after check ', num_bubbles)
            if(num_bubbles < max_bubbles){
                console.log('n_b < m_b')
                document.getElementsByTagName('main')[0].innerHTML += `<p id="b-${num_bubbles+1}" class="bubble">O.</p>`;
                Check(interval);
            }
            else if(num_bubbles > max_bubbles){
                console.log('n_b > m_b')
                var str = document.getElementsByTagName('main')[0].innerHTML;
                str = str.split("\n")
                str.pop()
                str.pop()
                let nstr = '';
                for(let i = 0; i < str.length; i++){
                    nstr += str[i];
                }
                document.getElementsByTagName('main')[0].innerHTML = nstr;
                Check(interval);
            }
            else{
                Change(num_bubbles);
                bubblify(num_bubbles);
                Flipper(num_bubbles);
            }
        }
    }
    
}