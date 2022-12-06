import React from "react";
import { EmployeeForm } from "./EmployeeForm";
import { PageHeader } from "../../Component/PageHeader";
import PeopleIcon from "@mui/icons-material/People";
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin:theme.spacing(5),
        padding:theme.spacing(3)
      },
}))

export const Employees = () => {

    const classes = useStyles()
  return (
    <>
      <PageHeader
        title="New Employee"
        subTitle="Form Desing With Validation"
        icon={<PeopleIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <EmployeeForm />
      </Paper>
    </>
  );
};
