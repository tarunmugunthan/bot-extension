let chat_window = document.getElementById("chat_container")

const response = "The multi-headed attention mechanism in transformers operates by having each attention head attend to different parts of the input sequence independently. This allows the model to capture diverse information and learn complex patterns. The outputs of the attention heads are then concatenated and linearly transformed to obtain the final output.To facilitate this mechanism, the computation involves three types of vectors: query, key, and value. These vectors are transformed using parameter matrices to obtain the query vector (Q), key vector (K), and value vector (V). The attention score between a query vector and a key vector is computed as the dot product between them, divided by the square root of the dimensionality of the key vector. This score represents the relevance or similarity between the query and key. The attention weights are obtained by applying the softmax function to the attention scores. Finally, the output of the attention head is obtained by taking the weighted sum of the value vectors, using the attention weights as weights. The outputs of the different attention heads are then concatenated together and linearly transformed using a parameter matrix to obtain the final output. This transformation allows the model to learn different weightings for the outputs of the attention heads, effectively combining the information from different heads in a meaningful way.I hope this helps clarify your questions. Let me know if you need further assistance."

let message = document.createElement("div");
message.className = "bot_message";
message.innerHTML = `
        <div><img src="images/user.png" width="36px" height="36px"></div>
        <div class="wrapper">
            <div class="message_content"><span>${response}</span></div>
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


// The multi-headed attention mechanism in transformers operates by having each attention head attend to different parts of the input sequence independently. This allows the model to capture diverse information and learn complex patterns. The outputs of the attention heads are then concatenated and linearly transformed to obtain the final output.

// To facilitate this mechanism, the computation involves three types of vectors: query, key, and value. These vectors are transformed using parameter matrices to obtain the query vector (Q), key vector (K), and value vector (V). The attention score between a query vector and a key vector is computed as the dot product between them, divided by the square root of the dimensionality of the key vector. This score represents the relevance or similarity between the query and key. The attention weights are obtained by applying the softmax function to the attention scores. Finally, the output of the attention head is obtained by taking the weighted sum of the value vectors, using the attention weights as weights.

// The outputs of the different attention heads are then concatenated together and linearly transformed using a parameter matrix to obtain the final output. This transformation allows the model to learn different weightings for the outputs of the attention heads, effectively combining the information from different heads in a meaningful way.

// I hope this helps clarify your questions. Let me know if you need further assistance.