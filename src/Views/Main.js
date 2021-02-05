import React from 'react';
import { IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

import ad1 from '../Assets/img/ad1.png';
import ad2 from '../Assets/img/ad2.png';
import option1 from '../Assets/img/option1.svg';
import option2 from '../Assets/img/option2.svg';
import option3 from '../Assets/img/option3.svg';
import option4 from '../Assets/img/option4.svg';
import option5 from '../Assets/img/option5.svg';
import option6 from '../Assets/img/option6.svg';
import option7 from '../Assets/img/option7.png';
import option8 from '../Assets/img/option8.png';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { ReactComponent as Icon } from '../Assets/img/options.svg';


const useStyles = makeStyles((theme) => ({
    button: {
      width: 50,
      height: 70,
      margin: theme.spacing(1),
      background: "black",
      borderRadius: "50%",
      " & .MuiButton-label ": {
          marginLeft: 10
      }
    },
    arrow: {
        width: 50,
        height: 70,
        margin: theme.spacing(1),
        borderRadius: "50%",
        background: "#f8f9fa",
        " & .MuiButton-label ": {
            marginLeft: 10
        }
      },
  }));

const Main = () => {

    const classes = useStyles();
    
    return (
        <div className="Main-cont">
            <div className="option-sec-cont">
                <div className="opt-food">
                    <img src={option1} alt="Burgers"></img>
                    <span className="opt-food-span">Burgers</span>
                </div>
                <div className="opt-food">
                    <img src={option2} alt="Sea food"></img>
                    <span className="opt-food-span">Sea food</span>
                </div>
                <div className="opt-food">
                    <img src={option3} alt="Thai"></img>
                    <span className="opt-food-span">Thai</span>
                </div>
                <div className="opt-food">
                    <img src={option4} alt="Chinese"></img>
                    <span className="opt-food-span">Chinese</span>
                </div>
                <div className="opt-food">
                    <img src={option5} alt="Cafe"></img>
                    <span className="opt-food-span">Cafe</span>
                </div>
                <div className="opt-food">
                    <img src={option6} alt="Spanish"></img>
                    <span className="opt-food-span">Spanish</span>
                </div>
                <div className="opt-food">
                    <img src={option7} alt="Latin America"></img>
                    <span className="opt-food-span">Latin America</span>
                </div>
                <div className="opt-food">
                    <img src={option8} alt="Fast Food"></img>
                    <span className="opt-food-span">Fast Food</span>
                </div>
                <Button
                    variant="contained"
                    className={classes.arrow}
                    startIcon={<ArrowForwardIosIcon />}
                >
                </Button>
                <Button
                    variant="contained"
                    className={classes.button}
                    startIcon={<Icon />}
                >
                </Button>
            </div>
            <div className="ad-sec-cont">
                <div className="ad-msg">
                    <h2>Feel hungry? Get it.</h2>
                    <h5>Search your favourite food and exciting offers</h5>    
                </div>
                <img src={ad1} alt="food"></img>
                <img src={ad2} alt="food"></img>
            </div>
            <div className="food-sec-cont">
                food
            </div>
        </div>
    );

}

export default Main;