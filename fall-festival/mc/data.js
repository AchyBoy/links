/* Shared by index.html (review) and show.html (finished sheet). */
/* [id, heat 0 safe / 1 spicy / 2 dangerous, line, delivery note, mine?]
   IDs are fixed so a review survives later rewrites. Never reuse an id. */
var S=[
 {k:'meet',name:'Meeting',emoji:'📋',groups:[]},
 {k:'open',name:'Opener',emoji:'🎤',groups:[
  ['Your opener (keep as is)',[
   ['o1',0,'Before we get started, I want everybody to remember that this is a church event. We’re here to have fun, show good sportsmanship, and demonstrate Christian love.','',1],
   ['o2b',1,'Unfortunately, I’ve seen some of y’all play games before, so I’m not expecting too much.','',1,1],
   ['o3',1,'Now, I’m not gonna call any names… but we ALL know who I’m talking about.','Pause. Look around slowly, like you’re checking for a pickpocket.',1],
   ['o4',2,'And if you think I’m talking about you… I probably am.','Straight face. Don’t smile till they laugh.',1]
  ]],
  ['Add-ons after the opener',[
   ['o6c',1,'If you lose, remember: the last shall be first. Just not today!','Shrug, like it’s out of your hands.',1,1],
   ['o7b',0,'All judges’ decisions are final. The judge is me. I can be bribed, but only with dessert or coffee, and only before the game starts.','',1,1],
   ['o13',1,'If anybody gets hurt tonight, don’t worry. We’ve got a bag of frozen peas and about forty prayer warriors who have been WAITING for this moment.','Spicier version of the same idea. Pick one.',0,1]
  ]]
 ]},
 {k:'g3',name:'Sack Race',emoji:'🏁',rules:{title:'Sack Race Relay',steps:['FIRST GAME. Six high school volunteers, two teams of 3.','Start near the corn (meeting said that’s a good distance).','On GO, the first player hops to the stage and back.','Pass the sack to the next teammate, who does the same.','First team with all 3 back wins.','If you fall, hold on to your sack.'],go:'Ready, Set, Go!'},groups:[
  ['Intro',[
   ['g3i1',0,'This next game requires speed, balance, coordination, and six people willing to embarrass themselves in front of the entire church!','',1],
   ['g3i7',0,'We need six high school volunteers! Parents, this is the fastest you will ever see them move without a phone in their hand.','',0,1],
   ['g3i8',1,'Teenagers, if you fall, just lay there a second. Your mama is already filming it.','',0,1],
   ['g3i2',0,'If you’ve got bad knees, bad ankles, or just bad judgment, this may not be your ministry.','',1],
   ['g3i9',1,'Now, if you’re over forty, have a seat. This one’s for the teenagers. Don’t worry, we’ll call you for the hay bales.','Replaces the over forty/sixty line now that it’s teens.',0,1],
   ['g3i5d',0,'Three people, one sack. It’s just like the body of Christ: many members, one body. And tonight, that body is gonna be hopping.','',0,1],
   ['g3i6d',0,'Real quick before we start: we may need a doctor, a nurse, or a professional Band-Aid installer. If you qualify, consider yourself on standby.','',1,1],
  ]],
  ['Rules, said funny',[
   ['g3r2y',0,'If you fall, hold on to your sack and your dignity.','',1,1],
   ['g3r1b',1,'Feet stay IN the sack. If a foot comes out, that’s the back row for a month… AND you’re printing your own offering envelopes.','Beat before “AND.”',0,1],
   ['g3r2',1,'Hand the sack to the next person. Do NOT throw it at them. I know some of y’all have unresolved issues.',''],
   ['g3r3',0,'Hop to the stage and back. That’s hopping, not shuffling. We are a hopping church tonight.','']
  ]],
  ['During the game',[
   ['g3d19',0,'Pass the sack! It’s not a family heirloom, let it go!','',0,1],
   ['g3d20',0,'Sir, that’s not hopping. That’s tiptoeing in a bag.','',0,1],
   ['g3d21',0,'Down… and back up! Like Lazarus!','',0,1],
   ['g3d22',0,'Up! Hop! Hop! …OK, that was more of a wiggle.','',0,1],
   ['g3d1',0,'He’s hopping like he just stepped on a Lego!','',1],
   ['g3d4',0,'The spirit is willing, but the knees are weak!','',1],
   ['g3d5',0,'That’s not a fall. That’s an unscheduled prayer meeting!','',1],
   ['g3d10',0,'Somebody shout HALLELUJAH! We just witnessed a miracle! He made it back!','',1],
   ['g3d11',0,'That’s not hopping. That’s falling forward on purpose, over and over.',''],
   ['g3d12',0,'Get UP, sister! The Lord didn’t bring you this far to leave you in a feed sack!',''],
   ['g3d13',1,'Sir, that’s a shuffle. I’m watching you. That is an illegal shuffle.',''],
   ['g3d16',2,'He went down like he got slain in the Spirit. …He’s fine. He’s just resting in the Lord.','Only if he’s OK. Check first.'],
  ]],
  ['Play-by-play',[
   ['g3p1',1,'HE’S COMING DOWN THE HOME STRETCH! THE CROWD IS ON ITS FEET! HIS KNEES ARE REQUESTING IMMEDIATE RETIREMENT!','',1],
   ['g3p2',0,'HE’S AIRBORNE! HE’S AIRBORNE! …HE IS NO LONGER AIRBORNE! HE’S ON THE GROUND, FOLKS, AND THE GROUND IS WINNING!',''],
   ['g3p3',0,'THE HANDOFF! FUMBLE! FUMBLE IN THE SACK! ONE LEG IN… TWO LEGS… SHE’S HOPPING! SHE’S DOING IT! SOMEBODY GET HER A WATER AND A WITNESS!',''],
   ['g3p4',0,'LAST RUNNER! LAST RUNNER! THIS IS FOR ALL THE MARBLES! AND BY MARBLES I MEAN A PRIZE FROM DOLLAR GENERAL!','']
  ]],
  ['Winners',[
   ['g3w1',0,'Let’s hear it for our winners! Six people, two sacks, and not a single insurance claim. That’s what I call a successful church event!','',1],
   ['g3w2',0,'Your relay champions! Tonight you get the prize. Tomorrow you get the ibuprofen.',''],
   ['g3w3',1,'Enjoy this moment, champs. Monday morning your hamstrings are filing a formal complaint.','']
  ]]
 ]},
 {k:'g2',name:'Hay Bale',emoji:'🍂',rules:{title:'Hay Bale Roll',steps:['SECOND GAME. 2 teams of 2 men (4 volunteers).','Both teams start in the middle. One team goes one way, the other goes the other way, all the way around the edge.','A pumpkin sits in the middle: first bale to bump the pumpkin wins.','You cannot lift or carry your hay bale.'],go:'Ready, Set, Roll!'},groups:[
  ['Intro',[
   ['g2i1',0,'Alright, gentlemen! Time to see who’s been working hard and who’s just been supervising!','',1],
   ['g2i2',1,'Some of y’all have been telling your wives how hard you work all week. Tonight we’re checking references!','',1],
   ['g2i3b',1,'We’re looking for two strong men per team. If you have to ask your wife whether you’re strong enough… maybe just sit this one out.','',1,1],
   ['g2i4c',0,'Remember, you have to ROLL it. No lifting, no carrying, no tossing. If that bale leaves the ground, you’re disqualified.','',0,1],
   ['g2i5c',0,'Ecclesiastes 4:9 says two are better than one. Ecclesiastes 4:10 says if one falls down, his friend can help him up. Fellas, you’re gonna need BOTH of those verses tonight.','Pick this one or the next.',0,1],
   ['g2i8',0,'I need four strong men! Somebody needs to show their boys how strong they are!','From the meeting.',0,1],
   ['g2i9',0,'Anthony rolled one of these by himself last night. So I don’t want to hear any excuses.','Point at Anthony.',0,1],
   ['g2i6',1,'If you’ve got a bad back, now is the time to remember it. Not after you lose.',''],
   ['g2i7b',0,'I want to see the same hustle y’all had at last week’s tug of war!','Pick this one or the next.',1,1],
   ['g2i7c',1,'Some of y’all are still sore from last week’s tug of war. Good news: hay bales don’t pull back.','',0,1],
  ]],
  ['Rules, said funny',[
   ['g2r1c',0,'If I see daylight under that bale, you’re disqualified. AND you get to load up every single hay bale after the festival. By yourself. …Just kidding. Mostly.','Beat before “Just kidding.” Another beat before “Mostly.”',0,1],
   ['g2r2b',1,'No kicking the bale. You kick it, I kick you… out of the game. In Christian love.','Pause before “out of the game.” Smile on “Christian love.”',0,1],
   ['g2r3d',1,'Both teams start in the middle. One goes this way, one goes that way, all the way around the edge. First bale to bump the pumpkin wins. And if you get lost, don’t worry. You’re men. You’ll just tell everybody you were taking a shortcut.','Course changed at the meeting.',0,1],
  ]],
  ['During the game',[
   ['g2d21',0,'They’re taking the scenic route!','',0,1],
   ['g2d25',0,'Somebody’s wife is louder than the MC. I respect it.','Point the mic at her.',0,1],
   ['g2d6b',0,'I could find the book of Habakkuk before they cross the finish line!','',1,1],
   ['g2d17',0,'Ecclesiastes 4:10: if one falls down, his friend can help him up! …Or just keep rolling. That works too.','When one of them slips.'],
  ]],
  ['Play-by-play',[
   ['g2p1',0,'AND HERE WE GO, LADIES AND GENTLEMEN! THE BALE IS MOVING! WE HAVE FORWARD PROGRESS! NOT MUCH, BUT IT’S PROGRESS!','',1],
   ['g2p2',0,'IT’S TIPPING! IT’S TIPPING! IT’S… IT’S FLAT AGAIN. NEVER MIND, FOLKS. STAY IN YOUR SEATS.',''],
   ['g2p3',1,'HE’S GOT HAY IN HIS SHIRT, HAY IN HIS HAIR, HAY IN PLACES THE LORD NEVER INTENDED, AND HE IS STILL PUSHING!',''],
   ['g2p4',0,'NECK AND NECK! BALE AND BALE! OVERALLS AND CARGO SHORTS! WHO WANTS IT MORE!','']
  ]],
  ['Winners',[
   ['g2w1',0,'Let’s give these men a big hand! They’ve officially proven they’re the best at pushing around dead grass. Put that on your résumé!','',1],
   ['g2w2',1,'Your hay bale champions! Gentlemen, your wives just watched you do yard work willingly, in public. You can never say “my back” again.',''],
   ['g2w3',2,'Congratulations, fellas. Saturday, 8 a.m., my house. I’ve got some round bales.','Hand them the prize like it’s a work order.']
  ]]
 ]},
 {k:'g1',name:'Last Kernel',emoji:'🌽',rules:{title:'Love You to the Last Kernel',steps:['FINALE, on the stage. 4 couples.','Husband sits in a chair (no table) holding the basket. Wife stands BEHIND him, blindfolded.','She reaches around, shucks the corn and pulls the silk, using only touch and his directions.','Then she feeds it to him, on the cob.','You get ONE MINUTE. Cleanest cob when time is called wins.','No helping hands from the husband.'],go:'READY, SET, SHUCK!'},groups:[
  ['Intro',[
   ['g1i1',0,'Marriage is all about trust, patience, and communication. We’re about to find out which couples have none of the above.','',1],
   ['g1i2c',1,'Ladies, your husband is about to give you instructions. Which is probably unfamiliar territory for both of you. Gentlemen, for the next minute, you’re in charge. Soak it in. Because when that blindfold comes off, we go right back to “yes, dear.”','Pause after “both of you.” Turn to the men.',1,1],
   ['g1i4',2,'Ladies, if your husband starts getting bossy, remember: you can’t see him, but you CAN still reach him.','',1],
   ['g1i5',0,'Ephesians says the two shall become one flesh. Tonight, the two shall become one big mess.',''],
   ['g1i6b',0,'They say behind every good man is a good woman. Tonight we’re testing that. Literally. She’s standing right behind him, blindfolded, holding an ear of corn.','Point at the chairs on “literally.”',0,1],
   ['g1i7c',1,'Ladies, you’ll be blindfolded, so you’re going completely off his directions. I’m sorry. We will all be praying for you.','Hand on heart.',0,1],
   ['g1i8b',0,'Newlyweds, y’all are about to find out if “for better or for worse” covers corn.','',0,1],
   ['g1i9b',0,'Now, couples who’ve been married a long time, y’all have the edge. She doesn’t need his directions. She’s been reading his mind for thirty years.','',0,1],
  ]],
  ['Rules, said funny',[
   ['g1r1b',0,'Husbands, your hands stay in your lap the whole time. You can talk all you want, but you cannot help. I know that’s gonna be hard for some of y’all.','',0,1],
   ['g1r2b',1,'Ladies, you’ll be standing behind him, blindfolded. You can’t see a thing, so you have to trust his voice. …Bless your heart.','Pause before “Bless your heart.”',0,1],
   ['g1r3b',0,'Gentlemen, clear directions only. “Left” and “right” are directions. “Over there” is not a direction. “You know what I mean” is definitely not a direction.','',0,1],
   ['g1r5d',0,'You get one minute. Sixty seconds. Ladies, that’s less time than it takes him to fall asleep.','',1,1],
   ['g1r4b',0,'So: she shucks it, she feeds it, he eats it. First clean cob wins. And I WILL be checking cobs. Everybody ready? Ready… set… SHUCK!','Hold up a cob like an inspector.',0,1],
  ]],
  ['During the game',[
   ['g1d21',0,'Look at him! Mouth open, leaning forward, like a baby bird waiting on a worm!','Lean forward with your mouth open.',0,1],
   ['g1d23',0,'He’s giving directions like a GPS that lost signal.','',0,1],
   ['g1d27',0,'Blindfolded wife, no hands, corn on the cob. Folks, this is the Olympics of marriage.','',0,1],
   ['g1d1',1,'Look at him! He’s been waiting his whole marriage for this moment!','',1],
   ['g1d2',1,'Sir, remember, that blindfold comes OFF eventually.','',1],
   ['g1d3',0,'Brother, she’s blindfolded, not deaf!','',1],
   ['g1d8',1,'Some of these couples came here happily married. I’m just hoping they leave that way!','',1],
   ['g1d9',2,'Well, we’ve established who’s been holding that in for twenty years!','',1],
   ['g1d14',2,'Look at her smile. She knows exactly where his mouth is. That miss was on purpose.','Nod slowly. Straight face.'],
   ['g1d15',1,'He’s got butter on his eyebrow and he’s still giving orders. Now THAT’S leadership.',''],
   ['g1d17',2,'First time in twenty years he’s been told to open his mouth instead of shut it.','Say it fast, move on.'],
   ['g1d18',0,'Brother, keep those hands down! I see you twitching. You look like a man watching somebody else back up his truck.',''],
  ]],
  ['Play-by-play',[
   ['g1p1',0,'SHE’S LINED UP… SHE’S GOING FOR IT… AND THAT’S THE NOSE! THAT IS THE NOSE, FOLKS! WE’LL COUNT IT AS A FIELD GOAL!',''],
   ['g1p2',0,'THE HUSK IS OFF! THE HUSK IS OFF! WE HAVE CORN! WE HAVE CORN, LADIES AND GENTLEMEN!',''],
   ['g1p3',0,'HE’S CHEWING LIKE A TYPEWRITER! LEFT TO RIGHT… DING! NEXT ROW!','Mime the typewriter return.'],
   ['g1p4',1,'WE HAVE A HAND VIOLATION! BROTHER’S HANDS LEFT THE LAP! THE HANDS HAVE LEFT THE LAP! THROW THE FLAG!','']
  ]],
  ['Winners + closing',[
   ['g1w1',0,'Let’s hear it for our winners! They’ve demonstrated exceptional teamwork, communication, and the ability to eat corn under extreme pressure. Everything a successful marriage needs!','',1],
   ['g1w2',1,'Ladies, you fed a grown man blindfolded while he sat and gave orders. That’s not a game. That’s Tuesday.',''],
   ['g1w3',2,'Congratulations. You are officially the most functional couple in this church. …Low bar. But you cleared it.','Hold the pause before “Low bar.”'],
   ['g1c1',1,'Gentlemen, remember, whatever happened up here stays up here. You’ve still got to ride home together!','',1],
   ['g1c2',0,'To the couples who didn’t win: Proverbs says better a dry crust with peace than a feast with strife. Tonight y’all got neither. But it’s in there.','']
  ]]
 ]},
 {k:'crowd',name:'Crowd work',emoji:'🚨',groups:[
  ['Nobody volunteers',[
   ['c1',0,'The harvest is plentiful, but the laborers are few!','',1],
   ['c2',0,'Come on, somebody! Y’all volunteer quicker than this when we’re asking who wants to eat!','',1],
   ['c3',0,'Many are called, few are chosen… and right now NONE are volunteering.',''],
   ['c4',1,'I’m gonna count to three, and then I’m picking whoever is looking at their phone.','Start counting slowly. Watch phones disappear.'],
   ['c5',1,'Look at all these hands… folded… praying I don’t call on them.','']
  ]],
  ['Wife volunteers him',[
   ['c6',1,'Look at that! He didn’t even raise his hand! That’s what we call a submitted husband!','',1],
   ['c7',2,'She volunteered him. That’s not a sign-up, that’s a sacrifice. Somebody tell Abraham to put down the knife.','']
  ]],
  ['Someone cheats',[
   ['c8',0,'The Lord saw that. And unfortunately, so did I.','',1],
   ['c9',1,'We’re going to need the ushers to come down here and collect a special offering of repentance!','',1],
   ['c10',2,'Ananias and Sapphira tried to fudge the numbers too. Look how that worked out.','Look up at the sky. Step back.']
  ]],
  ['Arguing the rules',[
   ['c11',0,'Brother, this is a church game, not the Supreme Court!','',1],
   ['c12',0,'You can appeal the decision, but you’ll have to take it up with Moses.','',1],
   ['c13',1,'You’re arguing with the only man holding a microphone. That’s a losing battle, my friend.','Hold the mic up.']
  ]],
  ['Too competitive',[
   ['c14',1,'Now remember, the fruit of the Spirit includes self-control. Some of y’all left yours in the parking lot!','',1],
   ['c15',0,'Brother, there’s no scholarship riding on this!','',1],
   ['c16',0,'Somebody remind these folks the prize is not a new truck!','',1],
   ['c17',2,'I can see a vein in his neck I didn’t know he had.',''],
   ['c18',2,'Sir. It’s a sack race. Unclench.','Very calm. Very quiet.']
  ]],
  ['Crowd too quiet',[
   ['c19',1,'Y’all are awfully quiet for people who aren’t the ones embarrassing themselves!','',1],
   ['c20',1,'If you’re not participating, you better be cheering. Spectating is not a spiritual gift!','',1],
   ['c21',2,'I’ve heard louder crowds at a funeral. And they had a reason to be quiet.','']
  ]],
  ['Complaints',[
   ['c22',0,'We’ll be accepting complaints immediately after the rapture.','',1],
   ['c23',0,'All complaints can be directed to whoever volunteered me.','',1],
   ['c24',0,'Philippians 2:14: do all things without grumbling. Look it up. I’ll wait.','Actually wait. Tap your foot.']
  ]],
  ['Odd moments',[
   ['c25',0,'It’s a TIE! We’ll settle it the biblical way: casting lots. …Rock, paper, scissors. Same thing.',''],
   ['c38',0,'We have a TIE! Tiebreaker: I’m thinking of a number. Closest guess wins.','Meeting idea: or ask how many pumpkins are out here.',0,1],
   ['c39',0,'Winners get a five dollar coffee gift card! Don’t spend it all in one place. …You can’t. It’s five dollars.','',0,1],
   ['c26',0,'Is he OK? He’s OK! That’s a thumbs up! …I think that’s a thumbs up. Somebody check.','Only after you know he’s fine.'],
   ['c27',0,'We’ve got a substitute running onto the field! Somebody check his birth certificate.','Little kid runs out.'],
   ['c28',0,'Even the sound system has backslidden.','Mic cuts out.'],
   ['c29',0,'While they set up: Jesus fed five thousand with five loaves. We fed this crowd with three crockpots and a prayer.',''],
   ['c30',2,'Pastor’s watching, so everybody act like it’s Sunday morning. …So, half asleep.','']
  ]],
  ['Your other favorites',[
   ['c31',0,'Remember, we’re here for Christian fellowship. But somebody’s still gotta lose.','',1],
   ['c32',0,'We’re keeping score today, because apparently “everybody’s a winner” isn’t in the King James Version.','',1],
   ['c33',0,'I’ve seen more teamwork from the disciples arguing over who was the greatest!','',1],
   ['c34',0,'We may need to test that brother for performance-enhancing sweet tea.','',1],
   ['c35',1,'Some of y’all are taking this awfully seriously for a prize that probably came from Dollar General!','',1]
  ]],
  ['Wrap-up',[
   ['c36',0,'That’s it, folks! Thank you for playing, thank you for cheering, and thank you to everybody who didn’t need medical attention.',''],
   ['c37',1,'If you lost tonight, don’t worry. There’s always next year. And an altar call.','']
  ]]
 ]}
];

/* Team sizes come from the official rules; how MANY teams is the meeting question. */
var TEAM={g1:{size:2,label:'Couple',ph:['Name','Name']},g2:{size:2,label:'Team',ph:['Man 1','Man 2'],vol:1},g3:{size:3,label:'Team',ph:['Player 1','Player 2','Player 3'],vol:1}};
var QS=[
 ['m1','How many couples for Love You to the Last Kernel?','Rules say husband + wife per team. Need a chair, a blindfold and an ear of corn per couple.','g1'],
 ['m2','How many teams for Hay Bale Roll?','Rules say 2 men per team. One hay bale per team.','g2'],
 ['m3','How many teams for Sack Race Relay?','Meeting: 2 teams of 3 high schoolers. One sack per team.','g3'],
 ['m4','Is there first aid? Who has the kit?','Decides which first aid joke you use.'],
 ['m5','What’s the prize for each game? Just 1st place, or 2nd too?','Write it per game: Kernel / Hay bale / Sack race.'],
 ['m12','Who is getting the prizes, and who brings them that night?',''],
 ['m13','Do we hand out prizes right after each game, or all at the end?','After each game keeps the crowd up; at the end keeps people around.'],
 ['m6','What order do the games go in, and what time?',''],
 ['m7','Who judges the finish line and breaks ties?',''],
 ['m8','Supplies: who brings blindfolds, corn, chairs, hay bales, sacks?',''],
 ['m9','Do I get a microphone / sound system?',''],
 ['m10','Hay bale course: straight to the stage, or around the seating area and back up the middle?','Which one you say changes a rules line.'],
 ['m11','Who loads the hay bales up after?','You’re telling the hay bale teams it’s them.']
];
