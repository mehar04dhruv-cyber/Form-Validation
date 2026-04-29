// PASSWORD CHECK
function checkPassword(val){
    let rules = {
        len: val.length >= 8,
        upper: /[A-Z]/.test(val),
        lower: /[a-z]/.test(val),
        num: /[0-9]/.test(val),
        sp: /[^A-Za-z0-9]/.test(val)
    };

    document.getElementById("r-len").className = rules.len ? "valid":"invalid";
    document.getElementById("r-upper").className = rules.upper ? "valid":"invalid";
    document.getElementById("r-lower").className = rules.lower ? "valid":"invalid";
    document.getElementById("r-num").className = rules.num ? "valid":"invalid";
    document.getElementById("r-sp").className = rules.sp ? "valid":"invalid";

    return Object.values(rules).every(v=>v);
}

// PASSWORD INPUT
document.getElementById("password").addEventListener("input",function(){
    checkPassword(this.value);
});

// TOGGLE
function togglePassword(){
    let p=document.getElementById("password");
    p.type = p.type==="password"?"text":"password";
}

// PHONE
document.getElementById("phone").addEventListener("input",function(){
    this.value=this.value.replace(/\D/g,'').slice(0,10);
});

// VALIDATE FIELD
function validate(i){
    if(!i.value.trim()){
        i.classList.add("error");
        return false;
    }
    i.classList.remove("error");
    return true;
}

// SUBMIT
document.getElementById("form").addEventListener("submit",function(e){
    e.preventDefault();

    let valid=true;

    document.querySelectorAll("input,select").forEach(i=>{
        if(!validate(i)) valid=false;
    });

    let pass=document.getElementById("password").value;
    let confirm=document.getElementById("confirmPassword").value;

    if(!checkPassword(pass)){
        document.getElementById("password").classList.add("error");
        valid=false;
    }

    if(pass!==confirm){
        document.getElementById("confirmPassword").classList.add("error");
        valid=false;
    }

    if(valid){
        document.getElementById("popup").style.display="flex";
    }
});

function closePopup(){
    document.getElementById("popup").style.display="none";
}