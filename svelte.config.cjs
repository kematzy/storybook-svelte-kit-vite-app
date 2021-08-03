/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  config: {
    kit: {
      // hydrate the <div id="svelte"> element in src/app.html
      target: '#svelte',
    },
  },
}