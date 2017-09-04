var BASE_URL_HTML = "";
;(function($){
	var ajaxRequest = {};

	
	ajaxRequest.articleInsert = function(obj){
		var dtd = $.Deferred();
		$.ajax({
			url:BASE_URL_HTML+'/article/insert',
			data:obj,
			type:'post',
			dataType:'json',
			success:function(data){
				if(data.status==200){
					dtd.resolve(data);
				}else if(data.status==500){
					dtd.reject(data.message);
				}
			},
			error : function() {
				dtd.reject();
			}
		});
		return dtd.promise();
	}

	ajaxRequest.getByConditions = function(obj){
		var dtd = $.Deferred();
		$.ajax({
			url:BASE_URL_HTML+'/article/getByConditions',
			data:obj,
			type:'post',
			dataType:'json',
			success:function(data){
				if(data.status==200){
					dtd.resolve(data);
				}else if(data.status==500){
					dtd.reject(data.message);
				}
			},
			error : function() {
				dtd.reject();
			}
		});
		return dtd.promise();
	}

	ajaxRequest.findOne = function(obj){
		var dtd = $.Deferred();
		$.ajax({
			url:BASE_URL_HTML+'/article/findOne',
			data:obj,
			type:'post',
			dataType:'json',
			success:function(data){
				if(data.status==200){
					dtd.resolve(data);
				}else if(data.status==500){
					dtd.reject(data.message);
				}
			},
			error : function() {
				dtd.reject();
			}
		});
		return dtd.promise();
	}

	ajaxRequest.findByIdAndUpdate = function(obj){
		var dtd = $.Deferred();
		$.ajax({
			url:BASE_URL_HTML+'/article/findByIdAndUpdate',
			data:obj,
			type:'post',
			dataType:'json',
			success:function(data){
				if(data.status==200){
					dtd.resolve(data);
				}else if(data.status==500){
					dtd.reject(data.message);
				}
			},
			error : function() {
				dtd.reject();
			}
		});
		return dtd.promise();
	}

	ajaxRequest.delArticle = function(obj){
		var dtd = $.Deferred();
		$.ajax({
			url:BASE_URL_HTML+'/article/del',
			data:obj,
			type:'post',
			dataType:'json',
			success:function(data){
				if(data.status==200){
					dtd.resolve(data);
				}else if(data.status==500){
					dtd.reject(data.message);
				}
			},
			error : function() {
				dtd.reject();
			}
		});
		return dtd.promise();
	}

	ajaxRequest.publish = function(obj){
		var dtd = $.Deferred();
		$.ajax({
			url:BASE_URL_HTML+'/article/publish',
			data:obj,
			type:'post',
			dataType:'json',
			success:function(data){
				if(data.status==200){
					dtd.resolve(data);
				}else if(data.status==500){
					dtd.reject(data.message);
				}
			},
			error : function() {
				dtd.reject();
			}
		});
		return dtd.promise();
	}

	//-----------栏目管理接口----------------//
	ajaxRequest.columnInsert = function(obj){
		var dtd = $.Deferred();
		$.ajax({
			url:BASE_URL_HTML+'/column/insert',
			data:obj,
			type:'post',
			dataType:'json',
			success:function(data){
				if(data.status==200){
					dtd.resolve(data);
				}else if(data.status==500){
					dtd.reject(data.message);
				}
			},
			error : function() {
				dtd.reject();
			}
		});
		return dtd.promise();
	}

	ajaxRequest.columnGetByConditions = function(obj){
		var dtd = $.Deferred();
		$.ajax({
			url:BASE_URL_HTML+'/column/getByConditions',
			data:obj,
			type:'post',
			dataType:'json',
			success:function(data){
				if(data.status==200){
					dtd.resolve(data);
				}else if(data.status==500){
					dtd.reject(data.message);
				}
			},
			error : function() {
				dtd.reject();
			}
		});
		return dtd.promise();
	}

	ajaxRequest.columnDel = function(obj){
		var dtd = $.Deferred();
		$.ajax({
			url:BASE_URL_HTML+'/column/del',
			data:obj,
			type:'post',
			dataType:'json',
			success:function(data){
				if(data.status==200){
					dtd.resolve(data);
				}else if(data.status==500){
					dtd.reject(data.message);
				}
			},
			error : function() {
				dtd.reject();
			}
		});
		return dtd.promise();
	}

	ajaxRequest.columnFindByIdAndUpdate = function(obj){
		var dtd = $.Deferred();
		$.ajax({
			url:BASE_URL_HTML+'/column/findByIdAndUpdate',
			data:obj,
			type:'post',
			dataType:'json',
			success:function(data){
				if(data.status==200){
					dtd.resolve(data);
				}else if(data.status==500){
					dtd.reject(data.message);
				}
			},
			error : function() {
				dtd.reject();
			}
		});
		return dtd.promise();
	}


	window.ajaxRequest = ajaxRequest;
})($);