const express=require('express');
const app=express();
const path=require('path');
const port=4000;
app.use(express.static(path.join(__dirname, 'public')));
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'project1.html'));
})
app.listen(port,()=>{
    console.log('Server is listening on the port 4000');
})