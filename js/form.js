const form = document.querySelector("form");
const formContainer = document.querySelector('[data-js="question-container"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);
  addNewQuestion(data);
  event.target.reset();
});

function addNewQuestion(data) {
  const question = data.newQuestion;
  const answer = data.newAnswer;
  const tags = data.newTags;
  const quizCard = document.createElement("article");
  quizCard.classList.add("card");
  quizCard.innerHTML = `
    <div class="card__question">
    <button class="bookmark-button" aria-label="button" type="button">
      <img
        class="bookmark"
        src="./images/bookmark.svg"
        alt=" disabled bookmark icon"
      />
    </button>
    <p>${question}</p>
  </div>
  <div class="card__answer card__answer--hidden">
    <p>${answer}</p>
  </div>
  <div>
    <button
      class="card__answer-button"
      type="button"
      aria-tag="click to show answer"
    >
      Show Answer
    </button>
    <section class="card__tag-container">
      <span class="card__tag">${tags}</span>
    </section>
  </div> `;

  formContainer.append(quizCard);
}
