'use client'

import { useBoardStore } from "@/store/BoardStore";
import { useEffect } from "react";
import {DragDropContext,Droppable} from "react-beautiful-dnd"

function Board() {
    const getBoard = useBoardStore((state)=>state.getBoard);
    useEffect(()=>{
        // GET BOARD 
        getBoard();
    },[getBoard]);

  return (
    <h1>Hello</h1>
    // <DragDropContext>
    //     <Droppable droppableId="board" direction="horizontal" type="column">
    //         {(provided)=> <div>(
    //             {/* rendering all columns  */}
    //             )</div>
    //         }

    //     </Droppable>

    // </DragDropContext>
  );
};

export default Board;