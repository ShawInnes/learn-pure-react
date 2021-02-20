const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.(ts|tsx|js|jsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    {
      name: '@storybook/preset-create-react-app',
      options: {
        tsDocgenLoaderOptions: {
          tsconfigPath: path.resolve(__dirname, '../tsconfig.json')
        }
      }
    },
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true
      }
    }
  ]
};