var recipes = new Object();


function updateObjectWithKeyAndValue(object, key, value){
      return object.assign({},object,{[key]:value})
    }
 
  function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
        object[key]=value;
      return object;
  }
 function deleteFromObjectByKey(object, key){
   var newObj = object.assign({},object);
   delete newObj[key]
   return newObj
 }

  function destructivelyDeleteFromObjectByKey(object, key){
    return delete object[key]
  }