export const VOLVO_API_BASE_URL = 'https://volvo-api.albertokato.com.br/api/v1';
export const TIMEOUT = 120000;
export const NUM_PASSENGERS = { Bus: 42, Truck: 1, Car: 4 };
export const VEHICLES_COLUMNS = [
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
];
