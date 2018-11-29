const https = require("http");
const options = {
  hostame: "api.github.com",
  paths: "/users/P-Copley",
  method: "GET",
  headers: {
    "user-agent": "P-Copley"
    // 'access_token' : '749327497'
  }
};
const request = https.request(options, response => {
  console.log(response.statusCode);
});
request.end();
