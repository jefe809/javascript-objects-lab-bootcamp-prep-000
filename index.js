var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  var recipes = Object.assign({}, recipes, [{key} , value]);
  return recipes;
}