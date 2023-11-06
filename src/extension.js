"use strict";

// loader-code: wait until gmailjs has finished loading, before triggering actual extensiode-code.
const loaderId = setInterval(() => {
    if (!window._gmailjs) {
        return;
    }

    clearInterval(loaderId);
    startExtension(window._gmailjs);
}, 100);

// actual extension-code
function startExtension(gmail) {
    console.log("Extension loading...");
    window.gmail = gmail;

    gmail.observe.on("load", () => {
        const userEmail = gmail.get.user_email();
        console.log("Hello, " + userEmail + ". This is your extension talking!");

        /* event listener when an email is viewed */
        gmail.observe.on("view_email", onViewEmail);

        /* event listener for compose email */
        gmail.observe.on("compose", (compose) => {
            console.log("New compose window is opened!", compose);
        });
    });
}

/* function that is invoked when an email is viewed */
function onViewEmail(domEmail){
    const emailData = gmail.new.get.email_data(domEmail);
    console.log("Email data:", emailData);
    const emailRec = getEmail(emailData.content_html)
}

/* this function calls the back-end llm code */
function getEmail(contentHtml){
    console.log('getting response from llm');
    const user_question_encoded = encodeURIComponent(contentHtml)
    fetch("http://127.0.0.1:8000/process?data_request=" + user_question_encoded)
    .then(response =>  response.json())
    .then((data) => {
      console.log("Data: ", data.response);
      /* TODO: to place the data into the browser extension here */ 
    })
    .catch((error) => {
      console.error('Fetch Error:', error);
  });
}