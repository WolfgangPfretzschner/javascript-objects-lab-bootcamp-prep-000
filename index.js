var receipe = {};


function updateObjectWithKeyAndValue(object, key, value){
      return object.assign({},key,value)
    }
 
  function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
        object[key]=value;
      return object;
  }
 function deleteFromObjectByKey(object, key){
   var newObj = object.assign({object},object);
   
 }

  function destructivelyDeleteFromObjectByKey(object, key)', function() {
    it('returns object without the delete key/value pair', function() {
      var obj = { prop: 1 }
      var newObj = destructivelyDeleteFromObjectByKey(obj, 'prop');

      expect(newObj['prop']).toBe(undefined)
    })

    it('modifies the original object', function() {
      var obj = { prop: 1 }
      var newObj = destructivelyDeleteFromObjectByKey(obj, 'prop');

      expect(obj['prop']).toBe(undefined)
    })
  })

})
