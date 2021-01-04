import React from "react";
import "./rayajin.ajinray.component.css";
import image from "../../rayajin.png";
import image2 from "../../rayajin2.jpg";
import heart from "../../heart";
import ParticlesBg from "particles-bg";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from "@material-ui/core";

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
  img: {
    paddingTop: "56.25%", // 16:9,
    marginTop: "30",
  },
});

const useStyles2 = makeStyles({
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
    paddingTop: "56.25%", // 16:9,
    marginTop: "30",
    width: "60%",
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
        <CardMedia>
          <img src={image} />
        </CardMedia>
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
          Tha to bahut hi khush wo, samete nahi samat raha tha apni khushi me,
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
          Thuka, pada, gira, nadi k hausle se sambhala, aur fir daud pada nadi
          ki taraf,
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

export function OutlinedCard2() {
  const classes = useStyles2();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          Gratitude
        </Typography>
        <br />
        <CardMedia>
          <img src={image2} width="30%" />
        </CardMedia>
        <br />
        <Typography variant="body" component="p">
          <h3>6 months ago..</h3>
          <p>
            There is a thunder outside, thunder without rain, without winds,
            just lights and the roar. As if the earth itself is reciprocating
            the feelings of all the humans, too tired of the lock down and is
            just showing the frustration of being locked up inside for months.
            Among all these, I am staring at my screen, with a bunch of code in
            red and blue colours, and another process running on another
            monitor, just flowing like the time, with new lines appearing on the
            screen each moment, seamless, fast and automatic. As usual, I have
            earphones in my ears, with some soft music playing in background.
            But somehow a lot of thoughts flowing through the mind. How did it
            happen? How did I end up confessing my feelings? How could I not
            control for a few more months? It was just a matter of few more
            months and then she would have been done with exams and then it
            would have been easier for me to confess and have a proper
            discussion. Right now to I just told her to not think. I know she is
            strong and very determined but these things do effect everything.
            And of course how many questions she would have had which I just
            declined to answer. Though we know each other from when we were kids
            but how many times have we met? Like max 2-3 times. The too in a
            family setting. We to like hardly know each other. What if this
            effects her a lot and she is not able to concentrate? I just don't
            want her to deviate thoda sa bhi with respect to studies and
            specially because of me. I really never want her to loose anything
            because of me, and this is to very important. Perhaps the most
            important time of her life. What if things don't go well? What if I
            end up hurting her? What if I am not what she thinks I am?
          </p>
          <p>WHAT IF SHE WOULD HAVE SAID NO?</p>
          <p>
            How stupid was I to bring this up? What if we would have lost all
            the friendship we have till now? How would have I reacted? How would
            have she reacted? How would have we ever faced each other? And most
            importantly, what if I would have never got a chance with her? I
            know we have talked very little and only have met like a few times.
            I think exactly 5 times since we grew up. But each of those 5 times
            was really wonderful. She making me comfortable at her home before
            my exams when she was like a kid, we going out to visit mall when
            she came to visit her uncle. I still remember the feeling I had when
            she was leaving, it was the first time I was feeling it. Why is she
            not here? Why did she have to leave? It was a weird feeling that I
            was experiencing for the first time, and probably she was too. But
            both of us refused to acknowledge that. Because of course, we had
            other things in front of us. Our studies, our careers etc etc. Then
            of course those sms and whatsapp discussions, yearly visits on
            diwali which I really looked forward to. I still remember how upset
            I became when she did not come one diwali. I was literally waiting
            since morning for her to come. And of course, how can I forget? Our
            meeting in the wedding. We were together for almost 2 days, and
            during the whole course of shaadi, we kind of always landed up
            together. And it was in that wedding that I realised, really what
            kind of a person she is. Mingling with every known and unknown
            person, maintaining her poise throughout, getting involved in the
            rituals, fun, dances, work, everything. Not hesitating to help
            wherever required. Just being so good with everyone. All of it just
            made me realise, she is just perfect. Smart, kind, loving, giving,
            hard working, so full of life and most importantly has such a
            beautiful soul.
          </p>
          <p>
            How did she even ended up saying yes? What do I even remotely posses
            to deserve her? How did I end up being so lucky?
          </p>
          <p>
            Suddenly the thunder stopped and it started raining. Bringing a cold
            breeze of wind, replacing the sound of thunder with that of water
            droplets falling on the mud. A pleasant petrichor taking over the
            smell of dust from all the winds. As if the universe suddenly found
            the reason to calm down and started settling.
          </p>

          <p>THANK GOD SHE SAID YES...</p>
          <br></br>
          <h3>Now....</h3>
          <p>
            As I type this, we have just completed 6 months. 6 months of
            RayAjinShip, 6 beautiful months of being mesmerised by every little
            thing of hers.
          </p>
          <p>
            What a beautiful soul she is! All major possible things which could
            have been big issues, how seamlessly she just accepted those and
            that too without a second thought. How kind she is! Just being so
            good and so polite and so well behaved with everyone, like literally
            everyone. How brave she is! Never let anyone else get a feel of what
            storms are going inside her. Not even me. Just taking care of her
            own self, not letting anyone even remotely realising what is going
            on inside her head and what she is going through. And that too with
            a smile on her face. I just wish I could have sensed all of those
            things. I am sorry Ray. I will definitely do better. How smart she
            is! How quickly she figured out to use her earring to get the sim
            out of the phone when we first met. Also, the solution for me to
            reach hotel on time and in turn spending more time with her. Just
            take my scooty. That was so smart. I really do not find others'
            smart but she really is one hell of a smart person. How hard working
            she is! Just giving her everything towards her goal, no matter what,
            even when she is sick or has to sacrifice on her sleep. How
            determined she is! Once decided, she has to do it. Even if it means
            driving for 1 hour to pick me up at the airport even after being
            sick. Or spending all the time with me even if it means taking a lot
            of paracetamols How loving she is! She just has all the love for me
            and nothing else. I have never even believed that such love was even
            remotely possible. And how caring she is! I have always felt void of
            people close to me when I needed them the most. But she is always
            there. Through all the thick and thins. Even if she remotely feels
            that I need her. Leaving everything aside, she just made sure that
            she is there for me. Even if it means not sleeping or not studying
            just few days before exams. And of course, not to forget, how
            beautiful she is! I just can keep looking at her all my life and
            never get tired. She is just the beautifulestestestestestest,
            cutestestestestestestestest and even hottestestestestestest and
            sexiestestestestestestest being in all the universes. Though to me,
            she will always be my cutie pie. My Ray. My Jaan. My Jahaan. My
            Zindagi. My Sabkuch.
          </p>

          <p>
            I am really really very grateful to all the gods and the universe
            for conspiring to bring the two of us together. Everything that has
            happened in the last 6 months has just brought us more and more
            together and has just filled us with more and more love for each
            other. There has never been a moment where I felt less love for her
            than the previous moment and I think will never be now. I just love
            her beyond everything. Beyond the boundaries imaginable and
            unimaginable and beyond. I really have to thank Ray that she
            tolerated me in spite of me showing my self obsessed version to her,
            in spite of all the hardships that were going on, the difficult
            times, in my life, in her life, always sticking to me even if she
            remotely felt that I might need her, always. Thank you Ray for
            letting me know that there exists a love beyond imagination, which
            is not just about giving but also about receiving, which can make a
            person like me realise that I am not doing enough and make me do
            everything and anything for you and only you. For transforming me as
            an individual, making me do things, which were pending for like
            years. For making me feel all the emotions, that I never felt
            before. For giving me this constant happiness, which just makes
            everything a lot easy. Yes, that's what has changed, I am in a
            constant state of happiness my love. And its just a very ecstatic
            feeling that I never believed was possible to achieve.
          </p>
          <p>
            Now is the time to pick up the phone and wish her again a happy 6
            months and with a constant thought in my mind saying...
          </p>
          <p>
            <b>THANK GOD SHE SAID YES...</b>
          </p>
        </Typography>
      </CardContent>
    </Card>
  );
}

class RayAjinComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPost: 1,
    };
  }

  onClick = () => {
    if (this.state.currentPost === 1) {
      this.setState({
        currentPost: 0,
      });
    } else {
      this.setState({
        currentPost: 1,
      });
    }
  };

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
    const buttonText =
      this.state.currentPost === 1 ? "Previos Post" : "Next Post";

    return (
      <div className="AjinRay">
        <ParticlesBg type="custom" config={config} bg={true} />
        <div className="AjinrRay-header">
          <h1 className="AjinrRay-header-text">RayAjin | AjinRay | US</h1>
          <h3>The personal blog of Ray and Ajin</h3>
        </div>
        <div className="AjinRay-body">
          {this.state.currentPost === 1 ? <OutlinedCard2 /> : <OutlinedCard />}
        </div>
        <div>
          <button className="AjinRay-btn" onClick={this.onClick}>{buttonText}</button>
        </div>
      </div>
    );
  }
}

export default RayAjinComponent;
