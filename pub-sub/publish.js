const app       = require('express')()
const publisher = require("redis").createClient({
    port      : 6479,
    host      : '127.0.0.1',
});

app
    .get('/publish',(req,res)=>{
        for(let i = 0; i < 10; i++){
            let datas = {
                name : "A"+i
            }
            publisher.publish("data-subscribe", JSON.stringify(datas))
        }
        res.send("publish data")
    })
    .listen(3000,()=>console.log("listen :3000"))