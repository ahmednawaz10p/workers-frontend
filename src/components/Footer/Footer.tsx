import classes from "./Footer.module.scss";

import {
  Container,
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
  TextField,
  Button,
  Box,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export const Footer: React.FC = () => {
  return (
    <Box>
      <Box className={classes.mainFooterSection}>
        <Container className={`${"h100"}`} maxWidth="lg">
          <Grid
            className={`${"h100"}`}
            container
            spacing={3}
            alignItems="flex-start"
          >
            <Grid item xs={12} sm={3}>
              <Typography variant="h4" color="textSecondary">
                Services
              </Typography>
              <List>
                <ListItem alignItems="flex-start">
                  <Link href="#" color="textPrimary">
                    <ListItemText primary="Air Conditioner" />
                  </Link>
                </ListItem>
                <ListItem alignItems="flex-start">
                  <Link href="#" color="textPrimary">
                    <ListItemText primary="Plumber Services" />
                  </Link>
                </ListItem>
                <ListItem alignItems="flex-start">
                  <Link href="#" color="textPrimary">
                    <ListItemText primary="Electrician Services" />
                  </Link>
                </ListItem>
                <ListItem alignItems="flex-start">
                  <Link href="#" color="textPrimary">
                    <ListItemText primary="Carpenter Services" />
                  </Link>
                </ListItem>
                <ListItem alignItems="flex-start">
                  <Link href="#" color="textPrimary">
                    <ListItemText primary="Cleaning Services" />
                  </Link>
                </ListItem>
                <ListItem alignItems="flex-start">
                  <Link href="#" color="textPrimary">
                    <ListItemText primary="Painter Services" />
                  </Link>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="h4" color="textSecondary">
                Main Menu
              </Typography>
              <List>
                <ListItem alignItems="flex-start">
                  <Link href="#" color="textPrimary">
                    <ListItemText primary="Home" />
                  </Link>
                </ListItem>
                <ListItem alignItems="flex-start">
                  <Link href="#" color="textPrimary">
                    <ListItemText primary="About Us" />
                  </Link>
                </ListItem>
                <ListItem alignItems="flex-start">
                  <Link href="#" color="textPrimary">
                    <ListItemText primary="Contact Us" />
                  </Link>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" color="textSecondary" gutterBottom>
                Subscribe Latest Deals
              </Typography>
              <form className={classes.footerSubscriberEmail}>
                <TextField
                  fullWidth
                  size="medium"
                  label="Email"
                  variant="outlined"
                  type="email"
                  required
                />
                <Button
                  className={classes.footerSubmitButton}
                  size="large"
                  variant="contained"
                  color="primary"
                >
                  Submit
                </Button>
              </form>
              <Typography
                className={classes.footerSMHeading}
                variant="h4"
                color="textSecondary"
                gutterBottom
              >
                Social Media
              </Typography>
              <Box>
                <Link href="#" target="_blank">
                  <FacebookIcon />
                </Link>
                <Link href="#" target="_blank">
                  <TwitterIcon />
                </Link>
                <Link href="#" target="_blank">
                  <InstagramIcon />
                </Link>
                <Link href="#" target="_blank">
                  <LinkedInIcon />
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box color="primary" className={classes.mainFooterBottomBar}>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={3}
            alignItems="center"
            justify="space-between"
          >
            <Grid item sm="auto">
              Hello
            </Grid>
            <Grid item sm="auto">
              World
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
