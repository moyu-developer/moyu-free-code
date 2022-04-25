module.exports = {
  plugins: [
    [
      "module-resolver",
      {
        extensions: [".ts", ".tsx", ".sass"],
        root: "./",
        alias: {
          src: "./src",
        },
      },
    ],
  ],
};
