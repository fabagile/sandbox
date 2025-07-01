<script>
  import { Nav, Footer } from "#components";
  import "~/assets/main.css";
  export default {
    components: {
      Nav,
      Footer,
    },
  };
</script>

<template>
  <UApp>

    <Nav />
    <main class="container mx-auto mt-8">
      <!-- <div class="flex flex-wrap justify-between"> -->
        <NuxtPage />
        <!-- <div class="w-full md:w-8/12 px-4 mb-8">
          <img src="https://via.placeholder.com/1200x600" alt="Featured Image" class="w-full h-64 object-cover rounded">
          <h2 class="text-4xl font-bold mt-4 mb-2">My First Blog Post</h2>
          <p class="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p class="text-gray-700 mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.</p>
          <p class="text-gray-700 mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.</p>
        </div>
        <div class="w-full md:w-4/12 px-4 mb-8">
          <div class="bg-gray-100 px-4 py-6 rounded">
            <h3 class="text-lg font-bold mb-2">Categories</h3>
            <ul class="list-disc list-inside">
              <li><a href="#" class="text-gray-700 hover:text-gray-900">Technology</a></li>
              <li><a href="#" class="text-gray-700 hover:text-gray-900">Travel</a></li>
              <li><a href="#" class="text-gray-700 hover:text-gray-900">Food</a></li>
            </ul>
          </div>
        </div> -->
      <!-- </div> -->
    </main>
    <!-- <main class="">

    </main> -->
    <Footer />
  </UApp>
</template>
