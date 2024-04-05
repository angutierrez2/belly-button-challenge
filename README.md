# Module 14 Challenge - Belly Button Data Javascript/HTML Analysis

## Background
* In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels.
* The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Instructions
* Complete the following steps:
* Use the D3 library to read in samples.json from the URL https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json.
* Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
* Use sample_values as the values for the bar chart.
* Use otu_ids as the labels for the bar chart.
* Use otu_labels as the hovertext for the chart.
* Create a bubble chart that displays each sample.
* Use otu_ids for the x values.
* Use sample_values for the y values.
* Use sample_values for the marker size.
* Use otu_ids for the marker colors.
* Use otu_labels for the text values.
* Display the sample metadata, i.e., an individual's demographic information.
* Display each key-value pair from the metadata JSON object somewhere on the page.
* Update all the plots when a new sample is selected.
* Additionally, you are welcome to create any layout that you would like for your dashboard.
* Deploy your app to a free static page hosting service, such as GitHub Pages.
* Submit the links to your deployment and your GitHub repo.
* Ensure that your repository has regular commits and a thorough README.md file

## Requirements

### Bar Chart (30 points)
* Chart initializes without error (10 points)
* Chart updates when a new sample is selected (5 points)
* Chart uses Top 10 sample values as values (5 points)
* Chart uses otu_ids as the labels (5 points)
* Chart uses otu_labels as the tooltip (5 points)

### Bubble Charts (40 points)
* Chart initializes without error (10 points)
* Chart updates when a new sample is selected (5 points)
* Chart uses otu_ids for the x values (5 points)
* Chart uses otu_ids for marker colors (5 points)
* Chart uses sample_values for the y values (5 points)
* Chart uses sample_values for the marker size (5 points)
* Chart uses `otu_labels for text values (5 points)

### Metadata and Deployment (30 points)
* Metadata initializes without error (10 points)
* Metadata updates when a new sample is selected (10 points)
* App Successfully Deployed to Github Pages (10 points)

## Grading

### This assignment will be evaluated against the requirements and assigned a grade according to the following table:

Grade Points

A (+/-)	90+

B (+/-)	80–89

C (+/-)	70–79

D (+/-)	60–69

F (+/-)	< 60

## References
* Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/.
