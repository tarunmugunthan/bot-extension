"use strict";
(() => {
  // src/extension.js
  var loaderId = setInterval(() => {
    if (!window._gmailjs) {
      return;
    }
    clearInterval(loaderId);
    startExtension(window._gmailjs);
  }, 100);
  function startExtension(gmail2) {
    console.log("Extension loading...");
    window.gmail = gmail2;
    gmail2.observe.on("load", () => {
      const userEmail = gmail2.get.user_email();
      console.log("Hello, " + userEmail + ". This is your extension talking!");
      gmail2.observe.on("view_email", onViewEmail);
      gmail2.observe.on("compose", (compose) => {
        console.log("New compose window is opened!", compose);
      });
    });
  }
  function onViewEmail(domEmail) {
    const emailData = gmail.new.get.email_data(domEmail);
    console.log("Email data:", emailData);
    const emailRec = getEmail(emailData.content_html);
  }
  function getEmail(contentHtml) {
    console.log("getting response from llm");
    const user_question_encoded = encodeURIComponent(contentHtml);
    fetch("http://127.0.0.1:8000/process?data_request=" + user_question_encoded).then((response) => response.json()).then((data) => {
      console.log("Data: ", data.response);
    }).catch((error) => {
      console.error("Fetch Error:", error);
    });
  }
})();
//# sourceMappingURL=extension.js.map
