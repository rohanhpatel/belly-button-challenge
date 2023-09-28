const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

const dataPromise = d3.json(url);

// set up dropdown with all the options
dataPromise.then((data) => {

    console.log(data);
    
    selectElement = d3.select("#selDataset");

    for (let i = 0; i < data.names.length; i++) {
        selectElement.append("option").text(data.names[i]).attr("value", data.names[i]);
    }

});

// on dropdown change, change the plots
d3.selectAll("#selDataset").on("change", updatePlots);

function updatePlots() {
    let dataset = d3.select("#selDataset").property("value");

    dataPromise.then((data) => {
        // find data point where dataset = sample.id
        let dataPoint = data.samples.filter((sample) => sample.id == dataset);
        
        // data is already sorted


    });

}