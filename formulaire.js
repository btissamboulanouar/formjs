var nameError =document.getElementById('name-error');
var phoneError =document.getElementById('phone-error');
var emailError =document.getElementById('email-error');
var birthdayError =document.getElementById('birthday-error');
var submitError =document.getElementById('submit-error');





let counterValid = 0

async function onSumbit(){


// vqlues
var name=document.getElementById('contact-name').value;
var email=document.getElementById('contact-email').value;
var phone=document.getElementById('contact-phone').value;
var birthday=document.getElementById('contact-birthday').value;



    // add validtion
    if(name.length === 0){
        nameError.style.display = "flex"
        return 

     
    }else{
        nameError.style.display = "none" 
        counterValid++

    }

var PhoneValidator = /^\+212[ -]?\d{9}$/;
    if(phone.match(PhoneValidator)) {
        console.log("none")
        phoneError.style.display = "none"
       

       
    }else{
        console.log(phone)

        phoneError.style.display = "flex"  
        counterValid++
        return 
    }

console.log(email)
    if  (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        emailError.style.display = "none"  
        counterValid++
    
    
        }else{
            emailError.style.display = "flex"  
        return 
            
        
        }
    

console.log(birthday)
    if(birthday <= "2023-01-01" && birthday >= "2000-01-01" ){
        birthdayError.style.display = "none" 
        counterValid++
        

    }else if((birthday.length === 0)) {
        birthdayError.style.display = "flex"
        return 
       
    }else{
        birthdayError.style.display = "flex"
        return 
       
    }
  

await emptyInputs()

}



async function emptyInputs(){
    var name=document.getElementById('contact-name').value;
    var email=document.getElementById('contact-email').value;
    var phone=document.getElementById('contact-phone').value;
    var birthday=document.getElementById('contact-birthday').value;

    let div  = await document.getElementById("list")

    let p = await document.createElement("p")
    p.innerHTML =  await`<p>${name}</p> <p>${email}</p> <p>${phone}</p> <p>${birthday}</p> `

    div.appendChild(p)
 
document.getElementById('contact-name').value = "";
document.getElementById('contact-email').value  = "";
document.getElementById('contact-phone').value  = "";
   document.getElementById('contact-birthday').value  = "";
}
