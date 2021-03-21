
export const checkGamOver=(data)=>{

    let tempData = Object.assign([], data);


    const swipeUpLeft=()=>{
        let z=4; let y=6;  let w=0; let q=2; let t=3; let x=5; let f=1
        let res1=core(x,y,q,t,z,w,f)
        return res1
    }

    const swipeUp=()=>{
        let z=1; let y=4; let w=2; let q=5; let t=3; let x=6; let f=0
        let res2=core(x,y,q,t,z,w,f)
        return res2

    }

    const swipeUpRight=()=>{
       let z=0; let y=1; let w=5; let q=6; let t=3; let x=4; let f=2
        let res3=core(x,y,q,t,z,w,f)
        return res3
    }

    const swipeRightDown=()=>{
        let z=6; let y=4; let w=2; let q=0; let t=3; let x=1; let f=5
        let res4=core(x,y,q,t,z,w,f)
         return res4

    }
     const swipeDown=()=>{
        let x=0; let y=1; let q=2; let t=3; let z=4; let w=5; let f=6;
         let res5=core(x,y,q,t,z,w,f)
         return res5
    }
    const swipeLeftDown=()=>{
        let z=1; let y=0; let w=6; let f=4; let t=3; let q=5; let x=2;
        let res=core(x,y,q,t,z,w,f)
        let res6=core(x,y,q,t,z,w,f)
        return res6
    }


    const core=(x,y,q,t,z,w,f)=> {
      if ( ( tempData[z].value != tempData[y].value) && (tempData[w].value != tempData[q].value) &&
            (tempData[t].value != tempData[x].value) && (tempData[t].value != tempData[f].value))
         {return "game-over"}
      else {return "playing"}
    }

                 let res1=swipeUpLeft()
                 let res2=swipeUp()
                 let res3=swipeUpRight()
                 let res4=swipeRightDown()
                 let res5=swipeDown()
                 let res6=swipeLeftDown()

    if (res1==res2 && res3==res4 && res5==res6 && res6 && res1 !=="playing"){
        return "game-over"
    }



    const checkMax=()=>{
        for (let i=0; i<data.length; i++){
                 if (2048==data[i].value){
                 return "game-over"
            }
        }
    }

    if (checkMax()=="game-over") { return "game-over"}

}
