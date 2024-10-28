// for(i=1; i<=100; i+=2){
//     document.write(i);
// }

// for(i=2; i <= 20 ; i+= 2){
//     document.write(i + "<br> ");
// }

// let i =1;
// while (i < 81)
//     {
//     if(i % 8 == 0)
//         {
//         document.write(i + "<br>");
//     }
//     i++ ;
// }

// let i, j;
// for (i=1 ; i<= 10; i++)
//     {
//     for( j= i; j<=i*10; j=j+i)
//         {
//            document.write(j +"&nbsp;&nbsp;&nbsp")
//     }
//     document.write("<br>");
// }

// let sum = 0;
// for( let i=1; i<= 10; i++)
//     {
//     sum += i;
    
// } document.write(sum);

// let sum = 0;

// for(let i = 1; i<=20; i++)
// {
//     sum += i;
// }
// document.write(sum);

// let prod = 1;
// for(let i=1; i<=10; i++)
// {
//     prod  *= i;
// }
// document.write(prod);

// let sum = 0;

// for (let i = 10; i <= 30; i += 2 ) 
// {
//     sum += i;
// }
// document.write(sum);

// let sum = 0;

// for(let i = 11; i <= 30; i += 2)
// {
//     sum += i;
// }
// document.write(sum);

// function celsius(r)
// {
//     return (r - 32)/1.8
// }

// let a = celsius(68);
// document.write(a);

// function fahrenheitToCelsius(n)
// {
//     return (n - 32) / 1.8;
// }

// let r = fahrenheitToCelsius(68);
// document.write (r);

function sumArray(ar)
{
    let sum = 0;
    
    for(let i = 0; i < ar.length; i++)
    {
        sum += ar[i];
    }
    
    return sum;
}

let ar = [2, 3, -1, 5, 7, 9, 10, 15, 95];
let sum = sumArray(ar);
document.write(sum);