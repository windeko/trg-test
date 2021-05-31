db.createCollection("cars");
db.createCollection("drivers");
db.createCollection("penalties");
db.createCollection("trips");

db.cars.insertMany([
    { manufacturer: 'nissan', model: 'quashqai', color: 'white', rank: 1, kidsSeat: false, isActive: false, isDeleted: false },
    { manufacturer: 'nissan', model: 'quashqai', color: 'white', rank: 1, kidsSeat: false, isActive: true, isDeleted: false },
    { manufacturer: 'nissan', model: 'quashqai', color: 'white', rank: 1, kidsSeat: true, isActive: true, isDeleted: false },
    { manufacturer: 'nissan', model: 'quashqai', color: 'white', rank: 2, kidsSeat: true, isActive: true, isDeleted: false },
    { manufacturer: 'nissan', model: 'quashqai', color: 'white', rank: 2, kidsSeat: false, isActive: true, isDeleted: false },
    { manufacturer: 'nissan', model: 'quashqai', color: 'white', rank: 2, kidsSeat: true, isActive: true, isDeleted: false },
    { manufacturer: 'nissan', model: 'quashqai', color: 'white', rank: 3, kidsSeat: true, isActive: true, isDeleted: false },
    { manufacturer: 'nissan', model: 'quashqai', color: 'white', rank: 3, kidsSeat: false, isActive: true, isDeleted: false },
    { manufacturer: 'nissan', model: 'quashqai', color: 'white', rank: 3, kidsSeat: false, isActive: true, isDeleted: false },
    { manufacturer: 'nissan', model: 'quashqai', color: 'white', rank: 4, kidsSeat: false, isActive: true, isDeleted: false },
]);

db.drivers.insertMany([
    { login: 'user1', password: '$2b$08$ZWFXvwdJPKqlJDn0zwk9s.4XNBv5fdJanfNXoMvflTNuGkYQyCWJy', name: 'John 1', surname: 'Doe 1', country: 'England', rank: 1, isActive: true },
    { login: 'user2', password: '$2b$08$ZWFXvwdJPKqlJDn0zwk9s.4XNBv5fdJanfNXoMvflTNuGkYQyCWJy', name: 'John 2', surname: 'Doe 2', country: 'England', rank: 1, isActive: true },
    { login: 'user3', password: '$2b$08$ZWFXvwdJPKqlJDn0zwk9s.4XNBv5fdJanfNXoMvflTNuGkYQyCWJy', name: 'John 3', surname: 'Doe 3', country: 'England', rank: 1, isActive: true },
    { login: 'user4', password: '$2b$08$ZWFXvwdJPKqlJDn0zwk9s.4XNBv5fdJanfNXoMvflTNuGkYQyCWJy', name: 'John 4', surname: 'Doe 4', country: 'England', rank: 2, isActive: true },
    { login: 'user5', password: '$2b$08$ZWFXvwdJPKqlJDn0zwk9s.4XNBv5fdJanfNXoMvflTNuGkYQyCWJy', name: 'John 5', surname: 'Doe 5', country: 'England', rank: 2, isActive: true },
    { login: 'user6', password: '$2b$08$ZWFXvwdJPKqlJDn0zwk9s.4XNBv5fdJanfNXoMvflTNuGkYQyCWJy', name: 'John 6', surname: 'Doe 6', country: 'England', rank: 2, isActive: true },
    { login: 'user7', password: '$2b$08$ZWFXvwdJPKqlJDn0zwk9s.4XNBv5fdJanfNXoMvflTNuGkYQyCWJy', name: 'John 7', surname: 'Doe 7', country: 'England', rank: 3, isActive: true },
    { login: 'user8', password: '$2b$08$ZWFXvwdJPKqlJDn0zwk9s.4XNBv5fdJanfNXoMvflTNuGkYQyCWJy', name: 'John 8', surname: 'Doe 8', country: 'England', rank: 3, isActive: true },
    { login: 'user9', password: '$2b$08$ZWFXvwdJPKqlJDn0zwk9s.4XNBv5fdJanfNXoMvflTNuGkYQyCWJy', name: 'John 9', surname: 'Doe 9', country: 'England', rank: 3, isActive: true },
    { login: 'user10', password: '$2b$08$ZWFXvwdJPKqlJDn0zwk9s.4XNBv5fdJanfNXoMvflTNuGkYQyCWJy', name: 'John 10', surname: 'Doe 10', country: 'England', rank: 4, isActive: true },
]);
