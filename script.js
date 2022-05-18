function Sum() {
    let arr=Array.from(arguments)
    let array=[]
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
     if (element%2==0) {
         array.push(element*element)
         
         //tek tek elementleri kvadrata yukseldib yeni arraya elave eledim
    
     
    
        
    } 
    
    
}console.log(array) 
  //sonrada bu arrayi elementlerini toplayacam
  let sum=0;
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    sum+=element;
    
}
return sum



}
console.log(Sum(1,2,3,4))
//hazir!
//2
//arrow function kimi yazdim
 let Divide = n=> 
    n%3==0 && n%7==0




console.log(Divide(21))
//tesekurrler!