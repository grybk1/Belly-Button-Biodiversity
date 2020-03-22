
const url = "samples.json";
data=d3.json(url);
//let obj=json.parse(data)
console.log(data);


var sample=d3.json(url).then(function(data){
    var sample=data.samples
    let inputValue=954
    // console.log(sample[0].otu_ids)
     let otus=sample[0].otu_ids.slice(0, 10)
    // outus='test '+outus
    //let otus=sample[0].otu_labels.slice(0, 10)
    let otuValues= sample[0].sample_values.slice(0, 10) 
    let otuTips=sample[0].otu_labels.slice(0, 10)
    let otuLabels=[];
    for(i=0;i<otus.length;i++){
           otuLabels.push('otu - '+ otus[i] );
           console.log(otuLabels);                
    } 
  
     console.log(otuLabels)
    // console.log(otuValues)

     var trace1 = {
        y: otuLabels,
        x: otuValues,
        type: "bar",
        orientation: "h",
        text: otuTips,
       // marker: {
        //  color: 'rgb(142,124,195)'
      //  }
      };
      
      var data = [trace1];
      
      var layout = {
        title: "'Bar' Chart"
      };
    // var layout = {
    //     title: 'Number of Graphs Made this Week',
    //     font:{
    //       family: 'Raleway, sans-serif'
    //     },
    //     showlegend: false,
    //     xaxis: {
    //       tickangle: -45
    //     },
    //     yaxis: {
    //       zeroline: false,
    //       gridwidth: 2
    //     },
    //     bargap :0.05
    //   };  


    //  Plotly.newPlot("test", data, layout);
    Plotly.newPlot("bar", data, layout);
    





});
//
//console.log(samples);
//console.log(samples[0].id)

// Part 1
// var trace1 = {
//     y: ["beer", "wine", "martini", "margarita",
//       "ice tea", "rum & coke", "mai tai", "gin & tonic"],
//     x: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "bar",
//     orientation: "h"
//   };
  
//   var data = [trace1];
  
//   var layout = {
//     title: "'Bar' Chart"
//   };
  
// //  Plotly.newPlot("test", data, layout);
// Plotly.newPlot("bar", data, layout);





