var EmployeesCtrl = (function(){
  var model= Model;
  return {
    all: function(){
      return model.all();
    },
    update: function(employeeId,employee){
      return model.update(employeeId,employee);
    },
    get: function(employeeId) {
      return model.get(employeeId).data;
    }
  };
})();

