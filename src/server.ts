import app from "./app.ts";
import config from "./util/config.ts";

app.listen(config.port, () => {
  console.log(`started server on port: '${config.port}'`);
});
