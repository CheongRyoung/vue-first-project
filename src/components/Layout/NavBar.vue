<template>
  <nav
    class="navbar is-success"
    aria-label="main navigation"
    role="navigation"
  >
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">
          라고미의 귀염뽀짝 노트
        </div>

        <a
          @click.prevent="showMobileNav = !showMobileNav"
          class="navbar-burger"
          :class="{ 'is-active' : showMobileNav }"
          aria-expanded="false"
          aria-label="menu"
          data-target="navbarBasicExample"
          role="button"
          ref="navBarBurgerRef"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active' : showMobileNav }"
        ref="navBarMenuRef"
      >
        <div class="navbar-start">
          <button
            v-if="storeAuth.user.id"
            @click.prevent="logout"
            class="button is-small is-info mt-3 ml-3">
            Log out {{ storeAuth.user.email }}
          </button>
        </div>
        <div class="navbar-end">
          <RouterLink
            @click="showMobileNav = false"
            to="/"
            class="navbar-item"
            active-class="is-active"
          >
            Notes
          </RouterLink>
          <RouterLink
            @click="showMobileNav = false"
            to="/stats"
            class="navbar-item"
            active-class="is-active"
          >
            Stats
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
/*
  imports
*/

  import { ref } from 'vue'
  import {useStoreAuth} from '@/stores/storeAuth'

/*
  mobile nav
*/

  let showMobileNav = ref(false)
  const storeAuth = useStoreAuth()
/*
  click outside to close
 */
  import {onClickOutside} from '@vueuse/core'
  const navBarMenuRef = ref(null)
  const navBarBurgerRef = ref(null)
  onClickOutside(navBarMenuRef, (event) => {
    showMobileNav.value = false
  }, {
    ignore: [navBarBurgerRef]
  })
/*
  logout
 */
  const logout = () => {
    showMobileNav.value = false
    storeAuth.logoutUser()
  }
</script>

<style>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
