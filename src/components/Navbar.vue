<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <router-link class="active navlink" aria-current="page" to="/">
        <img src="../assets/project-logo.svg" width="50" height="45" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"></li>
          <router-link
            class="active navlink mt-2 ml-2 mr-2"
            aria-current="page"
            :to="{ name: 'about' }"
          >
            About
          </router-link>
          <li class="nav-item dropdown ml-2">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div>
              <ul class="dropdown-menu align-text-top">
                <li>
                  <router-link
                    class="dropdown-item navlink mt-2"
                    aria-current="page"
                    :to="{ name: 'privacy-and-data' }"
                  >
                    Privacy and Data
                  </router-link>
                </li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarView",
  data() {
    return {
      logo: "../assets/project-logo.svg",
    };
  },
};
</script>

<style scoped>
.image {
  width: 50px;
  height: 50px;
}
@media screen and (max-width: 600px) {
  .image {
    width: 30px;
    height: 30px;
  }
}
.navbar {
  background-color: #99ddd8;
}
</style>
