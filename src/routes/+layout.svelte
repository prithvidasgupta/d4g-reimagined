<script>
	import landing_hero from '$lib/assets/landing_hero.jpg';
	import Navbar from '$lib/components/navbar.svelte';
</script>
<svelte:head>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto&display=swap" rel="stylesheet">
</svelte:head>
<title>Data4Good</title>
<!--<body style="background-image: url({landing_hero}); background-size: cover; background-repeat: no-repeat;">-->
<div class='background-container' style="background-image: url({landing_hero});">
	<Navbar/>
<slot/>
</div>
<style>
	.background-container{
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: -1;
		background-repeat: no-repeat;
		background: fixed;
		top:0px;
		left: 0px;
		overflow-y: auto;
		overflow-x: hidden;
	}
</style>
<!--</body>-->
