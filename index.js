var http=require('http');
express=require('express');
var app=express();

app.use('/index.html',(req,res,next)=>{
    res.write('hello world');
    res.end();
});
app.use((res,res,next)=>{
    res.write('hello world');
    res.end();
});
http.createServer(app).listen(3000);
