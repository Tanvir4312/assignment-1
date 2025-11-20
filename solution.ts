//-----------------------------------problem - 1---------------------------------
const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === "string") {
    const resultUppercssr = value.toUpperCase();
    return resultUppercssr;
  } else if (typeof value === "number") {
    const resultCalculate = value * 10;
    return resultCalculate;
  } else {
    return !value;
  }
};

// console.log(formatValue("tanvir"));
// console.log(formatValue(10));
// console.log(formatValue(false));

//------------------------------------problem - 2-----------------------------------
const getLength = (value: string[] | number[] | string): number | undefined => {
  if (typeof value === "string") {
    const stringLength = value.split("").length;
    return stringLength;
  } else if (Array.isArray(value)) {
    const arrayLength = value.length;
    return arrayLength;
  }
};

// console.log(getLength("tanvir"));
// console.log(getLength([10, 20, 30, 40, 55]));

//------------------------------------problem - 3------------------------------------

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());
// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());
// const person3 = new Person('Tanvir vai', 25);
// console.log(person3.getDetails());

//------------------------------------problem - 4------------------------------------
type Product = {
  title: string;
  rating: number;
};

const filterByRating = (items: Product[]): Product[] => {
  const result = items.filter((item) => item.rating >= 4 && item.rating <= 5);
  return [...result];
};

// const books = [
//   { title: "Book A", rating: 4.5 },
//   { title: "Book A", rating: 4.1 },
//   { title: "Book B", rating: 3.2 },
//   { title: "Book C", rating: 5.0 },
//   { title: "Book C", rating: 6.0 },
// ];

// console.log(filterByRating(books));

//------------------------------------problem - 5------------------------------------

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (users: User[]): User[] => {
  const result = users.filter((user) => user.isActive === true);
  return [...result];
};

// const users = [
//   { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
//   { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
//   { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
//   { id: 3, name: "Rumi2", email: "rumi@example.com", isActive: false },
// ];

// console.log(filterActiveUsers(users));

//------------------------------------problem - 6------------------------------------
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (value: Book) => {
  const result = `Title: ${value.title}, Author: ${value.author}, Published: ${
    value.publishedYear
  }, Available: ${value.isAvailable === true ? "Yes" : "No"}`;
  console.log(result);
};

// const myBook: Book = {
//   title: "The Great Gatsby",
//   author: "F. Scott Fitzgerald",
//   publishedYear: 1925,
//   isAvailable: true,
// };

// printBookDetails(myBook);

//------------------------------------problem - 7------------------------------------
const getUniqueValues = (
  value1: (string | number)[],
  value2: (string | number)[]
): (string | number)[] => {
  let arr = [];

  for (let i = 0; i < value1.length; i++) {
    arr[i] = value1[i];
  }
  for (let i = 0; i < value2.length; i++) {
    if (arr[i] !== value2[i]) {
      const startValue = value2[0];

      arr[i + Number(startValue) - 1] = value2[i];
    }
  }
  return arr;
};

//------------------------------------problem - 7------------------------------------

type Products = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};
const calculateTotalPrice = (products: Products[]): number => {
  if (products.length === 0) {
    return 0;
  }

  const prductPrice = products.reduce((accumulator, currentProduct) => {
    const basePrice = currentProduct.price * currentProduct.quantity;

    const discountAmount = currentProduct.discount
      ? (basePrice * currentProduct.discount) / 100
      : 0;

    const finalAmount = basePrice - discountAmount;

    return accumulator + finalAmount;
  }, 0);

  return prductPrice;
};

const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));
