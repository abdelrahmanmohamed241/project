document.addEventListener('DOMContentLoaded', function() {
let theme1 = document.querySelector("#theme1")
let theme2 = document.querySelector("#theme2")
let theme3 = document.querySelector("#theme3")
let submit = document.querySelector("#submit-button")
let submit1 = document.querySelector(".submit-button")
let name1 = document.querySelector("#name")
let image1 = document.querySelector(".image1")
let image2 = document.querySelector(".image2")
let personname = document.querySelector(".person-name")
var firstno = document.querySelector(".first-no")
let operator = document.querySelector(".operator")
let secondno = document.querySelector(".second-no")
let plus=document.querySelector(".plus")
let minus=document.querySelector(".minus")
let less=document.querySelector(".less")
let more=document.querySelector(".more")
let equall=document.querySelector(".equall")
let one=document.querySelector(".one")
let two=document.querySelector(".two")
let three=document.querySelector(".three")
let four=document.querySelector(".four")
let five=document.querySelector(".five")
let six=document.querySelector(".six")
let seven=document.querySelector(".seven")
let eight=document.querySelector(".eight")
let nine=document.querySelector(".nine")
let zero=document.querySelector(".zero")
let true1=document.querySelector(".true")
let false1=document.querySelector(".false")
let result=document.querySelector(".result")
let status=document.querySelector(".status")
let message=document.querySelector(".message")
let score=document.querySelector(".score-no")
let activeInput = null;
  firstno.addEventListener('click', function() {
    activeInput = firstno;
  });
  secondno.addEventListener('click', function() {
    activeInput = secondno;
  });
  result.addEventListener('click', function() {
    activeInput = result;
  });
  operator.addEventListener('click', function() {
    activeInput = operator;
  });
  one.addEventListener('click', function() { 
    if (activeInput === firstno) {
      firstno.value += "1";
    } else if (activeInput === secondno) {
      secondno.value += "1";
    } else if (activeInput === result) {
      result.value += "1";
    }
  });
  two.addEventListener('click', function() { 
    if (activeInput === firstno) {
      firstno.value += "2";
    } else if (activeInput === secondno) {
      secondno.value += "2";
    } else if (activeInput === result) {
      result.value += "2";
    }
  });
  three.addEventListener('click', function() { 
    if (activeInput === firstno) {
      firstno.value += "3";
    } else if (activeInput === secondno) {
      secondno.value += "3";
    } else if (activeInput === result) {
      result.value += "3";
    }
  });
  four.addEventListener('click', function() { 
    if (activeInput === firstno) {
      firstno.value += "4";
    } else if (activeInput === secondno) {
      secondno.value += "4";
    } else if (activeInput === result) {
      result.value += "4";
    }
  });
  five.addEventListener('click', function() { 
    if (activeInput === firstno) {
      firstno.value += "5";
    } else if (activeInput === secondno) {
      secondno.value += "5";
    } else if (activeInput === result) {
      result.value += "5";
    }
  });
  six.addEventListener('click', function() { 
    if (activeInput === firstno) {
      firstno.value += "6";
    } else if (activeInput === secondno) {
      secondno.value += "6";
    } else if (activeInput === result) {
      result.value += "6";
    }
  });
  seven.addEventListener('click', function() { 
    if (activeInput === firstno) {
      firstno.value += "7";
    } else if (activeInput === secondno) {
      secondno.value += "7";
    } else if (activeInput === result) {
      result.value += "7";
    }
  });
  eight.addEventListener('click', function() { 
    if (activeInput === firstno) {
      firstno.value += "8";
    } else if (activeInput === secondno) {
      secondno.value += "8";
    } else if (activeInput === result) {
      result.value += "8";
    }
  });
  nine.addEventListener('click', function() { 
    if (activeInput === firstno) {
      firstno.value += "9";
    } else if (activeInput === secondno) {
      secondno.value += "9";
    } else if (activeInput === result) {
      result.value += "9";
    }
  });
  zero.addEventListener('click', function() { 
    if (activeInput === firstno) {
      firstno.value += "0";
    } else if (activeInput === secondno) {
      secondno.value += "0";
    } else if (activeInput === result) {
      result.value += "0";
    }
  });
  plus.addEventListener('click', function() { 
    if(activeInput === operator){
    operator.value+="+"
    }
})
minus.addEventListener('click', function() { 
    if(activeInput === operator){
    operator.value+="-"
    }
})
more.addEventListener('click', function() { 
    if(activeInput === operator){
    operator.value+=">"
    }
})
equall.addEventListener('click', function() { 
    if(activeInput === operator){
    operator.value+="="
    }
})
less.addEventListener('click', function() { 
    if(activeInput === operator){
    operator.value+="<"
    }
})
true1.addEventListener('click', function() {
result.value="true"
})
false1.addEventListener('click', function() {
    result.value="false"
    })
submit1.addEventListener('click', function() {
    let match=0 ;
    console.log(operator.value)
    if (operator.value === "+") {
        match = Number(firstno.value) + Number(secondno.value);
        console.log(match);
      } else if (operator.value === "-") {
        match = Number(firstno.value) - Number(secondno.value);
        console.log(match);
      } else if (operator.value === "=") {
        console.log(match);
        if (Number(firstno.value) === Number(secondno.value)) {
          match = true;
        } else {
          match = false;
        }
      } else if (operator.value === ">") {
        console.log(match);
        if (Number(firstno.value) > Number(secondno.value)) {
          match = true;
        } else {
          match = false;
        }
      } else if (operator.value === "<") {
        console.log(match);
        if (Number(firstno.value) < Number(secondno.value)) {
          match = true;
        } else {
          match = false;
        }
      }
  
    if(match===Number(result.value)||match==Boolean(result.value)){
status.style.backgroundColor="green"
message.innerHTML="Great Job!"
message.style.color="green"
let e= score.innerHTML
let f=Number(e)
f++;
score.innerHTML=f
console.log(f)
    }
else if(result.value!==match || match!==Number(result.value)){
        status.style.backgroundColor="red"
        message.innerHTML="Try Again!"
        message.style.color="red"
            }
    })
let a = 0;
let b = 0;
let c = 0;
let d = 0;
console.log(d)
theme1.addEventListener('click', function() { 
    theme1.style.color="antiquewhite"
    theme1.style.backgroundColor="black"
    theme2.style.backgroundColor="antiquewhite"
        theme2.style.color="black"
        theme3.style.backgroundColor="antiquewhite"
            theme3.style.color="black"
    })
    theme2.addEventListener('click', function() {
        theme2.style.color="antiquewhite"
        theme2.style.backgroundColor="black"
        theme1.style.backgroundColor="antiquewhite"
        theme1.style.color="black"
        theme3.style.backgroundColor="antiquewhite"
            theme3.style.color="black"
        })
        theme3.addEventListener('click', function() {
            theme3.style.backgroundColor="black"
            theme3.style.color="antiquewhite"
            theme1.style.color="black"
    theme1.style.backgroundColor="antiquewhite"
    theme2.style.backgroundColor="antiquewhite"
        theme2.style.color="black"
            })
submit.addEventListener('click', function() {
    submit.style.color="antiquewhite"
    submit.style.backgroundColor="black" 
    d=1
    theme1.addEventListener('click', function() { 
                a=1
                image1.className="theme1-image1"
                image2.className="theme1-image2"
        })
        theme2.addEventListener('click', function() {
                b=1
                image1.className="theme2-image1"
                image2.className="theme2-image2"
            })
            theme3.addEventListener('click', function() {
            c=1
            image1.className="theme3-image1"
            image2.className="theme3-image2"
                })
if (d=1){
    if(a>=1){
        a=2
    personname.innerHTML= name1.value
    }
else if(b>=1){
    b=2
personname.innerHTML= name1.value
} 
else if(c>=1){
    c=2
personname.innerHTML= name1.value
}else{
            personname.innerHTML= name1.value
        }
    }
})
})
