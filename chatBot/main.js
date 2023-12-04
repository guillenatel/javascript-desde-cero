/* 
    Crear una etiqueta desde JS

-| document.createElement('div'); 

Ejemplos: 

-| document.createElement('div') 

-| const div = document.createElement('div')


    Agregar una etiqueta agregada a otra existente o nueva.

-| const div = document.createElement('div')  // Creamos un div
-| const p = document.createElement('p')      // Creamos un p

-|  div.appendChild( p )    // agregamos "p" dentro de "div" 


    Agregarle contendido a un elemento creado. Ejemplo "p"

-| const p = document.createElement('p')    // Creamos el elemento
-| p.textContent = "Contenido tipo texto a agregar"     // Le agregamos el contenido en formato texto


const body = document.querySelector('body')

body.appendChild(div)

document.querySelector('') etiquetas, clases, id


    Agregar clases a la etiqueta

-| const p = document.createElement('p')
-| p.classList.add('') // bot => resp-bot | user => resp-user

*/


const chatBody = document.querySelector(".chat-body");
const txtInput = document.querySelector("#txtinput"); 
const send = document.querySelector(".send"); 

send.addEventListener("click",() => almacenarMensajeUsuario()); 

txtInput.addEventListener('keydown', (e) => {
    if(e.key === "Enter" && txtInput.value != ""){
        e.preventDefault(); 
        almacenarMensajeUsuario(); 
    }
});

const almacenarMensajeUsuario = ()=> {
    const userInput = txtInput.value; 
    crearElementoMensaje(userInput,"user"); 
    txtInput.value="";
    setTimeout(() => {
        respuestaBotElemento(userInput);
        posicionScroll();
    },600); 
};

const respuestaBotElemento = (userInput) => {
    const res = respuestaBot(userInput); 
    crearElementoMensaje(res); 
};

const crearElementoMensaje = (txt, type) => {
    let className = "user-message"; 
    if(type !== "user"){
        className = "chatbot-message"; 
    }
    const mensajeEle = document.createElement("div"); 
    const txtNode = document.createTextNode(txt); 
    mensajeEle.classList.add(className); 
    mensajeEle.append(txtNode); 
    chatBody.append(mensajeEle); 

};

const respuestaBot = (userInput) =>{
    return responseObj[userInput]==undefined?"Porfavor intenta algo más":responseObj[userInput];
};

const posicionScroll = () => {
    if(chatBody.scrollHeight > 0){
        chatBody.scrollTop = chatBody.scrollHeight;
    }
};