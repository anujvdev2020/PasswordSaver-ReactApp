import React, { useState, useEffect } from "react";

const useDeleteItem = () => {
  const handleDelete = (id) => {
    const password = localStorage.getItem("password");
    let newPassWrd = JSON.parse(password);
    let updated = newPassWrd.filter((item) => item.id !== id);
    localStorage.setItem("password", JSON.stringify(updated));
  };
  return { handleDelete };
};

export default useDeleteItem;
