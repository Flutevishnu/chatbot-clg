function chaticon()
{
    console.log("inside the chaticon function");
    const chatui = document.getElementById("chat-ui");
    var input_box = document.querySelector(".input");
        

    if(chatui.style.display != "none")
    {
        chatui.style.display = "none";
        input_box.style.display = "none";
    }

    else
    {
        chatui.style.display = "block";
        input_box.style.display = "block";
    }
}