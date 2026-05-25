// change card
const submitButton = document.querySelector(".submit");

const evaluationCard = document.querySelector(".evaluation-card");
const thankyouCard = document.querySelector(".thankyou-card");

submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    // get value
    const selectedRating = document.querySelector('input[name="rating"]:checked');
    const selectedRatingText = document.querySelector(".valuation");

    selectedRatingText.textContent = selectedRating.value;

    evaluationCard.classList.add("hidden")
    thankyouCard.classList.remove("hidden")
});
