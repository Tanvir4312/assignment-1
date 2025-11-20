# TypeScript Concepts: `keyof`, Union & Intersection Types

---

## 1. The `keyof` Keyword in TypeScript

Keyof হলো কোন type object এর key গুলোকে নেওয়া।
আমরা জানি object প্রতিটা property গুলোতে key এবং value থাকে।
TypeScript এ keyof type Object থেকে তার key গুলো নিয়ে আসে 

type User = {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
};

// keyof User ব্যবহার:
type UserKeys = keyof User; 
// UserKeys টাইপটি হবে: 'id' | 'name' | 'email' | 'isAdmin'

পরবর্তীতে এই key er মাধ্যমে আমরা চাইলে bracket notation এর মাধ্যমে যে কোন key এর value নিতে পারবো।

### Example:
type User = {
    name : string
    id : number
}

const user = {name :"Tanvir", id : 123, roll : 22}

const gerPropertyFromObj = <T> (obj : T, key : keyof T) =>{
return obj[key]
}
console.log(gerPropertyFromObj(user, "roll"))

এখানে আরেকটি সুবিধা হলো কোন key যদি ভুল লেখা হয় তাহলে কোডেই এরর দিবে।

# example of using union and intersection types in TypeScript

## 2. Union Types
type TwoFriends = "Tanvir" | "Abid";

const friends = (myFriends: TwoFriends) => {
  if (myFriends === "Tanvir" || myFriends === "Abid") {
    console.log(`${myFriends} you are my best friend.`);
  } else {
    console.log(`${myFriends} you are my not friend.`);
  }

  console.log(myFriends);
};
friends("Tanvir");

## 3. Intersection Types
type employee = {id: number, name: string,}
type manager = {id: number, name: string, designation: string}

type employeeManager = employee & manager

const person : employeeManager = {
id : 222,
name : "Tanvir", 
designation : "Senior Developer"
}
person.designation = "Develper"
console.log(person)
