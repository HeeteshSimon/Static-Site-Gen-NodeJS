const genItemHTML = require("./gen-item");

const genContentHTML = content => {
  const contentHTML = [`    <ul class="events">`];
  console.log(`Found ${content.length} items to process.`);
  const contentsArray = [...content].map(genItemHTML);
  contentHTML.push(contentsArray.join("\n"));
  contentHTML.push("    </ul>");
  console.log("HTML Content Generated!");
  return contentHTML.join("\n");
};
module.exports = genContentHTML;
