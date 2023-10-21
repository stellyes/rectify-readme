// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Available choices sourced from https://choosealicense.com/licenses/
  switch (license) {
    case "GNU GPLv3":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    case "GNU AGPLv3":
      return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
    case "GNU LGPLv3":
      return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
    case "Mozilla Public License 2.0":
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    case "Apache License 2.0":
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case "MIT License":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case "Boost Software License 1.0":
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
    case "The Unlicense":
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
    default:
      console.error(">> Failed to parse license badge from license");
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // Available choices sourced from https://choosealicense.com/licenses/
  switch (license) {
    case "GNU GPLv3":
      return `https://choosealicense.com/licenses/gpl-3.0/`;
    case "GNU AGPLv3":
      return `https://choosealicense.com/licenses/agpl-3.0/`;
    case "GNU LGPLv3":
      return `https://choosealicense.com/licenses/lgpl-3.0/`;
    case "Mozilla Public License 2.0":
      return `https://choosealicense.com/licenses/mpl-2.0/`;
    case "Apache License 2.0":
      return `https://choosealicense.com/licenses/apache-2.0/`;
    case "MIT License":
      return `https://choosealicense.com/licenses/mit/`;
    case "Boost Software License 1.0":
      return `https://choosealicense.com/licenses/bsl-1.0/`;
    case "The Unlicense":
      return `https://choosealicense.com/licenses/unlicense/`;
    default:
      console.error(">> Failed to parse license badge from license");
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "None") {
    return ``;
  } else {
    let licenseLink = renderLicenseLink(license);
    let licenseBadge = renderLicenseBadge(license);
    return `## License\n${licenseBadge}\n
This repository is licensed under ${license}. For more information, [click here](${licenseLink}).\n`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //Initialize markdown string
  let document = `# ${data.title}\n## Description\n${data.description}\n`;

  let tableOfContents = false;
  let sectionCount = 1; // Set to 1 to include About section by default
  for (const key in data) {
    if (
      key !== "title" &&
      key !== "description" &&
      key !== "fullname" &&
      key !== "github" &&
      // Ensures right keys are being checked
      // and that data.key is truthy (has value)
      data.key
    ) {
      sectionCount++;
      if (sectionCount === 4) {
        tableOfContents = true;
      }
    }
  }

  // If table of contents flag was set to true...
  if (tableOfContents) {
    // add table of contents to README document
    document += "## Table of Contents\n";
    for (const key in data) {
      // Not inclusive of sections without equivalent
      // section ID
      if (
        key !== "title" &&
        key !== "description" &&
        key !== "fullname" &&
        key !== "github"
      ) {
        // Capitalize first letter of section for display, make link with key value
        let sectionTitle = key[0].toUpperCase() + key.slice(1);
        document += `- [${sectionTitle}](#${key})\n`;
      }
      // Since Author section is inclusive of fullname and github tags
      // both, added manually since author key does not exist
      document += `[Author](#author)\n`;
    }
  }

  // If installation instructions were provided, add
  // to README document
  if (data.installation) {
    document += `## Installation\n${data.installation}\n`;
  }

  // Add required usage section to document
  document += `## Usage\n${data.usage}\n`;

  // If testing information was provided, add
  // to README document
  if (data.testing) {
    document += `## Testing\n${data.testing}\n`;
  }

  // If information about how to contibute was
  // provided, add to README document
  if (data.contribution) {
    document += `## How to Contribute\n${data.contribution}\n`;
  }

  // Add license section to README document
  document += renderLicenseSection(data.license);

  // Add author section to README document
  document += `## Author
${data.fullname} - [Github](https://github.com/${data.github})`;

  return document;
}

module.exports = generateMarkdown;
