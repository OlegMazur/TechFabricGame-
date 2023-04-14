// Select HTML elements
const regForm = document.querySelector('form');
const gameDiv = document.getElementById('game');
const scoreSpan = document.getElementById('score');
const levelSpan = document.getElementById('level');
const targetClicksSpan = document.getElementById('target-clicks');
const clicksSpan = document.getElementById('clicks');
const clickBtn = document.getElementById('click-btn');
const messageDiv = document.getElementById('message');
const enemyAvatar = document.getElementById('enemy-avatar');
const modalWindow = document.getElementById('modal-window');
const restartBtn = document.getElementById('restart-btn');


// Game variables
let playerName;
let playerEmail;
let score = 0;
let level = 1;
let targetClicks = 10;
let clicks = 0;
document.body.style.backgroundImage = "url('resources/arena.jpg')";
// Add event listener to registration form
regForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Get form values and store in variables
  playerName = document.getElementById('name').value.trim();
  playerEmail = document.getElementById('email').value.trim();
  // Check if form fields are not empty
  if (playerName === '' || playerEmail === '') {
    alert('Please fill out all fields.');
    return;
  }
  // Check if email is valid using regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(playerEmail)) {
    alert('Please enter a valid email address.');
    return;
  }
  // Hide registration div and show game div
  document.getElementById('registration').style.display = 'none';
  gameDiv.style.display = 'block';
});
// Add event listener to restart button
restartBtn.addEventListener('click',()=> restartGame() )
 
// Add event listener to click button
clickBtn.addEventListener('click', () => {
  if (score === 70) {
    messageDiv.textContent = `Congratulations ${playerName}! You win! your score ${score}`;
    clicksSpan.textContent = clicks;
    targetClicksSpan.textContent = targetClicks;
    showModal()
    restartBtn.style.display = 'block';
    return
  }
  clicks++;
  clicksSpan.textContent = clicks;
  score++;
  scoreSpan.textContent = score;
  document.body.style.backgroundImage = "url('resources/arena.jpg')";
  
  if (score === targetClicks) {
    level++;
    if (level === 2) {
      targetClicks = 25;
      clickBtn.src = "https://i.pinimg.com/originals/c0/53/f2/c053f2bce4d2375fee8741acfb35d44d.gif"
      messageDiv.textContent = `Congratulations ${playerName}! You have reached level ${level}.`;
      clicks = 0;
      clicksSpan.textContent = clicks;
      targetClicksSpan.textContent = targetClicks;
      showModal();
    } else if (level === 3) {
      targetClicks = 38;
      clickBtn.src = "https://66.media.tumblr.com/tumblr_lq8g3548bC1qd0wh3o1_400.gif"
      messageDiv.textContent = `Congratulations ${playerName}! You have reached level ${level}.`;
      clicks = 0;
      clicksSpan.textContent = clicks;
      targetClicksSpan.textContent = targetClicks;
    } else if (level === 4) {
      targetClicks = 55;
      clickBtn.src = "https://media1.giphy.com/media/nlbIvY9K0jfAA/source.gif"
      messageDiv.textContent = `Congratulations ${playerName}! You have reached level ${level}.`;
      clicks = 0;
      clicksSpan.textContent = clicks;
      targetClicksSpan.textContent = targetClicks;
    } else if (level === 5) {
      targetClicks = 70;
      clickBtn.src = "https://i.pinimg.com/originals/46/4b/36/464b36a7aecd988e3c51e56a823dbedc.gif"
      messageDiv.textContent = `Congratulations ${playerName}! You have reached the final level!`;
      clicks = 0;
      clicksSpan.textContent = clicks;
      targetClicksSpan.textContent = targetClicks;
    }

    levelSpan.textContent = level;
  }
});
function showModal() {
  modalWindow.style.display = 'block';
}
function hideModal() {
  modalWindow.style.display = 'none';
}

function restartGame() {
   score = 0;
   level = 1;
   targetClicks = 10;
   clicks = 0;
   clicksSpan.textContent = clicks;
   targetClicksSpan.textContent = targetClicks;
   scoreSpan.textContent = score;
   levelSpan.textContent = level;
   clickBtn.src = "https://media.giphy.com/media/kdHa4JvihB2gM/giphy.gif";
   hideModal();
   restartBtn.style.display = 'none';
}