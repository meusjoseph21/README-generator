// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  *[installation](#installation)

  *[usage](#usage)

  *[contributing](#contributing)

  *[questions](#questions)

  *[test](#test)

  ## Installation

  To install necessary dependencies, run the following command: ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing 
  ${data.contributors}

  ## Tests 

  To run tests, run the following command:
  ${data.tests}

  ## Questions 

  If you have any questions, feel free to contact me at ${data.email}. 

  More of my work can be found at [${data.github}](https://github/com/${data.github})

`;
}

module.exports = generateMarkdown;
