
// Initialize scores
let homeScore = 0;
let guestScore = 0;

// Function to add points to either "home" or "guest"
function addPoints(team, points) {
  if (team === 'home') {
    homeScore += points;
    document.getElementById('home-score').textContent = homeScore;
  } else if (team === 'guest') {
    guestScore += points;
    document.getElementById('guest-score').textContent = guestScore;
  }
}
