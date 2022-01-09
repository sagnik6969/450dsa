import * as React from "react";
import { styled, useTheme, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DataArrayIcon from "@mui/icons-material/DataArray";
import GridOnIcon from "@mui/icons-material/GridOn";
import AbcIcon from "@mui/icons-material/Abc";
import SearchIcon from "@mui/icons-material/Search";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ParkIcon from "@mui/icons-material/Park";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import CodeIcon from "@mui/icons-material/Code";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import PatternIcon from "@mui/icons-material/Pattern";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import FilterListIcon from "@mui/icons-material/FilterList";
import FitbitIcon from "@mui/icons-material/Fitbit";
import { Routes as Switch, Route, useNavigate } from "react-router-dom";
import InputBase from "@mui/material/InputBase";
// import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Tooltip } from "@mui/material";
// import { Link } from "react-router-dom";
// import Codeeditor from "./Codeeditor";
import Feed from "./Feed";
import { getAuth } from "firebase/auth";

const drawerWidth = 300;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Dashboard() {
  const navigate = useNavigate();
  var [searchtext, setSearchtext] = React.useState("");

  // React.useEffect(() => {
  //   const auth = getAuth();
  //   auth.onAuthStateChanged((user) => {
  //     if (!user) {
  //       navigate("/signup");
  //     } else {
  //       // sessionStorage.setItem("user", user.uid);
  //       navigate("/array");
  //     }
  //   });
  // }, []);
  React.useEffect(() => {
    navigate("/array");
  }, []);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            450 DSA SHEET
          </Typography>

          <Search className="ml-auto">
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              onChange={(e) => setSearchtext(e.target.value)}
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Tooltip title="View sorce code">
            <IconButton
              onClick={() => window.open("https://github.com/")}
              color="inherit"
              style={{ marginLeft: "1rem" }}
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {/* <Link to="/matrix"> */}
        <List
          onClick={() => {
            navigate("/array");
          }}
        >
          <ListItem button>
            <ListItemIcon>
              <DataArrayIcon />
            </ListItemIcon>
            <ListItemText primary={"Array"} />
          </ListItem>
        </List>
        {/* </Link> */}

        <List
          onClick={() => {
            navigate("/matrix");
          }}
        >
          <ListItem button>
            <ListItemIcon>
              <GridOnIcon />
            </ListItemIcon>
            <ListItemText primary={"Matrix"} />
          </ListItem>
        </List>
        <List
          onClick={() => {
            navigate("/string");
          }}
        >
          <ListItem button>
            <ListItemIcon>
              <AbcIcon />
            </ListItemIcon>
            <ListItemText primary={"String"} />
          </ListItem>
        </List>

        <List
          onClick={() => {
            navigate("/searching");
          }}
        >
          <ListItem button>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText primary={"Searching & Sorting"} />
          </ListItem>
        </List>

        <List
          onClick={() => {
            navigate("/linkedlist");
          }}
        >
          <ListItem button>
            <ListItemIcon>
              <ArrowRightAltIcon />
            </ListItemIcon>
            <ListItemText primary={"LinkedList"} />
          </ListItem>
        </List>

        <List
          onClick={() => {
            navigate("/binarytree");
          }}
        >
          <ListItem button>
            <ListItemIcon>
              <ParkIcon />
            </ListItemIcon>
            <ListItemText primary={"Binary Trees"} />
          </ListItem>
        </List>

        <List
          onClick={() => {
            navigate("/binarysearchtree");
          }}
        >
          <ListItem button>
            <ListItemIcon>
              <TravelExploreIcon />
            </ListItemIcon>
            <ListItemText primary={"Binary Search Trees"} />
          </ListItem>
        </List>

        <List
          onClick={() => {
            navigate("/dynamicprogramming");
          }}
        >
          <ListItem button>
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText primary={"Dynamic Programming"} />
          </ListItem>
        </List>
        <List
          onClick={() => {
            navigate("/greedy");
          }}
        >
          <ListItem button>
            <ListItemIcon>
              <AcUnitIcon />
            </ListItemIcon>
            <ListItemText primary={"Greedy"} />
          </ListItem>
        </List>
        <List
          onClick={() => {
            navigate("/backtracking");
          }}
        >
          <ListItem button>
            <ListItemIcon>
              <PatternIcon />
            </ListItemIcon>
            <ListItemText primary={"Backtracking"} />
          </ListItem>
        </List>
        <List
          onClick={() => {
            navigate("/stacks");
          }}
        >
          <ListItem button>
            <ListItemIcon>
              <StackedBarChartIcon />
            </ListItemIcon>
            <ListItemText primary={"Stacks & Queues"} />
          </ListItem>
        </List>

        <List
          onClick={() => {
            navigate("/heap");
          }}
        >
          <ListItem button>
            <ListItemIcon>
              <LinearScaleIcon />
            </ListItemIcon>
            <ListItemText primary={"Heap"} />
          </ListItem>
        </List>

        <List
          onClick={() => {
            navigate("/graph");
          }}
        >
          <ListItem button>
            <ListItemIcon>
              <AccountTreeIcon />
            </ListItemIcon>
            <ListItemText primary={"Graph"} />
          </ListItem>
        </List>

        <List
          onClick={() => {
            navigate("/trie");
          }}
        >
          <ListItem button>
            <ListItemIcon>
              <FilterListIcon />
            </ListItemIcon>
            <ListItemText primary={"Trie"} />
          </ListItem>
        </List>

        <List
          onClick={() => {
            navigate("/bitmanipulation");
          }}
        >
          <ListItem button>
            <ListItemIcon>
              <FitbitIcon />
            </ListItemIcon>
            <ListItemText primary={"Bit Manipulation"} />
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {/* <Feed data="array" /> */}
        <Switch>
          <Route
            exact
            path="/array"
            element={<Feed data="Array" searchtext={searchtext} />}
          ></Route>
          <Route
            path="/matrix"
            element={<Feed data="Matrix" searchtext={searchtext} />}
          ></Route>
          <Route
            path="/string"
            element={<Feed data="String" searchtext={searchtext} />}
          ></Route>
          <Route
            path="/searching"
            element={
              <Feed data="Searching & Sorting" searchtext={searchtext} />
            }
          ></Route>
          <Route
            path="/linkedlist"
            element={<Feed data="LinkedList" searchtext={searchtext} />}
          ></Route>
          <Route
            path="/binarytree"
            element={<Feed data="Binary Trees" searchtext={searchtext} />}
          ></Route>
          <Route
            path="/binarysearchtree"
            element={
              <Feed data="Binary Search Trees" searchtext={searchtext} />
            }
          ></Route>
          <Route
            path="/dynamicprogramming"
            element={
              <Feed data="Dynamic Programming" searchtext={searchtext} />
            }
          ></Route>
          <Route
            path="/greedy"
            element={<Feed data="Greedy" searchtext={searchtext} />}
          ></Route>
          <Route
            path="/backtracking"
            element={<Feed data="BackTracking" searchtext={searchtext} />}
          ></Route>
          <Route
            path="/stacks"
            element={<Feed data="Stacks & Queues" searchtext={searchtext} />}
          ></Route>
          <Route
            path="/heap"
            element={<Feed data="Heap" searchtext={searchtext} />}
          ></Route>
          <Route
            path="/graph"
            element={<Feed data="Graph" searchtext={searchtext} />}
          ></Route>
          <Route
            path="/trie"
            element={<Feed data="Trie" searchtext={searchtext} />}
          ></Route>
          <Route
            path="/bitmanipulation"
            element={<Feed data="Bit Manipulation" searchtext={searchtext} />}
          ></Route>
        </Switch>
      </Box>
    </Box>
  );
}
