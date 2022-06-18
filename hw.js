const array = [
    {name: 'Ahmed', age: 20, height: 178, gender: 'male' ,  mass: 80, eyecolor: 'blue' },
    {name: 'mike', age: 23, height: 181, gender: 'male' ,  mass: 59, eyecolor: 'brown'},
    {name: 'anna', age: 38, height: 175, gender: 'female', mass: 60, eyecolor: 'blue'},
    {name: 'judy', age: 44, height: 170, gender: 'female', mass: 170, eyecolor: 'green'}
  ];

  //Q1:Map
const result1 = array.map(function(params) {
    return [params.name, params.height];
  });
  console.log("----Get array of objects with just name and height properties----");
  console.log(result1);
  const result2 = array.map(function(params) {
    return params.name;
  });
  console.log(result2);
  //Q2:Reduce
  const result3=array.reduce((p,c)=> p+c.mass,0);
  console.log(result3);
  const result12=array.reduce((p,c)=> p+c.name.length,0);
  console.log(result12);
  //Q3:Filter
  const result4 = array.filter(function(params) {
    return params.mass>100;
  });
  console.log(result3);
  const result5 = array.filter(function(params) {
    return params.gender === "female"});
    console.log(result5);
    //Q4:Sort
  const result6 = array.sort(function(a,b) {
      return a.name-b.name;})
      console.log(result6);
  const result7 = array.sort(function(a,b) {
        return a.gender-b.gender;})
        console.log(result7);
    //Q5:Every
  const result8 = array.every(function(element) {
      return element.eyecolor==="blue";});
      console.log(result8);
   const result9 = array.every(function(element) {
        return element.gender==="male";});
        console.log(result9);
    //Q6:Some
  const result10 = array.some(function(element) {
      return element.gender==="male";});
      console.log(result10);
  const result11 = array.some(function(element) {
        return element.mass<50;});
        console.log(result11);
    
      


  


  