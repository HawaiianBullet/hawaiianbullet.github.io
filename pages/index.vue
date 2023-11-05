<template>
  <main>
    <section class="hero-section">
      <div class="wrapper">
        <header>
          <h1 class="font-black text-7xl">SSK 블로그입니다.</h1>
          <p>블로그로 <NuxtLink to="/blog">이동</NuxtLink></p>
        </header>
      </div>
    </section>
  </main>
</template>

<style scoped>
.hero-section {
  @apply flex justify-center p-4 w-full h-screen bg-slate-50 text-slate-700;
}

.hero-section > .wrapper {
  @apply m-auto max-w-6xl;
}
</style>
