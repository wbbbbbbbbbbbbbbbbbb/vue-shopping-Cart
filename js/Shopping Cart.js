var vm=new Vue({
		el:'#app',
		data:{
			Administrators:'webbing',
			Commoditys:[{
				imgs:'img/goods-1.jpg',
				buyName:'黄鹤楼香烟',
				give:'打火机',
				Price:'19.00',	//如何用tofixed()实现小数后两位
				countOne:'1',
				Stock:'有货',
				TotalPrice:'19.00',
			},{
				imgs:'img/goods-2.jpg',
				buyName:'加多宝',
				give:'吸管',
				Price:'8.00',
				countOne:'1',
				Stock:'有货',
				TotalPrice:'8.00',
			}],
			
		},
		methods:{
			MinusOne:function(index){
				this.Commodity(index).countOne--;
			},
			addOne:function(index){
				this.Commodity(index).countOne++;
			},
			delete:function(index){
				this.Commoditys.splice(index,1);
			}
		},
	})