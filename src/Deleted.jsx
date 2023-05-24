import { useDispatch, useSelector } from "react-redux";

function Deleted() {

    const dispatch = useDispatch()

    function handlerDelete(){
        dispatch({
            type: 'delete'
        })
    }

    return (
        <button onClick={handlerDelete}>delete</button>
    );
}

export default Deleted