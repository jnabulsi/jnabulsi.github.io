<template>
  <nav>
    <ul>
      <li v-for="item in navItems" :key="item.path">
        <NuxtLink :to="item.path" exact-active-class="active">
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const navItems = [
  { name: "About", path: "/about" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
}

/* Desktop styles */
ul {
  display: flex;
  gap: 60px;
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  font-size: 48px;
}

a {
  text-decoration: none;
  color: #5272b0;
  transition: color 0.3s ease;
}

a:hover,
a.active {
  color: #2c3e50;
}

/* Tablet - Reduce gap and text size */
@media (max-width: 1024px) {
  ul {
    gap: 40px;
  }

  li {
    font-size: 36px;
  }
}

/* Mobile - Further reduce size and spacing */
@media (max-width: 768px) {
  ul {
    gap: 20px;
  }

  li {
    font-size: 24px;
  }

  nav {
    align-content: right;
  }
}
</style>
