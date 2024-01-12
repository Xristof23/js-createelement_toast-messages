console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  const toastMessage = document.createElement("li");
  toastMessage.classList.add("toast-container__message");
  document.body.append(toastContainer);
  toastContainer.append(toastMessage);
  toastMessage.textContent = "Hi there!";
  console.log("Button works");
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
toastContainer.innerHTML = "";
});
/* document.body.append(article); // placing the created article at the end of the body
article.append(button); // placing the created button into the article */
