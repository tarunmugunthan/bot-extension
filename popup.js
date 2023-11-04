let chat_window = document.getElementById("chat_container")

let message = document.createElement("div");
message.className = "user_message";
message.innerHTML = `
        <div><img src="images/user.png" width="36px" height="36px"></div>
        <div class="wrapper">
            <div class="message_content"><span>This is a text message. I a tryng to figure out how the content fits here. I hope this looks good.This is a text message. I a tryng to figure out how the content fits here. I hope this looks goodThis is a text message. I a tryng to figure out how the content fits here. I hope this looks goodThis is a text message. I a tryng to figure out how the content fits here. I hope this looks goodThis is a text message. I a tryng to figure out how the content fits here. I hope this looks goodThis is a text message. I a tryng to figure out how the content fits here. I hope this looks goodThis is a text message. I a tryng to figure out how the content fits here. I hope this looks goodThis is a text message. I a tryng to figure out how the content fits here. I hope this looks goodThis is a text message. I a tryng to figure out how the content fits here. I hope this looks goodThis is a text message. I a tryng to figure out how the content fits here. I hope this looks goodThis is a text message. I a tryng to figure out how the content fits here. I hope this looks goodThis is a text message. I a tryng to figure out how the content fits here. I hope this looks goodThis is a text message. I a tryng to figure out how the content fits here. I hope this looks goodThis is a text message. I a tryng to figure out how the content fits here. I hope this looks goodThis is a text message. I a tryng to figure out how the content fits here. I hope this looks goodThis is a text message. I a tryng to figure out how the content fits here. I hope this looks goodThis is a text message. I a tryng to figure out how the content fits here. I hope this looks goodThis is a text message. I a tryng to figure out how the content fits here. I hope this looks good</span></div>
            <div class="copy_container"><img src="images/copy.png" width="16px" height="20px"></div>
        </div>
`

let message2 = document.createElement("div");
message2.className = "bot_message";
message2.innerHTML = `
        <div><img src="images/robot.png" width="36px" height="36px"></div>
        <div class="wrapper">
            <div class="message_content"><span>Ask follow-ups to know more</span></div>
            <div class="copy_container"><img src="images/copy.png" width="16px" height="20px"></div>
        </div>
`
let message3 = document.createElement("div");
message3.className = "loading_message";
message3.innerHTML = `
        <div class="loading_message"><span>Loading...</span></div>
`

chat_window.appendChild(message)
chat_window.appendChild(message2)
chat_window.appendChild(message3)