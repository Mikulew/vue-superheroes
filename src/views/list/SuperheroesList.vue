<template>
    <div class="row">
        <div class="col-12">
            <SearchBar v-model="search" @change="searchSuperhero" />
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
    data() {
        return {
            search: '',
        };
    },
    methods: {
        searchSuperhero(text) {
            this.search = text;
        },
    },
    components: {
        SearchBar,
        VTable,
    },
}
</script>