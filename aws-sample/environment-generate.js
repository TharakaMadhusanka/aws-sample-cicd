// This is Environment File Generator
// This uses Environent Variable in AWS CI/CD to generate Content
// 2022-05-10
// Tharaka Madhusanka

function generateEnvironmentContent() {
  return `export const environment = {
    production: ${process.env.IS_PRODUCTION || false},
    environment: "${process.env.ENVIRONMENT|| "local"}",
    sampleText: "${process.env.SAMPLE_PARAM_STORE || "I am from Dynamic Environment :D"}"
  };`
}

(function generateEnvironment() {
  const fs = require('fs');
  const fileName = 'environment.ts';
  const content = generateEnvironmentContent();
  process.chdir(`src/environments`);
  fs.writeFile(fileName, content, (err) => { (err) ? console.log(err) : console.log('env is generated!') });
})();