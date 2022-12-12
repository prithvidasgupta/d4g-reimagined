<script>
    export let result;
</script>
<style>
    .result-container{
        background-color: white;
        margin: 10px;
        padding: 5px;
    }
</style>
<div class='result-container'>
    <p><b>Title:</b> {result.title}</p>
    <p><b>Date:</b> {result.date}</p>
    <p><b>Clusters:</b> {result.cluster}</p>
    <p><a href="{result.link}">Go to Report</a></p>
</div>