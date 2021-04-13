<template>
    <b-navbar>
        <template #start>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                Home
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/add-vehicle' }">
                Add Vehicle
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {

};
</script>

<style>

</style>
