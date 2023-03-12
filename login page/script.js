const forms= document.querySelector(".forms"),
pwShowHide= document.querySelectorAll(".eye-slash"),
links= document.querySelectorAll(".link");

pwShowHide.forEach(eyeSlash => {
    eyeSlash.addEventListener("click", => {
        let pwFields = eyeSlash.parentElement.parentElement.querySelectorAll(".Password");

        pwField.forEach(password=>{
            if(password.type === "password"){
                password.type ="text";

            }
        })
    }
} 