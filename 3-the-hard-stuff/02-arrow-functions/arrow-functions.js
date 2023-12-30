
//
// Code Moves - Arrow Functions - Sample code
//


let func = (x, y) => {
  return x * y;
}
func();


let plusOne = (x) => x + 1;
console.log(plusOne(7)); 


let sayHi = () => console.log("Hi");
sayHi();


let monthFr = () => new Date().toLocaleString('fr',{month:'long'});
console.log(monthFr());


let dayOfWeek = () => {  
  const date = new Date();
  return date.toLocaleDateString('en-US', { weekday: 'long',});
};
console.log(dayOfWeek()); 


let getDayOfWeek = (date, locale) => {
   const newdate = new Date(date);
   return newdate.toLocaleDateString(locale, { weekday: 'long',})
};
console.log(getDayOfWeek('2024-01-10', 'en-US'));
