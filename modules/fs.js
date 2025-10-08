const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, "teste"), {}, (err) =>{
    if (err){
        console.error("Erro ao criar a pasta:", err);
    } else {
        console.log("pasta criada com sucesso!");
    }
});