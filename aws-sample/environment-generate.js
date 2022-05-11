// This is Environment File Generator
// This uses Environent Variable in AWS CI/CD to generate Content
// 2022-05-10
// Tharaka Madhusanka

function generateEnvironmentContent() {
  const environment = process.env.PARAM_ENVIRONMENT;
  console.log(environment);
  return `export const environment = {
    production: ${process.env.IS_PRODUCTION || false},
    environment: "${environment|| "local"}",
    sampleText: "${process.env.SAMPLE_PARAM_STORE.toString() || "I am from Dynamic Environment :D"}"
  };`
}

(function generateEnvironment() {
  const fs = require('fs');
  const fileName = 'environment.ts';
  const content = generateEnvironmentContent();
  process.chdir(`src/environments`);
  console.log(process.env.SAMPLE_PARAM_STORE.toString());
  fs.writeFile(fileName, content, (err) => { (err) ? console.log(err) : console.log('env is generated!') });
})();