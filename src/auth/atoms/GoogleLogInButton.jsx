// react
import { useMemo } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { startGoogleLogin } from "../../store/auth";

//components
import { Button, Grid, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";


export const GoogleLogInButton = () => {
  const { status } = useSelector((state) => state.auth);

  const isDisabled = useMemo(() => status === "checking", [status]);

  const dispatch = useDispatch();

  const onGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <Button
      variant="contained"
      fullWidth
      sx={{ backgroundColor: "red" }}
      onClick={onGoogleLogin}
      disabled={isDisabled}
    >
      <Google />
      <Typography sx={{ ml: 1 }}>Google</Typography>
    </Button>
  );
};
