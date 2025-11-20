
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


const getLength = (value: string[] | number[] | string): number | undefined => {
  if (typeof value === "string") {
    const stringLength = value.split("").length;
    return stringLength;
  } else if (Array.isArray(value)) {
    const arrayLength = value.length;
    return arrayLength;
  }
};



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


type Product = {
  title: string;
  rating: number;
};

const filterByRating = (items: Product[]): Product[] => {
  const result = items.filter((item) => item.rating >= 4 && item.rating <= 5);
  return [...result];
};



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

