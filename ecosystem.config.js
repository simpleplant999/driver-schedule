module.exports = {
  apps: [
    {
      name: "ydrive-sched",
      script: "src/index.ts", // 👈 Correct path to the TypeScript entry file
      interpreter: "ts-node",  // 👈 Ensures PM2 runs TypeScript correctly
      watch: true,             // 👀 Restart on file changes (optional)
    },
  ],
};