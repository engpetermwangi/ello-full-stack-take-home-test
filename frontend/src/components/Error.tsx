import { Alert } from "@mui/material";

export const Error = ({ errorMessage }: { errorMessage: string }) => (
  <Alert
    severity="error"
    sx={{ height: 48, borderRadius: 2, alignItems: "center" }}
  >
    {errorMessage}
  </Alert>
);
