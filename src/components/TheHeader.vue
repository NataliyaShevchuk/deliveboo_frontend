<script>
import axios from "axios";
export default {

  data() {
    return {
      menuItems: [
        {
          label: "Home",
          routeName: "home",
        },
        {
          label: "Ristoranti",
          routeName: "Restaurants",
        },
        {
          label: "Piatti",
          routeName: "Dishes",
        },
        {
          label: "Contatti",
          routeName: "ContactUs",
        },

      ],
    };
  },
}

</script>
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary shadow-sm d_flex introduction sticky-top" style="background-color: #ef5117ff;">
    <div class="container-fluid d-flex">
      <a class="navbar-brand d-flex align-items-center" href="#">
        <img src="/logo/4.png" alt="" class="logo">
      </a>
      <!-- <router-link :to="{name: AppHome}" class="navbar-brand d-flex align-items-center">Homepage</router-link> -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <!--<a class="nav-link active text-white" aria-current="page" href="#">Home</a>-->
            <router-link :to="{name: AppHome}" class="nav-link active text-white">Home</router-link>
          </li>
          <li class="nav-item">
            <!--<a class="nav-link active text-white" aria-current="page" href="#">Il tuo Ristorante</a>-->
            <router-link :to="{name: Restaurants}" class="nav-link active text-white">Ristoranti</router-link>
          </li>
          <li class="nav-item">
            <!--<a class="nav-link active text-white" aria-current="page" href="#">I tuoi piatti</a>-->
            <router-link :to="{name: Dishes}" class="nav-link active text-white">I tuoi piatti</router-link>
          </li>
          <!-- Sezione contattaci -->
          <li class="nav-item">
            <!--<a class="nav-link active text-white" aria-current="page" href="#">I tuoi piatti</a>-->
            <!-- <router-link :to="{name: ContactUs}" class="nav-link active text-white">Contattaci!</router-link>
          </li>
          <li class="nav-item dropdown text-white navbar-nav mr-auto">
            <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Benvenutə, (Nome Utente)
            </a> -->
            <ul class="dropdown-menu" style="background-color: #ef5117ff;">
              <!--<li><a class="dropdown-item text-white" href="#">Dashboard</a></li>-->
              <li><router-link :to="{name: dashboard}" class="nav-link active text-white">Dashboard</router-link></li>
              <!--<li><a class="dropdown-item text-white" href="#">Il tuo profilo</a></li>-->
              <li><router-link :to="{}" class="nav-link active text-white">Il tuo profilo</router-link></li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <!--<a class="dropdown-item text-white" href="#">Logout</a>-->
                <router-link :to="{name: userLogin}" class="nav-link active text-white">Logout</router-link>
              </li>
            </ul>
          </li>

          

        </ul>
        <div class="d-flex">
          
          <div class="me-4">
            <ul class="list-unstyled">
              <li class="nav-item dropdown ">
                <a class="nav-link dropdown-toggle text-white " href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Benvenutə, (Nome Utente)
                </a>
                <ul class="dropdown-menu" style="background-color: #ef5117ff;">
                  <li><router-link to="/dashboard" class="nav-link active text-white">Dashboard</router-link></li>

                  <li><router-link to="/user.show" class="nav-link active text-white">Il tuo profilo</router-link></li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>

                    <router-link to="/userLogin" class="nav-link active text-white">Logout</router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <router-link :to="{name: Cart}" class="nav-link  text-white" style="">
              <i class="fa-solid fa-cart-shopping" style="font-size: 18px;"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss"></style>
