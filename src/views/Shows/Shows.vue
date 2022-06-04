<template>
  <div class="banner-show banner-secondary">
    <div class="slogan">
      <h3>Shows</h3>
    </div>
  </div>
  <main class="menu">
    <section class="shows">
      <div class="title-section">
        <h2 class="title">Shows</h2>
        <button @click="registerShow" class="button-styled">
          <h1>+</h1>
        </button>
      </div>
      <table class="table" id="tableProduct">
        <thead class="table-header">
          <tr>
            <th>Show</th>
            <th>Data</th>
            <th>Hora</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody class="table-body">
          <tr v-for="show in shows" :key="show.id" class="table-row">
            <th>{{ show.nome_atracao }}</th>
            <th>{{ show.data }}</th>
            <th>{{ show.hora }}</th>
            <th>
              <button @click="delShow(show.id)" class="button-styled">
                Excluir
              </button>
              <button @click="updateShow(show)" class="button-styled">
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
      <h2>Show</h2>
      <div class="inputs-container">
        <label for="bandName">Banda</label>
        <input id="bandName" type="text" v-model="bandName" />
        <label for="bandDate">Data</label>
        <input id="bandDate" type="date" v-model="date" />
        <label for="bandTime">Hora</label>
        <input id="bandTime" type="time" v-model="time" />
      </div>
    </div>
  </Modal>
</template>

<script>
import {
  getShows,
  editShow,
  deleteShow,
  createShow,
} from "@/services/showsServices";
import Modal from "../../components/Modal/Modal.vue";

export default {
  name: "Shows",
  data() {
    return {
      shows: [],
      isModal: false,
      bandName: "",
      date: "",
      time: "",
      id: "",
    };
  },
  components: {
    Modal,
  },
  async created() {
    this.listShows();
  },
  methods: {
    handleCancel() {
      this.isModal = false;
    },
    updateShow(show) {
      this.bandName = show.nome_atracao;
      this.date = show.data;
      this.time = show.hora;
      this.id = show.id;
      this.isModal = true;
    },
    async delShow(id) {
      try {
        await deleteShow(id);
        window.location.reload();
      } catch (error) {}
    },
    async listShows() {
      try {
        const { data } = await getShows();
        if (data) {
          this.shows = data;
        }
      } catch (error) {}
    },
    async register() {
      try {
        if (this.id) {
          await editShow(this.id, this.bandName, this.date, this.time);
        } else {
          await createShow(this.bandName, this.date, this.time);
        }
        window.location.reload();
      } catch (error) {
      } finally {
        this.isModal = false;
      }
    },
    registerShow() {
      (this.bandName = ""),
        (this.date = ""),
        (this.time = ""),
        (this.isModal = true);
    },
  },
};
</script>

<style src="./style.css" scoped></style>


