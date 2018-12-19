const fs = require("fs");
const path = require("path");
const dir = path.dirname(require.main.filename);
const envfilepath = dir + path.sep + ".env";

try {
  const envFile = fs.readFileSync(envfilepath, "utf8");
  const envArray = envFile.split("\n");

  envArray.forEach(envKeyVal => {
    if (
      envKeyVal.length == 0 ||
      envKeyVal.indexOf("=") == -1 ||
      envKeyVal.indexOf("#") > -1
    )
      return;
    const key = envKeyVal.split("=")[0].trim(),
      val = envKeyVal.split("=")[1].trim();
    if (!process.env[key]) process.env[key] = val;
  });
} catch (error) {
  console.info("Couldn't parse the .env file");
}
