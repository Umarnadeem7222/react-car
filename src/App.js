import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Container from '@material-ui/core/Container';
import { spacing } from '@material-ui/system';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import {Carousel} from '3d-react-carousal';
import { ThemeProvider } from "@material-ui/styles";
import {

  CssBaseline,
  
} from "@material-ui/core";
import FooterPagePro from './FooterPagePro';


const useStyles = makeStyles((theme) => ({
  
  root: {
    minWidth: 275,
  },
  palette: {
    type: "dark"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 200,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
 
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    main: '#f44336',
  },
 
}));
const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});





export default function SearchAppBar() {
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);
  const bull = <span className={classes.bullet}>•</span>;
  

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };
  let slides = [
    <img style={{width:"50rem", height:"30rem"}}  src="/pics/1.jpg" alt="1" />,
 
  <img style={{width:"50rem", height:"30rem"}}   src="/pics/3.jpg" alt="3" />  , 
  <img style={{width:"50rem", height:"30rem"}}   src="/pics/4.jpg" alt="4" />  ,
  <img style={{width:"50rem", height:"30rem"}}  src="/pics/5.jpg" alt="5" />  ,
  <img style={{width:"50rem", height:"30rem"}}  src="/pics/6.jpg" alt="6" />  ,
  <img style={{width:"50rem", height:"30rem"}}  src="/pics/7.jpg" alt="7" />  ];

 
  return (
    <div >
        <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <AppBar color="inherit">
      <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            <h3 className="text-center mt-3 " style={{fontSize:"3rem"}}>HU MOTORS</h3>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
    <br></br>
    <br></br>
     <br/>
<br/>
<br/>
<br/>




              <center><strong className="text-center display-1">Welcome to HU MOTOR</strong></center>
 <br/>
<br/>
<br/>
    <Carousel slides={slides}/>
      

     
       
         

<footer class="page-footer font-small warning darken-3">


  <div class="container">


    <div class="row">


      <div class="col-md-12 ">
        <div class="mb-5 text-center mt-5">

   
          <a class="fb-ic">
            <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
   
          <a class="tw-ic">
            <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
      
          <a class="gplus-ic">
            <i class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
        
          <a class="li-ic">
            <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
        
          <a class="ins-ic">
            <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
        
          <a class="pin-ic">
            <i class="fab fa-pinterest fa-lg white-text fa-2x"> </i>
          </a>
        </div>
      </div>
   

    </div>
   

  </div>



  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="#"> HUwebdevs.com</a>
  </div>


</footer>

    </div>
  );
}


