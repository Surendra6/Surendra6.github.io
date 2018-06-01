function onSubmit(){
	var record = {
					field1: document.getElementById("field1").value,
					field2: document.getElementById("field2").value,
					field3: document.getElementById("field3").value,
					field4: document.getElementById("field4").value
				};
	var totalRecords = [];
	if(localStorage.totalRecords != undefined)
		totalRecords = JSON.parse(localStorage.totalRecords)
	totalRecords.push(record);
	localStorage.totalRecords = JSON.stringify(totalRecords);
	window.location = 'productDetails.html';

		
}

function onProductDetailsLoad(){	
	var totalRecords = JSON.parse(localStorage.totalRecords);
	var temp = "";
	var heading = "<div id='grid_heading'>"+
				"<div class='grid_item'>Product Name</div>"+
				"<div class='grid_item'>Description</div>"+
				"<div class='grid_item'>Model</div>"+
				"<div class='grid_item'>Year</div>"+
				"<div class='grid_last_column'>Delete Product</div>"+
			"</div>";
	temp = heading;
	for(var i=0; i < totalRecords.length; i++){		
		var newRecord = "<div>"+
							"<div class='grid_item'>"+totalRecords[i].field1+"</div>"+
							"<div class='grid_item'>"+totalRecords[i].field2+"</div>"+
							"<div class='grid_item'>"+totalRecords[i].field3+"</div>"+
							"<div class='grid_item'>"+totalRecords[i].field4+"</div>"+
							"<div class='grid_last_column'><input type='button' value='Delete' class='btnDeleteCls' id = '"+i+"' onclick='selectRecord(this.id)'></div>"+
						"</div>";
		temp = temp + newRecord;		
	}
	document.getElementById("grid").innerHTML = temp;	
}

function onClear(){
}

function add(){
	window.location = 'main.html';
}

function deleteRecord(){

}

function selectRecord(id){
	var selectedIndex = parseInt(id);
	var totalRecords = JSON.parse(localStorage.totalRecords);
	totalRecords.splice(selectedIndex, 1);
	localStorage.totalRecords = JSON.stringify(totalRecords);
	onProductDetailsLoad();
}