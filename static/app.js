class Chatbox
{
    constructor()
    {
        this.args = {
            openbutton: document.querySelector('chatbox__button'),
            chatbox: document.querySelector('chatbox__support'),
            sendbutton: document.querySelector('.send__button')
        }

        this.state = false;
        this.messaged = [];
    }

    display()
    {
        const{openbutton, chatbox, sendbutton} = this.args;
        openbutton.addEventListener('click', () => this.toggleState(chatbox))
        sendbutton.addEventListener('click', () => this.onSendButton(chatbox))
        
        const node = chatbox.querySelector('input');
        node.addEventListener("keyup", ({key})=>{
            if(key === "Enter"){
                this.onSendButton(chatbox)
            }
        })

    }

    toggleState(chatbox)
    {
        this.state = !this.state;

        if(this.state)
        {
            chatbox.classList.add('chatbox--active')
        }
        else
        {
            chatbox.classList.remove('chatbox--active')
        }
    }

    onSendButton(chatbox)
    {
        var textfield = chatbox.querySelector('input')
        let text1 = textfield.value
        if(text1 === "")
        {
            return;
        }

        let msg1 = {name: "user", message:text1}
        this.messages.push(msg1);

        fetch('http://127.0.0.1:5000/predict', {
            method : 'POST',
            body: JSON.stringify({message: text1}),
            mode:'cors',
            headers:{
                'content-type': 'application/json'
            },

        })
        .then(r = r.json())
        .then(r => {
            let msg2 = {name: "KLNCE", message: r.answer};
            this.messages.push(msg2);
            this.updateChatText(chatbox)
            textfield.value = ""
        }).catch((error)=>{
            console.error('Error:', error);
            this.updateChatText(chatbox)
            textfield.value = ""
        });
    }

    updateChatText(chatbox)
    {
        var html = ""
        this.messages.slice().reverse().forEach(function(item, index) {
            if (item.name === "KLNCE")
            {
                html += '<div class="messages_item messages_item--visitor">' + item.message + '</div';
            }

            else
            {
                html += '<div class="messages_item messages_item--operator">' + item.message + '</div';
            }
            
        });

        const chatmessage = chatbox.querySelector('chatbox_messages');
        chatmessage.innerHTML = html;
    }
}


const chatbox = new Chatbox();
chatbox.display();