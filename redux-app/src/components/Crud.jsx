import React , {useState}from 'react'
import { connect } from 'react-redux';

const Crud = ({items , addItem , deleteItem}) => {
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");

    let handleCreate = (e)=>{
        e.preventDefault();
        let newItem = {id:Date.now() , title , description};
        settitle("");
        setdescription("");
        addItem(newItem);
    }

    return (
        <div>
            <form onSubmit={handleCreate}>
                <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} name='text' id='title_id' placeholder='Enter the title' />

                <input type="text" value={description} onChange={(e)=>{setdescription(e.target.value)}} name='text' id='desc_id' placeholder='Enter the description' />

                <input type="submit" />
            </form>
            <hr />
            {
                items.map((item)=>{
                    return(
                        <div>
                            <h1>Title : {item.title}</h1>
                            <p>Description : {item.description}</p>
                            <button onClick={()=>{deleteItem(item.id)}}> delete </button>
                            
                        </div>
                    )

                })
            }
        </div>
    )
}


const mapStateToProps = (state)=>{
    return {items : state.items};
}

const mapDispatchToProps = dispatch=> ({
    addItem : item => dispatch({type:"ADD_ITEM" , payload:item}) ,
    deleteItem : id => dispatch({type:"DELETE_ITEM" , payload:id}) ,

})

export default connect(mapStateToProps,mapDispatchToProps)(Crud)