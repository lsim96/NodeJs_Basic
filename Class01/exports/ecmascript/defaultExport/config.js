const config = {
  port: 3000,
  enviorment: "development",
};

function showConfig() {
  console.log(
    `Server is running on port ${config.port} in ${config.enviorment} enviorment.`
  );
}

export default {
  config,
  showConfig,
};
