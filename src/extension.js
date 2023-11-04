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

        gmail.observe.on("view_email", onViewEmail);

        gmail.observe.on("compose", (compose) => {
            console.log("New compose window is opened!", compose);
        });
    });
}

function onViewEmail(domEmail){
    console.log("Looking at email:", domEmail);
    const emailData = gmail.new.get.email_data(domEmail);
    console.log("Email data:", emailData.email_content);

    const emailRec = getEmail("ABC")
    
}

function getEmail(email){
    fetch("http://127.0.0.1:8000/respond")
    .then(response =>  response.json())
    .then((data) => {
      console.log("Data: ", data)
    })
    .catch((error) => {
      console.error('Fetch Error:', error);
  });
}