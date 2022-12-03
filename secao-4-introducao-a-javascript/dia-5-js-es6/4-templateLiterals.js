//TEMPLATE LITERAL
//CRASE/ACENTO GRAVE - BACKTICK ``

const evenOrOdd = (number) => {
    if(number % 2 === 0){
      return 'PAR';
    } else {
      return 'ÍMPAR';
    }
  }
  
  let number = 19;
  
  console.log('O número ' + number + ' é: ' + evenOrOdd(number));
  console.log(`O número ${number} é: ${evenOrOdd(number)}`);