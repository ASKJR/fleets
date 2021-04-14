<template>
  <div>
    <h1 class="title is-3">FMS - Fleets Managment System</h1>
    <form @submit.prevent="search">
      <div class="columns">
        <div class="column is-half">
          <b-field label="Chassis Series:">
              <b-input v-model="chassisSerie" placeholder="Search..." required></b-input>
          </b-field>
        </div>
        <div class="column">
            <b-field label="Chassis Number:"  grouped>
              <b-input v-model="chassisNumber"  required type="number"  min="1" step="1"></b-input>
              <p class="control">
                <b-button
                  type="is-info" tag="input"
                  native-type="submit"
                  value="Search">
                </b-button>
              </p>
              <p class="control">
                  <b-button class="button is-primary" @click="clear">Clear filter</b-button>
              </p>
          </b-field>
        </div>
      </div>
    </form>
    <b-table
      :data="data"
      :columns="columns"
      :paginated="true"
      :per-page="10">
    </b-table>
    <div class="columns" v-if="found">
      <div class="column is-1">
        <b-button  class="button is-primary">Update</b-button>
      </div>
      <div class="column is-1">
        <b-button  class="button is-danger" @click="remove">Delete</b-button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-underscore-dangle */
import VolvoApiService from '../services/VolvoApiService';
import { VEHICLES_COLUMNS } from '../helper/const';

export default {
  data() {
    return {
      chassisSerie: null,
      chassisNumber: null,
      found: false,
      data: [],
      columns: VEHICLES_COLUMNS,
    };
  },
  async created() {
    this.found = false;
    const { Vehicles } = await VolvoApiService.get('/vehicles');
    this.data = Vehicles;
  },
  methods: {
    async search() {
      const { Vehicles } = await VolvoApiService.get(`/vehicles?chassisSerie=${this.chassisSerie}&chassisNumber=${this.chassisNumber}`);
      this.data = Vehicles;
      if (Vehicles.length === 0) {
        this.$buefy.toast.open({
          duration: 5000,
          message: 'Vehicle not found.',
          type: 'is-danger',
        });
      } else {
        this.found = true;
      }
    },
    async clear() {
      this.found = false;
      const { Vehicles } = await VolvoApiService.get('/vehicles');
      this.data = Vehicles;
      this.chassisSerie = null;
      this.chassisNumber = null;
    },
    async remove() {
      const [vehicle] = this.data;
      this.$buefy.dialog.confirm({
        title: 'Deleting vehicle',
        message: 'Are you sure you want to <b>delete</b> this vehicle? This action cannot be undone.',
        confirmText: 'Delete',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: async () => {
          const isDeleted = await VolvoApiService.delete(`/vehicles/${vehicle._id}`);
          if (isDeleted) {
            this.$buefy.toast.open({
              message: 'Deleted correctly!',
              type: 'is-success',
            });
          } else {
            this.$buefy.toast.open({
              duration: 5000,
              message: 'Whoops. Something went wrong. Not able to delete',
              type: 'is-danger',
            });
          }
          this.clear();
        },

      });
    },
  },
};
</script>
