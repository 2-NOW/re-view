import { Button, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    justifyContent: `space-between`,
  },
  logo: {},
  searchIcon: {},
}));

export default function Header() {
  const classes = useStyles();

  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Button className={classes.logo} size="large">
          KIDER
        </Button>
        <div className="menu-items">
          <Button size="large">Search</Button>
          <Button size="large">TimeLine</Button>
          <Button size="large">Community</Button>
          <Button size="large">Market</Button>
        </div>
        <IconButton>
          <PersonIcon />
        </IconButton>
      </Toolbar>
    </>
  );
}
