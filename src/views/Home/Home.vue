<template>
  <Banner></Banner>
  <section id="cards">
    <div class="card">
      <span>Bebidas</span>
      <div class="image-wrapper">
        <img src="../../assets/beer.jpg" alt="" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eius
        quasi accusantium obcaecati, voluptatibus odit sed. Dolores tempora
        deleniti autem iste necessitatibus quas corporis distinctio non rerum
        odit, quisquam atque nostrum vero asperiores expedita? Molestias unde
        itaque recusandae praesentium esse ab atque, quasi dolores, adipisci ad,
        alias accusantium a sunt fuga incidunt!
      </p>
    </div>
    <div class="card">
      <span>Petiscos</span>
      <div class="image-wrapper">
        <img src="../../assets/food.webp" alt="" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eius
        quasi accusantium obcaecati, voluptatibus odit sed. Dolores tempora
        deleniti autem iste necessitatibus quas corporis distinctio non rerum
        odit, quisquam atque nostrum vero asperiores expedita? Molestias unde
        itaque recusandae praesentium esse ab atque, quasi dolores, adipisci ad,
        alias accusantium a sunt fuga incidunt!
      </p>
    </div>
    <div class="card">
      <span>Musica ao vivo</span>
      <div class="image-wrapper">
        <img src="../../assets/banda.jpeg" alt="" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eius
        quasi accusantium obcaecati, voluptatibus odit sed. Dolores tempora
        deleniti autem iste necessitatibus quas corporis distinctio non rerum
        odit, quisquam atque nostrum vero asperiores expedita? Molestias unde
        itaque recusandae praesentium esse ab atque, quasi dolores, adipisci ad,
        alias accusantium a sunt fuga incidunt!
      </p>
    </div>
  </section>
  <section id="partners">
    <h3>Parceiros:</h3>
    <div class="brands">
      <img src="../../assets/brands/pitu.png" alt="" />
      <img src="../../assets/brands/itaipava.png" alt="" />
      <img src="../../assets/brands/smirnoff.png" alt="" />
      <img src="../../assets/brands/corona.png" alt="" />
    </div>
  </section>
</template>

<script>
import Banner from "../../components/Banner/Banner.vue";

export default {
  name: "Home",
  components: {
    Banner,
  },
};
</script>

<style src="./style.css"></style>
