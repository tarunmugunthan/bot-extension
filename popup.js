let scrapeEmails = document.getElementById("scrapeEmails")

scrapeEmails.addEventListener("click", async () => {
    console.log("in event listener")
    // get curr active tab

    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    // execute script to parse emails on page
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: scrapeEmailsFromPage, 
    });
})

// function to scrape emails
function scrapeEmailsFromPage(){
    console.log("In scrape emails function")
    email_elements = document.getElementsByClassName("aHU hx")
    console.log("EMAIL ELE: ", email_elements[0].children)

    for(element of email_elements[0].children){
        console.log("Child: ", element.innerText)
    }
}