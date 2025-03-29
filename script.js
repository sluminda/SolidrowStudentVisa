document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const content = document.getElementById("content");

  const categories = [
    {
      title: "Introduction",
      content: `
              <h2>Introduction</h2>
              <p>Welcome to the Korean Student Visa Consultancy Guide. This guide provides the latest information and steps to help you navigate the process of obtaining a student visa for South Korea.</p>
          `,
    },
    {
      title: "Visa Types",

      content: `
      <h2>Visa Types</h2>
      <p>South Korea offers various visa options for students, graduates, and their dependents. These visas facilitate education, employment, and potential pathways to long-term residency or citizenship.</p>
      <table border="1" cellpadding="5" cellspacing="0">
        <thead>
          <tr>
            <th>Visa Type</th>
            <th>Description</th>
            <th>Grant Duration</th>
            <th>Total Study/Stay Period</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>D-2 Visa</strong></td>
            <td>For students pursuing degree programs at Korean universities.</td>
            <td>1-2 years (renewable)</td>
            <td>2-6 years (varies by degree)</td>
          </tr>
          <tr>
            <td><strong>D-4 Visa</strong></td>
            <td>For students enrolled in non-degree programs like language studies or vocational training.</td>
            <td>6 months - 1 year (renewable)</td>
            <td>1-2 years (varies by program)</td>
          </tr>
          <tr>
            <td><strong>D-10 Visa</strong></td>
            <td>For graduates seeking employment or professional internships in Korea.</td>
            <td>6 months (extendable up to 2 years)</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td><strong>F-3 Visa</strong></td>
            <td>For dependents (spouses & children) of D-2 or D-4 visa holders.</td>
            <td>Same duration as primary visa holder</td>
            <td>Varies</td>
          </tr>
          <tr>
            <td><strong>F-2 Visa</strong></td>
            <td>Residence visa for individuals transitioning from work/study visas.</td>
            <td>1-3 years (renewable)</td>
            <td>Varies (leads to permanent residency)</td>
          </tr>
          <tr>
            <td><strong>F-5 Visa</strong></td>
            <td>Permanent Residency (granted after long-term stay & contribution).</td>
            <td>Indefinite</td>
            <td>Permanent</td>
          </tr>
          <tr>
            <td><strong>Korean Citizenship</strong></td>
            <td>Final stage after long-term residency, work, or marriage.</td>
            <td>N/A</td>
            <td>Permanent</td>
          </tr>
        </tbody>
      </table>
      `,

      subcategories: [
        {
          title: "D-2 Visa",
          content: `
            <h2>D-2 Visa (Academic Degree Program)</h2>
            <p>The D-2 visa is for students enrolled in full-time degree programs at accredited Korean universities.</p>
            <table border="1" cellpadding="5" cellspacing="0">
              <thead>
                <tr>
                  <th>Subcategory</th>
                  <th>Description</th>
                  <th>Grant Duration</th>
                  <th>Total Study Period</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>D-2-1</strong></td>
                  <td>Associate Degree (Junior Colleges)</td>
                  <td>1-2 years</td>
                  <td>2-3 years</td>
                </tr>
                <tr>
                  <td><strong>D-2-2</strong></td>
                  <td>Bachelor’s Degree (Undergraduate Programs)</td>
                  <td>1-2 years (renewable)</td>
                  <td>4 years</td>
                </tr>
                <tr>
                  <td><strong>D-2-3</strong></td>
                  <td>Master’s Degree (Graduate Programs)</td>
                  <td>1-2 years (renewable)</td>
                  <td>2 years</td>
                </tr>
                <tr>
                  <td><strong>D-2-4</strong></td>
                  <td>Doctoral Degree (PhD Programs)</td>
                  <td>1-2 years (renewable)</td>
                  <td>3-4 years</td>
                </tr>
                <tr>
                  <td><strong>D-2-5</strong></td>
                  <td>Research Programs (Post-Doctoral or University Researchers)</td>
                  <td>1-2 years (renewable)</td>
                  <td>Varies by program</td>
                </tr>
                <tr>
                  <td><strong>D-2-6</strong></td>
                  <td>Exchange Student Programs (Short-term Study)</td>
                  <td>6 months - 1 year</td>
                  <td>Varies by program</td>
                </tr>
                <tr>
                  <td><strong>D-2-7</strong></td>
                  <td>Industry-Academia Cooperation (Work-Study Programs)</td>
                  <td>1-2 years</td>
                  <td>Varies by industry/university</td>
                </tr>
              </tbody>
            </table>
          `,
        },

        {
          title: "D-4 Visa",
          content: `
            <h2>D-4 Visa (General Training & Language Study)</h2>
            <p>The D-4 visa is for individuals participating in non-degree programs, such as language studies or technical training.</p>
            <table border="1" cellpadding="5" cellspacing="0">
              <thead>
                <tr>
                  <th>Subcategory</th>
                  <th>Description</th>
                  <th>Grant Duration</th>
                  <th>Total Study Period</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>D-4-1</strong></td>
                  <td>Korean Language Training (University Language Institutes)</td>
                  <td>6 months - 1 year</td>
                  <td>Up to 2 years</td>
                </tr>
                <tr>
                  <td><strong>D-4-2</strong></td>
                  <td>Technical Training (Vocational Schools)</td>
                  <td>6 months - 1 year</td>
                  <td>1-2 years</td>
                </tr>
                <tr>
                  <td><strong>D-4-3</strong></td>
                  <td>Internship & Research Training (Company/Institution Internships)</td>
                  <td>6 months - 1 year</td>
                  <td>Varies by program</td>
                </tr>
                <tr>
                  <td><strong>D-4-6</strong></td>
                  <td>Short-term Student Exchange & Special Training Programs</td>
                  <td>6 months - 1 year</td>
                  <td>Varies by agreement</td>
                </tr>
              </tbody>
            </table>
          `,
        },

        {
          title: "D-10 Visa (Internship)",
          content: `
            <h2>D-10 Visa (Job-Seeking & Internship Visa)</h2>
            <p>The D-10 visa is an option for students who have completed their studies and wish to remain in South Korea to seek employment or professional internships.</p>
            <table border="1" cellpadding="5" cellspacing="0">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Grant Duration</th>
                  <th>Extension Limit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Job-Seeking Visa (For recent graduates)</td>
                  <td>6 months</td>
                  <td>Can be extended up to 2 years</td>
                </tr>
                <tr>
                  <td>Internship Visa (Professional internship placement)</td>
                  <td>6 months</td>
                  <td>Renewable based on internship duration</td>
                </tr>
              </tbody>
            </table>
          `,
        },

        {
          title: "F-3 Visa (Dependent)",
          content: `
              <h2>F-3 Visa (Dependent Visa for Family Members)</h2>
              <p>The F-3 visa allows family members (spouses and children) of D-2 and D-4 visa holders to reside in South Korea.</p>
              <h3>Eligibility:</h3>
              <ul>
                <li>Spouses and minor children of a valid D-2 or D-4 visa holder.</li>
                <li>Proof of financial ability to support dependents.</li>
              </ul>
              <h3>Application Requirements:</h3>
              <ul>
                <li>Proof of relationship (marriage certificate, birth certificate).</li>
                <li>Sponsoring student’s valid visa and financial documents.</li>
                <li>Accommodation proof in Korea.</li>
              </ul>
              <h3>Work Restrictions:</h3>
              <p>F-3 visa holders are not allowed to work unless they obtain a separate work permit.</p>
            `,
        },

        {
          title: "Pathway to Citizenship",
          content: `
              <h2>Pathway from D-4 to D-2 to Citizenship</h2>
              <p>Many international students start their journey in South Korea with a D-4 visa (language training) before advancing to a D-2 visa (degree program). After graduation, they may apply for a D-10 (job-seeking visa), then transition to F-2 (residency), and eventually F-5 (permanent residency) or Korean citizenship.</p>
      
              <h3>Step-by-Step Process:</h3>
              <table border="1" cellpadding="5" cellspacing="0">
                <thead>
                  <tr>
                    <th>Stage</th>
                    <th>Description</th>
                    <th>Visa Required</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>1. Language Training</strong></td>
                    <td>Enroll in a Korean language program at a university.</td>
                    <td>D-4 Visa</td>
                    <td>6 months - 2 years</td>
                  </tr>
                  <tr>
                    <td><strong>2. Degree Program</strong></td>
                    <td>Enroll in an undergraduate, master’s, or PhD program.</td>
                    <td>D-2 Visa</td>
                    <td>2-6 years</td>
                  </tr>
                  <tr>
                    <td><strong>3. Job Seeking</strong></td>
                    <td>Apply for jobs in South Korea after graduation.</td>
                    <td>D-10 Visa</td>
                    <td>6 months - 2 years</td>
                  </tr>
                  <tr>
                    <td><strong>4. Residency Visa</strong></td>
                    <td>After securing employment, apply for long-term residency.</td>
                    <td>F-2 Visa</td>
                    <td>1-3 years</td>
                  </tr>
                  <tr>
                    <td><strong>5. Permanent Residency</strong></td>
                    <td>Obtain F-5 visa after contributing to Korean society.</td>
                    <td>F-5 Visa</td>
                    <td>Indefinite</td>
                  </tr>
                  <tr>
                    <td><strong>6. Korean Citizenship</strong></td>
                    <td>Apply for Korean citizenship through naturalization.</td>
                    <td>Korean Nationality</td>
                    <td>Permanent</td>
                  </tr>
                </tbody>
              </table>
      
              <h3>How to Change from D-4 to D-2?</h3>
              <ul>
                <li>Complete at least 6 months in a recognized Korean language program.</li>
                <li>Receive an acceptance letter from a Korean university for a degree program.</li>
                <li>Apply for a visa change from D-4 to D-2 at the Korean Immigration Office.</li>
                <li>Provide updated financial proof, academic transcripts, and tuition payment receipt.</li>
              </ul>
      
              <h3>How to Get Korean Citizenship?</h3>
              <ul>
                <li>Reside in South Korea for 5+ years on an F-2 or F-5 visa.</li>
                <li>Demonstrate fluency in Korean (TOPIK Level 5 or 6).</li>
                <li>Pass a Korean culture and history exam.</li>
                <li>Show financial stability and community involvement.</li>
              </ul>
            `,
        },
      ],
    },

    {
      title: "Visa Types",
      content: `
        <h2>Visa Types</h2>
        <p>South Korea provides various visa options for students and their dependents. These visas also offer pathways for further education, employment, and even long-term residency or citizenship.</p>
        <table border="1" cellpadding="5" cellspacing="0">
          <thead>
            <tr>
              <th>Visa Type</th>
              <th>Description</th>
              <th>Grant Duration</th>
              <th>Total Study/Stay Period</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>D-2 Visa</strong></td>
              <td>For students pursuing degree programs at Korean universities.</td>
              <td>1-2 years (renewable)</td>
              <td>2-6 years (depends on degree level)</td>
            </tr>
            <tr>
              <td><strong>D-4 Visa</strong></td>
              <td>For non-degree programs like language studies or vocational training.</td>
              <td>6 months - 1 year (renewable)</td>
              <td>1-2 years (varies by program)</td>
            </tr>
            <tr>
              <td><strong>D-10 Visa</strong></td>
              <td>For job-seeking after graduation or professional internships.</td>
              <td>6 months (extendable up to 2 years)</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td><strong>F-3 Visa</strong></td>
              <td>For dependents (spouses & children) of D-2 or D-4 visa holders.</td>
              <td>Same duration as primary visa holder</td>
              <td>Varies</td>
            </tr>
            <tr>
              <td><strong>F-2 Visa</strong></td>
              <td>Residence visa for individuals transitioning from work/study visas.</td>
              <td>1-3 years (renewable)</td>
              <td>Varies (leads to permanent residency)</td>
            </tr>
            <tr>
              <td><strong>F-5 Visa</strong></td>
              <td>Permanent Residency (granted after long-term stay & contribution).</td>
              <td>Indefinite</td>
              <td>Permanent</td>
            </tr>
            <tr>
              <td><strong>Korean Citizenship</strong></td>
              <td>Final stage after long-term residency, work, or marriage.</td>
              <td>N/A</td>
              <td>Permanent</td>
            </tr>
          </tbody>
        </table>
      `,
      subcategories: [
        {
          title: "F-3 Visa (Dependent Visa)",
          content: `
            <h2>F-3 Visa (Dependent Visa for Family Members)</h2>
            <p>The F-3 visa allows family members (spouses and children) of D-2 and D-4 visa holders to reside in South Korea.</p>
            <h3>Eligibility:</h3>
            <ul>
              <li>Spouses and minor children of a valid D-2 or D-4 visa holder.</li>
              <li>Proof of financial ability to support dependents.</li>
            </ul>
            <h3>Application Requirements:</h3>
            <ul>
              <li>Proof of relationship (marriage certificate, birth certificate).</li>
              <li>Sponsoring student’s valid visa and financial documents.</li>
              <li>Accommodation proof in Korea.</li>
            </ul>
            <h3>Work Restrictions:</h3>
            <p>F-3 visa holders are not allowed to work unless they obtain a separate work permit.</p>
          `,
        },
        {
          title: "Pathway: From D-4 to D-2 to Citizenship",
          content: `
            <h2>Pathway from D-4 to D-2 to Citizenship</h2>
            <p>Many international students start their journey in South Korea with a D-4 visa (language training) before advancing to a D-2 visa (degree program). After graduation, they may apply for a D-10 (job-seeking visa), then transition to F-2 (residency), and eventually F-5 (permanent residency) or Korean citizenship.</p>
    
            <h3>Step-by-Step Process:</h3>
            <table border="1" cellpadding="5" cellspacing="0">
              <thead>
                <tr>
                  <th>Stage</th>
                  <th>Description</th>
                  <th>Visa Required</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1. Language Training</strong></td>
                  <td>Enroll in a Korean language program at a university.</td>
                  <td>D-4 Visa</td>
                  <td>6 months - 2 years</td>
                </tr>
                <tr>
                  <td><strong>2. Degree Program</strong></td>
                  <td>Enroll in an undergraduate, master’s, or PhD program.</td>
                  <td>D-2 Visa</td>
                  <td>2-6 years</td>
                </tr>
                <tr>
                  <td><strong>3. Job Seeking</strong></td>
                  <td>Apply for jobs in South Korea after graduation.</td>
                  <td>D-10 Visa</td>
                  <td>6 months - 2 years</td>
                </tr>
                <tr>
                  <td><strong>4. Residency Visa</strong></td>
                  <td>After securing employment, apply for long-term residency.</td>
                  <td>F-2 Visa</td>
                  <td>1-3 years</td>
                </tr>
                <tr>
                  <td><strong>5. Permanent Residency</strong></td>
                  <td>Obtain F-5 visa after contributing to Korean society.</td>
                  <td>F-5 Visa</td>
                  <td>Indefinite</td>
                </tr>
                <tr>
                  <td><strong>6. Korean Citizenship</strong></td>
                  <td>Apply for Korean citizenship through naturalization.</td>
                  <td>Korean Nationality</td>
                  <td>Permanent</td>
                </tr>
              </tbody>
            </table>
    
            <h3>How to Change from D-4 to D-2?</h3>
            <ul>
              <li>Complete at least 6 months in a recognized Korean language program.</li>
              <li>Receive an acceptance letter from a Korean university for a degree program.</li>
              <li>Apply for a visa change from D-4 to D-2 at the Korean Immigration Office.</li>
              <li>Provide updated financial proof, academic transcripts, and tuition payment receipt.</li>
            </ul>
    
            <h3>How to Get Korean Citizenship?</h3>
            <ul>
              <li>Reside in South Korea for 5+ years on an F-2 or F-5 visa.</li>
              <li>Demonstrate fluency in Korean (TOPIK Level 5 or 6).</li>
              <li>Pass a Korean culture and history exam.</li>
              <li>Show financial stability and community involvement.</li>
            </ul>
          `,
        },
      ],
    },
    {
      title: "Eligibility Criteria",
      content: `
              <h2>Eligibility Criteria</h2>
              <p>To qualify for a student visa, applicants must meet the following requirements:</p>
              <ul>
                  <li>Acceptance into a recognized educational institution in South Korea.</li>
                  <li>Proof of sufficient financial means to cover tuition and living expenses.</li>
                  <li>Compliance with health and character standards as specified by Korean immigration authorities.</li>
              </ul>
          `,
    },
    {
      title: "Required Documents",
      content: `
              <h2>Required Documents</h2>
              <p>When applying for a student visa, you will need to submit the following documents:</p>
              <ul>
                  <li>Completed visa application form.</li>
                  <li>Valid passport with at least six months validity.</li>
                  <li>Recent passport-sized photograph (3.5cm x 4.5cm).</li>
                  <li>Certificate of Admission from the Korean educational institution.</li>
                  <li>Proof of financial ability, such as bank statements showing a balance of at least USD 20,000. Recent updates have reduced this requirement to USD 15,000 for D-2 visas. :contentReference[oaicite:0]{index=0}</li>
                  <li>Academic transcripts and diplomas.</li>
                  <li>Proof of residency in Korea, such as a dormitory confirmation or rental contract.</li>
                  <li>Medical examination reports, if required.</li>
              </ul>
          `,
    },
    {
      title: "Application Process",
      content: `
              <h2>Application Process</h2>
              <p>Follow these steps to apply for a Korean student visa:</p>
              <ol>
                  <li>Obtain the Certificate of Admission from your chosen Korean institution.</li>
                  <li>Gather all required documents as listed above.</li>
                  <li>Complete the visa application form, available on the HiKorea website.</li>
                  <li>Submit your application and documents to the nearest Korean embassy or consulate.</li>
                  <li>Pay the application fee, which ranges from USD 60 to 90, depending on your nationality.</li>
                  <li>Attend an interview, if requested.</li>
                  <li>Await the processing of your visa application, which typically takes 2-4 weeks.</li>
              </ol>
          `,
    },
    {
      title: "Financial Proof & Sponsorship",
      content: `
              <h2>Financial Proof & Sponsorship</h2>
              <p>Applicants must demonstrate financial stability to support their studies and stay in Korea. This can be shown through:</p>
              <ul>
                  <li>Personal bank statements with a balance of at least USD 15,000 for D-2 visas.</li>
                  <li>Sponsorship letters accompanied by the sponsor's financial statements.</li>
                  <li>Scholarship award letters, if applicable.</li>
              </ul>
          `,
    },
    {
      title: "Visa Interview Preparation",
      content: `
              <h2>Visa Interview Preparation</h2>
              <p>Prepare for your visa interview by:</p>
              <ul>
                  <li>Reviewing your application and supporting documents thoroughly.</li>
                  <li>Being ready to discuss your study plans, financial situation, and post-study intentions.</li>
                  <li>Demonstrating a clear understanding of your chosen program and institution.</li>
              </ul>
          `,
    },
    {
      title: "Post-Visa Approval Steps",
      content: `
              <h2>Post-Visa Approval Steps</h2>
              <p>After obtaining your visa, take the following steps:</p>
              <ul>
                  <li>Arrange accommodation in Korea and secure proof of residency.</li>
                  <li>Plan your travel and notify your institution of your arrival details.</li>
                  <li>Upon arrival, apply for an Alien Registration Card (ARC) within 30 days at the local immigration office.</li>
                  <li>Attend orientation sessions offered by your institution to familiarize yourself with campus facilities and services.</li>
              </ul>
          `,
    },
    {
      title: "Work Opportunities",
      content: `
              <h2>Work Opportunities</h2>
              <p>International students in Korea are permitted to work part-time under certain conditions:</p>
              <ul>
                  <li>Students can work up to 40 hours per week, an increase from the previous 25-hour limit.</li>
                  <li>Employment must not interfere with academic commitments.</li>
                  <li>Prior approval from the educational institution and immigration office may be required.</li>
              </ul>
          `,
    },
    {
      title: "Recent Updates",
      content: `
              <h2>Recent Updates</h2>
              <p>As of March 2025, there have been significant changes to the Korean student visa policies:</p>
              <ul>
                  <li>The minimum bank balance requirement for D-2 visas has been reduced to USD 15,000.</li>
                  <li>International students are now allowed to work up to 40 hours per week. 
                    <li>Students must apply for an Alien Registration Card (ARC) within 30 days of arrival.</li>
                    <li>The visa application process has been streamlined, reducing processing times to approximately 2-3 weeks.</li>
                    <li>Scholarship programs have expanded, with more funding opportunities available for international students.</li>
                </ul>
            `,
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

  function addCollapsibleFunctionality() {
    document.querySelectorAll("#sidebar li").forEach((li) => {
      li.addEventListener("click", function (e) {
        let subList = this.querySelector("ul");
        if (subList) {
          subList.style.display =
            subList.style.display === "none" ? "block" : "none";
        }
      });
    });
  }

  generateSidebar();
});
