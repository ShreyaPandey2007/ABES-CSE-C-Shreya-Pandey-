let x=10;
let y=20;
let z=30;
if((x<y && x>z)||(x>y && x<z)){
    console.log(x);

}
else if((y<x && y>z)||(y<z && y>x)){
    console.log(y);
}
else  if((z<x && z>y)||(z<y && z>x)){
    console.log(z);

}