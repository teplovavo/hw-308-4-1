console.log("R-ALAB 308-4-1");


console.log("------ Part1 ---------"); //Refactoring Old Code

const csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
const rows = csvString.split('\n').map(row => row.split(','));  //create rows, splits it into individual cells

rows.forEach(cell => console.log(cell[0], cell[1], cell[2], cell[3])); //forEach for every element. Text without brackets and commas, using arrow function "=> " 

console.log("----data 2 ----");

const csvString1 = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
const rows1 = csvString1.split('\n').map(row => row.split(','));

rows1.forEach(cell => console.log(cell[0], cell[1], cell[2], cell[3])); 





console.log("------- Part2-------"); //Expanding Functionality

const csvString2 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

const rows2 = csvString2.split('\n');  //divided rows
const numOfColumns = rows2[0].split(',').length; //divided and found the length which is equel to number of columns

const dataArray = rows2.map(row => row.split(',')); //Stored in a two-dimensional array. Every row is an array. Divided by comma.

console.log("Number of columns:", numOfColumns);
console.log("Two-dimensional array:", dataArray);






console.log("------- Part3-------"); //Transforming Data


const csvString3 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";


const rows3 = csvString3.split('\n'); // Splited into rows


const headers = rows3[0].split(',').map(header => header.toLowerCase());// Extracted headers from the first row, converted to lowercase


const dataObjects = rows3.slice(1).map(row => {// Transforming each row into objects ! (excluding the header!!) .slice starts at 1 row, the 0 row it deleted.

    const values = row.split(',');  //found values, divided by comma



 // transforming each row into an object with keys corresponding to column headers and values from the row, then collecting these objects into an array
    let obj = {};  //empty object
    headers.forEach((header, index) => {    // iterated headers
        obj[header] = values[index];   // assign value. This maps each header to its respective data value for the current row.
    });
    return obj;  //for the current row, making it part of the new array created by .map
});


console.log(dataObjects);




console.log("------- Part4-------"); //Sorting and Manipulating Data


// from the previous part
let dataObjects4 = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }
  ];
  
 
  dataObjects4.pop(); // Step1 - Remove the last element from the sorted array.
  
  // Step2 - Insert the following object at index 1:
  const newObject1 = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
  dataObjects4.splice(1, 0, newObject1); // Insert at index 1.  0 - not removing existing items, item adding
  
  // Step3 Add the following object to the end of the array:
  const newObject2 = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
  dataObjects4.push(newObject2); // .push - add a new item
  
 console.log(dataObjects4);

  // Step final --calculate the average age
  let totalAge = 0;
  for (let i = 0; i < dataObjects4.length; i++) {
    totalAge += Number(dataObjects4[i].age); // Convert age from string to number and add to totalAge
  }
  const averageAge = totalAge / dataObjects4.length; // Calculate the average age
  
  console.log("Average age is", averageAge);
  





  console.log("------- Part5-------");   //Full Circle



//data
let data5 = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];


//extract headers
let firstObject = data5[0];       //grabs from data5
let headers5 = [];                //store headers

for (let key in firstObject) {     //loops through each property in firstObject
    if (firstObject.hasOwnProperty(key)) {
        headers5.push(key);       // Collect all keys as headers.  .push adds each header to the headers5 array.
    }
}


// Convert data objects to rows
let rows5 = [];

for (let i = 0; i < data5.length; i++) {
    let row = [];
    for (let j = 0; j < headers5.length; j++) {
        let header = headers5[j];
        let value = data5[i][header] || "";
      
        value = value.replace(/"/g, '""');  // Escape double quotes by doubling them
        row.push(`"${value}"`);  //add
    }
    rows5.push(row.join(','));  //joins headers and rows into a single string
}

// Combine headers and rows into a string
let csv = headers5.join(',') + '\n' + rows5.join('\n');

console.log(csv);
