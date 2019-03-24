<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <p class="navbar-brand">Superheroe's details</p>
        <div class="navbar-collapse">
            <div class="navbar-nav">
                <router-link :to="`/${id}/biography`" 
                             class="nav-item nav-link" 
                             active-class="active">
                             <span>Biography</span>
                </router-link>

                <router-link :to="`/${id}/appearance`" 
                             class="nav-item nav-link" 
                             active-class="active">
                            <span>Appearance</span>
                </router-link>

                <router-link :to="`/${id}/work`"
                             class="nav-item nav-link" 
                             active-class="active">
                             <span>Work</span>
                </router-link>

                <router-link :to="`/${id}/connections`" 
                             class="nav-item nav-link" 
                             active-class="active">
                             <span>Connections</span>
                </router-link>
            </div>
        </div>
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