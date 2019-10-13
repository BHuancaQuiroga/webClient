class Funda{

	constructor(nom, ref, categoria, preu){
		this.nom = nom;
		this.ref = ref;
		this.categoria = categoria;
		this.preu = preu;
	}

	info(){
		return this.nom + "	" + this.ref + "	" + this.categoria  + "	" + this.preu;
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