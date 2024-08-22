let students = ['johongir',"alan","safina","laylo","azim","farxod","alisher","jasur","islom"]
let username = prompt("Введите имя которое хотите удалить!").trim().toLowerCase()
let index = students.indexOf(username)

if (students.includes(username)) {
    students.splice(index,1)
} else {
    alert("Сорри но такого имени нету в списке")
}

console.log(
    students,
   
);
