<script>
	import Search from 'svelte-search';
	import MultiSelect from 'svelte-multiselect';
    import {SyncLoader} from 'svelte-loading-spinners'
    import Result from './result.svelte';
	let search_query = '';
	let searched = false;
	let filter_opts = [];
    let results = null;
	const un_clusters = [
		'Health',
		'Education',
		'Nutrition',
		'Protection',
		'Shelter',
		'Water, Sanitation & Hygiene',
		'Camp Coordination & Management',
		'Early Recovery',
		'Emergency Telcom',
		'Food Security',
		'Humanitarian & Emergency Relief',
		'Logistics'
	];

	async function doSearch(query) {
        results=null;
        const response = await fetch(`http://127.0.0.1:8000/api/chetah/v1/${query}`,{mode: 'cors'})
        return response.json()
	}
</script>

<div class="left-container">
	<Search label="Search" bind:value={search_query} placeholder="Enter a search query..." />
</div>

<div class="right-container">
    {#if search_query && search_query!=''}
	<button on:click={() => (results=doSearch(search_query))}>Search</button>
    {:else}
    <button disabled>Search</button>
    {/if}
</div>

<div class="filter-container">
<h3>UN Clusters:</h3>
<MultiSelect bind:selected={filter_opts} options={un_clusters} />
</div>

<div class="results-container">
	{#if results}
    {#await results}
        <SyncLoader size="60" color="#54246c" unit="px" duration="0.5s" />
    {:then data} 
        {#each data.search_results as sr}
       <Result result={sr}/>
        {/each}
    {/await}
    {/if}
</div>

<style>
	:global(div.multiselect) {
		color: black;
        background-color: white;
	}
	:global([data-svelte-search] input) {
		width: 70%;
		font-size: 1rem;
		padding: 0.5rem;
		margin: 0.5rem 0;
		border: 1px solid grey;
		border-radius: 0.2rem;
	}
	.left-container {
		float: left;
		width: 70%;
	}
	.right-container {
		width: 30%;
		float: inline-end;
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
	button:hover {
		background-color: #54246c;
		color: white;
	}
	.results-container {
		float: left;
		width: 100%;
        margin-top: 20px;
        margin-right: 50px;
	}
	.filter-container {
		margin-right: 400px;
	}
</style>
