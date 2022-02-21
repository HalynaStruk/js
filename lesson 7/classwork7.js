// 1. Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями
// модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
// і додає його в поточний об'єкт car
function Cars(model, manufacturer, year_of_manufacture, maximum_speed, engine_capacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year_of_manufacture = year_of_manufacture;
    this.maximum_speed = maximum_speed;
    this.engine_capacity = engine_capacity;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maximum_speed} км на годину`)
    };
    this.info = function () {

    };
   this.increaseMaxSpeed = function (newSpeed) {
        maximum_speed = maximum_speed + newSpeed;
        console.log(maximum_speed);
    };
   this.changeYea = function (newValue) {
       year_of_manufacture = newValue;
       console.log(year_of_manufacture);
   };
   this.addDriver = function (driver,drivers_license) {
       this.driver = driver;
       this.drivers_license = drivers_license;
       console.log(driver);
       console.log(drivers_license);
   }
}
let car1 = new Cars('BMW', 'Germany',2009,230,3.0);
console.log(car1);
car1.drive();
console.log(car1.info());

car1.increaseMaxSpeed(40);
car1.changeYea(2010);
car1.addDriver('Ivan','КВІ304050');

// 2. (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями
// модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
// і додає його в поточний об'єкт car
class Cars2 {
    constructor(model, manufacturer, year_of_manufacture, maximum_speed, engine_capacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year_of_manufacture = year_of_manufacture;
        this.maximum_speed = maximum_speed;
        this.engine_capacity = engine_capacity;
    }
    drive () {
        console.log(`їдемо зі швидкістю ${maximum_speed} км на годину`);
    };
    info () {
        // return {`Id - ${this.Id}, Name - &{this.Name}`};

    };
    increaseMaxSpeed (newSpeed) {
        this.maximum_speed = this.maximum_speed + newSpeed;
        console.log(this.maximum_speed);
    };
    changeYear (newValue) {
        this.year_of_manufacture = newValue;
        console.log(this.year_of_manufacture);
    };
    addDriver (driver,drivers_license) {
        this.driver = driver;
        this.drivers_license = drivers_license;
        console.log(driver);
        console.log(drivers_license);
    }
}
let car2 = new Cars2('Audi', 'Germany',2019,240,3.0);
console.log(car2);
car2.increaseMaxSpeed(10);
car2.changeYear(2020);
car2.addDriver('max','КВТ356287');
// 3. створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.
// Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
function Cinderella(name, age, foot_size) {
    this.name = name;
    this.age = age;
    this.foot_size = foot_size;
}
let Cinderellas =[
    new Cinderella('ira',20,35),
    new Cinderella('olya',22,38),
    new Cinderella('sasha',27,39),
    new Cinderella('inna',39,36),
    new Cinderella('julia',24,35),
    new Cinderella('Anna',29,37),
    new Cinderella('vika',40,36),
    new Cinderella('maria',25,38),
    new Cinderella('daria',21,40),
    new Cinderella('yana',43,36),
];
class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let Princes = new Prince('Max',35,37)
function CinderellasPrince (Cinderellas, Prince) {
    for (let i = 0; i < Cinderellas.length; i++) {
       if (Cinderellas[i].foot_size === Prince.shoe) {
           return `${Cinderellas[i].name} повинна бути з принцом, бо її розмір ноги ${Cinderellas[i].foot_size}, принц знайшов туфельку розміру ${Prince.shoe}`;
       }
    }
}
console.log(CinderellasPrince (Cinderellas, Princes));


// let user = {
//     id: 1,
//     name: 'kokos'
// }
// user.surname = 'abrikosov';
// user['age'] = 31;
// console.log(user);

// let obj = {};
// let fields = ['id', 'name', 'surname'];
// let value = [1,'kokos', 'abrikosov'];
// for (const field of fields) {
//     console.log(field);
//     obj[field] = 'xxx';
// }
// console.log(obj);
// for (let i = 0; i < value.length; i++) {
//     obj[fields[i]] = value[i];
// }
// console.log(obj);

// let user = {
//     id:100500,
//     name: 'kokos'
// }
// delete user.id;
// console.log(user);

// let user = {
//     name:'vasya',
//     surname:'pupkin',
//     greeting: function () {
//         return `hello my name is ${this.name} and my surname - ${this.surname}`;
//     },
//     wife: {
//         name:'olga',
//         greeting: function () {
//             console.log(`hello this is ${this.name}`);
//         }
//     }
// }
// console.log(user.greeting());
// user.wife.greeting();

// function userCreator(name,age) {
//     let obj = {name: name, age: age}
//     return {
//         getName: function () {
//            return obj.name
//         },
//         getAge: function () {
//             return obj.age
//         },
//         setAge: function (age) {
//             obj.age = age;
//         }
//     };
// }
// let manipulator = userCreator('kokos',31);
// console.log(manipulator);
// console.log(manipulator.getName());
// console.log(manipulator.getAge());
// manipulator.setAge(32);
// console.log(manipulator.getAge());

// function User(id,name,skills) {
//     this['id'] = id;
//     this.name = name;
//     this.skills = skills;
//     this.greeting = function () {
//         console.log(`hello my name is ${this.name}`);
//     }
// }
// let user1 = new User(1,'kokos',['java','js']);
// console.log(user1);
// let user2 = new User(2,'vasya',['html','mysql,mongo']);
// console.log(user2);
// let usersarrsy = [user1, user2];
// user1.greeting();
// user2.greeting();

// class User {
//     constructor(id,name) {
//         this.id = id;
//         this.name = name;
//     }
// //      metody
//     greeting() {
//         return `hello my name is ${this.name}`
//     }
// }
// let user = new User(1,'kokos');
// console.log(user);
// console.log(user.greeting());

// class Person {
//     //control+enter будує конструктор
//     // id;
//     // name;
//     constructor(id, name) {
//         this.id = id;
//         this.name = name;
//     }
// }

// class Car {
//     constructor(power, speed) {
//         this.power = power;
//         this.speed = speed;
//     }
//     drive() {
//         console.log('bububuububu')
//     }
// }
// class OffroadCar extends Car {
//     constructor(power, speed, type) {
//         super(power, speed);
//         this.type = type;
//     }
// }
// let superCar = new OffroadCar('wrx',165,'awd')
// console.log(superCar);