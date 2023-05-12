function appendRow() {
	var firstName = document.getElementById('firstName').value;
	var lastName = document.getElementById('lastName').value;
	var gender = document.getElementById('gender').value;
	var pincode = document.getElementById('pincode').value;
	var address = document.getElementById('address').value;
	var state = document.getElementById('state').value;
	var country = document.getElementById('country').value;
	var food = document.getElementById('food').value;
  
	var table = document.getElementById('dataTable');
	var newRow = table.insertRow(table.rows.length);
  
	var cell1 = newRow.insertCell(0);
	var cell2 = newRow.insertCell(1);
	var cell3 = newRow.insertCell(2);
	var cell4 = newRow.insertCell(3);
	var cell5 = newRow.insertCell(4);
	var cell6 = newRow.insertCell(5);
	var cell7 = newRow.insertCell(6);
	var cell8 = newRow.insertCell(7);
  
	cell1.innerHTML = firstName;
	cell2.innerHTML = lastName;
	cell3.innerHTML = gender;
	cell4.innerHTML = pincode;
	cell5.innerHTML = address;
	cell6.innerHTML = state;
	cell7.innerHTML = country;
	cell8.innerHTML = food;
  
	
	document.getElementById('myForm').reset();
  }
  