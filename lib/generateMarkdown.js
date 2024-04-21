// function that takes the user input values and inserts them into the README file template
function generateMarkdown({ title, description, install, usage, contributions, tests, license, github, email }) {
  // switch statement to determine which license badge to use
  switch (license) {
    case 'Apache License 2.0':
      license = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'GNU General Public License v3.0':
      license = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case 'MIT License':
      license = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case 'BSD 2-Clause "Simplified" License':
      license = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
      break;
    case 'BSD 3-Clause "New" or "Revised" License':
      license = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case 'Boost Software License 1.0':
      license = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
      break;
    case 'Creative Commons Zero v1.0 Universal':
      license = `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`;
      break;
    case 'Eclipse Public License 2.0':
      license = `[![License](https://img.shields.io/badge/License-EPL%202.0-red.svg)](https://opensource.org/licenses/EPL-2.0)`;
      break;
    case 'GNU Affero General Public License v3.0':
      license = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
      break;
    case 'GNU General Public License v2.0':
      license = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
      break;
    case 'GNU Lesser General Public License v2.1':
      license = `[![License: LGPL v2.1](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)](https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html)`;
      break;
    case 'Mozilla Public License 2.0':
      license = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      break;
    case 'The Unlicense':
      license = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
      break;
    default:
      // if selected badge isn't found within the case clauses, console.log error message
      console.log('Invalid selection.');
  }
  // variable that generates README file using template literal
  const results = `
  # ${title} ${license}

  ## Table of Contents
  * [Description](#description)

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Description

  ${description}

  ## Installation

  💾 ${install}

  ## Usage

  💻 ${usage}

  ## License

  ${license}

  ## Contributing

  * ${contributions}

  ## Tests
  
  ${tests}

  ## Questions
  [GitHub](https://github.com/${github})

  For additional questions or concerns, please email me at ${email}

  `
  return results;
}

// exports file to log.js
module.exports = {generateMarkdown};
