const joke = document.querySelector('#joke');

//fetch data and display joke
fetch('https://icanhazdadjoke.com/', {
  headers: { accept: 'application/json' },
});

async function getJoke() {
  let response = await fetch('https://icanhazdadjoke.com/', {
    headers: { accept: 'application/json' },
  });
  let jsonJokeData = await response.json();

  joke.innerText = jsonJokeData.joke;
  console.log(jsonJokeData.joke);
}

getJoke();

//Retrieve a new joke button
// newJokeBtn = document.querySelector('#new-joke');
// newJokeBtn.addEventListener('click', getJoke);

// Add to like list
const Likelist = document.querySelector('#like-list');
likeButton = document.querySelector('#like-button');

let likeJokeList = function () {
  let newListItem = document.createElement('li');
  newListItem.innerText = joke.innerText;
  Likelist.appendChild(newListItem);
  getJoke();
};

likeButton.addEventListener('click', likeJokeList);

// add to dislike list

const dislikeList = document.querySelector('#dislike-list');
dislikeButton = document.querySelector('#dislike-button');

let dislikeJokeList = function () {
  let secondListItem = document.createElement('li');
  secondListItem.innerText = joke.innerText;
  dislikeList.appendChild(secondListItem);
  getJoke();
};

dislikeButton.addEventListener('click', dislikeJokeList);
