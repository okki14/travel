//untuk back end
export const priceFormatter = (num) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(num);
};


export const API_URLbe='http://localhost:8000'
export const API_URL='http://localhost:4000'

export const dateformat=(n)=>{
var today = new Date(n);
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today =dd + '-' + mm + '-' + yyyy;
return today
}

export function credit(input){
  var angka=0
  var output=0
  var y=input
  var a
  do {
      a=y%(10)
      var b
      y=(y-a)/10
      if(angka%2==1){
          a*=2
          if(a>9){
              b=a%10
              output+=(b+1)
          }else{
              output+=a
          }
      }else{
          output+=a
      }
      angka++
  } while (y>0);
  // console.log(angka)
  if(output%10==0){
    return true
  }else{
      return false
  } 
}










//untuk frontend
// export const priceFormatter = (num) => {
//   return new Intl.NumberFormat("id-ID", {
//     style: "currency",
//     currency: "IDR",
//   }).format(num);
// };


// export const API_URL='http://localhost:4000'

// export const dateformat=(n)=>{
// var today = new Date(n);
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();

// today =dd + '-' + mm + '-' + yyyy;
// return today
// }

// export function credit(input){
//   var angka=0
//   var output=0
//   var y=input
//   var a
//   do {
//       a=y%(10)
//       var b
//       y=(y-a)/10
//       if(angka%2==1){
//           a*=2
//           if(a>9){
//               b=a%10
//               output+=(b+1)
//           }else{
//               output+=a
//           }
//       }else{
//           output+=a
//       }
//       angka++
//   } while (y>0);
//   // console.log(angka)
//   if(output%10==0){
//     return true
//   }else{
//       return false
//   } 
// }