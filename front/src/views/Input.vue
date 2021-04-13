<template>
  <div>
     <section>
      <form>
        <b-field label="Chassis Series:">
            <b-input v-model="chassisSerie" required></b-input>
        </b-field>
        <b-field label="Chassis Number:">
            <b-input v-model="chassisNumber" required></b-input>
        </b-field>
        <b-field label="Color:">
            <b-input v-model="color" required></b-input>
        </b-field>
        <b-field label="Type:">
            <b-select placeholder="Select a type" required>
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
export default {
  data() {
    return {
      chassisSerie: null,
      chassisNumber: null,
      color: null,
    };
  },
};
</script>
