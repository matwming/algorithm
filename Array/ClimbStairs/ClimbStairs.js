/*
* https://leetcode.com/problems/climbing-stairs/
* 找重复性
* */
const result=(n)=>{
    if(n<=2) return n;
    [f1,f2,f3]=[1,2,3];
    for (let i = 3; i <n+1 ; i++) {
        f3=f1+f2;
        f1=f2;
        f2=f3;
    }
    return f3
}