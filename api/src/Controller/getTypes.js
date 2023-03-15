const {Type} = require('../db');
const axios = require("axios"); 

const getTypes = async (req, res, next) => {
    try {
        const infoBD = await Type.findAll({ attributes: {exclude : ["createdAt", "updatedAt"]}, }); 
        res.json(infoBD); 
    } catch (error) {
        next(error); 
    }
}

const storeAll = async () => {
    try {
        const urlApi = await axios.get('https://pokeapi.co/api/v2/type');
        const infoApi = await urlApi.data.results.map ((e) => {
            return {
                id: e.url.split('/').splice(6, 1).join(),
                name: e.name,
            }
        });
        await Type.bulkCreate(infoApi);
        console.log('Types into the Db');
    } catch (error) {
        console.log("Unexpected error while storing pokemon types in the DB");
    }
};

module.exports = {
    getTypes,
    storeAll
}