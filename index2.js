
window.onload = function(){
	Vue.component('optA',{
		props:['todo'],
		template:'<li>{{ todo }}++</li>'
	});
	//不要使用optA,optB等，可能是关键字
	Vue.component('ming-geng',{
		props:['todo'],
		template:'<span>{{todo}}||</span>'
	});
	new Vue({
		el:'#app',
		data:{
			items:[{name:'abc'},{name:'def'},{name:'ghi'}]
		}
	});
	new Vue({
		el:'#app2',
		data:{
			items:['zhangsan','lisi','wangwu']
		}
	});

}

