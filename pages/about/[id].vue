<script setup>
import { infos } from "~/data/about";
const route = useRoute();
const { id } = route.params;
const info = infos.find((item) => item.id == id);
const index = infos.findIndex((item) => item.id == id);
const prev = infos[index == 0 ? infos.length - 1 : index - 1].id;
const next = infos[index == infos.length - 1 ? 0 : index + 1].id;
</script>

<template>
  <div>
    <!-- <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="..." class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="..." class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="..." class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div> -->
    <div class="d-flex">
      <div class="btn btn-lg btn-rounded">
        <a :href="`/about/${prev}`" :title="prev">&lt;</a>
      </div>
      <!--
  <i>{{index}}</i>
    <NuxtLink to="#" >&leftarrow;</NuxtLink>
    <NuxtLink to="#">&rightarrow;</NuxtLink>
    -->
      <div>
        <h2>{{ info.title }}</h2>
        <div v-html="info.content"></div>
      </div>
      <div class="btn btn-lg btn-rounded">
        <a :href="`/about/${next}`" :title="next">&gt;</a>
      </div>
    </div>
  </div>
</template>
