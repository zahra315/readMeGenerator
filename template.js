function template(data){
    return `# ${data.title} 
## License:
[![license](https://img.shields.io/badge/license-${data.license}-blue)](https://shields.io)
    
## Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
    
## Description:
${data.description}
## Installation:
${data.installation}
## Usage:
${data.usage}
## License:
${data.license}
   
## Contact:
- Github: [${data.git}](https://github.com/${data.git})
- Email: ${data.email} `;
  }
  
  module.exports = template;

