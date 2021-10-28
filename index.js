let userNumber = document.getElementById("number");
let check_btn = document.getElementById("checkBtn");
let result = document.getElementById("result");
let again = document.getElementById("again")
let hak = 4
let deneme =1
let randomNumber = Math.round(Math.random() * 100);
    console.log(randomNumber)

again.addEventListener("click", ()=>{
    window.location.reload()
    check_btn.disabled = false;

});

    
check_btn.addEventListener("click", ()=>{
  
    if (userNumber.value < 0 || userNumber.value >100 || userNumber.value === "") {
        result.innerText ="0-100 arasında bir sayı giriniz";

    }
    else if (userNumber.value > randomNumber) {
        result.innerText = `büyük sayı girdiniz, daha küçük bir sayı deneyin `;
        hak -= 1;
        deneme += 1;
    }
    else if (userNumber.value < randomNumber) {
        result.innerText = `küçük sayı girdiniz, daha büyük bir sayı deneyin`;
        hak -= 1;
        deneme += 1;
    }

    // else if(deneme = 4){
    //     check_btn.disabled = true;
    //     again.disabled = false;
    //     result.innerText = `10 kere denediniz olmadı tekrar deneyin`
        
    // }
    else if(userNumber.value = randomNumber){
        result.innerText = `TEBRİKLER BİLDİNİZ... tutuğum sayı ${randomNumber}\n ${deneme}. denemede buldunuz `;
        check_btn.disabled = true; 
        again.disabled = false;
    }
  
    userNumber.value = ""
    

});






































// let userNumber = document.getElementById("number");


// let button = document.getElementById("checkBtn");



// button.addEventListener("click", ()=>{

// if(userNumber.value > 0 && userNumber.value <= 100 && userNumber.value != String ){
//     alert("geçerli numara.")}

// else{
//     alert("geçersiz sayı")
// }});


// button.addEventListener("click", ()=>{
// let randomNumber = () => Math.round(Math.random() * 101);

// if (userNumber.value == randomNumber()) {
//     alert("tebrikler...")
// }
// else if (userNumber.value > randomNumber()) {
//     alert(`yüksek sayı girdiniz`)
// }
// else{
//     alert(`küçük sayı girdiniz`)
// }
// });




