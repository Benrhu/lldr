<script setup lang="ts">
import { ref } from "vue"
import { isDark, toggleDark, slug } from "~/utils"
import axios from "axios"
import type { NavbarMenu } from "~/types"
import { Client, Account } from "appwrite"

const client = new Client()
const account = new Account(client)

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("grouzy")

const register = async () => {
  if (registerForm.value.password != registerForm.value.confirm_password) {
    alert("Las contraseñas no coinciden")
    return
  }
  try {
    const response = await account.create(
      registerForm.value.fullname,
      registerForm.value.email,
      registerForm.value.password,
    )
    if (response.$id) {
      alert("Registro exitoso")
      openRegisterModal.value = false
      openLoginModal.value = true
    }
  } catch (error) {
    console.error(error)
    alert("Hubo un error al registrarse")
  }
}

const login = async () => {
  try {
    const response = await account.createJWT()

    if (response.jwt) {
      // Si la respuesta tiene un JWT, entonces la autenticación fue exitosa
      console.log("Autenticación exitosa:", response.jwt)
      // Aquí puedes guardar el JWT para usarlo en futuras solicitudes a la API
      openLoginModal.value = false
      // Aquí puedes redirigir al usuario a la página que quieras
    }
  } catch (error) {
    console.error(error)
    alert("Hubo un error al autenticarse")
  }
}

const navbottom = ref(null)
const openRegisterModal = ref(false)
const openLoginModal = ref(false)
const router = useRouter()

const loginForm = ref({
  username: "",
  password: "",
})

const registerForm = ref({
  fullname: "",
  email: "",
  password: "",
  confirm_password: "",
})

const switchToLogin = () => {
  openRegisterModal.value = false
  openLoginModal.value = true
}

const switchToRegister = () => {
  openLoginModal.value = false
  openRegisterModal.value = true
}

const dataNavbar: NavbarMenu[] = [
  {
    name: "Oportunidades",
    to: "/oportunities",
  },
  {
    name: "Recursos",
    to: "/resources",
  },
  {
    name: "Blog",
    to: "/blog",
  },
]
</script>

<template>
  <nav
    class="text-elucidator-700 dark:text-dark-repulser-400 h-20"
    role="navigation"
    aria-label="navbar"
  >
    <div class="max-w-screen-xl mx-auto h-full flex flex-row items-center space-x-40">
      <div class="customLogo">
        <router-link to="/" class="text-lg font-bold"> La locura de Rubén </router-link>
      </div>
      <div class="flex flex-wrap items-center">
        <router-link
          v-for="(data, i) in dataNavbar"
          :key="i"
          class="text-lg mr-5 py-1.5 px-3 rounded-md text-elucidator-700 dark:text-dark-repulser-400 dark:hover:text-elucidator-300 hover:text-gray-900 hidden lg:block"
          :to="data.to"
          active-class="bg-gray-200 dark:bg-gray-500 dark:text-dark-repulser-200"
          >{{ data.name }}</router-link
        >
      </div>
<!--       <div class="flex items-center">
        <div class="container flex">
          <button id="registerModal" class="" @click="openRegisterModal = true">Sign Up</button>
          <button id="loginModal" class="w-full" @click="openLoginModal = true">Log In</button>
        </div>

        <carbon-sun
          v-if="isDark"
          class="mr-5 cursor-pointer text-elucidator-700 dark:text-dark-repulser-400"
          tabindex="0"
          @click="toggleDark"
          title="Toggle light mode"
        />
        <carbon-moon
          v-else
          class="mr-5 cursor-pointer text-elucidator-700 dark:text-dark-repulser-400"
          tabindex="0"
          @click="toggleDark"
          title="Toggle dark mode"
        />
      </div>
      <teleport to="body">
        <div v-if="openLoginModal" class="modal">
          <div class="modal-content">
            <div class="container">
              <div class="form-container">
                <h1 class="mb-8 text-3xl text-center">Log in</h1>
                <input
                  v-model="loginForm.username"
                  type="text"
                  class="input"
                  name="username"
                  placeholder="Username"
                />
                <input
                  v-model="loginForm.password"
                  type="password"
                  class="input"
                  name="password"
                  placeholder="Password"
                />
                <button type="submit" class="submit-btn">Log In</button>
                <div class="login">
                  Don't have an account?
                  <button @click="switchToRegister">Sign up</button>.
                </div>
              </div>
              <button class="close-btn w-50" @click="openLoginModal = false">Close</button>
            </div>
          </div>
        </div>
        <div v-if="openRegisterModal" class="modal">
          <div class="modal-content">
            <div class="container">
              <div class="form-container">
                <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                <form action="">
                  <input
                    type="text"
                    v-model="registerForm.fullname"
                    class="input"
                    name="fullname"
                    placeholder="Full Name"
                  />
                  <input
                    type="text"
                    v-model="registerForm.email"
                    class="input"
                    name="email"
                    placeholder="Email"
                  />
                  <input
                    type="password"
                    v-model="registerForm.password"
                    class="input"
                    name="password"
                    placeholder="Password"
                  />
                  <input
                    type="password"
                    v-model="registerForm.confirm_password"
                    class="input"
                    name="confirm_password"
                    placeholder="Confirm Password"
                  />
                  <button @click="register" type="button" class="submit-btn">Create Account</button>
                </form>
                <div class="terms">
                  By signing up, you agree to the
                  <a href="#"> Terms of Service </a> and <a href="#"> Privacy Policy </a>
                  <div v-if="openLoginModal" class="modal">
                    <div class="modal-content">
                      <div class="container">
                        <div class="form-container">
                          <h1 class="mb-8 text-3xl text-center">Log in</h1>
                          <input type="text" class="input" name="email" placeholder="Email" />
                          <input
                            type="password"
                            class="input"
                            name="password"
                            placeholder="Password"
                          />
                          <button type="submit" class="submit-btn">Log In</button>
                          <div class="login">
                            Don't have an account?
                            <button @click="switchToLogin">Log in</button>.
                          </div>
                        </div>
                        <button class="close-btn w-50" @click="openLoginModal = false">
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="login">
                Already have an account?
                <button @click="switchToLogin">Log in</button>.
              </div>
            </div>
            <button class="close-btn w-50" @click="openRegisterModal = false">Close</button>
          </div>
        </div>
      </teleport> -->
    </div>
  </nav>
</template>

<style lang="scss">
.modal {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 40px; /* padding más grande */
  border-radius: 10px; /* esquinas redondeadas */
  border: 1px solid rgba(0, 0, 0, 0.1); /* borde sutil */
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1); /* sombra para profundidad */
  width: 80%;
  max-width: 500px;
  text-align: center;
}

.input {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
}

.submit-btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
}

#registerModal {
  margin: 0 10px;
  width: 120px;
}

.close-btn {
  padding: 10px 20px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  display: inline-block;
}

.submit-btn:hover {
  background-color: #0056b3;
}

.active-class {
  @apply p-2 mb-2 rounded-md bg-elucidator-200 dark:bg-elucidator-700;
}

.hover-skyblue:hover {
  background-color: skyblue;
}

.container {
  max-width: 80rem;
}

.customLogo {
  background: rgb(131, 58, 180);
  background: linear-gradient(
    90deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
</style>
