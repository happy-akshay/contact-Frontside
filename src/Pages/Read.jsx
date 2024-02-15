import { useCallback, useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { DeletedUser, getallUser } from "../ForRedux/Actions/UserAction";
import { useNavigate } from "react-router-dom";

const Read = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()

 
    const forUpdated = useCallback((id) => {
      if (id) {
          navigate(`/createpage/${id}`);
      }
  }, [navigate]);

  const forDeleted = useCallback((id) => {
      dispatch(DeletedUser(id));
  }, [dispatch]);
  useEffect(()=>{
    dispatch(getallUser())
},[dispatch,navigate,forUpdated,forDeleted])
const {readuser}=useSelector((state)=>state.userStore)

      console.log(readuser)
    return ( 
        <>
{readuser && readuser.length > 0 && readuser.map((item, id) => (
  <div key={item._id} className="flex flex-col gap-3 p-4 sm:border-r-black border-r-2 justify-center">
    <h1>{item.username}</h1>
    <h1>{item.email}</h1>
    <h1>{item.number}</h1>
    <div className="flex gap-4">
    <button onClick={() => forUpdated(item._id)} className="bg-green-600 text-white w-20">Update</button>
    <button onClick={()=>forDeleted(item._id)} className="bg-red-600 text-white w-20">Delete</button>
    </div>
  </div>

))}


        </>
     );
}
 
export default Read;
