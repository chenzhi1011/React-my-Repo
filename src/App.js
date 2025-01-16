//项目根组件

const count = 100
const list = [
  {id: 101, name: 'jame'},
  {id: 102, name: 'cake'}
]
function getAge(){
  return 26
}
function App() {
  return (
    <div className="App">
      this is app

      {/* {字符串表示} */}
      {'this is a message'}

      {/* {js变量} */}
      {count}

      {/* {函数调用} */}
      {getAge()}

      {/* {方法调用} */}
      {new Date().getDate()}

      {/* {方法调用} */}
      <div style = {{color: 'red'}}>this is a test</div>{}


      <ul>
        {list.map(item=><li key={item.id}>{item.name}</li>)}
      </ul>
      

      


    </div>
  );
}

export default App;
