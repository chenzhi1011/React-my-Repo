const flag = 0;

function　getflag (){
    if(flag === 0){
        return <div>我是0</div>
    }else if(flag === 1){
        return <div>我是1</div>
    }
}

function Appjsxtest() {
    return (
    <div>
        {getflag()}
    </div>
        
 
    );
  }
  
  export default Appjsxtest;
  