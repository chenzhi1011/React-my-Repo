const flag = 0;

function　getflag (){
    if(flag === 0){
        return <div>我是0</div>
    }else if(flag === 1){
        return <div>我是1</div>
    }
}

function Appjsxtest() {
    const handleClick = ()=>{
        console.log('button was clicked')
    }
    return (
    
    <div>
        {getflag()}
        <button onClick={handleClick}>click me</button>
    </div>
    );
  }


  
  export default Appjsxtest;
  