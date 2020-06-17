import { makeStyles } from "@material-ui/core/styles";
 
export const useStyles = makeStyles(theme => ({

  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: "37ch"
  }
}));