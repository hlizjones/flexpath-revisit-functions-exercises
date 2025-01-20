// Create a function `createUser` that accepts two parameters: name and role, 
// with role defaulting to the string 'guest' if not provided or if explicitly 
// passed as undefined. 

// Demonstrate how default parameters work with various argument values, 
// including null and undefined.

function createUser (name, role= "guest") {
    let user = {
        name: name,
        role: role
    }
    return user
}

let user1 = createUser("Hannah", "HR")

let user2 = createUser("Holly")

let user3= createUser("Nadine", null)

let user4= createUser("Lauren", undefined)

console.log(user1)
console.log(user2)
console.log(user3)
console.log(user4)