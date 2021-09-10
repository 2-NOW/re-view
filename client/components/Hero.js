import Search from '../components/Search';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(10, 10, 6),
    border: `1px solid`,
  },
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.heroContent} maxWidth="lg">
        <div>Hero</div>
        <Search />
      </Container>
    </>
  );
}
