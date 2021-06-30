import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import cato from "../assets/cato.png"
import man from "../assets/man.png"
import lady from "../assets/lady.png"
import kvn from "../assets/kvn.png"
import gary from "../assets/gary.png"

function Boards() {

    const finalSpaceCharacters = [
        {
          id: 'gary',
          name: 'Gary Goodspeed',
          thumb: cato
        },
        {
          id: 'cato',
          name: 'Little Cato',
          thumb: man
        },
        {
          id: 'kvn',
          name: 'KVN',
          thumb: lady
        },
        {
          id: 'mooncake',
          name: 'Mooncake',
          thumb: kvn
        },
        {
          id: 'quinn',
          name: 'Quinn Ergon',
          thumb: gary
        }
      ]

      const [characters, updateCharacters] = useState(finalSpaceCharacters);

      function handleOnDragEnd(result) {
          console.log(result)
        if (!result.destination) return;
    
        const items = Array.from(characters);
        // console.log(items)
        const [reorderedItem] = items.splice(result.source.index, 1);
        // console.log(reorderedItem)
        // console.log(items)
        items.splice(result.destination.index, 0, reorderedItem);
        updateCharacters(items);
      }
    
      // console.log(characters)
      
    return (
        <>
               <div className="App">
                    <header className="App-header">
                        <h1>Final Space Characters</h1>
                        <DragDropContext  onDragEnd={handleOnDragEnd}>
                            <Droppable  droppableId="characters">
                                {
                                    (provided)=>(
                                        <ul className="characters"  {...provided.droppableProps} ref={provided.innerRef}>
                                        {
                                            characters.map(({id,name,thumb},index)=>{
                                                return (
                                                    <Draggable  key={id} draggableId={id} index={index}>
                                                        {
                                                            (provided)=>(
                                                                <li  ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                                        <div className="characters-thumb">
                                                                                <img src={thumb} alt={`${name} Thumb`} />
                                                                        </div>

                                                                        <p>{name}</p>
                                                                 </li>
                                                            )
                                                        }
                                                                  
                                                    </Draggable>
                                                    
                                                )
                                            })
                                        }
                                    </ul> 
                                    )
                                }
                                
                            </Droppable>
                           
                        </DragDropContext> 
                          
                    </header>
               </div>
        </>
    )
}

export default Boards




