import axios from 'axios'

export const CreatePage=(name,email,phone)=>async(dispatch)=>{
    try {
        console.log(name,email,phone)
        const {data}=await axios.post("http://localhost:5000/api/user/created",{name,email,phone},{
            withCredentials:true
        })
        console.log(data)
        dispatch({
            type:"CreateFile",
            payload:data.user
        })
    } catch (error) {
        
    }
}
export const getallUser=()=>async(dispatch)=>{
    try {
        const {data}=await axios.get("http://localhost:5000/api/user/getall",{
            withCredentials:true
        })
        console.log(data.user)
        dispatch({
            type:"ReadFile",
            payload:data.user
        })
    } catch (error) {
        
    }
}
export const UpdatedUser=(id,name,email,phone)=>async(dispatch)=>{
    try {
        console.log(id,name)
        const {data}=await axios.put(`http://localhost:5000/api/user/userUpdated/:${id}`,{name,email,phone},{
            withCredentials:true
        })
        dispatch({
            type:"ReadFile",
            payload:data.user
        })
    } catch (error) {
        
    }
}

export const DeletedUser=(id)=>async(dispatch)=>{
    try {
        const {data}=await axios.delete(`http://localhost:5000/api/user/userdeleted/:${id}`,{
            withCredentials:true
        })
    }
    catch (error) {
        
    }
}
export const FindSearch=(name="")=>async(dispatch)=>{
    try {
        const {data}=await axios.delete(`http://localhost:5000/api/user/bysearch?name=${name}`,{
            withCredentials:true
        })}  
    catch (error) {
        
    }
}

