const csvFilePath='./data/out.csv'
const csv=require('csvtojson')
const fs = require('fs');
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);
    let ticket1 = jsonObj.map(obj=>{
        return obj.ticket1;
    }) 

    let ticket2 = jsonObj.map(obj=>{
        return obj.ticket2;
    }) 
    fs.writeFileSync('data/ticket1.json', JSON.stringify(ticket1));
    fs.writeFileSync('data/ticket2.json', JSON.stringify(ticket2));
})