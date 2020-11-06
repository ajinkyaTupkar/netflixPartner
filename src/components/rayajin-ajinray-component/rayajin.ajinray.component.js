import React from "react";
import "./rayajin.ajinray.component.css";
import heart from "../../heart";
import ParticlesBg from "particles-bg";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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
});

export function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          इज़हार
        </Typography>
        <br />
        <Typography variant="body" component="p">
          Ik raat thi suhaani, do dilon ki thi meharbaani,
          <br />
          Is jahaan ko this jiski talaash, mili use wo pyaari kahani,
          <br />
          <br />
          Pahla dil tha pyaasa, dusra ekdam nadi sa,
          <br />
          Pyaasa tha to paas hi, par door khade dekh raha tha tamasha,
          <br />
          <br />
          Chahta to pyasa bhi tha hi, ki ek baar dekh le use nadi,
          <br />
          Dekh le, samajh le, aur fir paa bhi le ye nadi..
          <br />
          <br />
          Nadi ne dekha, samjha aur shayad khoob parkha,
          <br />
          Aur us pyaase ko pyaar se, paa bhi liya,
          <br />
          <br />
          Pyaasa to pa hi gaya, thi jo jannat use,
          <br />
          Hasa, muskuraya, par thoda dara, ki kaise ye manzil haasil hui use,
          <br />
          <br />
          Pyaasa to pa hi gaya, thi jo jannat use,
          <br />
          Par dheeme hi paanv badhaye, sahama thoda shuruat me,
          <br />
          <br />
          Dheeme dheeme, badhte badhte, hua pyaase ko yakeen,
          <br />
          Ki thi use jiski talaash, yahi hai wo nadi...
          <br />
          <br />
          Bas is tasallee k hote hi, daud pada pyaasa nadi ki taraf,
          <br />
          Thuka, pada, gira, nadi k hausle se sambhala, aur fir daud pada nadi ki taraf,
          <br />
          <br />
          Aaj aa gya h pyaasa, apni nadi ke paas,
          <br />
          Bujhegi aaj, jaane kab se thi jo pyaas,
          <br />
          <br />
          To ab jo h ye pyaasa, apni nadi k paas,
          <br />
          Kahna chahta h nadi se, dil me kabse thi jo baat,
          <br />
          <br />
          To thodi nazar uthaiye, dekhiye is pyaase ko,
          <br />
          Suniye zara, kuch kah raha h apni nadi se wo...
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}

class RayAjinComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let config = {
      num: [4, 7],
      rps: 0.1,
      radius: [5, 40],
      life: [1.5, 3],
      v: [2, 3],
      tha: [-50, 50],
      alpha: [0.6, 0],
      scale: [0.1, 0.9],
      body: heart,
      position: "all",
      //color: ["random", "#ff0000"],
      cross: "dead",
      random: 10,
    };

    return (
      <div className="AjinRay">
        <ParticlesBg type="custom" config={config} bg={true} />
        <div className="AjinrRay-header">
          <h1 className="AjinrRay-header-text">RayAjin | AjinRay | US</h1>
          <h3>The personal blog of Ray and Ajin</h3>
        </div>
        <div className="AjinRay-body">
          <OutlinedCard />
        </div>

        {/* <div className="AjinRay-text">
               इज़हार
               </div> */}
      </div>
    );
  }
}

export default RayAjinComponent;
