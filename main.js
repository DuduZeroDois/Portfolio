function cont(){
    window.location="cont.html";
}

const button = document.querySelector('button');
 function loading(event){
 event.preventDefault();
 button.innerHTML = '<img src="MIT-Web-Loading-removebg-preview.png" class="loading">';
 setTimeout(() => { button.innerHTML = 'Enviar'; }, 2000);
 var name = document.getElementById('name').value;
 var email = document.getElementById('email').value;
 var message = document.getElementById('message').value;
fetch('https://api.sheetmonkey.io/form/nWhp3FRdUy7otbGNH7dQx2',
{ method: 'post', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', }, body: JSON.stringify({ name, email, message }), }); 
}

 document.querySelector('form').addEventListener('submit', loading);
