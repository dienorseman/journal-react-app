import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";

export const SubmitButton = ({ text }) => {

  const { status } = useSelector((state) => state.auth);

  const isDisabled = useMemo(() => status === "checking", [status]);

  return (
    <Button type="submit" variant="contained" fullWidth disabled={isDisabled}>
      {text}
    </Button>
  );
};
