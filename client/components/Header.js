import { Button, makeStyles, Toolbar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Button size="large">KIDER</Button>
      </Toolbar>
    </>
  );
}
