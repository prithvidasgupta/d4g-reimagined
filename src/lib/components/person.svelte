<script>
	export let name;
	export let position;
	export let description;
</script>

<div class="person-container">
	<p class="name">{name}</p>
	<p class="position"><i>{position}</i></p>
	<p class="description">{description}</p>
</div>

<style>
	.person-container {
		border: 2px solid #3f3842;
		border-radius: 2px;
		margin-top: 15px;
		margin-bottom: 15px;
		padding: 5px;
	}
	.name {
		font-weight: bolder;
	}
	.position {
		font-weight: lighter;
	}
</style>
