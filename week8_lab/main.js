function Chicken(name, age) {
  this.name = name;
  this.age = age;
  this.type = "Chicken";
  this.image = "chicken.png";
}

function Duck(name, age) {
  this.name = name;
  this.age = age;
  this.type = "Duck";
  this.image = "duck.png";
}

function Fox(name, age) {
  this.name = name;
  this.age = age;
  this.type = "Fox";
  this.image = "fox.png";
}

var animals = [new Chicken(), new Duck(), new Fox()];
var names = ["Kito", "Kato", "Rue", "Brown", "Coco"];


function generateRandomIndex(maxIndex){
	return Math.floor(Math.random() * maxIndex);
}



function generateRandomName(){
	var randomIndex = generateRandomIndex(names.length);
	return names[randomIndex];
}


function generateRandomAge(){
	var randomAge = generateRandomIndex(5);
	return randomAge;
}

function generateRandomAnimal(){
	var randomIdx = generateRandomIndex(animals.length);
	var randomAnimal = animals[randomIdx];
	if (randomAnimal instanceof Chicken){
		return new Chicken(generateRandomName(), generateRandomAge());
	}
	else if (randomAnimal instanceof Duck){
		return new Duck(generateRandomName(), generateRandomAge());
	}
	else if (randomAnimal instanceof Fox){
		return new Fox(generateRandomName(), generateRandomAge());
	}
}



$(document).ready(function(){
  var animal = generateRandomAnimal();
  // fill in code
  $("#animal-properties").text(animal.name + "  " + animal.age + "years old");
  $("#animal-img").attr("src", animal.image);
  $("#button-storage").click(function() {
  	localStorage.setItem("savedAnimal", JSON.stringify(animal));
  	$("#button-storage").css("display", "none");
    $("#button-text").text("Saved");
  });

});




