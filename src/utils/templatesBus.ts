export type Template ={
    title: string,
    body: string
}

export const sendTemplates = async (template: Template) => {
   const tabs = await chrome.tabs.query({active: true, currentWindow: true});
   if(tabs[0] && tabs[0].id) {
    chrome.tabs.sendMessage(tabs[0].id, {template});
    return true;
   }
   return false;
}

export const listenForTemplate = async (callback: (template: Template) => void) => {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) =>{
        if(request.template) {
            callback(request.template);
        }
    });
}