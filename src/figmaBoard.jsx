import React, { useState } from "react";
import Board1 from "./assets/images/VAKRATUNDA board  final.jpg";
import Board2 from "./assets/images/GOVERNMENT board FINAL.jpg"

export default function FigmaBoardDesign() {
   const [board1Load,setBoard1Load]=useState(true);
   const [board2Load,setBoard2load]=useState(true);
    const Boards = ({ boardImage,isLoading, handleLoad}) => {
        return (<>
              {isLoading && <div>...Loading</div>}
             <img src={boardImage} alt="mmg design image" className="board-img"  onLoad={handleLoad} />
             </>
        )
    }
    return (
        <>
        {/* board designs  */}
        <div className="boards">
                <div className="row">
                    <div className="col-sm-6 mt-2 board-imgblock">
                    <Boards boardImage={Board1} isLoading={board1Load} handleLoad={()=>setBoard1Load(false)}  />
                    </div>
                    <div className="col-sm-6 mt-2 board-imgblock">
                    <Boards boardImage={Board2} isLoading={board2Load} handleLoad={()=>setBoard2load(false)}/>
                    </div>
                </div>
            </div>


            
        </>
    )

}


