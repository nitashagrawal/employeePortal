var View = (function(){
	return {
		d:function () {
		var data = new google.visualization.DataTable(),
		employeesData = EmployeesCtrl.all();
          data.addColumn('string', 'Name');
          data.addColumn('string', 'Manager');
          data.addColumn('string', 'ToolTip');
          var rowsToAdd=[];

          for(var i in employeesData){
            var r = employeesData[i];
            rowsToAdd.push([{v:String(r.id),f:r.name+"<span>"+r.role+"</span>"}, String(r.reportsTo), String(r.role)]);
          }
          data.addRows(rowsToAdd);

        // Create the chart.
        var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
        // Draw the chart, setting the allowHtml option to true for the tooltips.
        chart.draw(data, {allowHtml:true});
	},
	initialSetup:function (){
		google.charts.load('current', {packages:["orgchart"]});
        google.charts.setOnLoadCallback(this.d);
	}
};

})();