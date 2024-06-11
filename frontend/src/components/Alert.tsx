import { AlertColor, Alert as MuiAlert } from "@mui/material";

export const Alert = ({
  message,
  severity,
}: {
  message: string;
  severity: AlertColor;
}) => (
  <MuiAlert
    severity={severity}
    sx={{
      height: 48,
      borderRadius: 2,
      alignItems: "center",
    }}
  >
    {message}
  </MuiAlert>
);
