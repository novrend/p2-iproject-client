<template>
  <!-- Registration Account Info -->
  <section class="max-w-screen-xl px-4 py-8 mx-auto">
    <div class="py-8 bg-white dark:bg-gray-900 lg:py-0">
      <div class="clg:flex">
        <div
          class="flex items-center mx-auto md:w-[42rem] px-4 md:px-8 xl:px-0"
        >
          <div class="w-full">
            <div
              class="flex items-center justify-center mb-8 space-x-4 lg:hidden"
            >
              <a href="#" class="flex items-center text-2xl font-semibold">
                <img class="w-8 h-8 mr-2" src="../assets/logo.png" />
                <span class="text-gray-900 dark:text-white">Hearify</span>
              </a>
            </div>
            <ol
              class="flex items-center mb-6 text-sm font-medium text-center text-gray-500 dark:text-gray-400 lg:mb-12 sm:text-base"
            >
              <li
                class="flex items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-12 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
              >
                <div
                  class="flex items-center sm:block after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500"
                >
                  <div class="mr-2 sm:mb-2 sm:mx-auto">1</div>
                  Account <span class="hidden sm:inline-flex">Info</span>
                </div>
              </li>
              <li
                class="flex items-center after:content-[''] after:w-12 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
              >
                <div
                  class="flex items-center sm:block after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500"
                >
                  <div class="mr-2 sm:mb-2 sm:mx-auto">2</div>
                  Confirmation
                </div>
              </li>
              <li class="flex items-center sm:block">
                <div class="mr-2 sm:mb-2 sm:mx-auto">3</div>
                Payment <span class="hidden sm:inline-flex">Info</span>
              </li>
            </ol>
            <h1
              class="mb-4 text-2xl font-extrabold tracking-tight text-gray-900 sm:mb-6 leding-tight dark:text-white"
            >
              Account details
            </h1>
            <form @submit.prevent="register(user)">
              <div class="grid gap-5 my-6 sm:grid-cols-2">
                <div>
                  <label
                    for="full-name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Full Name</label
                  >
                  <input
                    type="text"
                    v-model="user.name"
                    name="full-name"
                    id="full-name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="John Doe"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Your email</label
                  >
                  <input
                    type="email"
                    v-model="user.email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="username"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Username</label
                  >
                  <input
                    type="text"
                    v-model="user.username"
                    name="username"
                    id="username"
                    placeholder="johndoe"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Password</label
                  >
                  <input
                    type="password"
                    v-model="user.password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    required=""
                  />
                </div>
              </div>
              <button
                v-if="!loading"
                type="submit"
                class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 sm:py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Next
              </button>
              <button
                v-else
                disabled
                type="button"
                class="w-full py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-center items-center"
              >
                <svg
                  aria-hidden="true"
                  role="status"
                  class="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="#1C64F2"
                  />
                </svg>
                Loading...
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useIndexStore } from "../stores";
export default {
  data() {
    return {
      user: {},
    };
  },
  computed: {
    ...mapState(useIndexStore, ["loading"]),
  },
  methods: {
    ...mapActions(useIndexStore, ["register"]),
  },
};
</script>
