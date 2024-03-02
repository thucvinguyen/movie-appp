import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { FTextField } from "../components/form";

function SignUpModal() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Typography
        variant="body1"
        textAlign="center"
        onClick={handleOpen}
        style={{ textDecoration: "underline", cursor: "pointer" }}
      >
        Not a member yet? Start your free month!
      </Typography>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Sign Up for a Free Month</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Sign up today to enjoy a free month of premium content!
          </DialogContentText>

          <Stack spacing={3} sx={{ minWidth: "350px", mt: 2 }}>
            <FTextField name="username" label="Username" />
            <FTextField name="password" type="password" label="Password" />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Sign Up
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default SignUpModal;
