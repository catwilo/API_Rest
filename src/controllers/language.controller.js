import {
    getConnection
} from "../database/database";

const getLanguages = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, name, programmers FROM language");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
const addLanguage = async (req, res) => {
    try {
        const {name, programmers} = req.body;
        if (name == undefined | programmers == undefined) {
            res.status(400).json({message: "Mala peticion; rellene todos los campos."});
        }
        //creo un objeto de dos atributos
        const language = {name, programmers};
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO language SET ?", language);
        res.json({message: "Lenguaje agregado."});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//exporto la funcion para poder importarla desde otro lugar
export const methods = {
    getLanguages,
    addLanguage
}