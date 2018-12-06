var n = readInt();
var arr=new Array(n);
for(var i=0;i<n;i++){
    arr[i]=readInt();
}
var crr = arr.toString();
for(var i=0;i<crr.length;i++){
	var str = crr[i].replace(/,/,'');
}
var brr = ['360','306','036','063','603','630'];
for(var i=0;i<brr.length;i++){
	var reg = new RegExp(`${brr[i]}`,'g');
	if(reg.test(str)){
		var a = str.replace(brr[i],"");
		var len = a.length;
	}else{
		var len = arr.length;
	}
}
print(len);
