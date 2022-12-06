import { Grid, makeStyles, TextField } from "@material-ui/core";
import React from "react";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));
const initialValue = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};
export const EmployeeForm = () => {
  const classes = useStyles();

  const [values, setValues] = useState(initialValue);

  useEffect(() => {}, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <div>
      <form className={classes.root}>
        <Grid container>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              label="Full Name"
              name="fullName"
              value={values.fullName}
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              label="Email"
              name="email"
              value={values.email}
            />
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </form>
    </div>
  );
};
