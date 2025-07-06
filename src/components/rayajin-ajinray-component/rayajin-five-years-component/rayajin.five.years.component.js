import React from "react";
import "../rayajin.ajinray.component.css";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import five from "./fiveyears.png"; // Replace with the correct path to image7
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: "70%",
  },
  img: {
    paddingTop: "56.25%",
    marginTop: "30",
    width: "60%",
  },
});

const RayAjinFiveYearsComponent = () => {
  const classes = useStyles();

  return (
    <div className="AjinRay">
      <div className="AjinRay-body">
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              पंचवर्षीय योजना
            </Typography>
            <br />
            <CardMedia>
              <img src={five} alt="Image 7" />
            </CardMedia>
            <br />
            <Typography variant="body1" component="p">
             5 Years!!
              <br />
              <br />
            It has been 5 years!! Oh My God!! 
              <br />
            5 years, since the night of 5th of July 2020. THE NIGHT!! When suddenly out of nowhere, I kind of proposed. Well not proposed, but 
            just conveyed my feelings and asked if she would like to start something. And,
              <br />
              <br />
            SHE SAID YES!!
            <br />
            To this day, I don't know what I did to deserve that YES. May be it was just a culmination of all the conscious efforts I have put in my entire life to be a good person,
            all the good deeds, selfless acts, and all the love and care I have shown to people around me. May be it was all of it, or just my luck, or in hindsight, may be just good timing.
            The phase she was going through, something in her, something in the air, something in the universe, something in me, something in us. Yes, US.
            Whatever it was, it was just right, and it was a YES. And that's all that matters. Boy oh boy, how lucky I got.
              <br />
            <br />
            And I can't even dare to say that last 5 years have been perfect. Well they were not. When have they? And specially in my case, nothing, and I literally mean nothing ever,
            went as per what I had planned. May it be the preparation days, where despite trying to not cause any impact on her, I ended up being the biggest impact. 
            She even had to leave her home, Oh My God!! 
            <br />
            And then even all the time I met her, ALL THE TIME, nothing, NOTHING went as what I had planned. Visits filled with sickness, adventures (both pleasant and disastrous),
            celebrations filled with half baked plans, delayed gifts, and what not. Even her time away from home, where I felt I could just squeeze in and make up for the lost time,
            was simply a disaster. Filled with all the wrong things, and all the wrong timings.
            <br />
            Even today, when we are celebrating 5 years, even NOW, we are not together, the gifts are delayed, my post is just a last minute scramble, and again, you guessed it, she is sick.
            Wow, I knew she always wanted an adventurous life, but god, oh god, not this adventurous.
            <br />
            <br />
            But, despite all of this, it was just PERFECT. The way it should have been. The way it was meant to be. Because all of it, brings me to a place, where I 
            am celebrating 5 years with her. WITH HER!! Because that's what matters. I would take this path a thousand times, a milion times, a gazillion times, even if 
            filled with imperfection 1000 times bigger that this. JUST to be here. WITH HER. Happily, Cheerful, Her in front of my eyes.
            <br />
            <br />
            But how can I even say it was imperfect??
            <br />
            It was as perfect as it could be. May be even beyond perfection. Her perfect smile, her perfect hair, her perfect laughter, her being a perfect person, an angel at that.
            God's favorite child, and my favorite being in the whole universe and all the universes. She led me to be who I am today, where I am today, and what I dream of becoming.
            She is the sole reason for me to find a reason to be alive, a reason to be happy,  and a reason to be the best version of myself. All the moments I have had with her,
            all the trips, all the chats, all the night long calls, all the video calls, all the fighs, yes, even the fights were just perfect. Because they were with her.
            <br />
            And in the end, we came stronger out of it. US. Stronger than ever, more in love than ever, and more committed than ever. So how can this be imperfect?
            <br />
            <br />
            It was as perfect as it could be, and beyond.
            <br />
            <br />
            God oh god, I just love her so much. Let me go and just call her.

            <br />
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RayAjinFiveYearsComponent;