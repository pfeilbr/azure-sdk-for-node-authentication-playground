require("dotenv").config();
const MsRest = require("ms-rest-azure");

const run = async () => {
  const resp = await MsRest.loginWithServicePrincipalSecret(
    process.env.clientId,
    process.env.secret,
    process.env.domain
  );

  resp.getToken((err, token) => {
    console.log(token);
  });
};

run();
