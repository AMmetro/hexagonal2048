
export const keyDown=(event,data)=>{

    let tempData = Object.assign([], data);
        const UP= 87;
        const DOWN= 83;
        const LEFT_UP= 81;
        const RIGHT_UP= 69;
        const LEFT_DOWN= 65;
        const RIGHT_DOWN= 68;

    const swipeUpLeft=()=>{
        let z=4; let y=6;  let w=0; let q=2; let t=3; let x=5; let f=1
        core(x,y,q,t,z,w,f)
    }

    const swipeUp=()=>{
        let z=1; let y=4; let w=2; let q=5; let t=3; let x=6; let f=0
        core(x,y,q,t,z,w,f)
    }

    const swipeUpRight=()=>{
       let z=0; let y=1; let w=5; let q=6; let t=3; let x=4; let f=2
        core(x,y,q,t,z,w,f)
    }

    const swipeRightDown=()=>{
        let z=6; let y=4; let w=2; let q=0; let t=3; let x=1; let f=5
        core(x,y,q,t,z,w,f)
    }
     const swipeDown=()=>{
        let x=0; let y=1; let q=2; let t=3; let z=4; let w=5; let f=6;
        core(x,y,q,t,z,w,f)
    }
    const swipeLeftDown=()=>{
        let z=1; let y=0; let w=6; let f=4; let t=3; let q=5; let x=2;
        core(x,y,q,t,z,w,f)
    }


    const core=(x,y,q,t,z,w,f)=> {
        // -------------- left row sum
        if (tempData[z].value == tempData[y].value) {
            tempData[z].value = tempData[y].value * 2
            tempData[y].value = 0
        }
        // --------------right row sum
        if (tempData[w].value == tempData[q].value) {
            tempData[w].value = tempData[q].value * 2
            tempData[q].value = 0
        }
        // --------------middle row sum
        if (tempData[t].value == tempData[x].value) {
            tempData[t].value = tempData[x].value * 2
            tempData[x].value = 0
        }
        if (tempData[f].value == tempData[t].value) {
            tempData[f].value = tempData[t].value * 2
            tempData[t].value = 0
        }
        if (tempData[f].value == tempData[x].value) {
            if (tempData[t].value == 0) {
                tempData[f].value = tempData[x].value * 2
                tempData[x].value = 0
            }
        }
        // --------------move cell in left row
        if (tempData[z].value === 0) {
            if (tempData[y].value != 0) {
                tempData[z].value = tempData[y].value
                tempData[y].value = 0
            }
        }
        // --------------move cell in right row
        if (tempData[w].value === 0) {
            if (tempData[q].value != 0) {
                tempData[w].value = tempData[q].value
                tempData[q].value = 0
            }
        }
        // --------------move cell in middle row
        if (tempData[f].value === 0) {
            if (tempData[t].value != 0) {
                tempData[f].value = tempData[t].value
                tempData[t].value = 0
            }
        }
        if (tempData[t].value === 0) {
            if (tempData[x].value != 0) {
                tempData[t].value = tempData[x].value
                tempData[x].value = 0
            }
        }
        if (tempData[f].value === 0) {
            if (tempData[t].value != 0) {
                tempData[f].value = tempData[t].value
                tempData[t].value = 0
            }
        }       
        else {
            // alert("мимо")
         }
     }

           switch(event.keyCode) {
            case UP: {
                   swipeUp()
                   return tempData
               }
               case DOWN: {
                   swipeDown()
                   return tempData
               }
               case LEFT_UP: {
                    swipeUpLeft()
                   return tempData
               }
               case RIGHT_UP: {
                    swipeUpRight()
                   return tempData
               }
               case LEFT_DOWN: {
                    swipeLeftDown()
                   return tempData
               }
               case RIGHT_DOWN: {
                    swipeRightDown()
                   return tempData
               }
               default: break;
           }
          
       }
