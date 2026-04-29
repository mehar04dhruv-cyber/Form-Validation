// CLOCK
function updateClock(){
    let now = new Date();
    let sec = now.getSeconds();
    let min = now.getMinutes();
    let hr = now.getHours();

    document.querySelector(".second").style.transform = `rotate(${sec*6}deg)`;
    document.querySelector(".minute").style.transform = `rotate(${min*6}deg)`;
    document.querySelector(".hour").style.transform = `rotate(${(hr%12)*30 + min*0.5}deg)`;
}
setInterval(updateClock,1000);
updateClock();

// AGE
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

// PHONE
document.getElementById("phone").addEventListener("input",function(){
    this.value=this.value.replace(/[^0-9]/g,'').slice(0,10);
});

// PASSWORD TOGGLE
function togglePassword(){
    let pass=document.getElementById("password");
    pass.type=pass.type==="password"?"text":"password";
}

// SUBMIT
document.getElementById("form").addEventListener("submit",function(e){
    e.preventDefault();

    let pass=document.getElementById("password").value;
    let confirm=document.getElementById("confirmPassword").value;

    if(pass!==confirm){
        alert("Passwords do not match");
        return;
    }

    document.getElementById("popup").style.display="flex";
});

// CLOSE POPUP
function closePopup(){
    document.getElementById("popup").style.display="none";
}