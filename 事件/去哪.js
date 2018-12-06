// var money = 350; //订单金额
// var func = 4; //代金券种类
// var mm = 10; //保险
// var mmm = 0; //发票
function m1(money){
    if(money>=25 && money<50){
        pay = money - 5 +this.mm+this.mmm;
    }
    return pay;
}
function m2(money){
    if(money>=50 && money<75){
        pay = money - 10 +this.mm+this.mmm;
    }
    return pay;
}
function m3(money){
    if(money>=75 && money<100){
        pay = money - 15 +this.mm+this.mmm;
    }
    return pay;
}
function m4(money,mm,mmm){
    if(money>=75 && money<100){
       var pay = money - 20 + mm + mmm;
    }
    // return pay;
    console.log(pay);
}
m4(350,10,0);