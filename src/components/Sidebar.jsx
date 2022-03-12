import React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
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
import LayersIcon from "@mui/icons-material/Layers";
import { ListSubheader } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  return (
    <>
      <List
        onClick={() => {
          navigate("/allquestions");
        }}
      >
        <ListItem button>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary={"All Questions"} />
        </ListItem>
      </List>

      <Divider />

      <ListSubheader className="ml-auto mr-auto">Topics</ListSubheader>

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
    </>
  );
}

export default Sidebar;
