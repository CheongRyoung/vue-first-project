<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop px-2"> <!-- 반응형 최대 제한 -->
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">
          NoteBalls
        </div>

        <a @click="showMobileNav = !showMobileNav"
            :class="{'is-active' : showMobileNav}" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active' : showMobileNav}">
        <div class="navbar-end">
          <div class="navbar-item">
            <RouterLink to="/" class="navbar-item" active-class="is-active">
              Notes
            </RouterLink>
            <RouterLink to="/stats" class="navbar-item" active-class="is-active">
              Stats
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
/*
Mobile nav
 */
import {ref} from "vue";
const showMobileNav = ref(false)

</script>
<style>
@media (max-width: 1023px) { /*본문 위에 내비바*/
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
