# README Generator

## Description

This command-line application dynamically generates a professional README.md file with information gathered from the user using node.js and the inquirer package. Users are able to quickly and easily create a README file for their projects. The example README.md file can be found in the lib folder and [here](./lib/exampleREADME.md).

## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Table of Contents

* [Description](#description)

* [User Story](#user-story)

* [Acceptance Criteria](#acceptance-criteria)

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](contributing)

* [Screenshot](#screenshot)

* [Questions](#questions)

## Installation

💾

`npm init`

`npm i inquirer@8.2.4`

## Usage

💻

Open the command-line at the root of your project, input `node index.js`, then answer the prompted questions.

## Contributing

* [Vanessa Bou](https://github.com/rvbouu)

## Screenshot

![gif of application functionality](./images/readme-generator-demo.gif)

The full video showing the application functionality can be found [here](https://drive.google.com/file/d/1z_UGtiXo3JVrtIh2lD5H5a7m7r_Z7qPX/view?usp=drive_link).

## Questions

  [GitHub](https://github.com/rvbouu)

  For additional questions or concerns, please email me at rvbouu@gmail.com