<script>
	import logo from '$lib/assets/favicon.png';
    import {base} from '$app/paths'
</script>

<h1 class="home-title">Data4Good</h1>
<hr size="2" noshade width="500" />
<h2 class="home-desc">
	<p>Connecting data, training and implementation</p>
	<p>to help create stronger nonprofit organizations.</p>
</h2>
<a href="{base}/projects/research"><img alt="Data4Good logo" class="logo" src={logo} /></a>

<style>
	.home-title {
		color: black;
		text-align: center;
		font-family: Roboto;
		font-size: 4em;
	}
	.home-desc {
		color: black;
		text-align: center;
		font-family: Roboto;
		font-size: 1.5rem;
	}
	a:link {
		text-decoration: none;
	}
	.logo {
		display: block;
		width: 10%;
		height: auto;
		margin-left: auto;
		margin-right: auto;
		margin-top: 50px;
	}
	p {
		color: #3f3842;
	}
</style>
