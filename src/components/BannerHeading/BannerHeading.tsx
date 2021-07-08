import classes from "./BannerHeading.module.scss";
import { Container, Typography, Grid } from "@material-ui/core";

export const BannerHeading: React.FC = (props) => {
  return (
    <div className={classes.mainBannerSection}>
      <Container className={`${"h100"}`} maxWidth="lg">
        <Grid className={`${"h100"}`} container alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography variant="h2" color="primary" gutterBottom>
              Join Us Now
            </Typography>
            <Typography variant="body1" color="textSecondary">
              We are in search of the brightest and skilled individuals to join
              our team. If you think you have the skills we need, you’re our
              guy. Find an open position that matches your skills, experience,
              and interests, and apply online today.{props.children}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
