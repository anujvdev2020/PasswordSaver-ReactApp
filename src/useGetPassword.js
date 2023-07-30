import React, { useState, useEffect, useCallback } from "react";

const useGetPassowrd = () => {
  const password = localStorage.getItem("password");
  const [passwords, setPasswords] = useState(JSON.parse(password));

  const handleDelete = (id) => {
    const password = localStorage.getItem("password");
    let newPassWrd = JSON.parse(password);
    let updated = newPassWrd.filter((item) => item.id !== id);
    localStorage.setItem("password", JSON.stringify(updated));
    setPasswords(updated);
  };

  const handleEdit = (updatedItem) => {
    const password = localStorage.getItem("password");
    let newPassWrd = JSON.parse(password);
    let updated = newPassWrd.map((item) => {
      if (item.id == updatedItem?.id) {
        return { ...updatedItem };
      } else {
        return item;
      }
    });
    localStorage.setItem("password", JSON.stringify(updated));
    setPasswords(updated)
  };

  useEffect(() => {
    const password = localStorage.getItem("password");
    setPasswords(JSON.parse(password));
  }, [password]);

  return { passwords, handleDelete, handleEdit };
};

export default useGetPassowrd;
