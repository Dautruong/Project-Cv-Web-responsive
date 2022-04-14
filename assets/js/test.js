function SaveContact(){

	//data lay du lieu ma day len action cua controller
	let data ={
		name = $("#name").val();
		email: jQuery("#email").val,
		
	};
	//$ === jQuery
	// json == javascript object
	jQuery.ajax({
		url:"/ajax/contact",	//->action
		type:"post",
		contentType : "application/json",
		data:JSON.stringify(data),
		
		dataType:"json",//Kieu du lieu tra ve tu controller la json
		
		success: function(jsonResult){
			alert("Da lu thanh cong dia chi email"+ jsonResult.message.email);
		},
		error: function(jqXhr, textStatus, errorMessage){//errorcallback
		}
	});
}