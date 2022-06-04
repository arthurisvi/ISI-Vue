<template>
  <div class="banner-menu banner-secondary">
    <div class="slogan">
      <h3>Menu</h3>
    </div>
  </div>
  <main class="menu">
    <section class="products">
        <div class="title-section">
            <h2 class="title">Bebidas</h2>
            <button class="button-styled">
          <h1>+</h1>
        </button>
        </div>
        <table class="table" id="tableProduct">
            <thead class="table-header">
                <tr>
                    <th>Bebida</th>
                    <th>Preço</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody class="table-body">
                <tr class="table-row">
                    <th>cerva</th>
                    <th>preço</th>
                    <th>
                        <button class="button-styled" >Excluir</button>
                        <button class="button-styled" >Editar</button>
                    </th>
                </tr>
            </tbody>
        </table>
    </section>
    <section class="products">
        <div class="title-section">
            <h2 class="title">Petiscos</h2>
            <button class="button-styled">
      <h1>+</h1>
    </button>
        </div>
        <table class="table" id="tableProduct">
            <thead class="table-header">
                <tr>
                    <th>Petisco</th>
                    <th>Preço</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody class="table-body">
                <tr  class="table-row">
                    <th>picacha</th>
                    <th>10</th>
                    <th >
                        <button class="button-styled">Excluir</button>
                        <button class="button-styled">Editar</button>
                    </th>
                </tr>
            </tbody>
        </table>
    </section>
</main>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {};
  },
  components: {},
};
</script>

<style src="./style.css"></style>
