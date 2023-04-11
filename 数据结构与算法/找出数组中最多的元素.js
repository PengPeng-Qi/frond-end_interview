let arr = [1, 2, 3, 3, 4, 2, 2, 1];

function fn(arr) {
  let resArrObj = [];
  let resArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (resArr.indexOf(arr[i]) === -1) {
      resArrObj.push({ type: arr[i], count: 1 });
      resArr.push(arr[i]);
    } else {
      resArrObj.map((item) => {
        if (item.type === arr[i]) {
          item.count++;
        }
      });
    }
  }
  return resArrObj;
}

let obj = fn(arr);

let count = 0;
let type;

for (let i = 0; i < obj.length; i++) {
  if (obj[i].count > count) {
    count = obj[i].count;
    type = obj[i].type;
  }
}

console.log(type, count);
