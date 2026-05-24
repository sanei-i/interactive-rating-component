const submitButton = document.querySelector(".submit");

const evaluationCard = document.querySelector(".evaluation-card");
const thankyouCard = document.querySelector(".thankyou-card");

// change card
submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    evaluationCard.classList.add("hidden")
    thankyouCard.classList.remove("hidden")
});
