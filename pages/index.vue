<template>
  <div>
    <div class="grid grid-nogutter surface-section text-800">
      <div
        class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center"
      >
        <section>
          <span class="text-6xl font-bold mb-1">Thanks for using the </span>
          <div class="text-6xl text-primary font-bold">
            Vue 3 + TS + Nuxt + PrimeVUE
          </div>
          <span class="text-6xl font-bold mb-3">starter template! </span>
          <p class="mt-0 mb-4 text-700 line-height-3">
            Feel free to clean out what you don't need and get building!
          </p>

          <a href="https://github.com/Rainy-Day-Studios/nuxt-prime-vue-starter" target="_blank">
            <Button
              type="button"
              class="p-button-raised"
            ><i class="pi pi-github mr-3"></i>GitHub</Button>
          </a>
        </section>
      </div>
      <div class="col-12 md:col-6 overflow-hidden">
        <img
          src="~/assets/images/hero-image.jpg"
          alt="Image"
          class="md:ml-auto block md:h-screen"
          style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)"
        />
      </div>
    </div>
  </div>
</template>
