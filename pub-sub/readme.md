# Example Pub/Sub with Redis

- Ref : [nodejs-redis-pubsub-db](https://github.com/fluke34261/nodejs-redis-pubsub-db)

---

### Install Db
```sh
$ docker run --name some-postgres -e POSTGRES_PASSWORD=<password> -dp 5432:5432 postgres
```

### Install Redis 

```sh
$ docker run --name some-redis -dp 6379:6379 redis
```

### Init App

```sh
$ yarn 
```

- Start Subscribe Server

```sh
$ node subscribe.js
```

- Start Publish 

```sh
$ node publish.js
...
listen :3000
```

--- 

### Result

> when call ``Publish`` with cURL  ``curl 127.0.0.1:3000/publish``

```sh
# node subscribe.js
...
db Connected
===== ready to subscribe =====
INSERT INTO users (name) VALUES ('A0')
INSERT INTO users (name) VALUES ('A1')
INSERT INTO users (name) VALUES ('A2')
INSERT INTO users (name) VALUES ('A3')
INSERT INTO users (name) VALUES ('A4')
INSERT INTO users (name) VALUES ('A5')
INSERT INTO users (name) VALUES ('A6')
INSERT INTO users (name) VALUES ('A7')
INSERT INTO users (name) VALUES ('A8')
INSERT INTO users (name) VALUES ('A9')
1 record inserted
1 record inserted
1 record inserted
1 record inserted
1 record inserted
1 record inserted
1 record inserted
1 record inserted
1 record inserted
1 record inserted
```
