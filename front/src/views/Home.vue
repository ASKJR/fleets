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
  </div>
</template>

<script>
import VolvoApiService from '../services/VolvoApiService';
import { VEHICLES_COLUMNS } from '../helper/const';

export default {
  data() {
    return {
      chassisSerie: null,
      chassisNumber: null,
      data: [],
      columns: VEHICLES_COLUMNS,
    };
  },
  async created() {
    const { Vehicles } = await VolvoApiService.get('/vehicles');
    this.data = Vehicles;
  },
  methods: {
    async search() {
      const { Vehicles } = await VolvoApiService.get(`/vehicles?chassisSerie=${this.chassisSerie}&chassisNumber=${this.chassisNumber}`);
      this.data = Vehicles;
      if (this.data.length === 0) {
        this.$buefy.toast.open({
          duration: 5000,
          message: 'Vehicle not found.',
          type: 'is-danger',
        });
      }
    },
    async clear() {
      const { Vehicles } = await VolvoApiService.get('/vehicles');
      this.data = Vehicles;
      this.chassisSerie = null;
      this.chassisNumber = null;
    },
  },
};
</script>
