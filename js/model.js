/* This needs to be implemented on server for security. This is just for demo purposes */

var Model = (function(){
 // Some fake data
 var data = [
 {"id":"1" , "name":"AAA", "extension":"1111", "role":"Manager",    "reportsTo":''},
 {"id":"2" , "name":"BBB", "extension":"2222", "role":"Manager",    "reportsTo":"1"},
 {"id":"3" , "name":"CCC", "extension":"3333", "role":"Individual", "reportsTo":"1"},
 {"id":"4" , "name":"DDD", "extension":"4444", "role":"Individual", "reportsTo":"2"},
 {"id":"5" , "name":"EEE", "extension":"5555", "role":"Individual", "reportsTo":"2"},
 {"id":"6" , "name":"FFF", "extension":"6666", "role":"Individual", "reportsTo":"3"},
 {"id":"7" , "name":"GGG", "extension":"7777", "role":"Individual", "reportsTo":"3"},
 {"id":"8" , "name":"HHH", "extension":"8888", "role":"Individual", "reportsTo":"4"},
 {"id":"9" , "name":"III", "extension":"9999", "role":"Intern",     "reportsTo":"4"},
 {"id":"10" , "name":"JJJ", "extension":"1212", "role":"Intern",    "reportsTo":"4"},
 {"id":"11" , "name":"KKK", "extension":"2323", "role":"Intern",    "reportsTo":"4"}
 ];
 return {
  all: function() {
    return data;
  },
  remove: function(employee) {
    data.splice(data.indexOf(employee), 1);
  },
  update: function(employeeId, employee) {
    var e = this.get(employeeId);
    data[e.index] = employee;
  },
  get: function(employeeId) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].id == employeeId) {
        return {
          data: data[i],
          index: i
        };
      }
      return null;
    }
  }
})();



/*var obj ={
checkeverything:function(){ call this.checkname()},
checkName
}*/