const vote = document.querySelector('.rating-content');
let rate;

const voteHandler = (event) => {
  rate = Number(event.target.innerText);
  console.log(event.target)
  event.target.style.backgroundColor = "lightgrey";
}
vote.addEventListener('click', voteHandler, false);


function replace() {
  document.getElementById("rating-div").style.display = "none";
  document.getElementById("submitted-div").style.display = "block";
  document.getElementsByClassName("selected-paragraph")[0].textContent = `You selected ${rate} out of 5`;
}

