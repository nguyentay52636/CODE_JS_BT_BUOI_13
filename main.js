// bài 1 :  Tính tiền lương nhân viên 
// input : songaylam ; 
// xuli:  tienluong =  0  ; 
//  tienluong = luong1ngay*songaylam ; 
//  output ; tienluong 
document.getElementById('btntinhtien').onclick = function(){
var luong1ngay = 100000 ; 
var songaylam  = document.getElementById('songaylam').value ; 
var tienluong =  luong1ngay*songaylam ; 
document.getElementById('tongluong').innerHTML = tienluong;
}
// bài 2 : Tính giá trị trung Bình 
// input : so1 , so2 .. so5 ; 
// xuli:  var tb   = (so1+so2..+so5)/5  ; 
// output :  tb ; 
document.getElementById('btntrungbinh').onclick =function(){
var so1 = document.getElementById('so1').value ; 
var so2 = document.getElementById('so2').value ; 
var so3 = document.getElementById('so3').value ; 
var so4 = document.getElementById('so4').value ; 
var so5 = document.getElementById('so5').value ; 
var tb = (so1 + so2 + so3 +so4+so5)/5 ; 
document.getElementById('btnketqua').innerHTML = tb ; 
}
// bài 3  : Quy đôi tiền USD -> VND 
// input var inra ; 
//       const  usd = 23.500; 
//        
// xuli ; tinhtien = usd*23.500
// output : tinhtien = ? 
       
document.getElementById('btnquydoi').onclick = function(){
const USD = 23.500 ; 
var nhapUSD = document.getElementById('nhapUSD').value ; 
tinhtien = nhapUSD*USD ; 
document.getElementById('inraketqua').innerHTML = tinhtien ; 
}
// bai 4 : 
// input : length ,width 
// xu li : var P =Number(length+width)*2 ; 
//         var s =Number(length*width) ; 
// output : p = ?  s = ? 

document.getElementById('btntinh').onclick = function(){
var length =parseInt( document.getElementById('chieudai').value ) ; 
var width  =parseInt( document.getElementById('chieurong').value) ; 
var S = (length*width) ; 
var P =2*(length+width); 
document.getElementById('chuvila').innerHTML = P ; 
document.getElementById('dientichla').innerHTML = S; 
}
// input so =   ? 
// xuli :    int hangchuc =so/10 ; 
//           int hangdonvi = so%10 ; 
//  tongso = hangchuc+hangdonvi ; 
//  output: tongso =? 
document.getElementById('btntinhso').onclick = function(){
 var so = document.getElementById('nhapso').value ; 
 var tongso = 0 ; 
 const hangchuc = Math.floor(so/10) ; 
 const hangdonvi = Math.floor(so%10) ; 
 tongso = hangchuc +hangdonvi ; 
 document.getElementById('ketquatongso').innerHTML = hangchuc+ "+" +hangdonvi+"+" +"="+tongso; 

}