<script>
	export let topic;
	export let description;
	export let link;
	export let image;
	export let buttonText;
</script>

<div class="research-container">
	<img class="thumbnail" src={image} alt="Image describing {topic}" />
	<div class="research-desc">
	<h2 class="name">{topic}</h2>
	
	<p class="description">{@html description}</p>
	<a class="link" href={link}><button>{buttonText}</button></a>
</div>
</div>

<style>
	.research-container {
		font-family: Roboto;
		padding-right: 20px;
		display: flex;
		flex-direction: row;
		margin: 20px;

	}
	.thumbnail {
		width: 250px;
		padding: 20px;
	}
	button {
		border: none;
        background-color: #bfb161;
		color: black;
		padding: 15px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 15px;
		border-radius: 5px;
	}
    button:hover{
        background-color: #54246c;
        color: white
    }
</style>
