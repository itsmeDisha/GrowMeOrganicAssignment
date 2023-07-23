import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const FirstPage: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const logIn = (event: React.FormEvent) => {
    event.preventDefault();
    const userDetails = localStorage.getItem("userDetails");
    if (userDetails) {
      navigate("/second");
    }
    else{
      alert("Please enter your details to LogIn.");
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name && phone && email) {
      // Save user details to local storage
      localStorage.setItem(
        "userDetails",
        JSON.stringify({ name, phone, email })
      );

      // Redirect to the second page
      navigate("/second");
    } else {
      alert("Please fill in all the fields before submitting.");
    }
  };

  return (
    <Container
      maxWidth="sm"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h3" gutterBottom marginRight={2}>
        Please Fill in the Details
      </Typography>
      <Box mt={4} width="100%">
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            required
            type="email"
          />
          <br />
          <br />
          <Button type="submit" variant="contained" color="primary" style={{ marginRight: '10px' }}>
            Submit
          </Button>
          
          <Button onClick={logIn} variant="contained" color="primary">
            Log In
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default FirstPage;
