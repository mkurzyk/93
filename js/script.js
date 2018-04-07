var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';

var dinosaurUpper = dinosaur.toUpperCase();

console.log(dinosaurUpper);

var textReplaced = text.replace ('Velociraptor', dinosaurUpper);
var half = textReplaced.length/2;

partOfText = textReplaced.slice(0,half);

console.log(partOfText);