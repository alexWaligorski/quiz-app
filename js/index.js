// Select Elements from DOM

const bookmark = document.querySelector('[data-js="bookmark-button"]');
const answerButton = document.querySelector('[data-js="answer-button"]');
const answer = document.querySelector('[data-js="answer-text"]');

// Toggle bookmark-backgroundcolor using class

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("bookmark-button--selected");
});

// Toggle visibility of answer-text and button textContent

answerButton.addEventListener("click", () => {
  if (answerButton.textContent === "Hide Answer") {
    answerButton.textContent = "Show Answer";
  } else {
    answerButton.textContent = "Hide Answer";
  }

  answer.classList.toggle("card__answer--hidden");
});
