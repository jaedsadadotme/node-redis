const db            = require("./pool")
const subscriber    = require("redis").createClient({
    port      : 6379,
    host      : '127.0.0.1',
})

async function connect (){
    return db.connect()
    .then(()=>console.log("db Connected"))
    .catch(err=>console.log(err))
}

async function insertData(data){
    var sql = "INSERT INTO users (name) VALUES ('"+data.name+"')";
    await db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
}

async function subscribe (){
    subscriber.on("message", function (channel, message) {
        let data = JSON.parse(message);
        insertData(data)
    });
    subscriber.subscribe("data-subscribe")
}

async function init(){
    await connect()
    console.log("===== ready to subscribe =====")
    await subscribe()
}

init()