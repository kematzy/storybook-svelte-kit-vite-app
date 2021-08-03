module.exports = {
  // NOTE! added support for Vite builder
  core: {
    builder: "storybook-builder-vite"
  },
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf"
  ],
  svelteOptions: {
    preprocess: require("../svelte.config.cjs").preprocess
  }
}
