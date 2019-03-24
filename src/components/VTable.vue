<template>
    <table class="table table-sm">
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
				<th>Full name</th>
                <th>Alter Egos</th>
                <th>Actions</th>
            </tr>
        </thead>

        <tbody v-for="(item, index) in items" :key="index">
            <tr>
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.biography['full-name']}}</td>
                <td>{{item.biography['alter-egos']}}</td>
                <td>
                    <router-link :to="`/${item.id}`" class="btn btn-outline-primary">Button</router-link>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
	props: {
		status: {
			required: false,
			default: null,
		},
		items: {
			required: false,
			default: () => [],
		},
	},
}
</script>
