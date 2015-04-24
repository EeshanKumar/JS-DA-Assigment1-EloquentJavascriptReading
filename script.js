var arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce(function(current, newValues) {
  return current.concat(newValues); 
}));
// → [1, 2, 3, 4, 5, 6]





function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function hasKnownMother(person) {
  return byName[person.mother];
}

function motherChildAgeDifference(person) {
  return person.born - byName[person.mother].born;
}

console.log(average(ancestry.filter(hasKnownMother).map(motherChildAgeDifference)));
                                     
// → 31.2




function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function age(person) {
  return person.died - person.born;
}

function centuryOfPerson(person) {
  return Math.ceil(person.died / 100);
}

function groupBy(array, grouper) {
  var grouped = {};
  array.forEach(function(value) {
    var group = grouper(value);
    if (!(grouped[group])) grouped[group] = [];
    grouped[grouper(value)].push(value);
  });
  return grouped;
}

var personByCentury = groupBy(ancestry, centuryOfPerson);

for (var century in personByCentury) {
  console.log(century + ": " + average(personByCentury[century].map(age)));
}

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94





function every(array, predicate) {
  for (var i = 0; i < array.length; i++) {
    if (!(predicate(array[i]))) return false;
  }
  return true;
}

function some(array, predicate) {
  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i])) return true;
  }
  return false;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false