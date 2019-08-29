<template>
    <nav class="navbar flex-column">
        <p class="sidebar-title title">Superhero's details #{{id}}</p>
        <ul class="nav flex-column">
            <li class="nav-item">
                <router-link :to="`/${id}/biography`"
                             class="nav-link"
                             active-class="active">
                             <span>Biography</span>
                </router-link>
            </li>

			<li class="nav-item">
                <router-link :to="`/${id}/appearance`"
                             class="nav-link"
                             active-class="active">
                            <span>Appearance</span>
                </router-link>
			</li>

			<li class="nav-item">
                <router-link :to="`/${id}/work`"
                             class="nav-link"
                             active-class="active">
                             <span>Work</span>
                </router-link>
			</li>

			<li class="nav-item">
                <router-link :to="`/${id}/connections`"
                             class="nav-link"
                             active-class="active">
                             <span>Connections</span>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true,
        }
    }
}
</script>

<style scoped>
	.sidebar-title {
		font-weight: 700;
		font-size: 20px;
	}
</style>
