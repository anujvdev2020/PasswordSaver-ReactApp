import React, { useState, useEffect } from "react";

const useGetPassowrd = () => {
  const password = localStorage.getItem("password");
  const [passwords, setPasswords] = useState(JSON.parse(password));

  return { passwords };
};

export default useGetPassowrd;
