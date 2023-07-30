import React, { useState, useEffect } from "react";

const useSetNewPassword = () => {
  const handleAddNew = (item) => {
    const password = localStorage.getItem("password");
    let newPassWrd = JSON.parse(password);
    if (newPassWrd?.length) {
      let updated = [...newPassWrd, item];
      localStorage.setItem("password", JSON.stringify(updated));
    } else {
      let updated = [item];
      localStorage.setItem("password", JSON.stringify(updated));
    }
  };
  return { handleAddNew };
};

export default useSetNewPassword;
