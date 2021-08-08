// hihi leetCode 
//Problem 1:
var reverse = function(x) {
  const isNegative = x< 0 ? true : false;
  
  if (isNegative){
      x = x *-1;
  }
  
  let reversed = 0;
  while(x>0){
      reversed = (reversed * 10) + (x % 10);
      
      x = parseInt(x/10);
  }
  
  if(reversed > 2**31){
      return 0;
  }
  
  return isNegative? reversed * -1 : reversed;
};
console.log(reverse(-123));
//Problem 2:
var romanToInt = function(s){
    const map = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000, };

    let result = 0;

    for (i=0; i < s.length; i++){
        const now = map[s[i]];
        const next = map[s[i+1]];
        if (now < next){
            result += next - now 
            // nếu now < next thì next - now vd:IV -> 5 - 1 = 4
            i++
        } else {
            result += now
            // ngược lại thì cộng dồn lại
        }
    } 
    return result; 
}

// console.log(romanToInt("MCMXCVV"));


//Problem 3:

const API_url = 'https://60ae0d5e80a61f00173324bc.mockapi.io/products';
var lastUrl = ""
getProduct(API_url)

function getProduct(url){
  lastUrl = url;
  fetch(url)
  .then((res) => res.json())
  .then((data) =>{
      console.log(data)
      renderProduct(data);      
  })
}



function renderProduct(data){
  const main = document.querySelector("#main");
  main.innerHTML = "";
 
  data.forEach((product) =>{
  const {id,errorDescription,name,sku,image,color} = product;
  const imgdefault  = "https://lh3.googleusercontent.com/Tv5UeL3K9mNR0iusP5wNRwZxJtgyxARUKddpKeMrgqb8FS0xJauJV2gddSDfiZPHxwJVWeHRHVFVB9qRcw=w500-rw"
  main.insertAdjacentHTML("beforeend",
   `
   <div  class="card">
      <img src="${image || imgdefault }" alt="" class="card-image"/>
      <div class="card-content">
        <div class="card-top">
          <h3 class="card-title">Name: ${name}</h3>
          <h3 class="card-title">Error: ${errorDescription}</h3>
          <h3 class="card-title">SKU: ${sku}</h3>
          <h3 class="card-title">ID: ${id}</h3>
          <h3 class="card-title">Color: ${color || 0}</h3>
        </div>     
      </div>
  </div>    
  
  `);
   main.insertAdjacentHTML
  });
  

  
}