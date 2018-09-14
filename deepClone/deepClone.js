let man = {
  name: "name",
  age: 20,
  sex: "man",
  job: {
    money: 500
  }
};

// let obj1 = Object.assign({}, obj)

function deepCopy(obj) {
  let newObj = Array.isArray(obj) ? [] : {};
  if (Array.isArray(obj)) {
    for (let i in obj) {
      newObj[i] = obj[i];
    }
  } else {
    for (let i in obj) {
      if (typeof obj[i] === "object") {
        newObj[i] = deepcopy(obj[i]);
      } else {
        newObj[i] = obj[i];
      }
    }
  }
  return newObj;
}

let obj1 = deepCopy(man);                   // 深复制
let obj2 = JSON.parse(JSON.stringify(man)); // 深复制
let objassgin = Object.assign({},man);      // 一层深复制

