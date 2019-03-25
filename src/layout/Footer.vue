<template>
    <footer class="footer row">
        <div class="col-6 text-center mt-2">
			<div>
				<font-awesome-icon class="footer-icon" icon="address-card" />
				<span>Mikołaj Lewandowski</span>
			</div>
			<div>
				<font-awesome-icon class="footer-icon" icon="code" />
				<span>JavaScript developer</span>
			</div>
        </div>
        <div class="col-6 text-center mt-2">
            <div>
				<font-awesome-icon class="footer-icon" icon="chevron-right" />
				<a class="footer-link"  href="https://github.com/Mikulew/vue-superheroes" target="_blank">Github link to project</a>
			</div>
			<div>
				<font-awesome-icon class="footer-icon" icon="phone" />
				<span>Phone number: +48 883 458 986</span>
			</div>
        </div>
    </footer>
</template>

<style scoped>
    .footer {
		position: fixed;
		bottom: 0;
        background-color: #111111;
		height: 70px;
		width: 100%;
	}

	.footer-icon {
		margin-right: 15px;
	}

	.footer-link {
		color: #c2b280;
	}

	.footer-link:hover {
		color: #ffffca;
	}
</style>
