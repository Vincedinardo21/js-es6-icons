const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

let myContainer = document.querySelector(".container");
let clicked = document.getElementById("clicked");

clicked.addEventListener("change", 
	function(){
		console.log("selezionato: ", this.value);

		// Cambiare con uno switch
		if(this.value === "all"){
			console.log("Selezionati tutti");
		} else if(this.value === "animal") {
			console.log("Selezionati solo animali");
		} else if(this.value === "vegetable") {
			console.log("Selezionati solo i vegetali");
		} else if(this.value === "user") {
			console.log("Selezionati solo gli users");
		}
	}
);

for(let key in icons){
	let myCard = document.createElement("div");
	myCard.classList.add("card");
	myContainer.append(myCard);

	// Icone
	let icona = document.createElement("i");
	icona.classList.add("fas");
	icona.classList.add(icons[key].prefix + (icons[key].name));
	icona.classList.add(icons[key].color);
	icona.append("");
	myCard.append(icona);

	// Nomi
	let nomeIcona = document.createElement("span");
	nomeIcona.append(icons[key].name);
	myCard.append(nomeIcona);
}