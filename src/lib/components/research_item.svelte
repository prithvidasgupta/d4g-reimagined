<script>
	export let topic;
	export let description;
	export let link;
	export let image;
	export let buttonText;
</script>

<div class="research-container">
	<h2 class="name">{topic}</h2>
	<img class="thumbnail" src={image} alt="Image describing {topic}" />
	<p class="description">{@html description}</p>
	<a class="link" href={link}><button>{buttonText}</button></a>
</div>

<style>
	.research-container {
		font-family: Roboto;
		padding-right: 50px;
	}
	.thumbnail {
		width: 250px;
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
	}
    button:hover{
        background-color: #54246c;
        color: white
    }
</style>
