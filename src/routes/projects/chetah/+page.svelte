<script>
	import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
	import ChetahV1 from '$lib/components/chetah/chetah_v1.svelte';
	import logo from '$lib/assets/Chetah_Logo.png';

	let showAbout = 'none';

	function changeAbout() {
		showAbout = showAbout === 'none' ? 'block' : 'none';
	}
</script>

<div class="chetah-container">
	<div class="chetah-header-vert-flex">
		<div class="chetah-header">
			<img alt="Chetah Logo" style="width: 150px; margin-right: 20px" src={logo} />
			<div class="chetah-description">
				<h3>
					Search a phrase below and receive a list of UN and NGO report links in order of relevancy.
				</h3>
				<div class="button-flex">
					<button on:click={() => changeAbout()}>About Chetah</button>
					<a
						href="https://drive.google.com/file/d/13Jij3MG6P_P5OGGMLNIbGdgpCUaDVGce/view?usp=sharing"
						><button>View Research</button></a
					>
					<a href="https://forms.gle/YHT9biBSnzCHePUB8"><button>Provide Feedback</button></a>
				</div>
			</div>
		</div>
		<div class="about-description" style="display:{showAbout};">
			<h3>About</h3>
			<p>
				Chetah is a search engine for UN and NGOs reports and it summarizes reports with the
				state of the art deep learning algorithm, BERT. Users can search by applying filters of
				UN Clusters. This phase 1 product has reports from IFRC, IWA and UNICEF. It retrieves
				evidence-based program reports and annual reports. The results have been proven better
				than the Google and Bing for Non-profit sector, with an F1-score of 0.78. It is
				developed to help NGO program managers and policy makers to design programs and grant
				funds. This tool aims to provide better answers for nonprofit work and eventually to
				help solve the crucial real problems that NGO and UN are facing.
			</p>
		</div>
	</div>
	<Tabs>
		<TabList>
			<Tab>Chetah V1</Tab>
			<Tab>Chetah V2</Tab>
		</TabList>
		<TabPanel>
			<ChetahV1 />
		</TabPanel>
		<TabPanel>
			<h1>Placeholder for Chetah V2</h1>
		</TabPanel>
	</Tabs>
</div>

<style>
	.chetah-container {
		font-family: Roboto;
	}
	.chetah-header {
		display: flex;
		flex-direction: row;
		margin-bottom: 15px;
	}
	.chetah-description {
		display: inline-flex;
		flex-direction: column;
	}
	.chetah-header-vert-flex {
		display: flex;
		flex-direction: column;
	}
	.about-description {
		margin-right: 50px;
	}
	button {
		border: none;
		background-color: #bfb161;
		color: black;
		padding: 10px;
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
</style>
