import React, { useState } from "react";
import "../rayajin.ajinray.component.css"; // Import the existing CSS
import { Card, CardContent, CardMedia, Typography } from "@mui/material"; // Import MUI components
import image7 from "./correction.png"; // Replace with the correct path to image7
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: "70%",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  img: {
    maxWidth: "100%",
    height: "auto",
    display: "block",
    margin: "0 auto",
  },
  h2: {
    color: "#c37070",
  },
  button1: {
    color: "#5e905e",
    fontSize: "xx-large",
    background: "None",
    border: "None",
    margin: "1% 1%",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#c1f1df",
    },
    "&:active": {
      borderColor: "#5e905e",
      backgroundColor: "#c1f1df",
    },
    "&:focus": {
      borderColor: "#5e905e",
      backgroundColor: "#c1f1df",
    },
    width: "30%",
  },
  button2: {
    color: "#b16666",
    fontSize: "xx-large",
    background: "None",
    border: "None",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#fbd8d8",
    },
    margin: "1% 1%",
    "&:active": {
      borderColor: "#fbd8d8",
      backgroundColor: "#fbd8d8",
    },
    "&:focus": {
      borderColor: "#fbd8d8",
      backgroundColor: "#fbd8d8",
    },
    width: "30%",
  },
});

const RayAjinCorrectionComponent = () => {
  const classes = useStyles();
  const [corrections, setCorrections] = useState([]);
  const [newCorrection, setNewCorrection] = useState("");

  const handleInputChange = (event) => {
    setNewCorrection(event.target.value);
  };

  const handleAddCorrection = () => {
    if (newCorrection.trim() !== "") {
      setCorrections([...corrections, newCorrection]);
      setNewCorrection("");
    }
  };

  return (
    <div className="AjinRay"> {/* Reuse the AjinRay class */}
      <div className="AjinRay-body"> {/* Reuse the AjinRay-body class */}
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
            सुधार
            </Typography>
            <br />
            <CardMedia>
              <img src={image7} alt="Image 7" className={classes.img} />
            </CardMedia>
            <br />
            <Typography variant="body" component="p">
              Hey Kishmish,
              <br />
              <br />
              It's been quite some time since you have visited this place. And for the matter of fact even for me it's been some time.
              Of course, both of us have been pretty "busy" and involved in other places, like WhatsApp, Instagram, Meet and calls.
              And of course, I have also not given you a reason to come back here.
              <br />
              <br />
              So I thought, why would my Ray not want to come back to this beautiful blog of ours? What is it that is missing from this? 
              What is it that I have missed to add here? What did I do wrong?? Ahhhh, as usual I did something wrong? And as usual,
              I again have NO IDEA of what I did wrong. Why god why? Why have you given me all the intelligence to solve all the problems
              in the world, but forgot to give me the intelligence and smartness to figure out even the smallest of things, and also the biggest
              of things, where I go wrong with my Kishumishu?
              <br />
              Help me God. HELP ME!!
              <br />
              <br />
              Wait!! It's so simple. I did not DO anything wrong. I just started everything on a wrong note. 
              <br />
              <br />
              AjinRay
              <br />
              <br />
              How can Ajin ever be before Ray?
              <br />
              SitaRam, RadhaKrishna, LakshmiNarayan, UmaMahesh, GauriShankar, SachiIndra, RajimatiNeminath.. Even AnushkaVirat...
              <br />
              So, HOW CAN THIS BE AjinRay??
              <br />
              <br />
              This has to be RayAjin.
              <br />
              <br />
              So, here is the correction. Everything, I mean EVERYTHING, that used to be AjinRay, is now RayAjin.
              <br />
              This website, <a href="https://rayajin.us" target="_blank" rel="noopener noreferrer">rayajin.us</a>, all the emails <a href="mailto:ray@rayajin.us">ray@rayajin.us</a>, <a href="mailto:ajin@rayajin.us">ajin@rayajin.us</a> and <a href="mailto:rayajin@rayajin.us">rayajin@rayajin.us</a>. All 
              of these are now corrected my love. It has always been RayAjin only for me, and also for us, so I have just corrected this
              here as well. So now, its RayAjin here as well, and it will always be RayAjin. Here, in life, and everywhere.
              <br />
              <br />
              Ray before Ajin.
              <br />
              <br />
              As it always have been. As it should be. With Ray as the guiding force, and Ajin following closely providing direction. With Ray as the first light 
              that shines brightly, and Ajin getting illuminated by that light. With Ray as the first one to take the step, and Ajin making sure we go all the way through.
              With Ray as the first one to take the leap, and Ajin following back, making sure that we both land safely. With Ray 
              being the force she is, and Ajin being the calm absorber of that force.
              <br />
              <br />
              With Ray being the pyaari Kish, and Ajin being the cutie Mish.
              <br />
              <br />                    
              RayAjin, filling the universe with love, making everyone's hearts fly like they are flying here, 
              while their own hearts beating together in sync, just like the hearts on the top of this page.
              <br />
              <br />
              ALWAYS. FOREVER. HAMESHA.
              <br />
              <br /> 

            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RayAjinCorrectionComponent;