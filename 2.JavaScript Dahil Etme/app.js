
function getStudents(){
    fetch("http://localhost:8080/students")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log("Hata oluştu ", err));
}

getStudents();