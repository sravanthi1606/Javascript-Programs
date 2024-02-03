let flag=false;
const burgerMenu=document.getElementById("burgerMenu");
document.addEventListener("DOMContentLoaded",()=>{
    const navLinks=document.getElementById("navLinks");
    burgerMenu.addEventListener("click",()=>{
        navLinks.classList.toggle("show");
        flag=!flag;
        if(flag){
            burgerMenu.innerHTML="&#10060;";
        }
        else{
            burgerMenu.innerHTML="&#9776;";
        }
    })
})




function submitform(event){
    event.preventDefault();
    let username = document.getElementById("username").value;
    let phonenumber = document.getElementById("phonenumber").value;
    let email = document.getElementById("email").value;
    let selectevent = document.getElementById("selectevent").value;
    let date = document.getElementById("date1").value;

    var details=`Username : ${username} \n Phone number : ${phonenumber} \n Email : ${email} \n Select Event : ${selectevent} \n Date : ${date}`
    if((username="")|| (phonenumber="") || (email="")||(selectevent="" )|| (date="")){
        alert("Enter required fields")
    }
    else{
        alert(details);
    }
    document.getElementById("loginform").reset();
}




