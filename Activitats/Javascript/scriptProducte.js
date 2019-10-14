class Funda{

	constructor(nom, ref, categoria, preu, moneda){
		this.nom = nom;
		this.ref = ref;
		this.categoria = categoria;
		this.preu = preu;
		this.moneda = "€";
	}

	info(){
		return this.nom + " --- " + this.ref + " --- " + this.categoria  + " --- " + this.preu+this.moneda;
	}

	getNom(){
		return this.nom;
	}

	getRef(){
		return this.ref;
	}

	getCategoria(){
		return this.categoria;
	}

	getPreu(){
		return this.preu;
	}
}