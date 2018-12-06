var n=2;
for(var i = 0;i < n; i++){
    lines = read_line();
    var a = lines[0];
    var b = lines[1];
}
var c = b.split(',');
var arr = [];		
var brr = [];
for(let i=0;i<c.length;i++){
	brr.push(c[i]);
	var reg = new RegExp(`${c[i]}`,'g'); 
	if(reg.test(a)){
		arr.push(c[i]);
	}
}
if(arr == brr){
	print(true);
}else{
	print(false);
}
