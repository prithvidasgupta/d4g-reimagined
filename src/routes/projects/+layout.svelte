<script>
	import VertNavbar from '$lib/components/vert_navbar.svelte';
</script>

<div class="left-container">
	<VertNavbar />
</div>
<div class="right-container">
	<slot />
</div>

<style>
	.left-container {
		float: left;
		width: 20%;
	}
	.right-container {
		float: right;
        width: 80%;
	}
</style>
