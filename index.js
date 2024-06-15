
//spread operator ...state

var state={Name:"Anubhav",Age:20};//state ko ham change nahi kar sakte but change karna ho to abhi ke liye yahi rule hai
var copy={...state};//state ko directly nahi change kar sakte 
copy.Name="Shukla";//to pahle state ka  copy banao
state =copy;//fir copy me change karo fir value change ho jayega


//destructuring


var obj ={name:"Anubhav Shukla",age:20};
const {name}=obj.name;


var arr=[12,function(){},13];
const [rohit,,abhay]=arr;


//import and export
//component banate hai ,componet ka matlab hota hai page ka ek hissa jaise navbar ,sidebar,cart,landing,second,ab dikkat ye aati hai har hissa alag alag component hai aur components ko alag-alag  files me rakhte hai to inko last me jodna bhi padta hai jodne ke liye use hota import and export 


//Arrow function
const good=()=>{
console.log("Anubhav");
}
good();
const better=()=>{

}

const best=()=>{

}

//fat arrow function with one  parameter
//agar singal parameter ho to hata sakte ho bracket ko agr ek se adhik ho to lagana compulsary hai

//singal parameter
const abcd1=val=>{
    console.log(val)
}


//double parameter
const abcd=(val,val2)=>{
    console.log(val);
}

//fat arrow with impilicit return;

//without bracket
const abcd3=()=>12;
console.log(abcd()+1);


//agar brackets{} laga diye to likhna padega return
const abcd5=()=>{
    return 10;
}
console.log("Number "+abcd5());

///jab bbhi hame object return karna hota hai to ham us object ko bracket fir curlybraces ke andar likhte hai

const abcde=()=>({name:'abcd',age:12})
console.log(abcde());



//Map  & filter

//dono hi array ke upar work karte hai array par kuch perform karna aur ek naya array return karna


var arr =[1,2,3,4,5];

//map- har element par kuch karo and naye array mein rakho
//foreach ke andar function aata hai function ke andar aata hai value
const ans=arr.map(val=>val*2);

console.log(ans);
//map ke andar return krne ke wajah se hi element naye array mein place hote hai

//state ek arr hai usmein number hai and aapko sabme +1 karna hai

var state =[1,2,3,4,5];
const ans1=state.map(elem=>elem+1);
console.log(ans1);

var state=[1,2,3,4,5,6,7,8,9];
const ans2=state.map(elem=> elem>5 ? elem+5 : elem)

console.log(ans2);

//map aur filter mein ek hi farak hai map saare bande lautata hai matlab ki count kam nahi hoga,filter bando ko kam kar sakta hai

//ek aaray mein sabhi nums jo ki 5 se bade hai unmein 10 add karo