import { useState } from 'react'

function Todo() {
    const [activity, setActivity] = useState("");
    const [listData,setlistData] = useState([]);
    function addActivity(){
        setlistData((listData)=>{
            const updatedList = [...listData,activity];
            console.log(updatedList)
            setActivity('');
            return updatedList;
        })
    }
    function removeActivity(index){
        const updatedListData = listData.filter((item,i)=>{
            return index!==i;
        })
        setlistData(updatedListData)
    }
    function removeAll(){
        setlistData([])
    }
    
    return (
    <>
        <div className='container'>
            <div className='header'>Todo List</div>
            <input type="text" placeholder='Enter your task' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
            <button onClick={addActivity}>Add</button>
            <p className='list-heading'>Here is your List</p>
            {listData!=[] && listData.map((item,index)=>{
                return(
                    <>
                    <p key={index}>
                        <div className='listData'>{item}</div>
                        <div className='btn-position'>
                            <button onClick={()=>removeActivity(index)}>Remove</button>
                        </div>
                    </p>
                    </>
                )
            })}
            {listData.length>=1 && <button onClick={removeAll}>Remove All</button>}
        </div>
    </>
)
}

export default Todo;
