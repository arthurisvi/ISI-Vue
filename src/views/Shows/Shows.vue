<template>
  <div class="banner-show banner-secondary">
    <div class="slogan">
      <h3>Shows</h3>
    </div>
  </div>
  <!-- <main class="menu">
    <section class="shows">
      <div class="title-section">
        <h2 class="title">Shows</h2>
        <button class="button-styled" *ngIf="logged" (click)="openModal()">
          <h1>+</h1>
        </button>
      </div>
      <table class="table" id="tableProduct">
        <thead class="table-header">
          <tr>
            <th>Show</th>
            <th>Data</th>
            <th>Hora</th>
            <th *ngIf="logged">Ações</th>
          </tr>
        </thead>
        <tbody class="table-body">
          <tr *ngFor="let show of listShows" class="table-row">
            <th>{{ show.nome_atracao }}</th>
            <th>{{ show.data }}</th>
            <th>{{ show.hora }}</th>
            <th *ngIf="logged">
              <button class="button-styled" (click)="destroy(show)">
                Excluir
              </button>
              <button class="button-styled" (click)="edit(show)">Editar</button>
            </th>
          </tr>
        </tbody>
      </table>
    </section>
    <app-modal [show]="show" *ngIf="modalState"></app-modal>
  </main> -->
  <Modal v-if="isModal" @on-cancel="handleCancel" @on-save="handleSave">
    <div class="modal-container">
      <h2>Show</h2>
      <div class="inputs-container">
        <label for="bandName">Banda</label>
        <input id="bandName" type="text" v-model="showBand" />
        <label for="bandDate">Data</label>
        <input id="bandDate" type="date" v-model="showDate" />
        <label for="bandTime">Hora</label>
        <input id="bandTime" type="time" v-model="showTime" />
      </div>
    </div>
  </Modal>
</template>

<script>
export default {
  name: "Shows",
  data() {
    return {};
  },
  components: {},
};
</script>

<style src="./style.css"></style>
