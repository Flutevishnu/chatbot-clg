class Chatbox {
    constructor() {
        this.args = {
            openButton: document.querySelector('.chatbox__button'),
            chatBox: document.querySelector('.chatbox__support'),
            sendButton: document.querySelector('.send__button')
        }

        this.state = false;
        this.stored = false;
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
                if(this.stored === false){
                    this.askName(chatbox);
                    this.stored = true
                }
                
            }
        } else {
            chatbox.classList.remove('chatbox--active')
        }
    }

    askName(chatbox) 
    {
        let nameInput = prompt("Please enter your full name:");
        
    
        if (nameInput !== null && nameInput.trim() !== "") 
        {
          while (!/^[a-zA-Z]+$/.test(nameInput)) 
          {
            nameInput = prompt("Invalid name. Please enter a valid name containing only alphabets:");
          }
          let emailInput = prompt("Please enter your email:");
          while (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput)) 
          {
            emailInput = prompt("Invalid email. Please enter a valid email address:");
          }
          let mobile = prompt("Please enter your mobile number:");
          while (!/^\d{10}$/.test(mobile)) 
          {
            mobile = prompt("Invalid mobile number. Please enter a 10-digit number:");
          }
          this.store_user(nameInput, emailInput, mobile);
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

    store_user(name1, emailInput, mobile1)
    {
        if(emailInput !== null && emailInput.trim() !== "")
        {
            fetch('http://127.0.0.1:5000/store', {
                method: 'POST',
                body: JSON.stringify({ name: name1, email: emailInput, mobile: mobile1 }),
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