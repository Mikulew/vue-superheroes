<template>
    <div class="row">
        <div class="col-12">
            <SearchBar v-model="search" @input="searchSuperhero" />
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
            superheroes: [],
        };
    },
    created() {
        this.getSuperheroes(this.search);
    },
    methods: {
        getSuperheroes(string) {
            this.$http.get(`/api/search/${string}`)
                .then(({results}) => this.superheroes = results);
        },
        searchSuperhero(text) {
            this.search = text;
            this.getSuperheroes(this.search);

        },
    },
    components: {
        SearchBar,
        VTable,
    },
}
</script>
