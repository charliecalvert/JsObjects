let {JSDOM} = require('jsdom')

const options = {
    runScripts: "dangerously",
    resources: "usable"
};
const dom = new JSDOM(`
  <!DOCTYPE html><html><body><div id="test"></div><script src="http://cdn.bootcss.com/jquery/2.1.1/jquery.min.js"></script></body></html>
`, options);

console.log(dom.window)

dom.window.onModulesLoaded = () => {
  console.log("ready to roll!");
};
