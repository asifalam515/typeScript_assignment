const formatValue = (
  value: string | number | boolean
): string | number | boolean | undefined => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  } else {
    return undefined;
  }
};

const getLength = <T>(value: string | T[]): number | undefined => {
  let numOfItems = 0;
  if (typeof value === "string") {
    for (let i = 0; i < value.length; i++) {
      numOfItems++;
    }
    return numOfItems;
  } else if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      numOfItems++;
    }
    return numOfItems;
  }
};
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}
type TItem = { title: string; rating: number };
const filterByRating = (arr: TItem[]): TItem[] => {
  return arr.filter((item) => item.rating >= 4 && item.rating <= 5);
};
type TUser = { id: number; name: string; email: string; isActive: boolean };
const filterActiveUsers = (arr: TUser[]): TUser[] => {
  const activeUser: TUser[] = arr.filter((user) => user.isActive === true);
  return activeUser;
};
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
const printBookDetails = (book: Book): void => {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable}`
  );
};
const getUniqueValues = <T>(arr1: T[], arr2: T[]): T[] => {
  let uniqueArray = [];
  for (let i = 0; i < arr1.length; i++) {
    uniqueArray.push(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    let exists = false;
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i] === arr1[j]) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      uniqueArray.push(arr2[i]);
    }
  }
  return uniqueArray;
};
type TProduct = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};
const calculateTotalPrice = (arr: TProduct[]): number => {
  const total = arr.reduce((totalPrice, currentProduct) => {
    let subTotal = currentProduct.price * currentProduct.quantity;
    if (currentProduct.discount) {
      subTotal = subTotal - (subTotal * currentProduct.discount) / 100;
    }
    return totalPrice + subTotal;
  }, 0);
  return total;
};
