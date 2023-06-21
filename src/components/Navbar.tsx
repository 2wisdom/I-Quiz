import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <a
              href="/"
              style={{
                fontWeight: 700,
                color: "#ffffff",
                textDecoration: "none",
              }}
            >
              a Video Game Quiz !
            </a>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
