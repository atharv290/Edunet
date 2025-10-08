//console.log("External JS file");
function evenodd(){
    let n = 9
    let arr = [10,3,5,6,4,7,9,2,8];
    for(let i=0;i<=n;i++){
        if(arr[i]%2==0){
            console.log(arr[i] + " is even");
        }
        else{
            console.log(arr[i]+ " is odd");
        }
    }
}
//evenodd();
function findStudent(){
    const students = [
        {name: "Atharva", age: 20},
        {name: "Yash", age: 15},
        {name: "Vaibhav", age: 12},
        {name: "Adi", age: 17}
    ]
    students.forEach(student => {
        if(student.age>15){
            console.log(student.name );
        }
    });
}
findStudent();