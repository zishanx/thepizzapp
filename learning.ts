interface Person  {
    name: string
    age: number 
    isStudent: boolean
    address:{
        street:string
        city:string
        country:string
    }
}

let person1: Person = {
    name: "Joe",
    age: 42,
    isStudent: true,
    address:{
        street:"Middhi",
        city:"Ballia",
        country:"India"
    }
}

let person2: Person  = {
    name: "Jill",
    age: 66,
    isStudent: false,
    address:{
        street:"123 Main",
        city: "Anyton",
        country:"USA"
    }
}