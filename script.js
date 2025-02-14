// alert()

let data = [
    { id: 0, name: 'First Name', email: 'first@gmail.com' },
    { id: 1, name: 'Second Name', email: 'Second@gmail.com' },
    { id: 2, name: 'Third Name', email: 'third@gmail.com' },
]


readAll()
function readAll() {

    let tableData = document.querySelector('.data-table')
    let Item = '';
    localStorage.setItem('object', JSON.stringify(data))

    let object = localStorage.getItem('object')
    let objectData = JSON.parse(object)


    objectData.map(item => (
        Item += `
            <tr class="row align-items-center item-row">
                <td class="col-3">${item.name}</td>
                <td class="col-4">${item.email}</td>
                <td class="col-5">
                <button type="button" class="btn btn-warning" onclick="edit(${item.id})">Edit</button>
                <button type="button" class="btn btn-danger delete-btn" onclick="deleteButton(${item.id})">Delete</button>
                </td>
                </tr>
                `
    )).join('')

    tableData.innerHTML = Item;

}

function create() {
    let create = document.querySelector('.create_form')
    let update = document.querySelector('.update_form')
    create.style.display = 'block'
    update.style.display = 'none'

    readAll()
}

function add() {
    let name = document.querySelector('.name').value
    let email = document.querySelector('.email').value
    let newObj = { id: 4, name: name, email: email }
    data.push(newObj)

    let create = document.querySelector('.create_form')
    let update = document.querySelector('.update_form')
    create.style.display = 'none'
    update.style.display = 'none'

    readAll();
}

function edit(id) {

    console.log(id);
    
    document.querySelector('.update_form').style.display = 'block';
    document.querySelector('.create_form').style.display = 'none';
    let obj = data.find(rec => rec.id === id)

    document.querySelector('.uname').value = obj.name;
    document.querySelector('.uemail').value = obj.email;
    document.querySelector('.uid').value = obj.id;


}

function update() {
    let id = parseInt(document.querySelector('.uid').value);
    let name = document.querySelector('.uname').value;
    let email = document.querySelector('.uemail').value;

    let index = data.findIndex(rec => rec.id === id);
    console.log(index);
    
    data[index] = {id,name,email};
    document.querySelector('.update_form').style.display = 'none';
    
    readAll()
}

function deleteButton(id){
    let deleteItem = data.splice(id,1);
    console.log(deleteItem);
    
    readAll()
}
