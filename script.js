// Toggle sidebar visibility
function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const content = document.querySelector(".content");
  sidebar.classList.toggle("closed");
  if (sidebar.classList.contains("closed")) {
    content.style.marginLeft = "0"; // Full-screen content
  } else {
    content.style.marginLeft = "250px"; // Push content to the right
  }
}

// Show content dynamically
function showContent(categoryId) {
  const pages = document.querySelectorAll(".content-page");
  pages.forEach((page) => page.classList.remove("active")); // Hide all pages

  const activePage = document.getElementById(categoryId);
  if (activePage) {
    activePage.classList.add("active"); // Show selected page
  }
}
