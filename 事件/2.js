// var n = readInt();
// var arr=new Array(n);
// for(i=0;i<n;i++){
//     arr[i]=readInt();
// }
// var compare = function(x,y){
//     if(x<y){
//         return -1;
//     }else if(x>y){
//         return 1;
//     }else{
//         return 0;
//     }
// };
// arr.sort(compare);
// if(arr.length%2==0){
//     console.log((arr[arr.length/2-1]+arr[arr.length/2])/2);
// }else{
//     console.log(arr[(arr.length-1)/2]);
// }

// function parseXML(xml) {
//   xml = xml.replace(/<!--[\s\S]+-->/g, '');
//   var regex = /<\/?(\w+)>/g;
//   var elements = xml.match(regex);
//   if (!elements) {
//     return 'Invalid';
//   }
//   var nodes = elements.map(element => {
//     var type = element[1] === '/' ? 'end' : 'start';
//     var name = element.match(/\w+/)[0];
//     return {
//       type: type,
//       name: name
//     }
//   });
//   var stack = [];
//   nodes.forEach(node => {
//     var last = stack[stack.length - 1];
//     if (node.type === 'end' && last.type === 'start' && node.name === last.name) {
//       stack.pop();
//     } else {
//       stack.push(node);
//     }
//   });
//   if (stack.length === 0) {
//     return 'Valid';
//   } else {
//     return 'Invalid';
//   }
// }
// var line, input = '';
// while (line = read_line()) {
//   input += line;
// }
// print(parseXML(input));


// var sum = readInt();
// var patt=/^R\d{1,7}C\d{1,7}$/;
// while(sum--){
// 	trans(read_line());
// }
// function trans(a) {
//   var row,col;
//   if(patt.test(a)){
//     var num = a.match(/\d{1,7}/g)
//     row = num[0];
//     col =Number(num[1]);
//     var shang; 
//     var colB26 = [];
//     while((shang = col/26) > 1){
//         	var yu = col%26;
//         	if(yu === 0){
//         		yu = 26;
//         		shang--;
//         	}
//             colB26.unshift(String.fromCharCode(yu+64));
//             col = Math.floor(shang);
//         }
//       	colB26.unshift(String.fromCharCode(col+64));
//         col = colB26.join('');
//     print(col+row)
//   }else{
//      var num = a.match(/^([A-Z]+)(\d{1,7})$/)
//      var en_col = RegExp.$1; 
//      var col = 0;
//      row = RegExp.$2; 
//      var base = en_col.length-1;
//      for(var i=0; i<en_col.length; i++){
//        col += (en_col.charCodeAt(i)-64) *Math.pow(26,base);
//        base -= 1;
//     }
//     print('R'+row+'C'+col);
//   }
// }

// var arr = read_line().split(' ');
// var n = parseInt(arr[0]);
// var m = parseInt(arr[1]);
// var k = parseInt(arr[2]);
// var left = 0, right = m * n, mid;
// var sum;

// while(left <= right){
//   sum = 0;
//   mid = Math.floor((left + right) / 2);
//   for(var i = 1; i <= m; i++){
//     sum += mid >= n * i ? n : Math.floor(mid / i);
//   }
//   if(sum < k){
//     left = mid + 1;
//   } else {
//     right = mid - 1;
//   }
// }
// print(left);
// 
// 
console.log(undefined == null);