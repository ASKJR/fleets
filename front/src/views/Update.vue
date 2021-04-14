<template>
<div>
  <h1 class="title is-3">{{chassisSerie}}-{{chassisNumber}}</h1>
  <section>
      <form @submit.prevent="handleUpdate">
        <b-field label="Color:">
            <b-input v-model="color" required></b-input>
        </b-field>
        <b-button
          type="is-success" tag="input"
          native-type="submit"
          value="Update" >
        </b-button>
      </form>
    </section>
</div>
</template>

<script>
import VolvoApiService from '../services/VolvoApiService';

export default {
  data() {
    return {
      chassisSerie: null,
      chassisNumber: null,
      color: null,
    };
  },
  async created() {
    const vehicleId = this.$route.params.id;
    const { Vehicles } = await VolvoApiService.get(`/vehicles?_id=${vehicleId}`);
    const [vehicle] = Vehicles;
    this.chassisSerie = vehicle.chassisSerie;
    this.chassisNumber = vehicle.chassisNumber;
    this.color = vehicle.color;
  },
  methods: {
    async handleUpdate() {
      try {
        const vehicleId = this.$route.params.id;
        const data = { color: this.color };
        const { Vehicle } = await VolvoApiService.update(`/vehicles/${vehicleId}`, data);
        this.color = Vehicle.color;
        this.$buefy.toast.open({
          message: 'Updated correctly!',
          type: 'is-success',
        });
      } catch (error) {
        console.log(error);
        this.$buefy.toast.open({
          duration: 5000,
          message: 'Whoops. Something went wrong. Not able to update',
          type: 'is-danger',
        });
      }
    },
  },

};
</script>

<style>

</style>
