<script>
	export let name;
	export let position;
	export let description;
	export let image;
	export let linkedin_url;
</script>

<div class="person-container">
	<img style="width: 200px; height:auto" alt={image} src={image} />
	<div class="person-desc-container">
		<a href="{linkedin_url}"><h3 class="name">{name}</h3></a>
		<p class="position"><i>{position}</i></p>
		<p class="description">{description}</p>
	</div>
</div>

<style>
	.person-container {
		border: 2px solid #3f3842;
		border-radius: 2px;
		margin-top: 15px;
		margin-bottom: 15px;
		padding: 5px;
		display: flex;
		flex-direction: row;
	}
	.person-desc-container {
		display: flex;
		flex-direction: column;
		margin-left: 30px;
	}
	.name {
		font-weight: bolder;
	}
	.position {
		font-weight: lighter;
	}
</style>
