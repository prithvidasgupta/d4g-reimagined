<script>
	import Search from 'svelte-search';
	import MultiSelect from 'svelte-multiselect';
	import { SyncLoader } from 'svelte-loading-spinners';
	import Result from './result_v1.svelte';
	let search_query = '';
	let searched = false;
	let filter_opts = [];
	let results = null;
	let time = 0;
	let num_res = 0;
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
		time = Date.now();
		num_res = 0;
		const filtered_search_results = [];
		const response = await fetch(`http://127.0.0.1:8000/api/chetah/v1/${query}`, { mode: 'cors' });
		const { search_results } = await response.json();
		if (filter_opts.length === 0) {
			num_res = search_results.length;
			time = Date.now() - time;
			return { search_results };
		}
		for (const sr of search_results) {
			let i = 0;
			for (const opt of filter_opts) {
				if (sr.clusters.includes(opt.toLowerCase())) {
					i++;
				} else {
					break;
				}
			}
			if (filter_opts.length === i) {
				filtered_search_results.push(sr);
			}
		}
		num_res = filtered_search_results.length;
		time = Date.now() - time;
		return { search_results: filtered_search_results };
	}
</script>

<div class="chetah-header-flex">
	<div class="search-flexbox">
		<div class="search-bar">
			<Search label="Search:" bind:value={search_query} placeholder="Enter a search query..." />
		</div>

		<div class="search-button">
			{#if search_query && search_query != ''}
				<button on:click={() => (results = doSearch(search_query))}>Search</button>
			{:else}
				<button disabled>Search</button>
			{/if}
		</div>
	</div>
	<div class="filter-container">
		<h3>UN Clusters:</h3>
		<MultiSelect bind:selected={filter_opts} options={un_clusters} />
	</div>
</div>

<div class="results-container">
	{#if results}
		{#await results}
			<SyncLoader size="60" color="#54246c" unit="px" duration="0.3s" />
		{:then data}
			{#if num_res === 0}
				<p>No results available.</p>
			{:else}
				<p>{num_res} results fetched in {time} ms.</p>
			{/if}
			{#each data.search_results as sr, idx}
				<Result result={sr} {idx} />
			{/each}
		{:catch e}
			<h3 style="color: red;">
				!!! This should not happen. Please hold on while our team fixes the issues !!!
			</h3>
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
	.search-flexbox {
		display: inline-flex;
		flex-direction: row;
	}
	.search-bar {
		width: 300px;
	}
	.chetah-header-flex {
		display: inline-flex;
		flex-direction: column;
		width: auto;
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
	button:hover {
		background-color: #54246c;
		color: white;
	}
	.results-container {
		float: left;
		width: 100%;
		margin-top: 20px;
		margin-right: 50px;
		margin-bottom: 50px;
	}
	.filter-container {
		margin-right: 400px;
	}
</style>
