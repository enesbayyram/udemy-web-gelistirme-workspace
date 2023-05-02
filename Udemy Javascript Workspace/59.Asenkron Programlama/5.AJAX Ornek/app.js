
let table = document.querySelector("#userTable");

//timing , event , http 
function getUsers(url){
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange" , ()=>{
        if(xhr.readyState===4 && xhr.status===200){
            // console.log(JSON.parse(xhr.responseText));
            let users = JSON.parse(xhr.responseText);
            addUsersToTable(users);
        }
    })

    xhr.open("GET",url ,true);
    xhr.send();
}

function addUsersToTable(users){
    let sayac =1;
    users.forEach((user)=>{
        table.innerHTML += `<tr> 
             <td>${sayac}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.address.city}</td>
        </tr>`;

        sayac++;
    })
}

getUsers("https://jsonplaceholder.typicode.com/users");


