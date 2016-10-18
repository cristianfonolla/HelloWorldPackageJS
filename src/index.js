
function sayhelloprivated() {
    return 'Hello World ' . arguments[0];
}

exports.say = function () {
    console.log(sayhelloprivated('Cristian'));
}

//Encasular ->
//Amagar implementació
//Definir la interficie -> API Pública.