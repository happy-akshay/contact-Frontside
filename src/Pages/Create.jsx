import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { CreatePage, UpdatedUser } from "../ForRedux/Actions/UserAction";
import { useParams } from "react-router-dom";

const Create = () => {
  const {id}=useParams()
  console.log(id)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [contactList, setContactList] = useState([]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));

  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if(id){
      dispatch(UpdatedUser(id,contactDetails.name,contactDetails.email,contactDetails.phone))
      navigate("/")
    }else {

    
    // Add the current contact details to the list
    console.log("Name:", contactDetails.name);
    console.log("Email:", contactDetails.email);
    console.log("Phone:", contactDetails.phone);

    // Dispatch action
    dispatch(CreatePage(contactDetails.name, contactDetails.email, contactDetails.phone));

    setContactList((prevList) => [...prevList, contactDetails]);
    // console.log(name,email,phone)
    // dispatch(CreatePage(name,email,phone))

    // Clear the input fields
    setContactDetails({
      name: "",
      email: "",
      phone: "",
    });
    navigate("/")
  }
  };

  return (
    <>
<div className="border-green-500 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto p-4">
  <h2 className="text-xl font-semibold text-center mb-4">Add A Contact</h2>
  <form onSubmit={handleSubmit} className="flex flex-col items-center border border-green-900 p-4">
    <div className="mb-4 w-full">
      <label className="mb-1 text-lg">Name</label>
      <input
        name="name"
        value={contactDetails.name}
        type="text"
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
    <div className="mb-4 w-full">
      <label className="mb-1 text-lg">Email</label>
      <input
        name="email"
        value={contactDetails.email}
        type="email"
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
    <div className="mb-4 w-full">
      <label className="mb-1 text-lg">Phone-Number</label>
      <input
        name="phone"
        value={contactDetails.phone}
        type="number"
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
    <button
  type="submit"
  className={"py-2 px-4 rounded bg-green-500 text-white"}
>
  {id ? "Updated" : "Submit"}
</button>


  </form>
</div>




    </>
  );
};

export default Create;

