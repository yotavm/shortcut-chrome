
import { listenForTemplate, Template } from "../utils/templatesBus";
const keyEvent = new KeyboardEvent('keyup', {
    bubbles: true,
    code: 'Enter',
    key: 'Enter',
})

console.log('Content script loaded');

const setTemplateInShortcut = ({title,body}:Template):void => {
    const storyDescriptionElement = document.querySelector('[data-binding="description"]') as HTMLTextAreaElement;
    const storyTitleElement = document.querySelector('[data-binding="name"]') as HTMLTextAreaElement;

    if(storyDescriptionElement && storyTitleElement) {
        storyTitleElement.value = title;
        storyDescriptionElement.value = body;
        storyDescriptionElement.style.height = storyDescriptionElement.scrollHeight + 'px';
        storyDescriptionElement.focus();
    }
}

listenForTemplate((template) => {
    console.log(template);
    setTemplateInShortcut(template);
})


