## Dear TRG

### To start container use
```
docker compose up
```
It's starting about 2 minutes, keep patient.

### Postman API
```
https://app.getpostman.com/run-collection/b63f5426317a1d007ea2
```

This is test task, so I use one mongoDB database for all 
collections we needed. I understand that microservices usually
use one DB for one microservice. Also, for saving time, I 
decided to use Mongoose ODM, but it's not the best choice 
for production, because ORMs and ODMs are weak when we need 
to make advanced DB requests.

I understand, that this realization could be more abstract, 
but time is limited.

It was an interesting project, and I hope that this test task 
shows my code style well.

### Part B
OPA is a middleware between user and backend. It's a flexible 
and useful tool to give and restrict access to some parts of
the project. Especially good working with numerous of services 
that have been written in various programming languages. So we
wouldn't change politics in various places, but write 
few rules in OPA.

Sorry for I'm not extending part A project with OPA, it's
5:30AM already. It's not excuse me for undone part, but I tried
my best.

King regards,
Vladimir Traigel
