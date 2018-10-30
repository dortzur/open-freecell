module.exports = {
  plugins: [
    {
      name: 'typescript',
      options: {
        useBabel: true,
        // useEslint: true, // ignored if `useBabel` is false
        tsLoader: {
          transpileOnly: true,
          experimentalWatchApi: true,
        },
        forkTsChecker: {
          tsconfig: './tsconfig.json',
          tslint: './tslint.json',
          watch: './src',
          typeCheck: true,
        },
      },
    },
  ],
};
