
//! CREATE OBJECT FROM 1D ARRAY
// function createObj1( arr )
// {
//     let obj = {}
//     for(let i=0;i<arr.length;i++) 
//     {
//         obj[i] = arr[i];
//     }
//     console.log(obj);
// }
// createObj1([ "hello" ,"34" ,"ok" ,"3D"]);

//! CREATE OBJECT FROM 2D ARRAY

// function createObj2( arr )
// {
//     let obj = {}
//     for(let i=0;i<arr.length;i++) 
//     {
//         obj[arr[i][0]] = arr[i][1];
//     }
//     console.log(obj);
// }
// createObj2([["name", "aniket"],["age",25],["place" ,"pune"]]);

//! REMOVE DUPLICATES FROM ARRAY

function removeDups( arr )
{
    for(let i=0;i<arr.length;i++) 
    {
        let ind = arr.indexOf(arr[i] , i+1 )
        if(ind != -1)
        {
            arr.splice(arr.indexOf(arr[i] , i+1 ) , 1);
            i--;
        }
    }
    console.log(arr);
}
removeDups(["1","test user" ,"1" ,"1", "developer","test user" , "user" ,"test user"]);

