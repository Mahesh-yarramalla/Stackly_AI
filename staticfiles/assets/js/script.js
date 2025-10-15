// Toggle dropdowns
document.addEventListener('DOMContentLoaded', function() {
  // Get all nav icons
  const searchIcon = document.querySelector('.nav-icons a:nth-child(1)');
  const bellIcon = document.querySelector('.nav-icons a:nth-child(2)');
  const userProfile = document.querySelector('.users');
  
  // Get dropdowns
  const searchDropdown = document.querySelector('.search-dropdown');
  const notificationDropdown = document.querySelector('.notification-dropdown');
  const profileDropdown = document.querySelector('.profile-dropdown');
  
  // Toggle search dropdown
  searchIcon.addEventListener('click', function(e) {
    e.preventDefault();
    searchDropdown.classList.toggle('show');
    notificationDropdown.classList.remove('show');
    profileDropdown.classList.remove('show');
  });
  
  // Toggle notification dropdown
  bellIcon.addEventListener('click', function(e) {
    e.preventDefault();
    notificationDropdown.classList.toggle('show');
    searchDropdown.classList.remove('show');
    profileDropdown.classList.remove('show');
  });
  
  // Toggle profile dropdown
  userProfile.addEventListener('click', function(e) {
    e.preventDefault();
    profileDropdown.classList.toggle('show');
    searchDropdown.classList.remove('show');
    notificationDropdown.classList.remove('show');
  });
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.nav-icons') && !e.target.closest('.users')) {
      searchDropdown.classList.remove('show');
      notificationDropdown.classList.remove('show');
      profileDropdown.classList.remove('show');
    }
  });
});

// Full Screen Toggle
const fullScreenIcon = document.querySelector(".nav-icons a:nth-child(4)");
fullScreenIcon.addEventListener("click", (e) => {
  e.preventDefault();
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});

// Sidebar Toggle
const sidebarToggle = document.querySelector(".side img");
const sidebar = document.querySelector(".navbar");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});

const toggleLink = document.getElementById('mode-toggle');
const modeIcon = document.getElementById('mode-icon');
const dashboard = document.querySelector('.dashboard'); // or document.body

toggleLink.addEventListener('click', function(e) {
  e.preventDefault(); // prevent page jump

  dashboard.classList.toggle('dark-mode');

  if (dashboard.classList.contains('dark-mode')) {
    modeIcon.src = './Assets/img/sun.png'; // show moon icon in dark mode
    modeIcon.alt = 'Switch to Light Mode';
  } else {
    modeIcon.src = './Assets/img/sun.png';  // show sun icon in light mode
    modeIcon.alt = 'Switch to Dark Mode';
  }
});


// API Usage Progress Bar Animation
function animateApiUsage(current, goal) {
  const progressBar = document.querySelector(".load");
  const desc = document.querySelector(".desc");
  let progress = (current / goal) * 100;
  if (progress > 100) progress = 100;

  progressBar.style.width = `${progress}%`;
  desc.innerText = `API calls: ${current} of ${goal} Goal`;
}

// Example: animate to 65 out of 100 calls
animateApiUsage(65, 100);
