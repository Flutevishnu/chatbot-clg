var information = "Developed by Current AI&DS dept student";

var user_contents = {
    "name":["welcome to KLN "]
}


var content = questions["start"];
var isInputOpen = false;
var reloading = false;
id = 1;

click_buttons = [];

// function fetchData(ev) {
    
    
  
//     var chatBox = document.querySelector('.chatbox');
    

//     var contentas = document.createElement("div");
//     var contentBox = document.createElement("div"); 
//     contentas.classList.add("content-as");
//     contentBox.classList.add("content-box");
    
  
    
//     content = content["buttons"][ev];
    
    
  
//     var text = content["text"];
//     var buttons = content["buttons"];
//     var text_msg = "";
//     var but_msg = "";
  
//     text.forEach(e => {
//         text_msg += e+"<br>";
//     });
  
//     for (j in buttons){
//         but_msg += '<button onclick="loading(\''+j+'\')">'+j+'</button>';
//     }

    
  
//     if (content.input ){

//         var content_INPUT = document.createElement("div");
//         content_INPUT.classList.add("content-INPUT");
//         var INPUT_head = document.createElement("div");
//         INPUT_head.classList.add("INPUT-head");
  
//         content["input"].forEach(i => {
//         content_input = i;
//         })
  
//         input_text = '<div id="input_text">' + content_input + '</div>';
//         var header = '<img src="klnimg.png" alt="" id="head">'
//         INPUT_head.innerHTML = header;
//         content_INPUT.innerHTML = input_text;
//         INPUT_head.appendChild(content_INPUT);
//         chatBox.appendChild(INPUT_head);
  
//         var input_box = document.querySelector(".input");
//         input_box.style.display = "block";
//         isInputOpen = true;
//         document.getElementById("button_click").onclick = function() { handleuserinput(ev, content);};
    
//     }


//     if (!isInputOpen)
//     {
        
//         var header = '<img src="klnimg.png" alt="" id="head">'
//         var contentText = '<div class="text">' + text_msg + '</div><br>';
//         var buttonBox = '<div class="buttons">' + but_msg + '</div>';
//         contentas.innerHTML = contentText + buttonBox;
//         contentBox.innerHTML = header;
//         contentBox.appendChild(contentas);
//         chatBox.appendChild(contentBox);
//         chatBox.scrollTop = chatBox.scrollHeight;
    
//     }
// }


// function loading(ev){

//     selected_button(ev);

//     var chatBox = document.querySelector('.chatbox');
//     var contentas = document.createElement("div");
//     var contentBox = document.createElement("div");
//     contentas.classList.add("content-as");
//     contentBox.classList.add("content-box");

//     var header = '<img src="klnimg.png" alt="" id="head">'
//     contentBox.innerHTML = header;
//     contentas.innerHTML ='<div class="loading-text">Loading...</div>';
//     contentBox.appendChild(contentas);
//     chatBox.appendChild(contentBox);
//     chatBox.scrollTop = chatBox.scrollHeight;

//     setTimeout(function(){
//         console.log("loading");
//         chatBox.removeChild(contentBox);
//         fetchData(ev);
//     }, 1000)

    
// }
  



// function chaticon() {
//   console.log("Inside the chaticon function");
//   const chatui = document.getElementById("chat-ui");
//   console.log(chatui.style.display);
//   if (chatui.style.display != "none") {
//     chatui.style.display = "none";
//   } else {
//     chatui.style.display = "block";
//     chatbot_start();
//   }
// }



// function handleuserinput(ev, content) {
  
//     user_input = document.getElementById("user-input").value;
  
//     console.log(user_input);

//     var chatBox = document.querySelector('.chatbox');

//     var user_input_msg = '<div class="USER-text">' + user_input + '</div>';
//     var contentBox = document.createElement("div");
//     contentBox.classList.add("content-box");
//     var header = '<span id="head">YOU:</span>';
//     contentBox.innerHTML = header + user_input_msg;
//     chatBox.appendChild(contentBox);
//     chatBox.scrollTop = chatBox.scrollHeight;

//     document.getElementById("user-input").value = "";
//     var input_box = document.querySelector(".input");
//     input_box.style.display = "none";
//     console.log(content.input);

//     if("name" in content.input){
//         var chatBox = document.querySelector('.chatbox');
//         var contentas = document.createElement("div");
//         var contentBox = document.createElement("div");
//         contentas.classList.add("content-as");
//         contentBox.classList.add("content-box");

//         console.log(user_contents["name"]);
//     }
//     isInputOpen = false;


//     var chatBox = document.querySelector('.chatbox');
//     var contentas = document.createElement("div");
//     var contentBox = document.createElement("div");
//     contentas.classList.add("content-as");
//     contentBox.classList.add("content-box");
  
//     console.log("inside the handleuserinput");
//     console.log(ev);
  
//     var text = content["text"];
//     console.log(text);
//     var buttons = content["buttons"];
//     console.log(buttons);
//     var text_msg = "";
//     var but_msg = "";
  
//     text.forEach(e => {
//         text_msg += e+"<br>";
//     });
  
//     for (j in buttons){
//         but_msg += '<button onclick="loading(\''+j+'\')">'+j+'</button>';
//     }


    
//     var header = '<img src="klnimg.png" alt="" id="head">'
//     var contentText = '<div class="text">' + text_msg + '</div>';
//     var buttonBox = '<div class="buttons">' + but_msg + '</div>';
//     contentas.innerHTML = contentText + buttonBox;
//     contentBox.innerHTML = header;
//     contentBox.appendChild(contentas);
//     chatBox.appendChild(contentBox);
//     chatBox.scrollTop = chatBox.scrollHeight;

// }



// function reload(ev){
//     var input_box = document.querySelector(".input");
    

//     if (input_box.style.display == "block"){
//         input_box.style.display = "none";
//     }
    
//     document.querySelector('.chatbox').innerHTML = '';
//     console.log("reloading");;

    
//     isInputOpen = false;
//     chatbot_start();

    
//     console.log("reloading");
// }






// function chatbot_start() {
//     var chatBox = document.querySelector('.chatbox');
//     var contentas = document.createElement("div");
//     var contentBox = document.createElement("div");
//     contentas.classList.add("content-as");
//     contentBox.classList.add("content-box");

    
    
//     var header = '<img src="klnimg.png" alt="" id="head">'
//     contentBox.innerHTML = header;
//     contentas.innerHTML ='<div class="loading-text">Loading...</div>';
//     contentBox.appendChild(contentas);
//     chatBox.appendChild(contentBox);

//     setTimeout(function(){
//         console.log("loading");
//         chatBox.removeChild(contentBox);
//         start();
//     }, 1000)



// }


// function start() {

//     var chatBox = document.querySelector('.chatbox');
//     var contentas = document.createElement("div");
//     var contentBox = document.createElement("div");
//     contentas.classList.add("content-as");
//     contentBox.classList.add("content-box");


//     content = questions["start"];
//     var text = content["text"];
//     var buttons = content["buttons"];
//     var text_msg = "";
//     var but_msg = "";
  
//     text.forEach(e => {
//         text_msg += e+"<br>";
//     });
  
//     for (j in buttons){
//         but_msg += '<button onclick="loading(\''+j+'\')">'+j+'</button>';
//     }



//     var header = '<img src="klnimg.png" alt="" id="head">'
//     var contentText = '<div class="text">' + text_msg + '</div>';
//     var buttonBox = '<div class="buttons">' + but_msg + '</div>';
//     contentas.innerHTML = contentText +buttonBox;
//     contentBox.innerHTML = header;
//     contentBox.appendChild(contentas);
//     chatBox.appendChild(contentBox);
//     chatBox.scrollTop = chatBox.scrollHeight;
// }




// function remove_buttons(){

//     var chatBox = document.querySelector('.chatbox');
//     var contentas = document.createElement("div");
//     var contentBox = document.createElement("div");
//     contentas.classList.add("content-as");
//     contentBox.classList.add("content-box");


//     content = questions["start"];
//     var text = content["text"];
//     var buttons = content["buttons"];
//     var text_msg = "";
//     var but_msg = "";
  
//     text.forEach(e => {
//         text_msg += e+"<br>";
//     });
  
//     for (j in buttons){
//         but_msg += '<button onclick="loading(\''+j+'\')">'+j+'</button>';
//     }

//     var header = '<img src="klnimg.png" alt="" id="head">';
//     var contentText = '<div class="text">' + text_msg + '</div>';
//     var buttonBox = '<div class="buttons">' + but_msg + '</div>';
//     contentas.innerHTML = contentText
//     contentBox.innerHTML = header;
//     contentBox.appendChild(contentas);
//     chatBox.appendChild(contentBox);
//     chatBox.scrollTop = chatBox.scrollHeight;
// }

// function selected_button(but){
//     var chatBox = document.querySelector('.chatbox');
//     var contentas = document.createElement("div");
//     var contentBox = document.createElement("div");
//     contentBox.classList.add("content-box-response");

    
//     contentBox.innerHTML = '<div class="selected">' + but + '</div>';
//     chatBox.appendChild(contentBox);
//     chatBox.scrollTop = chatBox.scrollHeight;
// }


function chaticon() 
{
  console.log("Inside the chaticon function");
  const chatui = document.getElementById("chat-ui");
//   const chaticon = document.querySelector(".chat");
  chat_not = document.querySelector(".chat_not");
//   const chat_img = document.querySelector("#chat-img");
  console.log(chatui.style.display);
  if (chatui.style.display != "none") 
  {
    chatui.style.display = "none";
    document.querySelector('.chat_box').innerHTML = '';
    // chaticon.setAttribute("src", "icon.png");
    // chat_img.src = "chat.png";
  } 
  else 
  {
    chat_not.style.display = "none";
    chatui.style.display = "block";

    var chatbox = document.querySelector(".chat_box");
    chatbox.style.bottom = "60px";
    // document.querySelector('.chat_box').innerHTML = '';
    // console.log("reloading");
    document.getElementById("user-input").value = "";


    // chaticon.setAttribute("src", "close-icon.png")
    // chat_img.src = "close-icon.png";
    click_start();
  }
}

function info()
{
    console.log("info button clicked");
    const info = document.getElementById("chatbot_info");
    if (info.style.display != "none")
    {
        info.style.display = "none";
    }
    else
    {
        info.style.display = "block";
        
    }
}

function click_start() 
{
    console.log('chatbot started');
    var chatBox = document.querySelector('.chat_box');
    var contentas = document.createElement("div");
    var contentBox = document.createElement("div");
    contentas.classList.add("content-as");
    contentBox.classList.add("content-box");
    var header = '<img src="klnimg.png" alt="" id="head">'
    contentBox.innerHTML = header;
    contentas.innerHTML ='<div class="loader"><span></span><span></span><span></span></div>'
    contentBox.appendChild(contentas);
    chatBox.appendChild(contentBox);
    setTimeout(function()
    {
        console.log("loading");
        chatBox.removeChild(contentBox);
        start();
    }
    , 5000)
}

function start()
{
    var chatBox = document.querySelector('.chat_box');
    var contentBox = document.createElement("div");
    contentBox.classList.add("content-box");
    console.log(id);
    contentBox.id = id;


    content = questions["start"];
    var text = content["text"];
    var buttons = content["buttons"];
    var text_msg = "";
    var but_msg = "";
  
    text.forEach(e => {
        text_msg += e+"<br>";
    });
  
    for (j in buttons){
        but_msg += '<button onclick="deletetext(\''+j+'\')">'+j+'</button>';
    }



    var header = '<img src="klnimg.png" alt="" id="head">'
    var text = '<div id="text">' + text_msg + '</div>';
    var button = '<div id="button">' + but_msg + '</div>';
    contentBox.innerHTML = header+text+button;
    chatBox.appendChild(contentBox);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function deletetext(btn_text){
    console.log("clicked button: " + btn_text);
    var buttonDiv = document.getElementById("button");
    // buttonDiv.innerHTML = "";
    buttonDiv.remove();
    user(btn_text);
    // var userDiv = document.createElement("div");
    // userDiv.classList.add("user");
    // userDiv.innerHTML = '<p>' + btn_text + '</p>';
    // var contentBox = document.querySelector('.content-box');
    // var currentHTML = contentBox.innerHTML;
    // var newHTML = currentHTML + userDiv.outerHTML;
    // contentBox.innerHTML = newHTML;
    // load(btn_text);


    // var chatBox = document.querySelector('.chat_box');
    // var contentas = document.createElement("div");
    // var contentBox = document.createElement("div");
    // contentas.classList.add("content-as");
    // contentBox.classList.add("content-box");
    // var header = '<img src="klnimg.png" alt="" id="head">'
    // contentBox.innerHTML = header;
    // contentas.innerHTML ='<div class="loader"><span></span><span></span><span></span></div>'
    // contentBox.appendChild(contentas);
    // chatBox.appendChild(contentBox);
    // setTimeout(function()
    // {
    //     console.log("loading");
    //     chatBox.removeChild(contentBox);
    //     fetchdata(btn_text);
    // }
    // , 1000)
}

function user(btn_text)
{
    var userDiv = document.createElement("div");
    userDiv.classList.add("user");
    userDiv.innerHTML = '<p>' + btn_text + '</p>';
    // var contentBox = document.querySelector('.content-box');
    contentBox = document.getElementById(id);
    var currentHTML = contentBox.innerHTML;
    var newHTML = currentHTML + userDiv.outerHTML;
    contentBox.innerHTML = newHTML;
    load(btn_text);
}

function load(ev)
{
    var chatBox = document.querySelector('.chat_box');
    var contentas = document.createElement("div");
    var contentBox = document.createElement("div");
    contentas.classList.add("content-as");
    contentBox.classList.add("content-box");
    var header = '<img src="klnimg.png" alt="" id="head">'
    contentBox.innerHTML = header;
    contentas.innerHTML ='<div class="loader"><span></span><span></span><span></span></div>'
    contentBox.appendChild(contentas);
    chatBox.appendChild(contentBox);
    chatBox.scrollTop = chatBox.scrollHeight;
    setTimeout(function()
    {
        console.log("loading");
        chatBox.removeChild(contentBox);
        fetchdata(ev);
    }
    , 1000)
}

function fetchdata(ev)
{   

    content = questions["start"];

    console.log("fetchdata");
    click_buttons.push(ev);
    console.log(click_buttons);

    if(click_buttons[click_buttons.length - 1] === "Other Departments" || click_buttons[click_buttons.length - 1] === "Other Information" ){
        console.log("mother fucker he clciked other departments")
        click_buttons.splice(-2);
        console.log(click_buttons);
    }

    click_buttons.forEach(i => {
        // jus_print = content["buttons"][i];
        // jus_text = content["text"];
        // console.log(jus_text);

        console.log("just printing I :", i);
        content = content["buttons"][i];
        // old = contents;
        
    });









    var chatBox = document.querySelector('.chat_box');
    var contentBox = document.createElement("div"); 
    contentBox.classList.add("content-box");
    id += 1;
    console.log(id);
    contentBox.id += id;
    // content = content["buttons"][ev];
    // // old = contents;
    // var text = content["text"];
    // var buttons = content["buttons"];
    var text = content["text"];
    var buttons = content["buttons"];

    var text_msg = "";
    var but_msg = "";
  
    text.forEach(e => {
        text_msg += e+"<br>";
    });
  
    for (j in buttons){
        but_msg += '<button onclick="deletetext(\''+j+'\')">'+j+'</button>';
    }

    if (content.input )
    {

        // var content_INPUT = document.createElement("div");
        // content_INPUT.classList.add("content-INPUT");
  
        content["input"].forEach(i => {
        content_input = i;
        })
  
        var input_text = '<div id="text">' + content_input + '</div>';
        var header = '<img src="klnimg.png" alt="" id="head">'
        contentBox.innerHTML = header + input_text;
        chatBox.appendChild(contentBox);
        chatBox.scrollTop = chatBox.scrollHeight;
        
  
        var input_box = document.querySelector(".input");
        input_box.style.display = "block";
        isInputOpen = true;
        document.getElementById("button_click").onclick = function() { handleuserinput(ev, content);};
    
    }
    if (!isInputOpen)
    {
        var header = '<img src="klnimg.png" alt="" id="head">'
        var contentText = '<div id="text">' + text_msg + '</div><br>';
        var buttonBox = '<div id="button">' + but_msg + '</div>';
        console.log("fetchdata");
        contentBox.innerHTML = header + contentText + buttonBox;
        chatBox.appendChild(contentBox);
        chatBox.scrollTop = chatBox.scrollHeight;
    }   
}

function loading_screen(btn_text)
{
    console.log("clicked button: " + btn_text);
    var buttonDiv = document.getElementById("button");
    // buttonDiv.innerHTML = "";
    buttonDiv.remove();
    var userDiv = document.createElement("div");
    userDiv.classList.add("user");
    userDiv.innerHTML = '<p>' + btn_text + '</p>';
    var contentBox = document.querySelector('.content-box');
    var currentHTML = contentBox.innerHTML;
    var newHTML = currentHTML + userDiv.outerHTML;
    contentBox.innerHTML = newHTML;
    load(btn_text);


    // var chatBox = document.querySelector('.chat_box');
    // var contentas = document.createElement("div");
    // var contentBox = document.createElement("div");
    // contentas.classList.add("content-as");
    // contentBox.classList.add("content-box");
    // var header = '<img src="klnimg.png" alt="" id="head">'
    // contentBox.innerHTML = header;
    // contentas.innerHTML ='<div class="loader"><span></span><span></span><span></span></div>'
    // contentBox.appendChild(contentas);
    // chatBox.appendChild(contentBox);
    // setTimeout(function()
    // {
    //     console.log("loading");
    //     chatBox.removeChild(contentBox);
    //     fetchdata(btn_text);
    // }
    // , 1000)
}

function handleuserinput(ev, content) {
  
    user_input = document.getElementById("user-input").value;
  
    console.log(user_input);

    var chatBox = document.querySelector('.chatbox');

    // var user_input_msg = '<div class="USER-text">' + user_input + '</div>';
    // var contentBox = document.createElement("div");
    // contentBox.classList.add("content-box");
    // var header = '<span id="head">YOU:</span>';
    // contentBox.innerHTML = header + user_input_msg;
    // chatBox.appendChild(contentBox);
    // chatBox.scrollTop = chatBox.scrollHeight;

    var userDiv = document.createElement("div");
    userDiv.classList.add("user");
    userDiv.innerHTML = '<p>' + user_input + '</p>';
    // var contentBox = document.querySelector('.content-box');
    contentBox = document.getElementById(id);
    console.log(id);
    var currentHTML = contentBox.innerHTML;
    var newHTML = currentHTML + userDiv.outerHTML;
    contentBox.innerHTML = newHTML;

    // document.getElementById("user-input").value = "";
    var input_box = document.querySelector(".input");
    input_box.style.display = "none";

    var chatbox = document.querySelector(".chat_box");
    chatbox.style.bottom = "0px";
    // content.input.forEach(i => { msg = i });
    // if("name" in msg){
    //     console.log("irupathu oru life uuu");

    //     var chatBox = document.querySelector('.chatbox');
    //     // var contentas = document.createElement("div");
    //     var contentBox = document.createElement("div");
    //     // contentas.classList.add("content-as");
    //     contentBox.classList.add("content-box");
    //     user_content["name"].forEach(e =>{text_msg += e+"<br>";})
    //     console.log(text_msg);
        
    //     var contentText = '<div id="text">' + text_msg + '</div>';
    //     contentBox.innerHTML = header + contentText + buttonBox;
    //     chatBox.appendChild(contentBox);
    //     chatBox.scrollTop = chatBox.scrollHeight;


        
    // }
    // input(user_input);

    isInputOpen = false;


    var chatBox = document.querySelector('.chat_box');
    // var contentas = document.createElement("div");
    var contentBox = document.createElement("div");
    // contentas.classList.add("content-as");
    contentBox.classList.add("content-box");
    id += 1;
    contentBox.id = id;
    console.log("inside the handleuserinput");
    console.log(ev);
  
    var text = content["text"];
    console.log(text);
    var buttons = content["buttons"];
    console.log(buttons);
    var text_msg = "";
    var but_msg = "";
  
    text.forEach(e => {
        text_msg += e+"<br>";
    });
  
    for (j in buttons){
        but_msg += '<button onclick="deletetext(\''+j+'\')">'+j+'</button>';
    }

    jusload(user_input);

    setTimeout(() => {
        jusload2();

        // var header = '<img src="klnimg.png" alt="" id="head">'
        // var contentText = '<div id="text">' + text_msg + '</div>';
        // var buttonBox = '<div id="button">' + but_msg + '</div>';
        // contentBox.innerHTML = header + contentText + buttonBox;
        // chatBox.appendChild(contentBox);
        // chatBox.scrollTop = chatBox.scrollHeight;

    
    }, 2000);
    setTimeout(()=>{
        var header = '<img src="klnimg.png" alt="" id="head">'
        var contentText = '<div id="text">' + text_msg + '</div>';
        var buttonBox = '<div id="button">' + but_msg + '</div>';
        contentBox.innerHTML = header + contentText + buttonBox;
        chatBox.appendChild(contentBox);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 3000);
    
    


}

function input(user_input)
{  
    // jusload();
    console.log("irupathu oru life uuu");

    var chatBox = document.querySelector('.chat_box');
    // var contentas = document.createElement("div");
    var contentBox = document.createElement("div");
    // contentas.classList.add("content-as");
    contentBox.classList.add("content-box");
    var text_msg = "";
    user_contents["name"].forEach(e =>{text_msg += e+user_input+"<br>";})

    console.log(text_msg+"vishnu");
        
    var contentText = '<div id="text">' + text_msg + '</div>';
    var header = '<img src="klnimg.png" alt="" id="head">'
    contentBox.innerHTML = header + contentText ;
    chatBox.appendChild(contentBox);
    chatBox.scrollTop = chatBox.scrollHeight;

}

function jusload()
{
    var chatBox = document.querySelector('.chat_box');
    var contentas = document.createElement("div");
    var contentBox = document.createElement("div");
    contentas.classList.add("content-as");
    contentBox.classList.add("content-box");
    var header = '<img src="klnimg.png" alt="" id="head">'
    contentBox.innerHTML = header;
    contentas.innerHTML ='<div class="loader"><span></span><span></span><span></span></div>'
    contentBox.appendChild(contentas);
    chatBox.appendChild(contentBox);
    chatBox.scrollTop = chatBox.scrollHeight;
    setTimeout(function()
    {
        console.log("loading");
        chatBox.removeChild(contentBox);
        input(user_input);
    }
    , 1000)
}

function jusload2()
{
    var chatBox = document.querySelector('.chat_box');
    var contentas = document.createElement("div");
    var contentBox = document.createElement("div");
    contentas.classList.add("content-as");
    contentBox.classList.add("content-box");
    var header = '<img src="klnimg.png" alt="" id="head">'
    contentBox.innerHTML = header;
    contentas.innerHTML ='<div class="loader"><span></span><span></span><span></span></div>'
    contentBox.appendChild(contentas);
    chatBox.appendChild(contentBox);
    chatBox.scrollTop = chatBox.scrollHeight;
    setTimeout(function()
    {
        console.log("loading");
        chatBox.removeChild(contentBox);
        
    }
    , 1000)
}

function reload(ev){

    click_buttons = [];
    var input_box = document.querySelector(".input");
    
    var chatbox = document.querySelector(".chat_box");
    chatbox.style.bottom = "60px";
    if (input_box.style.display == "block"){
        input_box.style.display = "none";
    }
    
    document.querySelector('.chat_box').innerHTML = '';
    console.log("reloading");
    document.getElementById("user-input").value = "";

    
    isInputOpen = false;
    click_start();

    
    console.log("reloading");
}

function back(){
    
}


// const chatIcon = document.querySelector('.chat');
// chat_not = document.querySelector(".chat_not");
// const delay = 10000;

// setTimeout(() => {
//   if (chatIcon.classList.contains != "active") {
//     chat_not.style.display = "block";
//   }
  

// }, delay);


const chatNotification = document.querySelector('.chat_not');
const chatIcon = document.querySelector('.chat');
const delay = 5000;

// Schedule the message to be displayed after the specified delay
const timeoutId = setTimeout(() => {
  // Display the message by changing the display style
  chatNotification.style.display = 'block';
}, delay);

// Add an event listener to the chat icon that hides the chat notification element
chatIcon.addEventListener('click', () => {
  // Clear the timeout to prevent the message from being displayed
  clearTimeout(timeoutId);
  // Hide the chat notification element
  chatNotification.style.display = 'none';
});




