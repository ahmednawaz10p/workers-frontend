import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  Avatar,
  Link,
  Box,
  TextField,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tabs,
  Tab,
  AppBar,
  TextareaAutosize,
} from "@material-ui/core";
import UserAvatar from "../../assets/images/user.jpg";
import { withStyles } from "@material-ui/core/styles";
import RoomIcon from "@material-ui/icons/Room";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

import classes from "./Profile.module.scss";

// The `withStyles()` higher-order component is injecting a `classes`
// prop that is used by the `Button` component.
const StyledAvatar = withStyles({
  root: {
    border: "5px solid #fff",
    height: "12rem",
    width: "12rem",
    boxShadow: "0 3px 5px 2px rgb(25 25 25 / 30%)",
    position: "absolute",
    bottom: "-60px",
    left: 0,
    zIndex: 9,
  },
})(Avatar);

interface ITabPanelProps {
  value: string;
  index: string;
  children: React.ReactElement;
}

const TabPanel = (props: ITabPanelProps) => {
  const { children, value, index } = props;
  return <div>{value === index && <Box>{children}</Box>}</div>;
};

export const Profile: React.FC = () => {
  const [value, setValue] = useState(0);
  const handleTabs = (e: any, val: any): void => {
    setValue(val);
  };

  useEffect(() => {
    // console.log("value of input updated", value);
  }, [value]);

  return (
    <Box className={classes.mainProfileSection}>
      <Box className={classes.mainProfileBanner}>
        <Container className={`${"h100"}`}>
          <Grid
            className={`${"h100"}`}
            container
            spacing={3}
            alignItems="center"
          >
            <Grid item xs={12} sm={6}>
              <Typography variant="h2">Hello Jesse</Typography>
              <Typography variant="body1">
                This is your profile page. You can see the progress you've made
                with your work and manage your projects.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container className={`${"h100"}`} maxWidth="lg">
        <Box className={classes.profileHeaderSection}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={2}>
              <Box className={classes.userAvatar}>
                <StyledAvatar
                  sizes="large"
                  variant="circle"
                  alt="User Avatar"
                  src={UserAvatar}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Typography variant="h5" color="textSecondary">
                Shila ki jawani
              </Typography>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                Dancer
              </Typography>
              <Box className={classes.profileSocialMedia}>
                <Link href="#" target="_blank">
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <RoomIcon /> Karachi
                  </Typography>
                </Link>
                <Link href="#" target="_blank">
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <FacebookIcon /> Facebook
                  </Typography>
                </Link>
                <Link href="#" target="_blank">
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <LinkedInIcon /> LinkedIn
                  </Typography>
                </Link>
                <Link href="#" target="_blank">
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <TwitterIcon /> Twitter
                  </Typography>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container className={`${"h100"}`} maxWidth="lg">
        <AppBar position="static">
          <Tabs value={value} onChange={handleTabs}>
            <Tab label="Profile" />
            <Tab label="Projects" />
          </Tabs>
        </AppBar>
        <TabPanel value={value.toString()} index="0">
          <Box p={2.5} className={classes.myAccountSection}>
            <Grid
              className={classes.userDetailsRatingRow}
              container
              justify="space-between"
              alignItems="center"
            >
              <Grid item xs="auto">
                <Typography variant="h5" color="textPrimary" gutterBottom>
                  My Account
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12}>
                <Typography variant="body1" color="textSecondary">
                  User Information
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  size="medium"
                  label="First Name"
                  variant="filled"
                  type="text"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  size="medium"
                  label="Last Name"
                  variant="filled"
                  type="text"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  size="medium"
                  label="Fater Name"
                  variant="filled"
                  type="text"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  size="medium"
                  label="Email"
                  variant="filled"
                  type="email"
                />
              </Grid>
            </Grid>
            <Divider style={{ margin: "30px 0" }} />
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12}>
                <Typography variant="body1" color="textSecondary">
                  Contact Information
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  size="medium"
                  label="Complete Address"
                  variant="filled"
                  type="text"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  variant="filled"
                  fullWidth
                  required
                  className={classes.formControl}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Select City
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                  >
                    <MenuItem value="Karachi">Karachi</MenuItem>
                    <MenuItem value="Lahore">Lahore</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  variant="filled"
                  fullWidth
                  required
                  className={classes.formControl}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Select Town
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                  >
                    <MenuItem value="Town 1">Town 1</MenuItem>
                    <MenuItem value="Town 2">Town 2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  variant="filled"
                  fullWidth
                  required
                  className={classes.formControl}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Experience
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                  >
                    <MenuItem value="Fresh (0 Years)">Fresh (0 Years)</MenuItem>
                    <MenuItem value="Mid-Senior (1-2 Years)">
                      Mid-Senior (1-2 Years)
                    </MenuItem>
                    <MenuItem value="Experience (3-5 Years)">
                      Experience (3-5 Years)
                    </MenuItem>
                    <MenuItem value="Master (5+ Years)">
                      Master (5+ Years)
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Divider style={{ margin: "30px 0" }} />
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12}>
                <Typography variant="body1" color="textSecondary">
                  About Me
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextareaAutosize
                  className={classes.textArea}
                  rowsMin={5}
                  placeholder="About yourself"
                />
              </Grid>
            </Grid>
          </Box>
        </TabPanel>
        <TabPanel value={value.toString()} index="1">
          <Box>
            <Grid></Grid>
          </Box>
        </TabPanel>
      </Container>
    </Box>
  );
};
