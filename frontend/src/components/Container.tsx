import { Container as MuiContainer, Stack } from "@mui/material";

export const Container = ({ children }: { children: React.ReactNode }) => (
  <MuiContainer sx={{ padding: 4 }}>
    <Stack direction="column" gap={4}>
      {children}
    </Stack>
  </MuiContainer>
);
