// array to store data
const users =JSON.parse(localStorage.getItem("users"))|| [];
// registration form logic

document.getElementById("registration")?.addEventListener("submit", function(e){
    e.preventDefault();
    const name= document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    if(users.some((user) => user.email === email)){
        document.getElementById("output").innerText = "Email already registered!";
        return;

    }
    const newUser ={
        name,email,password
    };
    users.push(newUser);
    localStorage.setItem("users",JSON.stringify(users));
    

    document.getElementById("output").innerText ="Registraion Successful!";
    setTimeout(() => {
        window.location.href ="signin.html";
    }, 1500);
});
// login logic
document.getElementById("loginForm")?.addEventListener("submit",function (e){
    e.preventDefault();
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const user = users.find((user) => user.email === email && user.password === password);
    if(user){
      localStorage.setItem("currentUser",JSON.stringify(user));
        window.location.href = "welcome.html";
    }else{
         document.getElementById("message").innerText = "Invalid email or password!";
    }
   
})
// welcome page
if(window.location.pathname.endsWith("welcome.html")){
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if(!currentUser){
        window.location.href = "signin.html";
    }else{
        document.getElementById("userdetails").innerHTML = `
        <p> Name: ${currentUser.name}</p><br>
        <p> Email: ${currentUser.email}</p><br>
        `;
    }
}