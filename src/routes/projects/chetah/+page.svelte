<script>
	import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
</script>
<style>
	.chetah-container{
		font-family: Roboto;
	}
</style>
<div class="chetah-container">
	<Tabs>
		<TabList>
			<Tab>Chetah V1</Tab>
			<Tab>Chetah V2</Tab>
		</TabList>
		<TabPanel>
			<h1>Placeholder for Chetah V1</h1>
		</TabPanel>
		<TabPanel>
			<h1>Placeholder for Chetah V2</h1>
		</TabPanel>
	</Tabs>
</div>
