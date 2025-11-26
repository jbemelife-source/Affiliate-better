const btn = document.getElementById('toggleDetails');
const box = document.getElementById('detailsBox');

btn.addEventListener('click', () => {
  if (box.style.display === "none" || box.style.display === "") {
    box.style.display = "block";
    btn.textContent = "Hide Details";
  } else {
    box.style.display = "none";
    btn.textContent = "View Details";
  }
});
