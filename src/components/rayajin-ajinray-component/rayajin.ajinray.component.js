import React from "react";
import "./rayajin.ajinray.component.css";
import image from "../../rayajin.png";
import image2 from "../../rayajin2.jpg";
import intezaar from "../../intezaar.jpg";
import khat from "../../khat.jpg";
import varsh from "../../varsh.png";
import heart from "../../heart";
import ParticlesBg from "particles-bg";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from "@material-ui/core";
import RayAjinResultComponent from "./rayajin-ajinray-result-component/rayajin.ajinray.result.component";

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

const useStyles1 = makeStyles({
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

const useStyles3 = makeStyles({
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

export function OutlinedCard1() {
  const classes = useStyles1();
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
            RayAjinShip, 6 ogo_icai.pngbrave she is! Never let anyone else get a
            feel of what storms are going inside her. Not even me. Just taking
            care of her own self, not letting anyone even remotely realising
            what is going on inside her head and what she is going through. And
            that too with a smile on her face. I just wish I could have sensed
            all of those things. I am sorry Ray. I will definitely do better.
            How smart she is! How quickly she figured out to use her earring to
            get the sim out of the phone when we first met. Also, the solution
            for me to reach hotel on time and in turn spending more time with
            her. Just take my scooty. That was so smart. I really do not find
            others' smart but she really is one hell of a smart person. How hard
            working she is! Just giving her everything towards her goal, no
            matter what, even when she is sick or has to sacrifice on her sleep.
            How determined she is! Once decided, she has to do it. Even if it
            means driving for 1 hour to pick me up at the airport even after
            being sick. Or spending all the time with me even if it means taking
            a lot of paracetamols How loving she is! She just has all the love
            for me and nothing else. I have never even believed that such love
            was even remotely possible. And how caring she is! I have always
            felt void of people close to me when I needed them the most. But she
            is always there. Through all the thick and thins. Even if she
            remotely feels that I need her. Leaving everything aside, she just
            made sure that she is there for me. Even if it means not sleeping or
            not studying just few days before exams. And of course, not to
            forget, how beautiful she is! I just can keep looking at her all my
            life and never get tired. She is just the
            beautifulestestestestestest, cutestestestestestestestest and even
            hottestestestestestest and sexiestestestestestestest being in all
            the universes. Though to me, she will always be my cutie pie. My
            Ray. My Jaan. My Jahaan. My Zindagi. My Sabkuch.
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

export function OutlinedCard2() {
  const classes = useStyles2();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          इंतज़ार
        </Typography>
        <br />
        <CardMedia>
          <img src={intezaar} width="30%" />
        </CardMedia>
        <br />
        <Typography variant="body" component="p">
          <p>
            Shit, how did I mess it up? I planned to do a lot of things on this
            special day, probably the most special day of her life and somehow
            right now I am not able to think of ANYTHING..
          </p>
          <h3>What do I do?</h3>
          <p>
            How do I convey what I am feeling?<br></br>I know she has all the
            butterflies in her stomach and I can just understand how much
            anxious she might be, waiting for the result link to come on the
            website. And I know how it feels, of course these two can't be
            compared, but still I know what it feels and more than that I am
            myself feeling all those emotions right now. So I can just imagine
            what might be going on in her mind. When I am all excited, anxious,
            checking the website multiple times, trying to write some code to
            know as soon as the result is published, have all those butterflies
            in the stomach, just waiting for that link to arrive, my heart
            beating a bit faster every time I reload that page. Ahhhhhhh,
            writing all of it is making it worse. But hey my friend, my god,
            just do whatever is best for her, give her all she wants and all she
            deserves and give me strength to make her distracted from all of it,
            till the time the result is announced.
          </p>
          <p>
            How do I wish her in the most special way possible?
            <br></br>
            Just the simple thought that I am not WITH her on this most special
            day of her life is also making me a little bit miserable. I just
            wanted to be there WITH her FOR her, but of course as each thing
            about our relationship is special, this also has to be made
            "special" by the pandemic. Another lockdown imposed and all my
            travel plans ruined. But soon, very soon I will go to her and give
            her all the gifts and hugs and kisses and everything she wants and
            needs and deserves and all I WANT to give her. And still I have no
            clue how to make this most special day of her life even more
            special. I really need to find a way to make her even more happier,
            what we call happiestestestestest, when she has just achieved the
            most important, most awaited milestone of her life.
          </p>

          <p>
            How do I tell her how proud I am of her, not for the results, but
            for the efforts she has put in?<br></br>
            She has really been true to her efforts, true to her aim, true to
            her goals, true to everything and everyone in her life throughout
            this journey. Despite all the hurdles, all the distractions, all the
            delays, all the pain, all the suffering, all the doubts, all the
            drama going around; she really never even for a moment got
            distracted from her goal, all her hours, all her efforts, all her
            subjects, all her topics, all of this journey. And this is really
            something I am very proud of and all of it just makes me wonder, how
            can someone be this dedicated, this committed and have this much
            resolve for anything. And she to has this for everything in her
            life. Even me, oh god, thank you so much !
          </p>
          <p>
            How do I let her know that no matter what happens in the result, she
            is still the best being I know? <br></br>
            Her kindness, gratitude, personality, confidence, attitude,
            smartness and also the efforts she put in everything, all of these
            will take her wherever she wants despite of the results. And I know
            this, there is nothing, and I repeat NOTHING, that will stop this
            young, kind, confident, passionate, compassionate, dedicated, smart,
            ambitious and the best woman in all the universes to achieve
            whatever she wants in life, and more to get whatever she deserves in
            life. She really is one hell of a girl. She just has everything
            people ever dream of, and has none of the attitude that others show
            with not even half of what she has. And more than everything and
            anything, she just has the most beautiful soul. And I think, that
            beautiful soul of hers will take her places and the universe will
            grant her all her wishes and even beyond.
          </p>
          <p>
            How do I tell her how much privileged I feel to be a part of her
            journey?<br></br>
            In the most special journey of her life, and that too in THIS
            special capacity. Being her partner, trying to make things easy for
            her, trying to just be with her whenever she needed me. I know there
            are times I was not there, and even despite everything and my strong
            want to not let me effecting her in any negative way, somehow I did
            make things difficult for her and I am really sorry for this dil se.
            But with all of it, there was never a moment where I did not want to
            give all my attention, all my time, all my energy, all my efforts,
            all my blessings, all my thoughts, all my prayers and even all of me
            to her. Just to be of even a little support, guide and any help of
            any sort to just elevate her efforts a little, to bring her a little
            bit closer to her goal, to just be with her. And all of it, was with
            the utmost gratitude in mind that thank you, thank you god, universe
            and her, for letting me be a part of this beautiful journey for
            her's and making it OUR JOURNEY!
          </p>
          <p>
            How do I tell her that all her tears, all the sleepless nights, all
            her breakdowns, all the pain, physical and mental, all the
            compromises, all her efforts..All of it will definitely pay off and
            we will have the celebration of our lifetime?
            <br></br>
            Of course we will. We will just have the bestestestestestest of time
            and enjoy the result to the core. Because of course people say that
            it's the journey that is beautiful but that journey was for
            something even more beautiful, the destination. And when we have
            reached the destination, how could we not enjoy it to the fullest.
            And we will, we definitely will...
          </p>
          <p>
            <b>But just one questions, HOW?</b>
          </p>
          <p>Agghhhhhhh...</p>
          <p>
            Let me just refresh this results tab again meanwhile I figure this
            out.
          </p>
        </Typography>
      </CardContent>
    </Card>
  );
}

export function OutlinedCard3() {
  const classes = useStyles3();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          ख़त
        </Typography>
        <br />
        <CardMedia>
          <img src={khat} width="30%" />
        </CardMedia>
        <br />
        <Typography variant="body" component="p">
          <p>It's still unbelievable na..</p>
          <p>
            Like I can't even believe ki mera aur tera (ofcourse this version of
            me used to call you tu) kuch scene h..
          </p>
          <p>
            Like smallest of things like, apna subah uthte se ek dusre ko uthana
            (mostly me waking you up &#128541;), mera tujhe aap bulana, hamari
            baatein, hamari hasi, hamara kisse kahaniyaan sunana, aur kai saari
            choti choti cheejon se lekar to the biggest of things.. like poori
            zindagi ki ek saath planning kar paana.. paana because for both of
            us.. kisike saath bhi ye soch paana was a hard task.. and ek dusre
            ko p0 rakhna.. khud ka kuch bhi chal raha ho.. dusre ka kuch bhi ho
            jaye apna sab chod chaad k available rahna.. fir chahe aapko (aap
            because its weird for me to switch to tu.. :-P) 102 fever kyu na
            ho.. ya chahe aap raat bhar soye na ho.. ek dusre k future ki
            planning karna.. and most importantly.. har ek waqt.. bas ek dusre
            ki khushi k baare me sochna.. as for both of us.. we wish for each
            other to be the happiest.
          </p>

          <p>
            And these are just a few things.. as we start and end each day.. we
            do a lot of these small and big things.. which make me realise..
            that how lucky I am to have witnessed this version of yours.. and
            how luckiest I am that I transformed myself to this other version..
            to really deserve you.. the best in all the universe..
          </p>
          <p>
            Like I know probably we always shared a connection, and probably we
            were still there for each other when needed. But to really transform
            that friendship to what we have.. is really unbelievable at times..
            and really the credit goes to you..
          </p>
          <p>
            The fact that despite having no reasons, you gave me a chance..
            Still can't believe how and why... but you did.. somehow you showed
            faith in me even when you had no reason to.. and somehow I kept
            blowing that.. without even knowing.. but somehow.. and thank god
            how.. I got the wisdom to to break out from the person I was.. to
            the person I am.. and that speaks a lot about what you mean to me..
          </p>
          <p>
            You just broke all my preconceptions of a relationship, you made me
            think beyond my thoughts for love, you made me realise that even I
            was capable of receiving and not just giving., you made me do
            things.. beyond what I could ever imagine.. and why would I not..
            when I was just blessed with someone.. who had just changed my
            conceptions, my thoughts, my world, my universe.. how could I now
            change myself to be the best version of myself or the best version
            of any being that anyone could ask for.. I know I am not.. THE
            BEST.. but I would never ever stop striving for.. to be THE BEST..
            THE PERFECT being for you..
          </p>
          <p>And even with all of it..</p>

          <p>
            <b>I still can't believe ki mera aur aapka kuch scene h...</b>
          </p>
        </Typography>
      </CardContent>
    </Card>
  );
}

export function OutlinedCard4() {
  const classes = useStyles3();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          वर्ष
        </Typography>
        <br />
        <CardMedia>
          <img src={varsh} width="30%" />
        </CardMedia>
        <br />
        <Typography variant="body" component="p">
          <h3>1 year ago...</h3>
          <p>I love you!!!</p>
          <p>There, I said it.</p>
          <p>
            With all the overflowing emotions, amongst the chaos of a deadly
            disease, in middle of the sorrow of losing a loved one.
          </p>

          <p>There, I said it.</p>
          <p>
            This had been coming up in my mind, till my throat any time I talked
            with her. Every time I put the phone down, I really wanted to say
            these three magical words. Because that's what I felt, LOVE. Yes,
            love for her. The way she just stood besides me, the way she took
            care of me, the way she was just there for me, the way she made me
            realise that there was someone who did care about me, who was there
            for me, and who took efforts for me. I somehow had stopped expecting
            all of these from someone else, and just accepted and also wanted to
            just give whatever I have to offer without expecting anything in
            return. Just give to the extent you can and be happy. But there she
            came, who gave back. Not just back but more than what I ever gave
            her, what I ever did for her, what I was still doing for her. Much
            more than all of it combined, and that too without even asking. Then
            how can I not give her all what I have to offer, and try to do much
            much much more than that. How can I not? And probably, this is what
            love should be, and definitely...
          </p>
          <p>This is what I feel for her... </p>
          <p>Love.</p>

          <h3>Now...</h3>
          <p>No it was not love...</p>
          <p>It was something much beyond...</p>
          <p>
            Calling it "love" is a huge huge huge understatement. What I have
            felt, experienced, observed, witnessed, noticed, perceived and also
            discovered is something much much much beyond the human
            comprehension. It is divine, or may be just just just angelic.
            Because she is one. An angel directly from heaven, who just has all
            the heavenly experiences for me. Like really, all the experiences, I
            have, are heavenly. My each and every conversation, each and every
            meeting, each and every call, each and every message, each and every
            video call. Everything, all of it is just pure heaven.
          </p>

          <p>
            And I am just glad, beyond what I can express; thankful, beyond what
            I can ever be; and grateful, beyond what I could ever comprehend
            that I am the one who gets to experience this heaven. This heaven
            where I can be whatever I chose to be, where I can feel good about
            even the worse of events, where I have a smile on my face, even when
            the world is falling apart. Because at the back of my mind, I know
            that I have her, as I call it, my jaan, my jahaan, my zindagi, my
            heart, my soul, my energy, my happiness, my EVERYTHING. Who would
            just give me the best of everything. Emotions, feelings, happiness,
            courage, bravery, thoughts, everything. And when I have best of all
            the best that universe has to offer, how can I be worried about
            ANYTHING else. And that's how I get my constant happiness from her.
          </p>
          <p>
            This constant happiness, this feeling, to just do everything and
            anything for her, to travel for miles just to see that smile on her
            face, to be up for hours, just to hear her voice, to feel happy in
            her happiness, to be sad in her sorrows, to try to pull all the
            strings together, just to have a moment of togetherness, to think
            everything, beyond my own self, to be happy just by her presence,
            to have your day turned around, by just that smile, and to be ready to
            do anything and everything, just to see that smile on her face.
            THIS is not love. THIS is something WAY beyond, something very
            special, something which is difficult to comprehend, impossible to
            understand, something which just feels divine, feels spiritual,
            feels out of this universe. THIS something is not love.
          </p>
          <p>
            <b>This is something much beyond!!!</b>
          </p>
        </Typography>
      </CardContent>
    </Card>
  );
}

export function ComponentToRender(props) {
  const { currentPost } = props;
  if (currentPost === 0) {
    return <OutlinedCard />;
  } else if (currentPost === 1) {
    return <OutlinedCard1 />;
  }
  if (currentPost === 2) {
    return <OutlinedCard2 />;
  }
  if (currentPost === 3) {
    return <OutlinedCard3 />;
  }
  if (currentPost === 4) {
    return <OutlinedCard4 />;
  }
  return null;
}

class RayAjinComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPost: 4,
    };
  }

  onClickPrevPost = () => {
    this.setState({
      currentPost: this.state.currentPost - 1,
    });
  };

  onClickResultButton = () => {
    this.setState({
      currentPost: 5,
    });
  };

  onClickNextPost = () => {
    this.setState({
      currentPost: this.state.currentPost + 1,
    });
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

    return (
      <div className="AjinRay">
        {this.state.currentPost === 5 ? (
          <RayAjinResultComponent />
        ) : (
          <div>
            <ParticlesBg type="custom" config={config} bg={true} />
            <div className="AjinrRay-header">
              <h1 className="AjinrRay-header-text">RayAjin | AjinRay | US</h1>
              <h3>
                The personal blog of{" "}
                <button
                  className="AjinRay-result-btn"
                  onClick={this.onClickResultButton}
                >
                  Ray
                </button>{" "}
                and Ajin
              </h3>
            </div>
            <div className="AjinRay-body">
              <ComponentToRender currentPost={this.state.currentPost} />
            </div>
            {this.state.currentPost !== 0 ? (
              <div>
                <button className="AjinRay-btn" onClick={this.onClickPrevPost}>
                  {"Previous Post"}
                </button>
              </div>
            ) : null}
            {this.state.currentPost !== 4 ? (
              <div>
                <button className="AjinRay-btn" onClick={this.onClickNextPost}>
                  {"Next Post"}
                </button>
              </div>
            ) : null}
          </div>
        )}
      </div>
    );
  }
}

export default RayAjinComponent;
