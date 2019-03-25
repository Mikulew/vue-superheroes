<template>
    <main class="row">
		<div class="col-12">
			<SearchBar v-model="searchText" @input="inputChange" />
		</div>

		<div class="col-12">
			<VTable :items="superheroes" :status="status" />
		</div>
    </main>
</template>

<script>
import SearchBar from '../../components/SearchBar.vue';
import VTable from '../../components/VTable.vue';

export default {
    data() {
        return {
            searchText: '',
			superheroes: [],
			status: null,
        };
    },
    methods: {
		inputChange(text) {
			this.searchText = text;
		},
		search(string) {
			this.$http.get(`/api/search/${string}`)
				.then(({data}) => {
					if (!data.response || data.response === "error") {
						this.superheroes = [];
						this.setStatus(false);
					} else if (data.response === "success") {
						this.superheroes = data.results;
						this.setStatus(true);
					}
					});
		},
		setStatus(value) {
			this.status = value;
		}
	},
	watch: {
		searchText(newValue) {
			if (newValue.length > 2) {
				return this.search(newValue);
			} else {
				return this.setStatus(null);
			}
		},
	},
    components: {
        SearchBar,
        VTable,
    },
}
</script>
