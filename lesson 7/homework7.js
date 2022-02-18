// 1. Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let user1 = new User(1,'ivan','ivanov','ivan@gmail.com','+380970102030');
let user2 = new User(8,'vasyl','vasylov','vasyl@gmail.com','+380970405060');
let user3 = new User(9,'olya','olova','olya@gmail.com','+380970708090');
let user4 = new User(4,'ira','irova','ira@gmail.com','+380970112131');
let user5 = new User(7,'petro','petrov','petro@gmail.com','+380970122232');
let user6 = new User(6,'stepan','stepanov','stepan@gmail.com','+380970132333');
let user7 = new User(5,'max','maxov','max@gmail.com','+380970142434');
let user8 = new User(2,'anna','annova','anna@gmail.com','+380970152535');
let user9 = new User(3,'volodya','volov','volodya@gmail.com','+380970162636');
let user10 = new User(10,'taras','tarasov','taras@gmail.com','+380970172737');
let users = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
console.log(users);
// 2. Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter)
console.log(users.filter(id => id.id%2 === 0));
// 3. Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(users.sort((first, second) =>  first.id - second.id));
// 4. створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів) створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let client1 = new Client(1,'ivan','ivanov','ivan@gmail.com','+380970102030', ['phone', 'charger']);
let client2 = new Client(8,'vasyl','vasylov','vasyl@gmail.com','+380970405060', ['TV', 'speakers']);
let client3 = new Client(9,'olya','olova','olya@gmail.com','+380970708090', ['notebook', 'pen', 'book']);
let client4 = new Client(4,'ira','irova','ira@gmail.com','+380970112131', ['hair dryer', 'brush']);
let client5 = new Client(7,'petro','petrov','petro@gmail.com','+380970122232', ['hammer', 'screwdriver', 'drill']);
let client6 = new Client(6,'stepan','stepanov','stepan@gmail.com','+380970132333', ['ski', 'boots', 'helmet', 'goggles']);
let client7 = new Client(5,'max','maxov','max@gmail.com','+380970142434', ['suitcase', 'sunglasses']);
let client8 = new Client(2,'anna','annova','anna@gmail.com','+380970152535', ['baverbank', 'headphones', 'joysticks']);
let client9 = new Client(3,'volodya','volov','volodya@gmail.com','+380970162636', ['laptop', 'mouse', 'keyboard']);
let client10 = new Client(10,'taras','tarasov','taras@gmail.com','+380970172737', ['armchair', 'table', 'table', 'lamp']);
let clients = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10];
console.log(clients);
// 5. Взяти масив (Client [] з попереднього завдання).
// Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortClient = clients.sort((first, second) => (first.order.length - second.order.length));
console.log(sortClient);
