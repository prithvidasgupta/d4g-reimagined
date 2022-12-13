<script>
	import Person from '$lib/components/person.svelte';
	import ed_headshot from '$lib/assets/people/Ed-Headshot.jpg';
	import default_shot from '$lib/assets/people/cubed_square.webp';
</script>

<div class="about-container">
	<h1>About</h1>
	<h2>Data4Good's Mission</h2>
	<p>
		The UMSI Data4Good center brings together non-profit organizations' data into larger datasets
		for benchmarking and trend analysis. Putting data in the hands of nonprofits contributes to the
		body of knowledge about a broad scope of development and relief programs, which in turn will
		lead to better decision-making in nonprofit work.
	</p>
	<h2>Data4Good's Values</h2>
	<p>
		The Data4Good center values transparency and equal access to information and data analysis that
		has the potential to impact lives through nonprofit organizations.
	</p>
	<hr size="2" noshade width="" />
	<h1>The Team</h1>

	<Person
		name={'Ed Happ'}
		position={'Executive Fellow'}
		description={'Edward G. Happ is an Executive Fellow at the University of Michigan School of Information, where he is teaching and conducting research. His 40 years of professional experience include all facets of managing information services and high technology businesses, including general management with P&L responsibility, operations, product management, sales, marketing, customer service, human resources management, technical consulting, manufacturing, and both software and hardware development.'}
		image={ed_headshot}
		linkedin_url={'https://www.linkedin.com/in/edward-g-happ/'}
	/>
	<Person
		name={'Sidra Effendi'}
		position={'Project Manager and Data Scientist'}
		description={"Sidra is a Master's student at the University of Michigan - School of Information, specializing in Data Science. She has an undergraduate degree in Computer Engineering. Her has previously worked as an Edge Hacker for Zenatix Solutions and also co-founded a company called Pixli, where she worked on Software Development, UX/UI and Marketing."}
		image={default_shot}
		linkedin_url={'https://www.linkedin.com/in/sidraeffendi/'}
	/>
	<hr size="2" noshade width="" />
	<h1>Alumni</h1>
	<Person
		name={'Harrison Hall'}
		position={'Project Manager & Data Scientist'}
		description={"Harrison is a Master's graduate from the University of Michigan - School of Information, specializing in Big Data analytics. He has professional experience in a wide array of data science disciplines, such as machine learning, data engineering and data analysis. He currently teaches website development to undergraduate students at the University of Michigan while working with Data4Good. Harrison also has 10 years of experience competing on the national level in Policy debate."}
		image={default_shot}
		linkedin_url={'https://www.linkedin.com/in/harrison-joseph-hall/'}
	/>
	<Person
		name={'Kensuke Suzuki'}
		position={'Consultant'}
		description={"Kensuke is a Master's graduate from the University of Michigan - School of Information. Kensuke is currently pursuing the field of applied data science at the intersection of people and technology. He has an undergraduate degree in Marketing and previously worked in the realm of socially conscious non-profit organizations. He seeks challenges that bring growth, learning, and continuous to himself and society."}
		image={default_shot}
		linkedin_url={'https://www.linkedin.com/in/kensukesuzuki/'}
	/>
	<Person
		name={'Anuya Karnik'}
		position={'Web Developer'}
		description={"Anuya is a Master's graduate from the University of Michigan - School of Information. She is currently pursuing the field of human-computer interaction and her goal is to combine design principles with technology to help develop innovative, human-centric solutions. She has an undergraduate background in computer science and graphic design and has previously worked in the areas of software development and computational physics research."}
		image={default_shot}
		linkedin_url={'https://www.linkedin.com/in/anuya-karnik/'}
	/>
</div>

<style>
	.about-container {
		margin: 50px;
		font-family: Roboto;
		overflow-y: auto;
	}
</style>
