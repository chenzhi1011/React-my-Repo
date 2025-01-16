//项目根组件

import { useState } from "react"
const counta = 100
const list = [
  {id: 101, name: 'jame'},
  {id: 102, name: 'cake'}
]

function GetAge(){
  return 26
}
function Button(){
  return <button>try to click!</button>
}


function App() {
  const [count,setCount]= useState(0);
  const counter=()=>{
    setCount(count+1)
  }
  return (
    <div className="App">
      this is app

      {/* {字符串表示} */}
      {'this is a message'}
      {/* {js变量} */}
      {counta}
      {/* {函数调用} */}
      {GetAge()}
      {/* {方法调用} */}
      {new Date().getDate()}
      {/* {方法调用} */}
      <div style = {{color: 'red'}}>this is a test</div>{}
      <ul>
        {list.map(item=><li key={item.id}>{item.name}</li>)}
      </ul>
      <GetAge />
      <Button />

      <button onClick={counter}>{count}</button>
    </div>
    

  );
}

export default App;
