
const url = "samples.json";
data=d3.json(url)


//Populate dropdown select
d3.json(url).then(function(data){
   // console.log(data)
   // console.log(data.names)
    var data=data.names
    var select = d3.select('#selDataset')
    var options = select
      .selectAll('option')
        .data(data).enter()
        .append('option')
        .text(function (d) { return d; });
});


function optionChanged(inputValue) {
    console.log(inputValue)
    d3.json(url).then(function(data){
    var data=data.metadata
    console.log(data)
    console.log(inputValue)
    for( var i=0; i<data.length; i++){
        console.log("dataId:"+data[i].id)
        console.log("input value:"+inputValue)

   // data.forEach(data => {
        if(data[i].id===parseInt(inputValue,10)){
            console.log("INPUT VALUE: "+inputValue);
            d3.select("#sample-metadata")
             .html("id: "+data[i].id+"<br>"+
                "ethnicity: "+data[i].ethnicity+"<br>"+
                "gender: "+data[i].gender+"<br>"+
                "age: "+data[i].age+"<br>"+
                "location: "+data[i].location+"<br>"+
                "bbtype: "+data[i].bbtype+"<br>"+
                "wrfreq: "+data[i].wfreq);
            }
        }    
    //});
});
}
    //  console.log(data);   
    //  console.log(data.names)
//     let filteredData= data.filter(function(){
//        return 
//     });
    // var filteredData = data.filter(sightings => {
    //     return sightings.datetime === Value;
    // });
   

