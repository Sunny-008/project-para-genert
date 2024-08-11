// const input=document.getElementById("numofwords");
// const nam=document.querySelector(".container");
// /-----------------------------------------
// const generatepara=()=>{
//     console.log(input.value);
// };
// /-----------------------------------------

// const generateword=(n)=>{
//     let text="";
//     let letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     for (let i = 0; i < n; ++i) {
//       const random=  (Math.random()*25).toFixed(0);
    //   const random=  (Math.random()*(letters.length-1)).toFixed(0);/------
//         text += letters[random];
        
//     }
//     return text;
// };
// console.log(generateword(4));
// let sunny;
// const generatepara=()=>{
//     const sunny= Number(input.value);
    
//     const paragraph=document.createElement("p");
//     let data="";
//     for (let i = 0; i < sunny; ++i) {
//         const randomnumber= (Math.random()*15).toFixed(0)
//         data += generateword(randomnumber);
//         data += " ";
//     }
//     paragraph.innerText=data;
//     paragraph.setAttribute("class","para");
//     nam.append(paragraph);
// };


// ---------------------------------------------
// ---------------------------------------------

const input=document.getElementById("numofwords");
const niche=document.querySelector(".container");
    let nam1;

const btn=()=>{
    // console.log(input.value);
    // console.log(Number(input.value));
    // let nam1;
    nam1=Number(input.value);
    const nam2=document.createElement("p");
    let data="";
    for (let i = 0; i < nam1 ; ++i) {
        const randomnumber= (Math.random()*15).toFixed(0)
        data += generateword(randomnumber);
        data += " ";
        
    }
    nam2.innerText=data;
    nam2.setAttribute("class","para");
    niche.append(nam2);
};
const generateword=(n)=> {
    const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let text="";
    for (let i = 0; i < n; ++i) {
        const random=(Math.random()*25).toFixed(0);
       text+=letters[random];
        
    }
   
    return text
}





// const generateword=(n)=> {
//     const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     let text="";
//     for (let i = 0; i < n; ++i) {
        // const element = array[i];
//         text+=letters[Math.random()*25]
//     }
//     return text
// }
// console.log(generateword());