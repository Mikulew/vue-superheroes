<template>
    <div class="row">
        <div class="col-12">
            <SearchBar />
        </div>

        <div class="col-12">
            <VTable />
        </div>
    </div>
</template>

<script>
import SearchBar from '../../components/SearchBar.vue';
import VTable from '../../components/VTable.vue';

export default {
    components: {
        SearchBar,
        VTable,
    },
}
</script>