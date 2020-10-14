//make license link

function genLicense (license){
  if (license !== "none"){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  } return ""
}

function tocLicense (license){
  if (license !== "none"){
    return (`[license](#license)`)
  } return ""
}

function licenseSection (license){
  if (license !== "none"){
    return (`## License
    
      This Project is licensed under the ${license}`)
  } return ""
}



// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}
  ${genLicense(data.license)}

  ## Table of Contents

  *[installation](#installation)

  *[usage](#usage)

  *[contributing](#contributing)

  *[questions](#questions)

  *${tocLicense(data.license)}

  *[test](#test)

  ## Installation

  To install necessary dependencies, run the following command: ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing 
  ${data.contributors}

  ${licenseSection(data.license)}

  ## Tests 

  To run tests, run the following command:
  ${data.tests}

  ## Questions 

  If you have any questions, feel free to contact me at ${data.email}. 

  More of my work can be found at [${data.github}](https://github/com/${data.github})

`;
}

module.exports = generateMarkdown;
