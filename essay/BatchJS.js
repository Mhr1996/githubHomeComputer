(function(w,d,$){
	var batch={
		a:null,
		b:true,
		c:null,
		d:0,
		p:null,
		l:[],
		l_backups:[],//当前页面备份
		L:[],
		operate:function(){
			batch.operate.prototype.add=function(c){
				if (/&/.test(c)) {
	        		batch.l[batch.l.length]=c.split("&");
	        	}else{
	        		batch.l[batch.l.length]=c;
	        	}
	        	batch.getSelectNum();
			}
			batch.operate.prototype.splice=function(k , c){
				if (/&/.test(c)) {
	        		if (batch.l[k]&&(batch.l[k][0]+"&"+batch.l[k][1])==c) {
	        			batch.l.splice(k,1);
	        		}
	        	}else if(batch.l[k]==c){
					batch.l.splice(k,1);
	        	}
	        	batch.getSelectNum();
			}
			batch.operate.prototype.ballshow=function(k , f , c){
				if (/&/.test(c)) {
					if ((batch.l[k][0]+"&"+batch.l[k][1])==c) {
	        			batch.c.eq(f).prop("checked","checked");
	        		}
				}else if(batch.l[k]==c){
					batch.c.eq(f).prop("checked","checked");
				}
			}
		},
		getSelectNum(){
			this.d=0;
			for (var i = 0; i < batch.L.length; i++) {
				if (this.p!==batch.L[i].page) {
					this.d+=batch.L[i].length;
				}
			}
			this.d+=batch.l.length;
			if ($("#selectSum").length>0) $("#selectSum").html(this.d);
		},
		allCheck:function(){
			if (batch.a.prop("checked")) {//全选
		        $("input[name=checkedItem]").prop("checked","checked");
		        batch.l.length=0;
		        var o=new batch.operate();
		        for (var i = 0; i < this.c.length; i++) {
		        	o.add(this.c.eq(i).attr("code"));
		        }
		    }else{//取消全选
		        $("input[name=checkedItem]").removeAttr("checked");
		        batch.l.length=0;
		    }

		    batch.getSelectNum();
		},
		getcItem:function(){//获取可勾选复选框
			this.c=$("input[name=checkedItem]");
		},
		bindCheck:function(){//单个复选框
			var o=new batch.operate();
			$("input[name=checkedItem]").bind("click",function(e){
				var c=e.target.attributes["code"].value;               
				if(e.target.checked){
		        	o.add(c);
				}else{
					for (var k = 0; k < batch.c.length; k++) {
						o.splice(k,c);
					}
				}
			});
		},
		callback:function(){
			batch.getcItem();
			batch.bindCheck();
			this.a=$("#allChecked");
			if (this.b) {this.a.bind("click",function(){batch.allCheck();});this.b=false;};
			this.p=$("#pageNav b").text();

			if (batch.L.length>0) {//回显
				var o=new batch.operate();
				for (var i = 0; i < batch.L.length; i++) {
					if(batch.L[i].page==this.p){
						batch.l=[].concat(batch.L[i].code);
						for (var k = 0; k < batch.l.length; k++) {
							batch.c.each(function(f){
								o.ballshow(k , f , batch.c.eq(f).attr("code"));
							})
						}
						return;
					}
				}
			}
		},
		save:function(){
			var L=batch.L,l_=batch.l;
			if (L.length>0) {
				for (var i = 0; i < L.length; i++) {	
					if(L[i].page==this.p){//判断数组页码是否存在
						L[i]={
							page:this.p,
							code:[].concat(l_),
							length:l_.length
						}
						batch.l_backups=[].concat(batch.l);
						batch.l.length=0;
						return; 
					}
				}
			}
			if (l_.length>0) {
				L[L.length]={
					page:this.p,
					code:[].concat(l_),
					length:l_.length
				}
			}
			batch.l_backups=[].concat(batch.l);
			batch.l.length=0;
		},
		getLists:function(){
			return this.L;
		},
		listClear:function(){
			batch.l.length=0;
			batch.L.length=0;
			batch.d=0;
			if ($("#selectSum").length>0) $("#selectSum").html(0);
		},
		callbackDataL:function(){
			batch.l=[].concat(batch.l_backups);
		}
	};
	$.extend({
	    batchNewera:function(){
	  		batch.callback();
	  	}, //给复选框绑定事件 初始化
	    batchSave:function(){
	    	batch.save();
	    },
	    batchGetLists:function(){
	    	return batch.getLists();
	    },
	    batchClear:function(){
	    	batch.listClear();
	    },
	    batchNum:function(){
	    	return batch.d;
	    },
	    callbackDataL:function(){
	    	batch.callbackDataL();
	    }
	});
})(window,document,$);

/*全选 
单选 
汇总选择数据
保存当前页面数据
删除
返回汇总数据*/