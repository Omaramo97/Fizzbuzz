// Write your solution below this line:

for (i = 0; i < 51; i++){
    if( i % 3 === 0 && i % 5 === 0){
      console.log('Fizzbuzz')
    } else if (i % 3 ===0){
      console.log('Fizz')
    } else if(i % 5 ===0){
      console.log('buzz')
    } else{
      console.log(i)
    }
  }