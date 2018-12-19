const fs = require("fs");
const path = require("path");
const dir = path.dirname(require.main.filename);
const envfilepath = dir + path.sep + ".env";

try {
  const envFile = fs.readFileSync(envfilepath, "utf8");
  const envArray = envFile.split("\n");

  envArray.forEach(envKeyVal => {
    if (
      envKeyVal.length === 0 ||
      !envKeyVal.includes("=") ||
      envKeyVal.charAt(0) === "#"
    )
      return;
    const i = envKeyVal.indexOf("=");
    const key = envKeyVal.substring(0, i).trim();
    const val = envKeyVal.substring(i + 1).trim();
    if (!process.env[key]) process.env[key] = val;
  });
} catch (error) {
  console.info("Couldn't parse the .env file");
}
