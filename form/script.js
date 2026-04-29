// CLOCK
setInterval(()=>{
    document.getElementById("clock").innerText =
    new Date().toLocaleTimeString('en-GB');
},1000);

// AGE FIX
document.getElementById("dob").addEventListener("change",function(){
    let dob=new Date(this.value);
    let today=new Date();

    let age=today.getFullYear()-dob.getFullYear();
    let m=today.getMonth()-dob.getMonth();

    if(m<0 || (m===0 && today.getDate()<dob.getDate())){
        age--;
    }

    document.getElementById("age").value=age;
});

// USERNAME
document.getElementById("username").addEventListener("input",function(){
    let msg=document.getElementById("userMsg");

    if(this.value.length<5){
        msg.textContent="Too short";
        msg.style.color="red";
    }else{
        msg.textContent="Looks good";
        msg.style.color="lightgreen";
    }
});

// PASSWORD
document.getElementById("password").addEventListener("input",function(){
    let val=this.value;
    let msg=document.getElementById("strength");

    if(val.length<6){
        msg.textContent="Weak password";
        msg.style.color="red";
    }else if(/[A-Z]/.test(val)&&/[0-9]/.test(val)){
        msg.textContent="Strong password";
        msg.style.color="lightgreen";
    }else{
        msg.textContent="Medium password";
        msg.style.color="orange";
    }
});

// ANALOG CLOCK
function updateAnalogClock(){
    let now = new Date();

    let sec = now.getSeconds();
    let min = now.getMinutes();
    let hr = now.getHours();

    let secDeg = sec * 6;
    let minDeg = min * 6;
    let hrDeg = (hr % 12) * 30 + min * 0.5;

    document.querySelector(".second").style.transform = `rotate(${secDeg}deg)`;
    document.querySelector(".minute").style.transform = `rotate(${minDeg}deg)`;
    document.querySelector(".hour").style.transform = `rotate(${hrDeg}deg)`;
}

setInterval(updateAnalogClock, 1000);
updateAnalogClock();