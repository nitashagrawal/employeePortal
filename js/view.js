var View = (function(){

	var self  = this;
	var controller = EmployeesCtrl;
	var selectHandler = function (resp){
		if(event.target.tagName == "SPAN"){
			populateModal(event.target.getAttribute("data-id"));
		}
	}

	var populateModal = function(id){
		var e = controller.get(id);
		var empid = e.id;
		var empName = e.name;
		var empExtension = e.extension;
		var empRole = e.role;
		var empReportsTo = e.reportsTo;
		$("#myModal").attr('data-id',e.id);
		$("#name").val(empName);
		$("#extension").val(empExtension);
		$('select>option[value='+ empRole.toLowerCase()+']').attr('selected', true);
		$("#myModal").modal({"show":true});
	}


	return {

		d:function () {
			var data = new google.visualization.DataTable(),
			employeesData = controller.all();
			data.addColumn('string', 'Name');
			data.addColumn('string', 'Manager');
			data.addColumn('string', 'ToolTip');
			var rowsToAdd=[];

			for(var i in employeesData){
				var r = employeesData[i];
				rowsToAdd.push([{
					v: String(r.id),
					f: "<span data-id=" + r.id + ">" + r.name +'<br/>'+r.role+ "</span>"
				}, String(r.reportsTo), String(r.role)]);
			}
			data.addRows(rowsToAdd);

        // Create the chart.
        var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
        // Draw the chart, setting the allowHtml option to true for the tooltips.
        chart.draw(data, {allowHtml:true});
        google.visualization.events.addListener(chart,'select',selectHandler);
    },
    initialSetup:function (){
    	google.charts.load('current', {packages:["orgchart"]});
    	google.charts.setOnLoadCallback(this.d);
    	this.addListiners();
    },
    addListiners: function(){
    	var that = this;
    	
    	$("button#updateBtn").on('click', function(){
    		var id = $("#myModal").attr('data-id');
    		var e = {};
    		e.name = $("#name").val();
    		e.extension = $("#extension").val();
    		e.role = $("select#role").val();
    		var errObj = controller.update(id,e);
    		if(errObj.valid){
    			that.d();
    			$("#myModal").modal("hide");
    			return;
    		}
    		alert(errObj.msg);
    		populateModal(id);
    	});
    }
};

})();