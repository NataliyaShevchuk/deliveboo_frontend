<script>
export default {
  data() {
    return {
      
    };
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary shadow-sm d_flex" style="background-color: #ef5117ff;">
    <div class="container-fluid d-flex">
      <a class="navbar-brand d-flex align-items-center" href="#">
        <img src="/logo/4.png" alt="" class="logo">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active text-white" aria-current="page" href="#">Il tuo Ristorante</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active text-white" aria-current="page" href="#">I tuoi piatti</a>
          </li>
          <li class="nav-item dropdown text-white navbar-nav mr-auto">
            <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Benvenutə, (Nome Utente)
            </a>
            <ul class="dropdown-menu" style="background-color: #ef5117ff;">
              <li><a class="dropdown-item text-white" href="#">Dashboard</a></li>
              <li><a class="dropdown-item text-white" href="#">Il tuo profilo</a></li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item text-white" href="#">Logout</a>
              </li>
            </ul>
          </li>

        </ul>

      </div>
    </div>
  </nav>
</template>

<style lang="scss"></style>
