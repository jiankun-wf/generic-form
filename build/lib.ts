import { build } from "vite";

const startBuild = () => {
  build({ configFile: "build/lib.config.ts" });
};

startBuild();
