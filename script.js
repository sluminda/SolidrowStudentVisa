document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const content = document.getElementById("content");

  const categories = [
    {
      title: "Introduction",
      content:
        "<h2>Introduction</h2><p>Welcome to the Korean Student Visa Consultancy Guide.</p>",
    },
    {
      title: "How to Prepare for Documentation",
      content:
        "<h2>Preparing Your Documents</h2><p>Gather all necessary documents for your student visa.</p>",
      subcategories: [
        {
          title: "Personal Documents",
          content:
            "<h2>Personal Documents</h2><p>Required ID, Passport, etc.</p>",
          miniCategories: [
            {
              title: "Passport",
              content:
                "<h2>Passport</h2><p>Your passport must be valid for at least 6 months.</p>",
            },
            {
              title: "National ID",
              content:
                "<h2>National ID</h2><p>Your National ID is required for verification.</p>",
            },
          ],
        },
        {
          title: "Financial Documents",
          content:
            "<h2>Financial Documents</h2><p>Bank statements and sponsorship details.</p>",
        },
      ],
    },
    {
      title: "University Document Submission",
      content:
        "<h2>Submitting University Documents</h2><p>Submit transcripts, recommendation letters, etc.</p>",
      subcategories: [
        {
          title: "Transcripts",
          content:
            "<h2>Transcripts</h2><p>Your academic records should be certified.</p>",
        },
        {
          title: "Recommendation Letters",
          content:
            "<h2>Recommendation Letters</h2><p>Submit at least two letters from your professors.</p>",
        },
      ],
    },
  ];

  function generateSidebar() {
    sidebar.innerHTML = "";
    categories.forEach((category) => {
      let categoryItem = createListItem(category.title, category.content);

      if (category.subcategories) {
        let subList = document.createElement("ul");
        category.subcategories.forEach((sub) => {
          let subItem = createListItem(sub.title, sub.content);

          if (sub.miniCategories) {
            let miniList = document.createElement("ul");
            sub.miniCategories.forEach((mini) => {
              let miniItem = createListItem(mini.title, mini.content);
              miniList.appendChild(miniItem);
            });
            subItem.appendChild(miniList);
          }

          subList.appendChild(subItem);
        });
        categoryItem.appendChild(subList);
      }

      sidebar.appendChild(categoryItem);
    });

    addCollapsibleFunctionality();
  }

  function createListItem(text, contentHTML) {
    let li = document.createElement("li");
    li.textContent = text;
    li.addEventListener("click", function (e) {
      e.stopPropagation();
      loadContent(contentHTML);
      toggleDropdown(this);
    });
    return li;
  }

  function loadContent(contentHTML) {
    content.innerHTML = contentHTML;
  }

  function toggleDropdown(element) {
    let isOpen = element.classList.contains("open");
    document
      .querySelectorAll("#sidebar li")
      .forEach((el) => el.classList.remove("open"));
    if (!isOpen) {
      element.classList.add("open");
    }
  }

  generateSidebar();
});
