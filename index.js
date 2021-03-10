const inquirer = require('inquirer');
const fs = require('fs');
const licenses = {
    Apache: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    Boost: '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    BSD: '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    CCO: '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
}

inquirer.prompt([
    {
        type: 'input',
        message: 'Enter a project Title \n',
        name: 'projectTitle'
    }, 
    {
        type: 'input',
        message: 'Enter a description \n',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter installation instructions\n',
        name: 'installInstructions'
    },
    {
        type: 'input',
        message: 'Enter usage info\n',
        name: 'usageInfo'
    },
    {
        type: 'input',
        message: 'Contribution Guidelines\n',
        name: 'contributionGuidelines'
    },
    {
        type: 'input',
        message: 'Enter any tests\n',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Enter your github username\n',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Enter a link to your github account\n',
        name: 'accountLink'
    },
    {
        type: 'list',
        message: 'Choose a license',
        name: 'license',
        choices: ['Apache', 'Boost', 'BSD', 'CCO'],
    }
]).then((input) =>{
    console.log(input);
    let tilda = '```'
    let file = `
# ${input.projectTitle}
### [${input.username}](${input.accountLink})
${licenses[input.license]}

# Contents

1. [Description](Description)
2. [Install Instructions](InstallInstructions)
3. [Usage Info](UsageInfo)
4. [Contribution Guidelines](ContributionGuidelines)
5. [Tests](Tests)

---

## Description
### ${input.description}

---

## Install Instructions

${tilda}
${input.installInstructions}
${tilda}

---

## Usage Info

${tilda}
${input.usageInfo}
${tilda}

---
## Contribution Guidelines
### ${input.contributionGuidelines}
---
## Tests
${tilda}
${input.tests}
${tilda}
`;

    fs.writeFile('./customReadMe/README.md', file, (err) =>{
        if (err) throw err;
        console.log('Successful');
    })
}).catch((err)=>{
    console.log(err);
})