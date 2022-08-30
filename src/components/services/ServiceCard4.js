import React from "react";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

// import "../../styles/styles.css";

const faces = [
  "http://i.pravatar.cc/300?img=1",
  "http://i.pravatar.cc/300?img=2",
  "http://i.pravatar.cc/300?img=3",
  "http://i.pravatar.cc/300?img=4"
];

const styles = muiBaseTheme => ({
  card: {
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  media: {
    paddingTop: "56.25%"
  },
  content: {
    textAlign: "left",
    padding: muiBaseTheme.spacing.unit * 3
  },
  divider: {
    margin: `${muiBaseTheme.spacing.unit * 3}px 0`
  },
  heading: {
    fontWeight: "bold"
  },
  subheading: {
    lineHeight: 1.8
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
      marginLeft: -muiBaseTheme.spacing.unit
    }
  }
});

function ServiceCard4({ classes }) {
  return (
    <div className="App">
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={require('../../images/punjabi-food.jpg')}
        />
        <CardContent className={classes.content}>
          <Typography
            className={"MuiTypography--heading"}
            variant={"h6"}
            gutterBottom
          >
            Punjabi Tadka
          </Typography>
          <Typography
            className={"MuiTypography--subheading"}
            variant={"caption"}
          >
             1. Beautiful Evening
            2. Red Beauty
            3. Jumping Jack
            4. Papillary
            5. Gulistan
            6. Pink Lady
            7. Green River
            8. Mango Mania
            9. Man in a Island
            10 Virgin Mohito  
          </Typography>
          <Divider className={classes.divider} light />
          {faces.map(face => (
            <Avatar className={classes.avatar} key={face} src={face} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

const SrvCard4 = withStyles(styles)(ServiceCard4);

export default SrvCard4;