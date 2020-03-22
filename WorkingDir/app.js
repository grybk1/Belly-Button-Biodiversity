

const url = "samples.json";


// add opt to end of select box (sel)
sel.appendChild(opt); 

// let dataSetSelect=d3.select("#selDataSet")
// dataSetSelect.enter();
// dataSetSelect.options.append();
//console.log(dataSetSelect)
// Fetch the JSON data and console log it

function getData(){
    data1=d3.json(url).then(function(data) {
//        console.log(data);
//        console.log(data.names);
//        console.log(data.samples[0])
//        return data
//var data = ["Option 1", "Option 2", "Option 3"];

// get reference to select element
var sel = document.getElementById('selDemo');
// create new option element
var opt = document.createElement('option');

// create text node to add to option element (opt)
opt.appendChild( document.createTextNode('New Option Text') );

// set value property of opt
opt.value = 'option value'; 

// add opt to end of select box (sel)
sel.appendChild(opt); 




var data= data.names;
//var select = d3.select('body')
var select = d3.select('#selDataset')
//var sel = document.getElementById('selDemo');
  .append('select')
  	.attr('class','select')
    .on('change',onchange)

var options = select
  .selectAll('option')
	.data(data).enter()
	.append('option')
		.text(function (d) { return d; });

function onchange() {
	selectValue = d3.select('select').property('value')
	d3.select('body')
		.append('p')
		.text(selectValue + ' is the last selected option.')
};



      });
//      return data1
};



  function onchange() {
    selectValue = d3.select('select').property('value')
    d3.select('body')
      .append('p')
      .text(selectValue + ' is the last selected option.')
  };










function populateDropDownList(){
//   var data = ["Option 1", "Option 2", "Option 3"];
//   var options = select
//     .select("#selDataSet") 
// //  .selectAll('option')
// 	.data(data).enter()
// 	.append('option')
// 		.text(function (d) { return d; });
        // console.log('in popdropdown');
        // let dataSetSelect=d3.select("#selDataSet")
        // .attr();
        // option = dataSetSelect.createElement("option")
        // option.text="kiwi"
        // dataSetSelect.add(option)
}
//populateDropDownList();


let newData = getData();
console.log(newData)


// Beggining of new comment
// var filteredData = data;

// console.log(filteredData);
// console.log(filteredData[0].samples[0].sample_values);
// console.log(filteredData[0].samples[0].otu_labels)

// let values=filteredData[0].samples[0].sample_values
// let labels= "test "+ toString(filteredData[0].samples[0].otu_labels)


// var trace1 ={
//     x: values,
//     y: labels,
//     orientation: "h", 
//     type: "bar"
// };

// var data = [trace1];
// var layout = {
//    title: 'test'
// };

// Plotly.newPlot("bar", data,layout)
// End of new comment

// var trace1 ={
//     x: filteredData.samples[0].sample_values,
//     y: filteredData.samples[0].otu_ids,
//     orientation: "h", 
//   type: "bar"
// };

// var data = [trace1];
// var layout = {
//   title: 'test'
// };

// Plotly.newPlot("bar", data,layout)