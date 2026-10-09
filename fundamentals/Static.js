class User{
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }

    static compareByAge(user1, user2) {
        return user1.age - user2.age;
    }

}

const user1 = new User("nikhil", 20)
const user4 = new User("barbie", 120)
const user3 = new User("akhil", 50)
const user2 = new User("sai", 30)

const users = [user1,user4,user3,user2]

// users.sort((a, b) => a.age-b.age)

users.sort(User.compareByAge)

console.log(users)
