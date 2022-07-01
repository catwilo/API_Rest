const getLanguages = (req, res) => {
    res.json("Prueba desde controllers folder");
};

//exporto la funcion para poder importarla desde otro lugar
export const methods = {
    getLanguages
}