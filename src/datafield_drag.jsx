// import React, { useContext ,useState, useRef, createContext} from 'react'
// import {useDrag} from 'react-dnd'
// import Sheet2Context from './Context'
// import '../src/styling/dragging.css'

// // export const DatafieldContext= createContext();

// export function DraggingListComponents() {
    
//     const values=useContext(Sheet2Context) 
    

//     const [dragList, setDragList] = useState(Object.values(values.TableHeader.current))
//     console.log( (dragList))
    
//     const [dragging, setDragging]=useState(false)
    
//     //This ref will be used to store the value of the key of the component being dragged
//     const draggingItem = useRef();

//     const dragNode= useRef();

//     const rowDimension= useRef();
//     nb 

//     const dragstartHandler=(d, param,param1)=>{
//       console.log("drag has started, now dragging=>",param)
//       draggingItem.current=param1;
//       console.log("This is being dragged",param1)

//       dragNode.current= d.target;
//       dragNode.current.addEventListener('dragend', dragendHandler)
//       setDragging(true)
//     }

    
//   const dragendHandler =()=>{
//     console.log("Drag has ended...")
//     dragNode.current.removeEventListener('dragend', dragendHandler)

//     rowDimension.current=draggingItem.current;
    
//     dragNode.current=null;
//     setDragging(false);
    
//   }
//    console.log("This will be new value of the row-dimensions", rowDimension.current)
    
   
   
   
//    return (
//   <div> 
//     {dragList.map((val,key) => (<li key={key} draggable onDragStart={(d)=>dragstartHandler(d,{key},{val})}  className= "dropdown-item dnd-items"> {val} </li>))}
  
//   {/* <DatafieldContext.Provider value={{rowDimension}}>
//     {children}
//   </DatafieldContext.Provider> */}
//   </div>
  
//     )
// }

// export default DraggingListComponents;
