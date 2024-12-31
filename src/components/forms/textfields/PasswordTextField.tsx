import { useState } from "react";
import { Box, IconButton, TextField } from "@mui/material";
import { VisibilityRounded, VisibilityOffRounded } from "@mui/icons-material";

/* ------------------------------ Start ------------------------------*/
export const PasswordTextField = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box className="relative">
      <TextField
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="Password"
        label="Password"
        id="password"
        className="w-full"
        required
      />
      <IconButton
        onClick={handleTogglePasswordVisibility}
        className="absolute right-2 top-1/2 transform -translate-y-1/2"
      >
        {showPassword ? <VisibilityOffRounded /> : <VisibilityRounded />}
      </IconButton>
    </Box>
  );
};
