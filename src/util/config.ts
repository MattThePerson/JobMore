import path from "path";

const frontendPath = path.join("frontend", "dist");

const port = process.env.PORT || 3003;

export default {
  port,
  frontendPath,
};
