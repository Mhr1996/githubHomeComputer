1. <th><input id="allChecked" type="checkbox"></th>

2. <script type="text/javascript" src="./js/BatchJS.js"></script>

3.pageNav.go = function(p, pn) {
	if ($.batchNum()>500) {
		layer.msg("勾选数据过多，请先提交");
		return;
	}
	$.batchSave();
}

4. '<td><label for="checkbox"><input name="checkedItem" type="checkbox" code="关键code"></label></td>'

5.$.batchNewera();

6.
function _del(){
	layer.confirm('确定删除所选数据吗？', {
		btn: ['确定','取消'] 
	}, function(){
		$.batchSave();
		var List=$.batchGetLists();
		if (List.length>0) {
			layer.closeAll('dialog');
			var data=[];
			for (var i = 0; i < List.length; i++) {
				if (List[i].code.length>0) {
					for (var h = 0; h < List[i].code.length; h++) {
						data[data.length]={
							adminCode:List[i].code[h][0],
							platformCode:List[i].code[h][1]
						}
					}
				}
			}
			data = JSON.stringify(data);
			$.ajax({
				url:"../bindCompany1/deleteBindCompanys1.do",
				type:"post",
				dataType:"json",
				data:data,
				contentType:"application/json",
				success:function(r){
					if (r.status==0) {
						layer.msg("删除成功");
						search($("#pageNav b").text());
					}else{
						layer.msg(r.msg);
					}
				},
				error:function(){layer.msg("服务器异常!"); }
			})
		}else{
			layer.msg("请选择数据");
		}
	}, function(){});
}

7.function search(){
	$.batchClear();
}