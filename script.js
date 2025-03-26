document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const content = document.getElementById("content");

  const categories = [
    {
      title: "Introduction",
      content: `
        <h2>Introduction</h2>
        <p><strong>Welcome to the Korean Student Visa Consultancy Guide.</strong></p>
        <p>This guide will help you navigate the process of obtaining a student visa for Korea, covering essential topics such as documentation, financial requirements, and university submissions.</p>
      `,
    },
    {
      title: "How to Prepare for Documentation",
      content: `
        <h2>Preparing Your Documents</h2>
        <p>Before applying for a student visa, ensure you have all necessary documents ready. Proper preparation will prevent delays and increase your chances of approval.</p>
      `,
      subcategories: [
        {
          title: "Personal Documents",
          content: `
            <h2>Personal Documents</h2>
            <p>These documents are essential for verifying your identity:</p>
            <ul>
              <li><strong>Passport:</strong> Your passport must be valid for at least six months beyond your intended stay in Korea.</li>
              <li><strong>National ID:</strong> Your national ID is required for identity verification.</li>
              <li><strong>Birth Certificate:</strong> Some applications may require proof of birth, especially for younger students.</li>
              <li><strong>Passport-Sized Photos:</strong> Ensure your photos meet the visa application requirements.</li>
            </ul>
          `,
          miniCategories: [
            {
              title: "Passport",
              content: `
                <h2>Passport</h2>
                <p>Your passport must be valid for at least 6 months beyond your intended stay in Korea.</p>
              `,
            },
            {
              title: "National ID",
              content: `
                <h2>National ID</h2>
                <p>Your National ID is required for identity verification.</p>
              `,
            },
          ],
        },
        {
          title: "Financial Documents",
          content: `
            <h2>Financial Documents</h2>
            <p>To demonstrate financial stability, you may need the following:</p>
            <ol>
              <li><strong>Bank Statements:</strong>
                <ul>
                  <li>Recent statements showing sufficient funds.</li>
                  <li>Minimum balance requirement varies by university.</li>
                </ul>
              </li>
              <li><strong>Sponsorship Letter:</strong>
                <ul>
                  <li>If a sponsor is covering your expenses, a notarized letter is needed.</li>
                </ul>
              </li>
              <li><strong>Scholarship Documents:</strong>
                <ul>
                  <li>If you have a scholarship, official proof must be provided.</li>
                </ul>
              </li>
            </ol>
          `,
        },
      ],
    },
    {
      title: "University Document Submission",
      content: `
        <h2>Submitting University Documents</h2>
        <p>Once you receive an admission letter, submit the necessary documents to the university to finalize your enrollment.</p>
      `,
      subcategories: [
        {
          title: "Transcripts",
          content: `
            <h2>Transcripts</h2>
            <p>Your academic records should be:</p>
            <ul>
              <li>Certified and translated (if not in English or Korean).</li>
              <li>Sealed in an official envelope.</li>
              <li>Sent directly from your previous institution if required.</li>
            </ul>
          `,
        },
        {
          title: "Recommendation Letters",
          content: `
            <h2>Recommendation Letters</h2>
            <p>Most universities require at least <strong>two</strong> recommendation letters:</p>
            <ul>
              <li>Should be from previous professors or employers.</li>
              <li>Must be signed and stamped by the issuing institution.</li>
              <li>Should highlight academic or professional achievements.</li>
            </ul>
          `,
        },
      ],
    },
    {
      title: "University Document Submission",
      content: `
        <h2>Submitting University Documents</h2>
        <p>Once you receive an admission letter, submit the necessary documents to the university to finalize your enrollment.</p>
      `,
      subcategories: [
        {
          title: "Transcripts",
          content: `
            <h2>Transcripts</h2>
            <p>Your academic records should be:</p>
            <ul>
              <li>Certified and translated (if not in English or Korean).</li>
              <li>Sealed in an official envelope.</li>
              <li>Sent directly from your previous institution if required.</li>
            </ul>
          `,
        },
        {
          title: "Recommendation Letters",
          content: `
            <h2>Recommendation Letters</h2>
            <p>Most universities require at least <strong>two</strong> recommendation letters:</p>
            <ul>
              <li>Should be from previous professors or employers.</li>
              <li>Must be signed and stamped by the issuing institution.</li>
              <li>Should highlight academic or professional achievements.</li>
            </ul>
          `,
        },
      ],
    },
    {
      title: "University Document Submission",
      content: `
        <h2>Submitting University Documents</h2>
        <p>Once you receive an admission letter, submit the necessary documents to the university to finalize your enrollment.</p>
      `,
      subcategories: [
        {
          title: "Transcripts",
          content: `
            <h2>Transcripts</h2>
            <p>Your academic records should be:</p>
            <ul>
              <li>Certified and translated (if not in English or Korean).</li>
              <li>Sealed in an official envelope.</li>
              <li>Sent directly from your previous institution if required.</li>
            </ul>
          `,
        },
        {
          title: "Recommendation Letters",
          content: `
            <h2>Recommendation Letters</h2>
            <p>Most universities require at least <strong>two</strong> recommendation letters:</p>
            <ul>
              <li>Should be from previous professors or employers.</li>
              <li>Must be signed and stamped by the issuing institution.</li>
              <li>Should highlight academic or professional achievements.</li>
            </ul>
          `,
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
