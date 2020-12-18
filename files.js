const fs = require('fs')

fs.readFile('user-data.txt', (err, data) => {
    if (err){
        console.log(err)
        return;        
    } 
    console.log(data.toString())
})
 
fs.writeFile('user-data.txt', 'username=Aleksandr', error => {
    if(error){
        console.log(error);
    } else {
        console.log("Success");
    }
});