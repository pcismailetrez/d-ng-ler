let userh1=document.querySelector("#id")
userh1.innerHTML='bilgi değişti'

let boşdizi=[null];
for(var i=0;i<5;i++){
    console.log(i);
    boşdizi+=i;
    userh1.innerHTML=boşdizi;

}
//  10 dan geriye sayan for 
for(var i =4;i>=0;i--){
    console.log( i)
}
for(var i =0;i<=50;i++){
    if(i%2==0){
        console.log("cift sayılar : "+i)
    }else{
        console.log("tek sayılar : "+ i)
    }
  
}


// ünlü ünsüzleri ayırma ödev sorum 

// function vowelsAndConsonants(s) {
//     let unlu =[];
//     let unsuz=[];
//     for(var i =0;i<s.length;i++){
//         if(s[i]==='a'|| s[i]==='e'||s[i]==='i'||s[i]==='o'){
//             unlu.push(s[i]);
//         }else{
//             unsuz.push(s[i]);
//         }
        
//     }
    
//     for(var i=0;i<unlu.length;i++){
//         console.log(unlu[i])
//     }
//      for(var i=0;i<unsuz.length;i++){
//         console.log(unsuz[i])
//     }
// }
//   continue yapısı o işlemi geç anlamına gelir döngü bu şart sağlıyor ise geçsin anlamına gelir.
for(var i=0;i<5;i++){
    if(i==3){
        continue
    }
    console.log(i)
}
//  brek ise bitti buraya kadar burdan sonra çalışma anlamına gelir .
for(var i =0;i<40;i++){
    if(i==2){
        break;
    }
    console.log(i);

}