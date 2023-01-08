// const languages = ['c', 'c++', 'python', 'java'];
// languages.forEach(element => {
//     console.log(element);
// });

// languages.forEach((item, index) => {
//     console.log(index, item);
// });

// const person = { 
//     name: 'john',
//     age: 50
// };
// console.log(person);
// person.name = 'new john';
// console.log(person.name);
// person.email = 'email.email.com ';//declare wanted the object & proerties(keyword)all at the top even if it is null
// console.log(person);
// console.log(person['name']);

// //curl bracket start in the start,stop with a semi colon in next line no comma in last element,elemnet in with same indentation, camel casing is recommneded,space is neede after colon

//  const him = {
//     name: 'athul',
//     age: 20,
//     experience: [
//         {
//             company:'abc',
//             years:2 
//         },
//         {
//             company:'xyz',
//             years:3 
//         }
//     ]
//  };
//  console.log(him.experience[0].company);
//  him.experience.forEach(exp=>console.log(exp.company));


//  const m1 = [
//     [1, 2],
//     [3, 4]
//  ];
//  console.log(m1);//there is another way of matrix


//  setTimeout(()=>{
//     console.log('l');
//  },5000
//  );
//  setInterval(()=>{
//     console.log('l');
//  },2000
//  );
//  console.log('completed');

 const student = {
    name: 'student 1',
    mark1: 40,
    mark2: 50,
//     // total: function(){
//     //     const extraMark = 5;
//     //     console.log(this.mark1 + this.mark2 + extraMark);
        
//     //  }
 };
// //  student.total();

// //  const copy = student;
// //  copy.name = 'new';
// //  console.log(student);
// //  console.log(copy);

// //  const copy1 = Object.assign({},student);
// //  copy1.name = 'new';
// //  console.log(student);
// //  console.log(copy1);

//  const copy1 = Object.assign({age: 15},student);
//  copy1.name = 'new';
//  console.log(student);
//  console.log(copy1);

// const marks = {
//     name: 'student 2',
//     mark1: 10
// };

//  const copy1 = Object.assign({age: 15},student,marks);
// //  copy1.name = 'new';
//  console.log(student);
//  console.log(copy1);


const student5 = {
    fullName: 'athu1',
    mark1: 50
};
// // const {fullName, mark1} = student5;
// // console.log(fullName);

// const keys = Object.keys(student5);
// // console.log(keys);
// keys.forEach(keys=>{
//     console.log(student[key]);
//     // console.log(student['key']);
   
    



    const values = Object.values(student5);
// console.log(keys);
values.forEach(value=>{
    console.log(value);
});
