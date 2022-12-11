<script>
    import {base} from '$app/paths'
    import ResearchItem from '$lib/components/research_item.svelte'
    import cio4Good from '$lib/assets/research/cio4good_thumb.png'
    import digitalIdentification from '$lib/assets/research/digital_identification_thumb.png'
    import chetah from '$lib/assets/research/chetah_thumb.png'
    import refugeeDemographic from '$lib/assets/research/refugee_thumb.png'
    import topicExtraction from '$lib/assets/research/topic_extraction_thumb.png'
    import simex from '$lib/assets/research/simex-thumb.png'
</script>
<style>
    .research-container{
        padding-bottom: 50px;
    }
</style>
<div class='research-container'>
<ResearchItem topic = {'Trends in the IT Sector of Non-Profit Organizations'} description = {'What do NPO IT leaders say about IT investment over the past 17 years? Visualize CIO4Good survey trends.'} link={`${base}/projects/cio4good`} image={cio4Good} buttonText={'View Project'}/>
<ResearchItem topic = {'Think Paper on Digital Identification'} description = {'Digital identification and biometric data has become increasingly popular in the private sector and have slowly been introduced and piloted in governmental and non-governmental organizations in the emerging world. <br/>The IFRC S2030 Think Piece on Digital Identification summarizes research into how biometric data, digital identification, and blockchain technology have and will take part in the lives of vulnerable populations in refugee camps.'} link={'https://drive.google.com/file/d/17sz0ih_1RQ91IcyMTRn3Tmb4LUgw65wt/view'} image={digitalIdentification} buttonText={'View Research'}/>
<ResearchItem topic = {'Chetah Search Engine'} description = {'Chetah is a search engine for UN and NGOs reports and it summarizes reports with the state of the art deep learning algorithm, BERT. Users can search by applying filters of UN Clusters. This phase 1 product has reports from IFRC, IWA and UNICEF. It retrieves evidence-based program reports and annual reports. The results have been proven better than the Google and Bing for Non-profit sector, with an F1-score of 0.78. It is developed to help NGO program managers and policy makers to design programs and grant funds. This tool aims to provide better answers for nonprofit work and eventually to help solve the crucial real problems that NGO and UN are facing.'} link={`${base}/projects/chetah`} buttonText={'Go to Chetah'} image = {chetah}/>
<ResearchItem topic = {'Refugee Demographic & Connectitivity Trends in Greece and Serbia'} description ={'What can we learn about refugees\' access to the internet and mobile device ownership from a high level perspective?'} link={'https://drive.google.com/file/d/1k5KTfw5x5wjicFecdyaE0qWkXwsbbNgY/view'} image={refugeeDemographic} buttonText={'View Research'}/>
<ResearchItem topic = {'Topic Extraction from Unstructured NGO Documents'} description = {'Insights about the different reports produced by NGOs.'} link = {'https://drive.google.com/file/d/1e3EYJDc6IuXzD7b16Q4lkxmTo0zcW-dW/view?usp=sharing'} image={topicExtraction} buttonText={'View Research'}/>
<ResearchItem topic = {'Digital Crisis Simulation Exercise (SimEx)'} description={'The digital Crisis Simulation Exercise (SimEx) is the latest iteration of a multi-year training lab designed to simulate disaster response strategies and actions within a realistic crisis setting.'} link={`${base}/projects/simex`} image={simex} buttonText={'View Project'}/>
</div>