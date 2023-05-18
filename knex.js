const knex = require("knex")({
    client: "mysql",
    connection: {
        host: "localhost",
        user: "root",
        password: "shivani123",
        database: "shiva"
    },
});


function createtable(){
    knex.schema.createTable('learn_knex', function (table) {
        table.primary('Id');
        table.increments('Id');
        table.string('Name');
        table.string('Surname');
        table.string('Email');
    })
    .then((data)=>{
        console.log('table created');
    })
    .catch((err)=>{
        console.log(err);
    })
}
// }createtable()

// knex('users')
//   .insert({ email: 'hi@example.com' })

function insert_data(){
    knex("learn_knex").insert({"name": "juhi", "Surname": "rani","Email":"juhi21@navgurukul.org"}).then(()=>{
        console.log("insert_data succ")

    })
    .catch((err)=>{
        console.log(err)
    })
}
// }insert_data()

function get_data(){
    knex.select("*").from("learn_knex").then((data)=>{
        console.log(data)
    })
    .catch((err)=>{
        console.log(err)
    })
}
// }get_data()

// function deleted_data(){
//     knex .
// }


// knex('shiva')
//   .where('name','shivani')
//   .del()
//   .then(() => {
//     console.log('Row deleted successfully.');
//   })
//   .catch((err) => {
//     console.log(err);
//   });




// knex('learn_knex')
//   .where({ id: 3 })
//   .update({ name: 'John Doe', email: 'johndoe@example.com' })
//   .then(() => {
//     console.log('Record updated successfully');
//     knex.destroy();
//   })
//   .catch((err) => {
//     console.error(err);
//     knex.destroy();
//   });


knex.select('id', 'name', 'email')
  .from('learn_knex')
  .where({ name: 'juhi' })
  .then((rows) => {
    console.log(rows);
    knex.destroy();
  })
  .catch((err) => {
    console.error(err);
    knex.destroy();
  });