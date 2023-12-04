import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import img from "../Header/image/f515d11d-f955-40e4-a0e1-9608d9448e0c.jpeg";
export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{backgroundColor : "rgb(188,156,79)"}}  position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <img style={{width : "250px" , height : "80px"}} src={img} />
          </Typography>

          <Tooltip title="الصفحة الرئيسية">
            <Button variant="rgb(188,156,79)">الصفحة الرئيسية</Button>
          </Tooltip>
          <Tooltip title="اخبار الجمعية">
            <Button variant="rgb(188,156,79)">اخبار الجمعية</Button>
          </Tooltip>
          <Tooltip title="عن الجمعية">
            <Button variant="rgb(188,156,79)">عن الجمعية</Button>
          </Tooltip>
          <Tooltip title="النشاط التشغيلي">
            <Button variant="rgb(188,156,79)">النشاط التشغيلي</Button>
          </Tooltip>
          <Tooltip title="المشاريع والبرامج">
            <Button variant="rgb(188,156,79)">المشاريع والبرامج</Button>
          </Tooltip>
          <Tooltip title="للتواصل">
            <Button variant="rgb(188,156,79)">للتواصل</Button>
          </Tooltip>
          <IconButton size="large" aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
