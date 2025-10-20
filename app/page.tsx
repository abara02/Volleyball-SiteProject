import Header from "../components/Head";
import Section from "../components/Section";
import SkillCard from "../components/SkillCard";
import PositionCard from "../components/PositionCard";
import DrillList from "../components/DrillList";
import Footer from "../components/Footer";
import RotationTracker from "../components/Rotation";

export default function Home() {
  const skills = [
    {
      title: "Serving",
      description:
        "The serve is the first contact that puts the ball into play, starting every rally. It is performed by a server from behind the end line, who strikes the ball over the net and into the opponent's court. Serving is a great tool to score points as a well-placed serve (whether to a weak passer, at the setter, at the quick attacker, or to a weak formation) that is also difficult to pass, puts the opposing team at a disadvantage. There are also different types of serves that you can learn as you progress:",
      image:
        "https://www.ussportscamps.com/media/images/volleyball/nike/camps/gallery-serving.jpg",
      listItems: [
        "Underhand serve",
        "Overhand serve",
        "Jump serve",
        "Float serve",
        "Topspin serve",
      ],
    },
    {
      title: "Forearm Passing",
      description:
        "Passing also known as a 'bump', is used to receive the ball from the opposing team's service or attack. To pass effectively, players should be in a ready position, keeping their arms straight together and feet parallel when making contact with the ball using their forearms. To make a good pass their arms should be directed at their target. Ideally the ball should be passed high toward towards the setter to set up an offensive plays for your team. This is the first step in the basic pass-set-spike sequence that makes up the foundation of volleyball.",
      image:
        "https://www.improveyourvolley.com/images/xvolleyballservereceivetipsralpharvesencreativecommons.jpg.pagespeed.ic.j1xJwBWNee.jpg",
      listItems: [],
    },
    {
      title: "Setting",
      description:
        "Setting or overhead passing is the most important step in the pass-set-spike sequence. It is ideally your team's second touch and a good setter will be able to take this and set up an attacker for the offensive play. To set properly the player should use their fingertips and create a triangle with their thumb and fingers. Their hands should be above their heads with their fingers relaxed but steady, with their knees and elbows slightly bent. The ball should essentially hit the forehead if the player were to remove their hands, and it's important to follow through with the motion with the entire body to make a good set. Setters want to create a high and accurate ball trajectory toward their hitter that's easy and comfortable to hit. When playing in a competitive setting where setters are more experienced and comfortable with their hitters, setters can change the tempo of the attack by doing a quicker set. This needs to be coordinated with the hitters, but when done right, it can be a devastating weapon that's difficult to react to.",
      image:
        "https://volleycountry.com/wp-content/uploads/2015/10/bruninho-setting.jpg",
      listItems: [],
    },
    {
      title: "Attacking",
      description:
        "Attacking, also known as hitting, is the final step in the pass-set-spike sequence and is used to score points. There are many different ways to hit the ball offensively for instance tipping, pushing, or spiking. There are also many areas on the court to aim for so there are cross-court spikes, line drives, or dumps. There are many different ways to play the ball and a good attacker should have good spatial awareness to be able to look for holes in the opposing defense, and be able to pick how to hit the ball and where to place it in order to score points. As for the physicality it's important for a player to have good jumping ability, and really get their timing and a good approach down to be able to hit the ball with force and accuracy.",
      image: "https://i.ytimg.com/vi/GWzkF1hNavc/maxresdefault.jpg",
      listItems: [],
    },
    {
      title: "Blocking",
      description:
        "Blocking is a defensive skill used to stop the opposing team's attack and can even lead to scoring points. Blockers focus on reading the opposing setter and anticipating attacks to position themselves effectively. Quick reactions, proper timing, and strong positioning are crucial. To block, players should stand ready with elbows in front and palms forward, then jump explosively to form a wall against the hitter. Great blockers predict the ball's path, adjust to the hitter's habits, and use good timing, height, and hand placement to stop attacks effectively.",
      image:
        "https://www.improveyourvolley.com/images/blockingvolleyballtipspenetratethenetmattpendletonfloridadoubleblock.jpg",
      listItems: [],
    },
    {
      title: "Digging",
      description:
        "Digging is a defensive skill to save the ball from hitting the ground when a standard pass isn't possible. Players sink their hips low with heels raised, extend arms into underhand position, and push off their toes using their lower body to move. Diving may be needed, but proper positioning reduces this necessity. Liberos are typically the primary diggers and defensive core of the team. Effective digging requires good reflexes, footwork, and body control. Players must get into position before the attack finishes, which demands strong ball-tracking skills and blocker awareness. Diggers use blockers as a wall to cover undefended areas and must control the ball to create clean passes to teammates.",
      image:
        "https://cdn.prod.website-files.com/673b0400c2ec5c92083f76bb/673c26f824d09a6c49a7379d_how-to-dig-2.jpeg",
      listItems: [],
    },
  ];

  const positions = [
    {
      title: "Outside Hitter",
      description:
        "The outside hitter, positioned on the left side of the court, serves as the primary offensive weapon for most teams. These athletes need exceptional jumping ability, quick footwork, and strong court awareness to adapt to constantly changing game situations. As the go-to attacker, they must be ready to capitalize on any scoring opportunity that comes their way.",
    },
    {
      title: "Middle Blocker/Hitter",
      description:
        "Often the tallest player on the team, the middle blocker acts as the first line of defense against opponent attacks. Their primary responsibility is reading the opposing team's attackers and positioning themselves to shut down hits at the net. However, this isn't just a defensive role—middle blockers are also powerful offensive players who play a crucial part in attack strategies, making them true two-way threats.",
    },
    {
      title: "Opposite Side Hitter",
      description:
        "The opposite hitter, positioned on the right side and sometimes called the 'weak side' hitter, must excel at both offense and defense. Like outside hitters, they need excellent jumping ability for attacking, but what distinguishes them is their heightened defensive responsibility. They must be skilled at receiving serves and handling defensive plays, making this one of the most well-rounded positions on the court. Interestingly, many left-handed players thrive in this role due to the angle they hit at.",
    },
    {
      title: "Setter",
      description:
        "The setter is the quarterback of the volleyball team, orchestrating the entire offense. Ideally taking the second touch on every play, setters need a delicate touch and precise ball-handling skills to deliver perfect sets to their attackers. Strong communication, quick movement, and excellent court awareness are essential, as the setter connects defense to offense. Without a skilled setter, there would be no powerful spikes or strategic ball placement.",
    },
    {
      title: "Libero",
      description:
        "The libero is a defensive specialist who plays exclusively in the back row and excels at receiving attacks from the opposing team. This position comes with specific restrictions—liberos cannot attack the ball at the net, set from the front court for an attacker, or serve in some rule sets. Easily identified by their different colored jersey, liberos are highly skilled passers who anchor the team's defensive efforts.",
    },
    {
      title: "Defensive Specialist",
      description:
        "Defensive specialists are expert passers who provide critical support to the team's defense. Unlike the libero, they can substitute for any player on the court, though these substitutions count toward the team's limit of 12 per set. They focus primarily on ball control and passing, working in tandem with the libero to create a solid defensive foundation for the team.",
    },
  ];

  const teamDrills = [
    {
      name: "Serve Receive to Target Drill",
      url: "https://youtu.be/j-XzoZkInPU",
    },
    {
      name: "How to PASS Better",
      url: "https://youtu.be/iAsH4YZKyLc?si=S2k6DVienIOuHsfx",
    },
    {
      name: "6 Volleyball Passing Movement Drills for Beginners",
      url: "https://youtu.be/V-3bZ8NbQJU?si=qSTmkTCgKyfOzE73",
    },
    {
      name: "Serving progression drill",
      url: "https://youtu.be/pREhctojFPY?si=avMT4q2F43XrFGrv",
    },
    {
      name: "Skill Development Drills: Serving",
      url: "https://youtu.be/fQZGk1KfWeI?si=xf5IjeUJHIPe0qic",
    },
    {
      name: "BEST VOLLEYBALL SETTER DRILLS EVER",
      url: "https://youtu.be/UpTGp2Gmn7I?si=QlbnKmyLCjq0jm2T",
    },
    {
      name: "Volleyball Setting Drill - Right Back Right Front Exchange",
      url: "https://youtu.be/N_U4Dkrc0bU?si=n6-frmqhjtzdp5vJ",
    },
    {
      name: "5 POPULAR Hitting Drills to improve your volleyball spike",
      url: "https://youtu.be/EpmR0edNOgo?si=qphvhjhQHaFTv3-5",
    },
    {
      name: "Best of Club Volleyball: Attack Training Progressions",
      url: "https://youtu.be/oGj-ElW9XNU?si=oIOyxoxuBr-WMdXv",
    },
  ];

  const soloDrills = [
    {
      name: "Solo Volleyball Passing Drills To Try At Home",
      url: "https://youtu.be/wzQBhgckN1o?si=r_v6oBygfeADMKCa",
    },
    {
      name: "Volleyball at Home Drills (Serving)",
      url: "https://youtube.com/shorts/oxk7R-JJuFI?si=zreCwDrHdvIr4Jlw",
    },
    {
      name: "At Home Volleyball Drills",
      url: "https://youtube.com/shorts/cxKZqGfilPc?si=H5o8Gsc67Y3dAlbB",
    },
    {
      name: "Solo Volleyball Setting Drills To Try At Home. Perfect For Limited Space!",
      url: "https://youtu.be/WV_bWjWIaxM?si=K3N1NvW2TTfGA3P_",
    },
  ];

  return (
    <div className="mmin-h-screen text-purple-600 bg-white scroll-smooth">
      <Header />

      <main className="max-w-6xl mx-auto px-6">
        {/* About Section */}
        <Section id="about" title="About Me">
          <p>
            Hello I'm Alexis, but my players know me as Coach "Lexi" or "X"! I'm
            a passionate volleyball coach who grew up playing and loving this
            amazing sport. Volleyball has been a huge part of my life, and I've
            been fortunate to hold leadership roles throughout my playing
            career. For the past two years, I've been coaching travel teams and
            it's been an incredible journey—my teams have earned numerous first,
            second, and third place medals at tournaments under my care.
            Currently, I have served as a head coach for{" "}
            <a
              href="https://www.nwcty.org/programs/110/northwest-juniors-volleyball-club/"
              className="text-orange-400 hover:underline"
            >
              Northwest Juniors Volleyball Club
            </a>
            , where I structure practices, design rotations, and work with
            athletes to help them reach their full potential. What I love most
            about coaching is working with children and watching them grow, not
            just as players, but as confident, skilled athletes who love the
            game as much as I do. There's nothing more rewarding than seeing
            that moment when something clicks for a player, and they realize
            what they're capable of achieving.
          </p>
          <img
            src="/IMG_5482.PNG"
            alt="Coach Lexi Posing with Medals from one of her winning volleyball teams"
            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg "
          />
        </Section>

        {/* How to Play Section */}
        <Section id="play" title="Volleyball Explained">
          <p className="mb-6">
            Volleyball is a dynamic game where two teams of six players face off
            across a net. The game begins with a coin toss or
            rock-paper-scissors to determine which team serves first. Players
            work together to send the ball over the net, with each team allowed
            up to three touches before returning it to their opponents. The
            rally continues—a back-and-forth exchange—until one team grounds the
            ball in the opponent's court or a fault occurs. The objective is to
            score points by making the ball land on the opponent's side of the
            court. Matches are played in sets, with teams competing to reach 25
            points (or 15 in the final set). Each set must be won by at least
            two points, which can lead to extended rallies. In a three-set
            match, the first team to win two sets claims victory. In a five-set
            match, the first team to capture three sets wins the match, unless
            tournament rules dictate otherwise.
          </p>
          <img
            src="https://static.independent.co.uk/2023/08/31/10/1635548672.jpg"
            alt="Volleyball match"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
          />
        </Section>

        {/* Rules Section */}
        <Section id="rules" title="Volleyball Rules & Violations">
          <h3 className="text-xl text-purple-600 font-semibold mt-4 mb-2 ">
            Rules:
          </h3>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>
              Only 6 players on the floor per team at any given time: 3 in the
              front row and 3 in the back row
            </li>
            <li>
              Players may not hit the ball twice in succession (a block is not
              considered a hit)
            </li>
            <li>A ball hitting a boundary line is in</li>
            <li>
              A ball is out if it hits an antennae, the floor completely outside
              the court, any of the net or cables outside the antennae, the
              referee stand or pole, or the ceiling above a non-playable area
            </li>
            <li>
              It is legal to contact the ball with any part of a player's body
            </li>
            <li>It is illegal to catch, hold, or throw the ball</li>
            <li>
              Front row players are permitted to jump and attack above the plane
              of the net. Back row players may only attack from behind the 3m
              line (10-foot line) and must occupy a primarily defensive position
            </li>
            <li>
              All players must rotate clockwise through the six positions on the
              court in their designated serving order
            </li>
            <li>
              Each team is allowed a maximum of three hits to return the ball
              over the net
            </li>
            <li>A player may not block or attack a serve</li>
            <li>
              The server must wait for the referee's whistle before serving
            </li>
            <li>Only 12 substitutions allowed per set</li>
          </ul>

          <h3 className="text-xl text-purple-600 font-semibold mt-4 mb-2 ">
            Rule Violations:
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Stepping on or over the service line while making contact with the
              ball during a serve
            </li>
            <li>Failing to serve the ball over the net successfully</li>
            <li>
              Touching the net with any part of the body while the ball is in
              play
            </li>
            <li>Serving out of rotation or order</li>
            <li>
              Reaching over the net to attack the ball before it has crossed the
              plane of the net
            </li>
            <li>
              A back row player attacking inside the front zone (within the 3m
              line) when the ball is completely above the net at contact
            </li>
            <li>Crossing under the net into the opponent's court</li>
            <li>A back row player attempting to block at the net</li>
          </ul>
        </Section>

        {/* Skills Section - Using SkillCard component with .map() */}
        <Section id="skills" title="Volleyball Skills">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              description={skill.description}
              image={skill.image}
              listItems={skill.listItems}
            />
          ))}
        </Section>

        {/* Positions Section - Using PositionCard component with .map() */}
        <Section id="position" title="Volleyball Positions">
          <div className="grid md:grid-cols-2 gap-6">
            {positions.map((position, index) => (
              <PositionCard
                key={index}
                title={position.title}
                description={position.description}
              />
            ))}
          </div>
        </Section>

        {/* Rotation Tracker Section */}
        <Section id="rotation" title="Rotation Tracker">
          <RotationTracker />
        </Section>

        {/* Drills Section - Using DrillList component */}
        <Section id="drills" title="Practice Drills">
          <DrillList title="Team Drills:" drills={teamDrills} />
          <DrillList title="Solo Practice:" drills={soloDrills} />
        </Section>

        {/* Learn More Section */}
        <Section id="learn" title="Learn More">
          <p className="mb-4">
            There is tons more to learn about volleyball ! Please reference the
            link below to get the most reliable information
          </p>
          <a
            href="https://usavolleyball.org/resources/"
            className="text-purple-600 hover:text-lime-300 hover:underline text-lg font-semibold transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            USA Volleyball Resources →
          </a>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
