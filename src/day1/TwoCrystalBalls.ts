export default function two_crystal_balls(breaks: boolean[]): number {


    const jmpAmount = Math.floor(Math.sqrt(breaks.length));
    console.log(breaks.length);
    console.log(jmpAmount);

    let i = jmpAmount;
    for(;i<breaks.length; i+=jmpAmount){
        if(breaks[i]){
            break;
        }
    }

    i -= jmpAmount;
    for (let j= 0;jmpAmount&& i<breaks.length; ++j, ++i){
    if(breaks[i]){
        return i;
    }
    }
return -1
}