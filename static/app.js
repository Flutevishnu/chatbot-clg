class Chatbox {
    constructor() {
        this.args = {
            openButton: document.querySelector('.chatbox__button'),
            chatBox: document.querySelector('.chatbox__support'),
            sendButton: document.querySelector('.send__button')
        }

        this.state = false;
        this.messages = [];
    }

    display() {
        const {openButton, chatBox, sendButton} = this.args;

        openButton.addEventListener('click', () => this.toggleState(chatBox))

        sendButton.addEventListener('click', () => this.onSendButton(chatBox))

        const node = chatBox.querySelector('input');
        node.addEventListener("keyup", ({key}) => {
            if (key === "Enter") {
                this.onSendButton(chatBox)
            }
        })
    }

    toggleState(chatbox) {
        this.state = !this.state;

        // show or hides the box
        if(this.state) {
            chatbox.classList.add('chatbox--active')
            if(!this.hasuserinfo())
            {
                this.askName(chatbox);
            }
        } else {
            chatbox.classList.remove('chatbox--active')
        }
    }

    askName(chatbox)
    {
        const nameInput = prompt("please Enter your full name:");
        if(nameInput !== null && nameInput.trim() !== "")
        {
            this.store_user(nameInput);
        }
    }

    onSendButton(chatbox) {
        var textField = chatbox.querySelector('input');
        let text1 = textField.value
        if (text1 === "") {
            return;
        }

        let msg1 = { name: "User", message: text1 }
        this.messages.push(msg1);

        fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            body: JSON.stringify({ message: text1 }),
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            },
          })
          .then(r => r.json())
          .then(r => {
            let msg2 = { name: "Sam", message: r.answer };
            this.messages.push(msg2);
            this.updateChatText(chatbox)
            textField.value = ''

        }).catch((error) => {
            console.error('Error:', error);
            this.updateChatText(chatbox)
            textField.value = ''
          });
    }

    updateChatText(chatbox) {
        var html = '';
        this.messages.slice().reverse().forEach(function(item, index) {
            if (item.name === "Sam")
            {
                html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>'
            }
            else
            {
                html += '<div class="messages__item messages__item--operator">' + item.message + '</div>'
            }
          });

        const chatmessage = chatbox.querySelector('.chatbox__messages');
        chatmessage.innerHTML = html;
    }

    store_user(name1)
    {
        const emailInput = prompt("please enter yout email:");
        if(emailInput !== null && emailInput.trim() !== "")
        {
            fetch('http://127.0.0.1:5000/store', {
                method: 'POST',
                body: JSON.stringify({ name: name1, email: emailInput }),
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(response => {
                if(response.ok){
                    console.log("USER info stored succesfully.");
                }
                else{
                    console.error("failes to store user information.");
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
        
    }

    hasuserinfo()
    {
        return localStorage.getItem('name') !== null && localStorage.getitem('email') !== null;
    }
}


const chatbox = new Chatbox();
chatbox.display();