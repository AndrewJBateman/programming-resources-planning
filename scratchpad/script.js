// 'use strict';

console.log(`Your screen width is: ${this.window.screen.availWidth}`);

// function whodis() {
//   console.log('this', this);
// }

const yoda = {
  face: ':-)',
  
  whodis: function() {
    console.log('normal function', this);
  },

  butWhoAmI: () => {
    console.log('thick arrow function', this);
  }
}

