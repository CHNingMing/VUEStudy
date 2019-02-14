document.write('It works.');
window.onload = function(){
	var vue = new Vue({
		el: '#spanApp',
		data:{
			showSpan:'First Vue Data;',
		}
	});
	new Vue({
		el: '#spanDemo',
		data:{
			message : "页面加载于"+new Date().toLocaleString()
		}
	});
	new Vue({
		el: '#displaySpan',
		data:{
			message : "span文本",
			display : true
		}
	});
	new Vue({
		el: '#forSpan',
		data:{
			spans:[
				{text:'学习javascript'},
				{text:'学习Vue'},
				{text:'整个🐂项目'}
			]
		}
	});
	new Vue({
		el:"#btnDemo",
		methods:{
			alertDemo:function(){
				alert('test!');
			}
		}
	});
	new Vue({
		el:'#modelDom',
		data:{
			textValue: "abc"
		}
	});
}

