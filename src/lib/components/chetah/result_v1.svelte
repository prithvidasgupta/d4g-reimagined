<script>
	export let result;
	export let idx;
</script>

<div class="result-container">
    <h2 style="text-align: center; padding: 50px">{idx+1}</h2>
	<div class="result-data">
		<p><b>Title:</b> {result.title}</p>
		<p><b>Date:</b> {result.date}</p>
		<p><b>Clusters:</b> {result.clusters.join(', ')}</p>
		<p><b>Summary:</b> {result.summary_short}</p>
		<p><a href={result.link} target="_blank" rel="noreferrer">Go to Report</a></p>
	</div>
</div>

<style>
	.result-container {
		background: rgb(191, 177, 97, 0.45);
		margin-right: 50px;
		margin-top: 10px;
		margin-bottom: 10px;
		border: 2px solid #3f3842;
		border-radius: 2px;
		padding: 5px;
        display: flex;
        flex-direction: row;
	}
	p {
		margin: 10px;
	}
</style>
