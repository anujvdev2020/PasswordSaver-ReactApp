import React, { useState, useEffect } from "react";

const useGetPassowrd = () => {

  
  const password = localStorage.getItem("password");
  const [passwords, setPasswords] = useState(JSON.parse(password));



  const handleDelete = (id) => {
    const password = localStorage.getItem("password");
    let newPassWrd = JSON.parse(password);
    let updated = newPassWrd.filter((item) => item.id !== id);
    localStorage.setItem("password", JSON.stringify(updated));
    setPasswords(updated)
  };

  return { passwords,handleDelete };
};

export default useGetPassowrd;
