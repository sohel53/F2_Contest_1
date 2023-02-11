/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

let arr2 =[
  { id: 4, name: "Ron", age: "22", marks: 70 },
  { id: 5, name: "Petter", age: "17", marks: 65 },
  { id: 6, name: "Elon", age: "21", marks: 40 },

];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  let num = arr.filter(stu => stu.marks > 50).map(stu => stu.name);
  console.log(num);
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(function(arr) {
    if(arr.marks > 50) {
      console.log(arr.name);
    }
  })
}

function addData() {
  //Write your code here, just console.log
  let newObj = {id:4,name:"susan",age:"20",marks:45};
  arr.push(newObj);
  console.log(arr);

}

function removeFailedStudent() {
  //Write your code here, just console.log
  arr.forEach(function(arr) {
    if(arr.marks > 50) {
      delete arr[0]
      console.log(arr)
    }
  })
  
}

function concatenateArray() {
  //Write your code here, just console.log
  let result = arr.concat(arr2);
  console.table(result);
}
