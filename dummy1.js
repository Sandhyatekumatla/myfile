//string methods....
//length()
// const mystring="sandhya";
// const stringLength=mystring.length;
// console.log(stringLength);

//concat()
// const name="sandy" ;
// const anothername=" come here" ;
// const string =name.concat(anothername," !Welcome to our Website.");
// console.log(string);

// let mystring="hello,";
// mystring+=(" guys");
// console.log(mystring);

//trim()
// const userinput="   come to   hyd   ";
// const trimmeduserinput=userinput.trim();
// console.log(trimmeduserinput);

// var emptyString="";
// var trimmedemptyString=emptyString.trim();
// console.log(trimmedemptyString==="");

// const usernames=["user1", "user2", "user3"];
// const cleanedusernames=usernames.map(name=>name.trim());
// console.log(cleanedusernames);

//charCodeAt()
// const str="hello";
// const strcharCode=str.charCodeAt(0);
// console.log(strcharCode);

//split()
// const str="sandy,rashmi";
// const parts=str.split(',');
// console.log(parts);

// const str="sandy,rashmi";
// const parts=str.split('');
// console.log(parts);

// const sentence="this is a sample sentence";
// const words=sentence.split(' , ');
// console.log(words);

//slice()
// const str="hello, sandy!";
// const string=str.slice(-6);
// console.log(string);

// const array=[1,2,3,4,5];
// const removed=array.slice(0,4).concat(array.slice(4))
// console.log(removed)

// const str="pawankalyan";
// const mystring=str.slice(0,4).concat(str.slice(8))
// console.log(mystring);
// //pawayan

// const str="karthikapja";
// const string=str.slice(-8).concat(str.slice(-5))
// console.log(string);
// //thikapjakapja

//substring()
// const str="sandhya";
// const startIndex=(2);
// const result=str.substring(startIndex);
// console.log(result);
// //ndhya

//substr();
// const string="my self";
// const startIndex=1;
// const length=5;
// const mystr=string.substr(startIndex,length);
// console.log(mystr);
// //y sel

// var str="sandhya,karthi";
// var string=str.replace("karthi","gouthami");
// console.log(string);
// //sandhya,gouthami

// let str="this is computer";
//   let text=str.replace("computer","laptop");
//   console.log(text);
// //this is laptop

// let str="this is computer,computer";
//   let text=str.replace(/computer/g,"laptop");
//    console.log(text);

// var str="this is a test";
// var newtext=str.replace(/is/g,"are");
// console.log(newtext);
// //thare are a test

// const text="hello, my name is sandhya";
// const newText =text.replace(/\b\w+\b/g,function(word){
//     return word.toUpperCase();
// });
// console.log(newText);


// var text="hello , guys";
// var newtext=text.replace(/\b\w+\b/g,function(word){
//     return word.toUpperCase();
// });
// console.log(newtext);
// HELLO , GUYS

// const str="sandy       come     here";
// const mytext=str.replace(/\s+/g," ");
// console.log(mytext);
// //sandy come here

// const originalstr="45";
// const str=originalstr.padStart(5, "2");
// console.log(str);
// // 22245

// const originalstr="45";
//  const str=originalstr.padStart(5);
//  console.log(str);
// // ...45

// const date="2023-05-02";
// const formattedDate=date.replace(/-/g, "/");
// console.log(formattedDate);
// // 2023/05/02

//Array of strings...
// let a=["sandy", "Arun","Karthi"];
// console.log("name:\n"+[2])
// //name:
// //2

//control statements:

// if(1<2)
// {
//     console.log("1 is less than 2");
// }
// // 1 is less than 2


// if(1>2)
// {
//     console.log("1 is bigger than 2")
// }
// else{
//     console.log("1 is smaller than 2")
// }


// let a=10, b=20 , c=30;
// if (a>b){
// console.log('a is big');
// }
// else if (c>b){
// console.log("c is big");
// }
// else{
// console.log("b is big")
// }
// // c is big


// let day=5;
// switch(day){
// case 1:
// console.log("sunday");
// break;
// case 2:
//     console.log("monday");
//     break;
//     case 3:
//         console.log("tuesday");
//         break;
//         default:
//             console.log("wednesday");
// }
// // wednesday


// let a=80;
// while(a>60)
// {
//     console.log("a="+a)
// a--;
// }
// 80..61

// let a=50;
// while(a<60)
// {
//     console.log("hello="+a)
// a++;
// }
// //hello50-59...

























