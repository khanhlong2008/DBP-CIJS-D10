//Problem 1
let Users = ([
	{name: "Angelina Jolie",  age: 8},
	{name: "Eric Jones",  age: 2},
	{name: "Paris Hilton",  age: 5},
	{name: "Kayne West", age: 16},
	{ name: "Bob Ziroll", age: 100}
]);
Users = Users.map((usersItem)=>{
  return(`<div><h1> ${usersItem.name} <h1><h2> ${usersItem.age} <h2><div>`)
  }
)
// console.log(Users)

//Problem 2 
function students(People)
{
 let result = []; 
  for (let i = 0; i < People.length; i++){
    let ele = People[i];
    if(!(People[i].gender === 'female')){
      result.push(ele)
    }
  }
  return result;
}
// console.log(students ([
//   { name: 'Lan', gender: 'female' },
//   { name: 'Linh', gender: 'female' },
//   { name: 'Trung', gender: 'male' },
//   { name: 'Peter', gender: 'gay' }
// ]));
function bai2(arr = []){
  return arr.filter((item) => item.gender !== 'female')
}
// console.log(bai2([
//    { name: 'Lan', gender: 'female' },
//    { name: 'Linh', gender: 'female' },
//    { name: 'Trung', gender: 'male' },
//   { name: 'Peter', gender: 'gay' }
//   ]))


//Problem 3
function Anagrams (strs){
  const result = {};
  for(let i = 0; i < strs.length; i++){
    let sort = strs[i].split('').sort().join('');
    if(!result[sort]){
      result[sort] = [strs[i]]
    }else{
      result[sort].push(strs[i])
    }
  }
  return Object.values(result)
}
// console.log(Anagrams(["eat","tea","tan","ate","nat","bat"]))

//Problem 4 
 function  singleNumber (nums) {
  //  if(nums.length == 1){
  //    return arr[0];
  //  }
  var tmp = 0;
  for (var i = 0; i < nums.length; i++) {
    tmp ^= nums[i];
  }
  return tmp;
};
// console.log(singleNumber([2,2,1]))
// console.log(singleNumber([4,3,2,3,2]))
console.log(singleNumber([1]))