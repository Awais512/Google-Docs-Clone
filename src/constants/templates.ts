export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
  },
  {
    id: "software-proposal",
    label: "Software development Proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `
      <h1>Software Development Proposal</h1>

      <h2>Project Overview</h2>
      <p>Brief description of the proposed software development project.</p>

      <h2>Scope of Work</h2>
      <p>Detailed breakdown of project deliverables and requirements.</p>

      <h2>Timeline</h2>
      <p>Project milestones and delivery schedule.</p>

      <h2>Budget</h2>
      <p>Cost breakdown and payment terms.</p>
    `,
  },
  {
    id: "project-proposal",
    label: "Project Proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `
      <h1>Project Proposal</h1>

      <h2>Introduction</h2>
      <p>Overview of the project, its purpose, and objectives.</p>

      <h2>Project Scope</h2>
      <p>Defining the boundaries and deliverables of the project.</p>

      <h2>Objectives</h2>
      <p>Key goals and outcomes expected from the project.</p>

      <h2>Timeline</h2>
      <p>Estimated schedule, phases, and major milestones.</p>

      <h2>Budget</h2>
      <p>Projected costs, funding sources, and financial planning.</p>

      <h2>Risks & Mitigation</h2>
      <p>Potential risks and strategies to minimize their impact.</p>

      <h2>Conclusion</h2>
      <p>Summary and next steps for project approval.</p>
    `,
  },
  {
    id: "business-letter",
    label: "Business Letter",
    imageUrl: "business-letter.svg",
    initialContent: `
      <h1>Business Letter</h1>

      <h2>Sender's Information</h2>
      <p>[Your Name]</p>
      <p>[Your Address]</p>
      <p>[City, State, ZIP Code]</p>
      <p>[Your Email]</p>
      <p>[Your Phone Number]</p>

      <h2>Date</h2>
      <p>[Month Day, Year]</p>

      <h2>Recipient's Information</h2>
      <p>[Recipient's Name]</p>
      <p>[Recipient's Position]</p>
      <p>[Company Name]</p>
      <p>[Company Address]</p>
      <p>[City, State, ZIP Code]</p>

      <h2>Salutation</h2>
      <p>Dear [Recipient's Name],</p>

      <h2>Introduction</h2>
      <p>State the purpose of your letter in a concise and clear manner.</p>

      <h2>Body</h2>
      <p>Provide details, explanations, or supporting information.</p>

      <h2>Conclusion</h2>
      <p>Summarize your message and include a call to action.</p>

      <h2>Closing</h2>
      <p>Sincerely,</p>
      <p>[Your Name]</p>
      <p>[Your Position]</p>
    `,
  },
  {
    id: "cover-letter",
    label: "Cover Letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `
      <h1>Cover Letter</h1>

      <h2>Sender's Information</h2>
      <p>[Your Name]</p>
      <p>[Your Address]</p>
      <p>[City, State, ZIP Code]</p>
      <p>[Your Email]</p>
      <p>[Your Phone Number]</p>

      <h2>Date</h2>
      <p>[Month Day, Year]</p>

      <h2>Recipient's Information</h2>
      <p>[Hiring Manager's Name]</p>
      <p>[Company Name]</p>
      <p>[Company Address]</p>
      <p>[City, State, ZIP Code]</p>

      <h2>Salutation</h2>
      <p>Dear [Hiring Manager's Name],</p>

      <h2>Introduction</h2>
      <p>State the position you are applying for and briefly introduce yourself.</p>

      <h2>Body</h2>
      <p>Highlight your relevant skills, experiences, and achievements that make you a strong candidate.</p>

      <h2>Conclusion</h2>
      <p>Express enthusiasm for the opportunity and include a call to action for an interview.</p>

      <h2>Closing</h2>
      <p>Sincerely,</p>
      <p>[Your Name]</p>
    `,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `
      <h1>Resume</h1>

      <h2>Personal Information</h2>
      <p><strong>Name:</strong> [Your Name]</p>
      <p><strong>Email:</strong> [Your Email]</p>
      <p><strong>Phone:</strong> [Your Phone Number]</p>
      <p><strong>LinkedIn:</strong> [Your LinkedIn Profile]</p>
      <p><strong>Portfolio:</strong> [Your Portfolio URL]</p>

      <h2>Summary</h2>
      <p>Brief professional summary highlighting your skills, experience, and career goals.</p>

      <h2>Work Experience</h2>
      <h3>[Job Title] - [Company Name]</h3>
      <p><strong>Dates of Employment:</strong> [Start Date - End Date]</p>
      <ul>
        <li>Responsibility or achievement 1</li>
        <li>Responsibility or achievement 2</li>
        <li>Responsibility or achievement 3</li>
      </ul>

      <h3>[Job Title] - [Company Name]</h3>
      <p><strong>Dates of Employment:</strong> [Start Date - End Date]</p>
      <ul>
        <li>Responsibility or achievement 1</li>
        <li>Responsibility or achievement 2</li>
        <li>Responsibility or achievement 3</li>
      </ul>

      <h2>Education</h2>
      <h3>[Degree] - [University Name]</h3>
      <p><strong>Years Attended:</strong> [Start Year - End Year]</p>

      <h2>Skills</h2>
      <ul>
        <li>Skill 1</li>
        <li>Skill 2</li>
        <li>Skill 3</li>
      </ul>

      <h2>Certifications</h2>
      <ul>
        <li>[Certification Name] - [Issuing Organization]</li>
      </ul>

      <h2>Projects</h2>
      <h3>[Project Name]</h3>
      <p>Brief description of the project and your contributions.</p>

      <h2>Languages</h2>
      <ul>
        <li>[Language 1] - [Proficiency Level]</li>
        <li>[Language 2] - [Proficiency Level]</li>
      </ul>

      <h2>References</h2>
      <p>Available upon request.</p>
    `,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: `
      <h1>Letter</h1>

      <h2>Sender's Information</h2>
      <p>[Your Name]</p>
      <p>[Your Address]</p>
      <p>[City, State, ZIP Code]</p>
      <p>[Your Email]</p>
      <p>[Your Phone Number]</p>

      <h2>Date</h2>
      <p>[Month Day, Year]</p>

      <h2>Recipient's Information</h2>
      <p>[Recipient's Name]</p>
      <p>[Recipient's Position]</p>
      <p>[Company/Organization Name]</p>
      <p>[Recipient's Address]</p>
      <p>[City, State, ZIP Code]</p>

      <h2>Salutation</h2>
      <p>Dear [Recipient's Name],</p>

      <h2>Introduction</h2>
      <p>Start with a brief introduction and the purpose of your letter.</p>

      <h2>Body</h2>
      <p>Provide details and context related to your message.</p>

      <h2>Conclusion</h2>
      <p>Summarize your message and include any necessary next steps or actions.</p>

      <h2>Closing</h2>
      <p>Sincerely,</p>
      <p>[Your Name]</p>
    `,
  },
];
