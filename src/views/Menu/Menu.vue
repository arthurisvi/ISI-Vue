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
        <button @click="registerProduct" class="button-styled">
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
          <tr v-for="drink in drinks" :key="drink.id" class="table-row">
            <th>{{ drink.nome }}</th>
            <th>{{ drink.preco }}</th>
            <th>
              <button @click="delProd(drink.id)" class="button-styled">
                Excluir
              </button>
              <button @click="updateProduct(drink)" class="button-styled">
                Editar
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </section>
    <section class="products">
      <div class="title-section">
        <h2 class="title">Petiscos</h2>
        <button @click="registerProduct" class="button-styled">
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
          <tr v-for="snack in snacks" :key="snack.id" class="table-row">
            <th>{{ snack.nome }}</th>
            <th>{{ snack.preco }}</th>
            <th>
              <button @click="delProd(snack.id)" class="button-styled">
                Excluir
              </button>
              <button @click="updateProduct(snack)" class="button-styled">
                Editar
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </section>
  </main>

  <Modal v-if="isModal" @on-cancel="handleCancel" @on-save="register">
    <div class="modal-container">
      <h2>Menu</h2>
      <div class="inputs-container">
        <label for="productId">Código</label>
        <input v-model="code" type="text" name="id" id="productId" />
        <label for="productName">Nome</label>
        <input v-model="name" type="text" name="nome" id="productName" />
        <label for="productValue">Preço</label>
        <input v-model="price" type="text" name="preco" id="productValue" />
        <label for="productProvider">Fornecedor</label>
        <input
          v-model="providerName"
          type="text"
          name="provider"
          id="productProvider"
        />
        <label for="productProviderEmail">Email do fornecedor</label>
        <input
          v-model="providerEmail"
          type="email"
          name="email"
          id="productProviderEmail"
        />
        <p class="sub-title">Tipo</p>
        <div class="modal-radio">
          <div>
            <input v-model="type" type="radio" name="tipo" value="bebida" />
            <label for="Bebida">Bebida</label>
          </div>
          <div>
            <input v-model="type" type="radio" name="tipo" value="petisco" />
            <label for="Petisco">Petisco</label>
          </div>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from "../../components/Modal/Modal.vue";
import {
  getSnacks,
  getDrinks,
  editProduct,
  deleteProduct,
  createProduct,
} from "@/services/menuServices";

export default {
  name: "Menu",
  data() {
    return {
      snacks: [],
      drinks: [],
      name: "",
      providerName: "",
      providerEmail: "",
      price: "",
      type: "",
      code: "",
      id: "",
      isModal: false,
    };
  },
  async created() {
    this.listSnacks();
    this.listDrinks();
  },
  methods: {
    async register() {
      console.log(this.type);
      try {
        if (this.id) {
          await editProduct(
            this.id,
            this.code,
            this.name,
            this.providerName,
            this.providerEmail
          );
        } else {
          await createProduct(
            this.code,
            this.name,
            this.providerName,
            this.providerEmail,
            this.type,
            this.price
          );
        }
        window.location.reload();
      } catch (error) {
      } finally {
        this.isModal = false;
      }
    },
    updateProduct(product) {
      this.name = product.nome;
      this.providerName = product.nome_fornecedor;
      this.providerEmail = product.email_fornecedor;
      this.price = product.preco;
      this.type = product.tipo;
      this.code = product.codigo;
      this.id = product.id;
      this.isModal = true;
    },
    handleCancel() {
      this.isModal = false;
    },
    registerProduct() {
      (this.name = ""),
        (this.providerName = ""),
        (this.providerEmail = ""),
        (this.price = ""),
        (this.type = ""),
        (this.code = "");
      this.isModal = true;
    },
    async delProd(id) {
      try {
        await deleteProduct(id);
        window.location.reload();
      } catch (error) {}
    },
    async listSnacks() {
      try {
        const { data } = await getSnacks();
        if (data) {
          this.snacks = data;
        }
      } catch (error) {}
    },
    async listDrinks() {
      try {
        const { data } = await getDrinks();
        if (data) {
          this.drinks = data;
        }
      } catch (error) {}
    },
  },
  components: {
    Modal,
  },
};
</script>

<style src="./style.css" scoped></style>





