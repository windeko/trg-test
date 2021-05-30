db.createCollection("cars");
db.createCollection("drivers");
db.createCollection("penalties");
db.createCollection("trips");

db.cars.insertMany([
    { carId: 1, manufacturer: 'nissan', model: 'quashqai', color: 'white', rank: 1, kidsSeat: false, isActive: false },
    { carId: 2, manufacturer: 'nissan', model: 'quashqai', color: 'white', rank: 1, kidsSeat: false, isActive: true },
    { carId: 3, manufacturer: 'nissan', model: 'quashqai', color: 'white', rank: 1, kidsSeat: true, isActive: true },
    { carId: 4, manufacturer: 'nissan', model: 'quashqai', color: 'white', rank: 2, kidsSeat: true, isActive: true },
    { carId: 5, manufacturer: 'nissan', model: 'quashqai', color: 'white', rank: 2, kidsSeat: false, isActive: true },
    { carId: 6, manufacturer: 'nissan', model: 'quashqai', color: 'white', rank: 2, kidsSeat: true, isActive: true },
    { carId: 7, manufacturer: 'nissan', model: 'quashqai', color: 'white', rank: 3, kidsSeat: true, isActive: true },
    { carId: 8, manufacturer: 'nissan', model: 'quashqai', color: 'white', rank: 3, kidsSeat: false, isActive: true },
    { carId: 9, manufacturer: 'nissan', model: 'quashqai', color: 'white', rank: 3, kidsSeat: false, isActive: true },
    { carId: 10, manufacturer: 'nissan', model: 'quashqai', color: 'white', rank: 4, kidsSeat: false, isActive: true },
]);

db.drivers.insertMany([
    { driverId: 1, name: 'John 1', surname: 'Doe 1', country: 'England', rank: 1, isActive: true },
    { driverId: 2, name: 'John 2', surname: 'Doe 2', country: 'England', rank: 1, isActive: true },
    { driverId: 3, name: 'John 3', surname: 'Doe 3', country: 'England', rank: 1, isActive: true },
    { driverId: 4, name: 'John 4', surname: 'Doe 4', country: 'England', rank: 2, isActive: true },
    { driverId: 5, name: 'John 5', surname: 'Doe 5', country: 'England', rank: 2, isActive: true },
    { driverId: 6, name: 'John 6', surname: 'Doe 6', country: 'England', rank: 2, isActive: true },
    { driverId: 7, name: 'John 7', surname: 'Doe 7', country: 'England', rank: 3, isActive: true },
    { driverId: 8, name: 'John 8', surname: 'Doe 8', country: 'England', rank: 3, isActive: true },
    { driverId: 9, name: 'John 9', surname: 'Doe 9', country: 'England', rank: 3, isActive: true },
    { driverId: 10, name: 'John 10', surname: 'Doe 10', country: 'England', rank: 4, isActive: true },
]);
