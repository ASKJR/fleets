<template>
  <div>
    <h1 class="title is-3">FMS - Fleets Managment System</h1>
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

export default {
  data() {
    return {
      data: [],
      columns: [
        {
          field: 'chassisSerie',
          label: 'Chassis Serie',
          sortable: true,
        },
        {
          field: 'chassisNumber',
          label: 'Chassis Number',
          numeric: true,
          sortable: true,
        },
        {
          field: 'type',
          label: 'Type',
          sortable: true,
        },
        {
          field: 'color',
          label: 'Color',
          sortable: true,
        },
        {
          field: 'passengersNumber',
          label: 'Passengers N.',
          numeric: true,
        },
      ],
    };
  },
  async created() {
    const { Vehicles } = await VolvoApiService.get('/vehicles');
    console.log(Vehicles);
    this.data = Vehicles;
  },
};
</script>
