const chai = () => {
    let username = "Varun"
    console.log(this);
}

// chai()
//  const addTwo = (n1, n2) => {
//     return n1 + n2;
//  }


//  const addTwo = (n1, n2) => n1 + n2
//  const addTwo = (n1, n2) => n1 + n2
const addTwo = (n1, n2) => ({name: "varun"})
 
 console.log(addTwo(1, 2))