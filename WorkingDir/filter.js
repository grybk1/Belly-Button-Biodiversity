
const url = "samples.json";
data=d3.json(url)


//Populate dropdown select
// d3.json(url).then(function(data){
//     var data=data.names
//     var select = d3.select('#selDataset')
//     var options = select
//       .selectAll('option')
//         .data(data).enter()
//         .append('option')
//         .text(function (d) { return d; });
// });

d3.json(url).then(function(data){
    var data=data.metadata
//    var select = d3.select('#selDataset')

// get data where something === something
console.log(data);
console.log(data[0].id)
//console.log(datat[0].)
    data.forEach(data => {
        if(data.id===940){
            d3.select("#sample-metadata")
            .html("id: "+data.id+"<br>"+
                "ethnicity"+data.ethnicity+"<br>"+
                "gender"+data.gender+"<br>"+
                "age"+data.age+"<br>"+
                "location"+data.location+"<br>"+
                "bbtype"+data.bbtype+"<br>"+
                "wrfreq"+data.wfreq)
         }
    });
//     let ethnicity=data[0].ethnicity
//     let gender=data[0].gender
//     let age=data[0].age
//     let location=data[0].location
//     let bbtype=data[0].bbtype
//     let wfreq=data[0].wfreq    
// console.log(ethnicity, gender,age,location,bbtype,wfreq)
});






