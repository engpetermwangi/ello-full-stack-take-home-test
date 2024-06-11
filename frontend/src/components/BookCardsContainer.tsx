import { Box, Stack, Typography, useTheme } from "@mui/material";

export const BookcardsContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const theme = useTheme();
  return (
    <Stack gap={2}>
      <Typography
        variant="h1"
        sx={{
          color: theme.palette.primary.dark,
          fontSize: 32,
          fontWeight: 600,
          letterSpacing: "-.008em",
        }}
      >
        Reading list
      </Typography>
      <Box
        gap={4}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          height: "75vh",
          overflow: "auto",
          alignItems: "start",
          py: 2,
        }}
      >
        {children}
      </Box>
    </Stack>
  );
};
