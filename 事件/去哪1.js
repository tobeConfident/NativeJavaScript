    var arr = read_line().split(' ');
    var func1 = arr[1]; //代金券种类
	var brr = [];
	for(var i=0;i<func1.length;i++){
        brr.push(func1[i]);
    }
	brr.sort(function(a,b){
        return a-b>0;
    });
	var func = func1[0];
	var money1 =parseInt(arr[0]);
	var mm1 = parseInt(arr[2]);
	var mmm1 = parseInt(arr[3]);
         var pay_money = {
			money:money1,
			mm:mm1,
			mmm:mmm1,
			m1:function(){
				if(this.money>=25){
		        	var pay = this.money - 5 +this.mm+this.mmm;
		        	
		   		}else{
		   			var pay = this.money+this.mm+this.mmm;
		   		}	
		   		print(pay);
		   	},
		   	m2:function(){
				if(this.money>=50){
		        	var pay = this.money - 10 +this.mm+this.mmm;
		        	
		   		}else{
		   			var pay = this.money+this.mm+this.mmm;
		   		}
		   		print(pay);
		   	},
		   	m3:function(){
				if(this.money>=75){
		        	var pay = this.money - 15 +this.mm+this.mmm;	
		   		}else{
		   			var pay = this.money+this.mm+this.mmm;
		   		}
		   		print(pay);
		   	},
		   	m4:function(){
				if(this.money>=100){
		        	var pay = this.money - 20 +this.mm+this.mmm;	
		   		}else{
		   			var pay = this.money+this.mm+this.mmm;
		   		}
		   		print(pay);
		   	},
             m5:function(){
                 var pay = this.money+this.mm+this.mmm;
             }
		}
    	if(func == 1){
            pay_money.m1();
        }else if( func ==2){
            pay_money.m2();
        }else if(func==3){
            pay_money.m3();
        }else if(func==4){
            pay_money.m4();
        }else if(func==0){
            pay_money.m5();
        }

   