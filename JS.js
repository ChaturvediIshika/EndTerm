var book=document.getElementById("bt");
book.innerText="Alice In Wonderland";
var para=document.getElementById("para");


const fs=require('fs');
let readFile=fs.promises.readFile("AliceInWonderland.txt","utf-8");
readFile.then((data)=>{
    
})

