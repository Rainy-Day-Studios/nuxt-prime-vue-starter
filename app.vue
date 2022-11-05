<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style>
:root {
  --primary-color: #41b883;
  --primary-color-lighter: #5DCF9C;
}

body {
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
}

.p-button {
  background: var(--primary-color);
  border: 1px solid var(--primary-color);
}

.p-button:enabled:hover {
  background: var(--primary-color-lighter);
  border: 1px solid var(--primary-color-lighter);
}
</style>
