
function pegaNumero(frase){
	return parseFloat(prompt(frase).replace(",","."));
}

function formataDecimal(valor){
	return (valor.toFixed(2)).replace(".",",");
}
