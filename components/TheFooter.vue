<template>
  <footer class="site-footer">
    <div class="wrapper">
      <div class="footer-info">
        <NuxtLink to="/">SSK 블로그</NuxtLink>
      </div>
      <ul class="footer-links">
        <li class="link-item">
          <a
            href="https://github.com/HawaiianBullet"
            target="_blank"
            rel="noopener noreferrer"
            >GitHub
          </a>
        </li>
        <li class="link-item">
          <a
            href="https://www.linkedin.com/in/sungsoo-kim95/"
            target="_blank"
            rel="noopener noreferrer"
            >Linkedin
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  @apply bg-white px-4 py-12 border-t border-slate-100;
}

.site-footer > .wrapper {
  @apply flex flex-wrap gap-16 justify-between m-auto max-w-6xl;
}
</style>
