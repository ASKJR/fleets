<template>
  <div>
     <section>
      <form @submit.prevent="handleSubmit">
        <b-field label="Chassis Series:">
            <b-input v-model="chassisSerie" required></b-input>
        </b-field>
        <b-field label="Chassis Number:">
            <b-input v-model="chassisNumber" required type="number"  min="1" step="1"></b-input>
        </b-field>
        <b-field label="Color:">
            <b-input v-model="color" required></b-input>
        </b-field>
        <b-field label="Type:">
            <b-select  v-model="type" placeholder="Select a type" required>
              <option value="Bus">Bus</option>
              <option value="Truck">Truck</option>
              <option value="Car">Car</option>
            </b-select>
        </b-field>
        <b-button
          type="is-success" tag="input"
          native-type="submit"
          value="Add" >
        </b-button>
      </form>
    </section>
  </div>
</template>
<script>
import VolvoApiService from '../services/VolvoApiService';
import { NUM_PASSENGERS } from '../helper/const';

export default {
  data() {
    return {
      chassisSerie: null,
      chassisNumber: null,
      color: null,
      type: null,
    };
  },
  methods: {
    async handleSubmit() {
      const data = {
        chassisSerie: this.chassisSerie,
        chassisNumber: this.chassisNumber,
        type: this.type,
        passengersNumber: NUM_PASSENGERS[this.type],
        color: this.color,
      };
      const response = await VolvoApiService.save('/vehicles', data);
      if (response) {
        this.$buefy.toast.open({
          message: 'Saved correctly!',
          type: 'is-success',
        });
        this.chassisSerie = null;
        this.chassisNumber = null;
        this.color = null;
        this.type = null;
      } else {
        this.$buefy.toast.open({
          duration: 5000,
          message: 'Whoops. Something went wrong. Try to check the Chassis uniqueness.',
          type: 'is-danger',
        });
      }
    },
  },
};
</script>
