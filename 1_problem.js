//javascript For in loop

function printObjectProperties(obj) {
    if (Object.keys(obj).length === 0) {
      console.log("Object is empty");
      return;
    }
  
    for (let property in obj) {
      if (obj.hasOwnProperty(property)) {
        console.log(`${property}: ${obj[property]}`);
      }
    }
  }
  
  
  const sampleObject = {
    name: "Ahad",
    age: 28,
    city: "Dhaka"
  };
  
  printObjectProperties(sampleObject);
  
  const emptyObject = {};
  
  printObjectProperties(emptyObject);
  