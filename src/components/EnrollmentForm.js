import React from "react";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import "./EnrollmentForm.css";
import TextField from "@material-ui/core/TextField";

export default function EnrollmentForm() {
  return (
    <div className="EnrollmentForm">
      <form>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid container item xs>
            <label>
              First Name:
              <TextField required label="Required" />
            </label>
          </Grid>
          <Grid container item xs>
            <label>
              Last Name:
              <TextField required label="Required" />
            </label>
          </Grid>
          <Grid container item xs>
            <label>
              Middle Name:
              <TextField optional label="Optional" />
            </label>
          </Grid>
          <Grid container item xs>
            <Button variant="contained" color="primary">
              Reset
            </Button>
            <Button variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
