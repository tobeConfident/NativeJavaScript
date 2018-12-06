var str = "aabbccddefg",arr = [];
var brr = [];
var len = str.length;
for (var i = 0;i < len; i++) {
    arr[str[i]] = (arr[str[i]] + 1) || 1;
}
for (var i = 0; i < len; i++) {
    if(arr[str[i]]<2){
    	brr.push(str[i]);
    }
}
console.log(brr[0]);
// 
//  var m= 1, j = k = 0; 
//     function add(n) { 
//         return n = n+1; 
// 　 } 
//     y = add(m); 
//     console.log(y);
//     function add(n) { 
//         return n = n + 3; 
//     } 
// z = add(m);
// console.log(z);


// var A = {
// 	n:4399
// };
// var B = function(){
// 	this.n=9999;
// };
// var C = function(){
// 	var n = 8888;
// };
// B.prototype = A;
// C.prototype = A;
// var b = new B();
// var c = new C();
// A.n++;
// console.log(b.n);
// console.log(c.n);




