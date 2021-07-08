import { BannerHeading } from "../BannerHeading";
import classes from "./SignUp.module.scss";
import {
  Container,
  Grid,
  TextField,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  Box,
  Button,
} from "@material-ui/core";

export const SignUp: React.FC = () => {
  return (
    <div className={classes.mainSignUpSection}>
      <BannerHeading />

      <Container className={`${"h100"}`} maxWidth="lg">
        <form className={classes.signUpForm} noValidate autoComplete="off">
          <Grid container spacing={3}>
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
                label="Father Name"
                variant="filled"
                type="text"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="standard-read-only-input"
                fullWidth
                size="medium"
                label="Email"
                variant="filled"
                type="email"
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
              <TextField
                id="standard-read-only-input"
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
          <Grid container justify="flex-end" spacing={3}>
            <Grid item xs="auto">
              <Box>
                <Button color="primary" variant="contained" size="large">
                  Submit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
};
