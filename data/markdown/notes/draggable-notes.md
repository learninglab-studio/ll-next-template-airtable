# notes on draggable

concept for handling x and y in state (on stop drag)

```
const [x, setX]= useState(0)
const [y, setY]= useState(0)

const handleStop = (event, dragElement) => {
    setX(dragElement.x)
    setY(dragElement.y)
  };

return (
       <>
       <Draggable
        onStop={handleStop} 
        position={{x: x, y:y}}
       > 
       
       <div className="resizablebox"> 
       
       </div>
       </Draggable>
      )
```