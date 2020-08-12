const app       = require('express')()
const redis     = require('redis')
const client    = redis.createClient({
  port      : 6379,
  host      : '127.0.0.1',
  // password  : ""
}).on("error", function(error) {
  console.error(error);
});

app
  .get('/',(req,res)=>{
    client.get('key',(err,datas)=>{
      if(err) throw err
      res.json({msg:datas})
    });
  })
  .post('/',(req,res)=>{
    client.set('key',"title",function(err) {
      if (err) { 
        throw err;
      }else{
        res.status(200).send(null)
        console.log("saved")
      }
    })
  })
  .listen(3000,()=>console.log("listen :3000"))