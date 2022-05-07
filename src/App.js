import "./App.css";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  ThemeProvider,
  createTheme,
  Button,
  Link,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  IconButton,
  Drawer,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { Circle, Menu as MenuIcon } from "@mui/icons-material";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#fff",
      100: "#fff",
    },
    error: {
      main: "#f00",
      100: "red",
    },
  },
});
const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
  },
  gmail: {
    color: theme.palette.primary["dark"],
  },
});

function App() {
  const classes = useStyles();
  const [appBarColor, setAppBarColor] = useState("secondary");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setAppBarColor("primary");
      } else {
        setAppBarColor("secondary");
      }
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar
          color={appBarColor}
          elevation={appBarColor === "primary" ? 1 : 0}
          position="sticky"
        >
          <Toolbar>
            <Box sx={{ display: { xs: "none", lg: "flex" } }}>
              <Button
                sx={{
                  color:
                    appBarColor === "primary"
                      ? theme.palette.secondary["100"]
                      : "black",
                }}
                onClick={() => {
                  document
                    .getElementById("about")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                About
              </Button>

              <Button
                onClick={() => {
                  document
                    .getElementById("experience")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                sx={{
                  color:
                    appBarColor === "primary"
                      ? theme.palette.secondary["100"]
                      : "black",
                }}
              >
                Experience
              </Button>

              <Button
                onClick={() => {
                  document
                    .getElementById("education")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                sx={{
                  color:
                    appBarColor === "primary"
                      ? theme.palette.secondary["100"]
                      : "black",
                }}
              >
                Education
              </Button>

              <Button
                onClick={() => {
                  document
                    .getElementById("skills")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                sx={{
                  color:
                    appBarColor === "primary"
                      ? theme.palette.secondary["100"]
                      : "black",
                }}
              >
                Skills
              </Button>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <IconButton
                onClick={() => setOpen(true)}
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2, display: { lg: "none", xs: "flex" } }}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Avatar src={require("./static/images/avatar/person.jpg")} />
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer open={open}>
          <Box sx={{ width: "300px" }}>
            <List>
              <ListItem
                onClick={() => {
                  document
                    .getElementById("about")
                    .scrollIntoView({ behavior: "smooth" });
                  setOpen(false);
                }}
                button
              >
                <ListItemText primary="About" />
              </ListItem>
              <ListItem
                onClick={() => {
                  document
                    .getElementById("experience")
                    .scrollIntoView({ behavior: "smooth" });
                  setOpen(false);
                }}
                button
              >
                <ListItemText primary="Experience" />
              </ListItem>
              <ListItem
                onClick={() => {
                  document
                    .getElementById("education")
                    .scrollIntoView({ behavior: "smooth" });
                  setOpen(false);
                }}
                button
              >
                <ListItemText primary="Education" />
              </ListItem>
              <ListItem
                onClick={() => {
                  document
                    .getElementById("skills")
                    .scrollIntoView({ behavior: "smooth" });
                  setOpen(false);
                }}
                button
              >
                <ListItemText primary="Skills" />
              </ListItem>
            </List>
          </Box>
        </Drawer>
        <Box sx={{ p: 2 }}>
          <Box id="about" className={classes.container}>
            <div>
              <Typography variant="h4">Farshid Sardivand Chegini</Typography>
              <Typography variant="subtitle2">
                Qazvin - 09350888484 -{" "}
                <Link
                  href="mailto:farshidsardivand@gmail.com"
                  component={"a"}
                  className={classes.gmail}
                >
                  farshidsardivand@gmail.com
                </Link>
              </Typography>
              <Typography variant="body1">
                I have more than 6 years experience in web & application
                development(back end & front end), starting a startup in the
                field of educational planning and counseling, <br /> I love the
                development of web apps and also enjoy creating new things with
                my skills
              </Typography>
            </div>
          </Box>

          <Box
            id="experience"
            className={classes.container}
            sx={{ width: "100%", height: "100vh" }}
            component="div"
          >
            <div>
              <Typography variant="h3">Experience</Typography>

              <Box component="div" sx={{ mt: 5 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h5">Desktop Application</Typography>
                  <Typography style={{ color: theme.palette.primary.main }}>
                    August 2016 - present
                  </Typography>
                </Box>
                <Typography variant="subtitle2">
                  in the Mobin Etesal Aseman Company
                </Typography>
                <Box>
                  <Typography variant="body1">
                    Implement desktop applications such as project management
                    and other applications to improve workflow with C#,SqlServer
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: 5,
                  }}
                >
                  <Typography variant="h5">Web Developer</Typography>
                  <Typography style={{ color: theme.palette.primary.main }}>
                    September 2019 - present
                  </Typography>
                </Box>
                <Typography variant="subtitle2">
                  Mobin Etesal Aseman Company
                </Typography>
                <Box>
                  <Typography variant="body1">
                    Implement educational planning, I implement frontend web and
                    mobile app with reactjs and react native, also collaborate
                    on the back end (node js , express,... )
                  </Typography>
                  <Link href="https://play.google.com/store/apps/details?id=com.mazeapp">
                    google play
                  </Link>
                  <br />
                  <Link href="https://tarazapp.com/">tarazapp.com</Link>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: 5,
                  }}
                >
                  <Typography variant="h5">Full Stack Developer</Typography>
                  <Typography style={{ color: theme.palette.primary.main }}>
                    September 2021 - April 2022
                  </Typography>
                </Box>
                <Typography variant="subtitle2">
                  Knowledge and science mah o mehr institution Company
                </Typography>
                <Box>
                  <Typography variant="body1">
                    It's about Multi criteria decision making, I work as
                    fullstack developer, frontend with reactjs and back end with
                    nodejs
                  </Typography>
                  <br />
                  <Link href="https://pnsinstitute.com/">pnsinstitute.com</Link>
                </Box>
              </Box>
            </div>
          </Box>
          <Box
            id="education"
            className={classes.container}
            sx={{ width: "100%", height: "100vh" }}
          >
            <div>
              <Typography variant="h3">Education</Typography>
              <Box sx={{ mt: 4 }}>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <Circle style={{ color: "black" }} />
                    </ListItemIcon>
                    <ListItemText primary="Bachelor of Software Engineering from Qazvin Azad University" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Circle style={{ color: "black" }} />
                    </ListItemIcon>
                    <ListItemText primary=".Net framework course certificate from Tehran Technical Complex" />
                  </ListItem>
                </List>
              </Box>
            </div>
          </Box>
          <Box
            id="skills"
            className={classes.container}
            sx={{ width: "100%", height: "100vh" }}
          >
            <div>
              <Typography variant="h3">Skills</Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Circle style={{ color: theme.palette.success.dark }} />
                  </ListItemIcon>
                  <ListItemText primary="react js" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Circle style={{ color: theme.palette.success.dark }} />
                  </ListItemIcon>
                  <ListItemText primary="react native" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Circle style={{ color: theme.palette.success.dark }} />
                  </ListItemIcon>
                  <ListItemText primary="css framework(ant design, material ui) " />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Circle style={{ color: theme.palette.success.light }} />
                  </ListItemIcon>
                  <ListItemText primary="nodejs & express & mongodb" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Circle style={{ color: theme.palette.success.light }} />
                  </ListItemIcon>
                  <ListItemText primary="socket io" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Circle style={{ color: theme.palette.success.light }} />
                  </ListItemIcon>
                  <ListItemText primary="familar with pwa" />
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <Circle style={{ color: theme.palette.success.light }} />
                  </ListItemIcon>
                  <ListItemText primary="c#, sql server, mysql" />
                </ListItem>
              </List>
            </div>
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
