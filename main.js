var showPassword = document.getElementById("outpass")
var copyBtn = document.getElementById("copy")
var genBtn = document.getElementById("generate")


//-------Generate-Password button functionality------------


genBtn.addEventListener("click", ()=>{
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz$#@!*"
    var passwordLength = 10;
    var password = "";


    for (let i = 0; i < passwordLength; i++) {
        var randomPword = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomPword, randomPword +1);
    }
    

    document.getElementById("outpass").value = password
})


//-------copy button functionality------------


copyBtn.addEventListener("click", ()=>{
    var copyPass = document.getElementById("outpass")

    copyPass.select();
    copyPass.setSelectionRange(0,999);
    document.execCommand("copy");
})

