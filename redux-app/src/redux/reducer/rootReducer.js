const initalState = { items : [{id:"1" , title : "sample" , description :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptate?"}] };

const rootReducer = (state=initalState  , action)=>
{
    switch(action.type)
    {
        case "ADD_ITEM" : return {items :[...state.items , action.payload]}
        case "DELETE_ITEM" : return {items :[...state.items.filter((item)=>{ return item.id != action.payload})]}

        default : return state;
    }
}

export default rootReducer;