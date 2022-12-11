<script>
	import { base } from '$app/paths';
</script>
<nav>
	<ul id="menu">
		<li><a href="{base}/projects/research">Research</a></li>
		<li><a href="{base}/projects/chetah">Chetah</a></li>
		<li><a href="{base}/projects/simex">SimEx</a></li>
		<li><a href="{base}/projects/hangul">Hangul</a></li>
	</ul>
</nav>

<style>
	nav {
		font-family: Roboto;
        margin-top: 30px;
        margin-left:30px
	}
	ul#menu {
		width: 250px;
		position: relative; /* change to 'absolute' if you don't want it "sticky" */
		top: 0;
		left: calc(50% - (250px / 2));
		margin: 0;
		padding: 0;
		list-style-type: none;
		z-index: 1000;
	}
	ul#menu li {
		border-top: 1px solid black;
		border-bottom: 1px solid black;
        width: 150px;
	}
	ul#menu li a {
		text-decoration: none;
		color: black;
		padding: 10.5px 11px;
		display: block;
	}
	ul#menu li a:hover {
		background-color: #54246c;
		color: #fff;
	}
</style>
