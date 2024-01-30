<script setup lang="ts">
import {definePageMeta} from "#imports"

definePageMeta({layout: "account"})
useHead({title: "Sign in"})
</script>

<template>

      <div class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
        <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Sign In
        </h2>
        <form class="mt-4 space-y-6" action="#">
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="email" name="email" id="email" class="bg-gray-50 outline-0 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label for="password"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <div class="text-sm">
                <nuxt-link to="forgotPass" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</nuxt-link>
              </div>
            </div>
            <input type="password" name="password" id="password" placeholder="••••••••" class="outline-0 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
          </div>

          <button type="button" class=" w-full text-white bg-indigo-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
        </form>
        <nuxt-link to="/signUp" class="block mt-6 text-center text-sm font-medium text-gray-900 dark:text-white">Already have an account?</nuxt-link>
      </div>


</template>

<style scoped>

</style>