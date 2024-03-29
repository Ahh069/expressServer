const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
})

const users = [
    {id:1, user:'John', flavor: 'Nacho'},
    {id:2, user:'David', flavor: 'Salt and Pepper'},
    {id:3, user:'Lynn', flavor: 'Barbeque'},
];
function getUserById(userId) {
    return users.find(user => user.id === userId);
  }
  function getUsers() {
    return users;
  }
  
  module.exports = { getUserById, getUsers };

app.get('/chips', (req, res) => {
    res.send(chips);
})

app.get("/user/:chips/:flavor/:bags"), (req, res) => {
    res.send($req.params);
};

// app.get('/user/:id', (req. res) => {
//     const user = user.find (c => c.id === parseInt(req.params.id));
//     if (!user) res.status(404).send('this is wrong');
//     res.send(user);

// });

// const myForm = document.getElementById(myForm);
// myForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     alert(`Submitted:
//     ${myForm.querySelector("input").value}`);
// });


















app.listen(PORT, () => {
    console.log(`Server is listening on port:${PORT}`);
})