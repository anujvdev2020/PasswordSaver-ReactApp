import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TabsContainer from "./TabsContainer";
const Password = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "", height: "100vh" }}>
          <h2>Welome to Password Space</h2>

          <div>
            <TabsContainer />
          </div>
        </Box>
      </Container>
    </>
  );
};
export default Password;
