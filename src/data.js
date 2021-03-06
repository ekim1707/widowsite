import Chabco from './chabco.png';
import hanzochabco from './hanzochabco.png';
import reaper from './reaper.png';
import dva from './dva.png';
import mercy from './mercy.png';
import reinhardt from './reinhardt.png';
import mccree from './mccree.png';
import hanzo from './hanzo.png';
import symmetra from './symmetra.png';
import soldier from './soldier.png';
import tracer from './tracer.png';
import widowmaker from './widowmaker.png';
import pharah from './pharah.png';
import ana from './ana.png';
import junkrat from './junkrat.png';
import zenyatta from './zenyatta.png';
import jHoon from "./jHoon.png";
import jHoon2 from "./jHoon2.png";

const data = [
    {
        name: ['DV.a', 'Hana Song (송하나)', 'hanasong'],
        age: '19',
        height: `1.67m/5'5"`,
        nationality: 'Korean',
        occupation: ['Professional Gamer (formerly)', 'Mech Pilot', 'Actress'],
        voice: 'Charlet Chung',
        class: 'Tank',
        image: ['https://vignette.wikia.nocookie.net/overwatch/images/d/dc/Dva_portrait.png/revision/latest?cb=20160429040128', 'https://images5.alphacoders.com/659/thumb-350-659055.jpg'], 
        videos: 
        [{name: 'Dominant Beyond Statistics', 
        embed: 'https://www.youtube.com/embed/8naLUoELuzE?autoplay=0', 
        comment: `One of those games it doesn't even matter the stats, you just know you dominated while you 
        were actually playing the game.`, 
        image: soldier},
        {name: 'Random Queue = More Challenging?', 
        embed: 'https://www.youtube.com/embed/EoK3Xen671Q?autoplay=0', 
        comment: `Game is getting stale. Trying out a new random queue thing where I have to play the hero 
        I land on (unless it's a tank). Pretty happy with this Tracer game considering I don't think I've played
        Tracer in like a year or something.`, 
        image: tracer},
        {name: "WTF Was That Rofl", 
        embed: 'https://www.youtube.com/embed/WFcCFotxUfI?autoplay=0', 
        comment: `I don't even know if I was dominant, or if that was just the goofiest game ever, or what 
        lolol, but I def enjoyed playing it.`, 
        image: soldier},
        {name: '28% Team DMG',
        embed: 'https://www.youtube.com/embed/rxO1t2uRFy4?autoplay=0',
        comment: `Three of my favorite DPS mains/former-mains featured in one game. Pretty happy with how I played
        overall for each hero.`,
        image: 'https://www.wherescape.com/media/3274/montage-color.png'},
        {name: 'Healer Trio', 
        embed: 'https://www.youtube.com/embed/v_k4d-xm-mI?list=PLks73uWy20av2y1r_e0WpZL4lDFTVaVM9?autoplay=0', 
        comment: `One of my favorite videos. Planned from the start to play a different support hero each round (God-willing
        it actually went to three rounds, which it did). Pretty pleased with my performace with each hero played.`,
        image: 'https://www.wherescape.com/media/3274/montage-color.png'},
        {name: 'Brig Upvotes Self?', 
        embed: 'https://www.youtube.com/embed/67lT5mhyzvI?autoplay=0', 
        comment: `65% KP split between Pharah and Sombra. Gotta love a Brig who talks so brashly... as if
        whipping hacked, helpless enemies to death without having to aim at all is really that difficult. If I was a betting man, and I'm
        not, I'm 100% all-in that that immediate lone upvote of her came from herself lol...`,
        image: 'https://www.wherescape.com/media/3274/montage-color.png'},
        {name: 'EOG Hamster Blamed... Me. Really??', 
        embed: 'https://www.youtube.com/embed/WFsShe4v_4k?autoplay=0', 
        comment: `I think I'll let the video/chat speak for itself. FYI, I'm only mean in chat when I have a
        a reason to be. As you can see, despite being pretty frustrated myself, all I said after the game was
        "lol gg" initially.`, 
        image: soldier},
        {name: '60% KP', 
        embed: "https://www.youtube.com/embed/IW23M2d2x-4?list=PLks73uWy20atNs6H9TwlOtPAWfZJEe5w8?autoplay=0", 
        comment: `I lost interest in playing DVa (and just tanks in general) a long, long time ago, but I still think whenever I reach
        into the toolbag, I can play her well.`, 
        image: dva},
        {name: 'Yes I Actually Played Mercy. Once.', 
        embed: "https://www.youtube.com/embed/h2i_ZHnMukY?list=PLks73uWy20atPYjoDn-sUmMtUWAHulajb?autoplay=0", 
        comment: `Mercy is the most boring hero ever. I think I could count the amount of times I've played her in my
        entire life on two hands, but this one particular game actually ended up being a little bit fun.`,  
        image: mercy},
        {name: 'Im Actually A Pretty Sick Shield Tank', 
        embed: "https://www.youtube.com/embed/e_x_e_pw974?list=PLks73uWy20avxzWXNUYF8mBIOb2iZ9ktM?autoplay=0", 
        comment: `Rein was probably the hero I was most scared to try when I first started playing. One day, 
        I just decided to screw inhibition and learn how to play him, so I told my team before a game that I
        was probably gonna suck, but I was gonna play him anyway. They were pretty supportive, and we actually
        ended up crushing the other team. I stopped being scared of him from that point,
        and at one brief period, I was a pretty nasty Rein in my own opinion. Then I lost interest, and stopped
        playing him completely. This is one of the old videos from my Rein days that I managed to save.`, 
        image: reinhardt},
        {name: 'Swear This Hanzo Hero Is So Stupid', 
        embed: 'https://www.youtube.com/embed/lDW3IBWlOFw?list=PLks73uWy20at974kh-ijifZYsEBAQK7fD?autoplay=0', 
        comment: `There really is no hero I hate more than Hanzo. As I tell many people, I prefered him more
        when he had scatter, even as an enemy. I probably play him nowadays as rarely as I do Mercy, but this
        one time I think I did alright.`, 
        image: hanzo},
        {name: 'Yeah Sym But Still Pretty Epic', 
        embed: 'https://www.youtube.com/embed/2-b1uSWmcM0?list=PLks73uWy20at974kh-ijifZYsEBAQK7fD?autoplay=0', 
        comment: `I've actually had a handful of epic Sym games (considering I play her so rarely), but this is the
        only video of one I was able to dig up. In particular, I'm proud of the play I made at the end,
        which was completely in the moment and unscripted.`, 
        image: symmetra}, 
        {name: 'Can I At Least Get a Card', 
        embed: "https://www.youtube.com/embed/x84xe5GdNfo?autoplay=0", 
        comment: `When I first started playing, I exclusively played Soldier for about a year. Like seriously, seriously
        exclusively. These days I never do except rare occasions, but I always feel pretty comfortable
        regardless of how long it's been. This game made me chuckle because I don't think I could have possibly
        been more productive or helpful to my team, but for some reason Blizzard didn't even think I deserved a card.`, 
        image: soldier},
        {name: 'Dominant Soldier IMO', 
        embed: 'https://www.youtube.com/embed/NQZGLFNq388?list=PLks73uWy20at974kh-ijifZYsEBAQK7fD?autoplay=0', 
        comment: `Dusted off Soldier again and had a pretty decent game.`, 
        image: soldier},
        {name: 'Tracer Begins', 
        embed: "https://www.youtube.com/embed/8mV_oP0zkT0?list=PLks73uWy20at974kh-ijifZYsEBAQK7fD?autoplay=0", 
        comment: `This my first serious attempt at adding Tracer to my bag of "mains" after over two years of
        not playing her at all. Ended up having a pretty memorable experience over the course of these two games.
        (Note to Blizzard: I fully believe I deserved both POTGs... can a crappy Sym play possibly be more
        deserving than a 3-kill Pulse that wins the game?)`, 
        image: tracer},
        {name: '49% KP Rialto', 
        embed: 'https://www.youtube.com/embed/2JPz7qv6xNI?list=PLks73uWy20at974kh-ijifZYsEBAQK7fD?autoplay=0', 
        comment: `I was pretty frustrated with my team. Hopefully you can understand why.`, 
        image: tracer}],
        modalData: [{
            quote: '"오오오~? 좀 멋진데! (Ooooo, not bad!)"',
            primaryOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/b/b9/Ability-dva1.png/200px-Ability-dva1.png?version=ac54689044c1ec52b2afcedb2de20e71',
            primaryTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/0/09/Ability-dva5.png/200px-Ability-dva5.png?version=06807cd007cfa76dde727bb0e5cf05b6',
            abilityOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/3/3a/Ability-dva3.png?version=d6a6ffcd9b2322a1e2cac505e212718a',
            abilityTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/5/59/Ability-dva2.png?version=7d3d71366c2d0c0b84922053a616d526',
            ultimate: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/4/44/Ability-dva4.png?version=cccd452147ad7aa5ddd8b5339021f72b',
            labelOne: 'Fusion Cannons',
            labelTwo: 'Defense Matrix',
            labelThree: 'Boosters',
            labelFour: 'Micro Missiles',
            labelFive: 'Self-Destruct',
            description: `DVa will never be intended to take over games, which is why her firepower is lacking overall, but 
            she is always one of the cornerstone heroes that a good team builds itself around. It is imperative, as a good DVa, to learn
            positioning, especially to protect teammates (emphasis: healers) with her Matrix in key spots.
            On the offensive, DVas must know when to rush into the fray to try to finish off weak opponents, while still being able
            to escape without being de-meched. A DVa that cannot stay in mech consistently can be the sole cause of a team loss,
            regardless of his/her ability to pull off huge DVa bombs.`,
            iframe: 'https://www.youtube.com/embed/jN3TISLTVyc?autoplay=0',
            backgroundImage: 'https://i.ytimg.com/vi/thA-3guCaug/maxresdefault.jpg'
        }]
    },
    {
        name: ['Orisa', 'Orisa'],
        age: '1 month',
        height: `2.22m/7'4"`,
        nationality: 'none',
        occupation: ['Guardian Robot'],
        voice: 'Cherrelle Skeete',
        class: 'Tank',
        image: ['https://vignette.wikia.nocookie.net/overwatch/images/f/f9/Orisa_portrait.png/revision/latest?cb=20170323183330', 'https://i.pinimg.com/originals/e6/66/8f/e6668fdc94ebf28ed87ad4a76e5b49ad.png'], 
        videos: 
        [{name: 'Jumpshot A Pharah In Mid-Air', 
        embed: 'https://www.youtube.com/embed/5Z2vqL1XLyE?list=PLks73uWy20avvTfbopdIyHMqRwMM2q5gp?autoplay=0',
        comment: `Probably my personal favorite all-time play just because of the difficulty level.`, 
        image: widowmaker},
        {name: 'Genji Blade Jumpshot-Headshot', 
        embed: 'https://www.youtube.com/embed/1yKVJmDID8w?list=PLks73uWy20avvTfbopdIyHMqRwMM2q5gp?autoplay=0',
        comment: `This will probably my first really "epic-feeling" moment on my road to becoming a Widow-main.
        I knew this Genji was coming right back at me again out of spawn with Blade, and I was just waiting for him
        to dash before making my move. The last step was just making sure I landed the headshot, which luckily enough,
        I managed to do.`, 
        image: widowmaker},
        {name: 'I Have My Reasons', 
        embed: 'https://www.youtube.com/embed/kDXcaT_z0rk?list=PLks73uWy20avvTfbopdIyHMqRwMM2q5gp?autoplay=0',
        comment: `You might think this is a weird clip to include here. Duly-noted. But one of the greatest things I take pride in as a Widow
        is destroying enemy Tires (and sometimes just having the prescence of mind to do it). This clip may not look like much, but to me personally,
        considering my circumstances, I was very proud of being able to land a shot on that speedy Tire at a such a weird angle.`, 
        image: widowmaker},
        {name: 'Ice In The Veins', 
        embed: 'https://www.youtube.com/embed/S3YfOnv5XRU?list=PLks73uWy20avvTfbopdIyHMqRwMM2q5gp?autoplay=0',
        comment: `This play wasn't even really a matter of skill as much as just not flinching in the face of a Genji-blade coming right for me.`, 
        image: widowmaker},
        {name: '"Tracer Begins", The Highlights', 
        embed: 'https://www.youtube.com/embed/q9Qq-g3Z4yg?list=PLks73uWy20avvTfbopdIyHMqRwMM2q5gp?autoplay=0',
        comment: `This was literally my first attempt to play Tracer seriously in over two years. The best
        feeling moment was the last pulse that won the game for us.`, 
        image: tracer},
        {name: 'Group Boop', 
        embed: 'https://www.youtube.com/embed/STlrev4wI1E?list=PLks73uWy20avvTfbopdIyHMqRwMM2q5gp?autoplay=0',
        comment: `Not much to say here except I really like to boop, lol.`, 
        image: pharah},
        {name: 'Mother-Daughter Drama', 
        embed: 'https://www.youtube.com/embed/dqDL_0CVeNI?list=PLks73uWy20avvTfbopdIyHMqRwMM2q5gp?autoplay=0',
        comment: `Anyone who plays Ana seriously would understand how good that boop felt.`, 
        image: ana},
        {name: 'Pharah Mass Boop', 
        embed: 'https://www.youtube.com/embed/beuRqY9EJLk?list=PLks73uWy20atYCKb8fqei3dEIzjxz2v-4?autoplay=0',
        comment: `Distinctly remember the enemy Mercy calling me "mean" after that one. It was a feelsgood moment for sure.`, 
        image: pharah},
        {name: 'Girl Power', 
        embed: "https://www.youtube.com/embed/QpRLxnzwKEA?list=PLks73uWy20atYCKb8fqei3dEIzjxz2v-4?autoplay=0",
        comment: `Usually don't team up with Mei's and like it, but for this one time I was ok with it.`, 
        image: ana},
        {name: 'Cat-like Reflexes', 
        embed: "https://www.youtube.com/embed/DAISDT2SKi4?list=PLks73uWy20atYCKb8fqei3dEIzjxz2v-4?autoplay=0",
        comment: `Split-second boop at probably the only moment it could have been made. Felt pretty good.`,  
        image: pharah},
        {name: 'Old Lady Goes Beserk', 
        embed: "https://www.youtube.com/embed/yD-LX-PeEBY?list=PLks73uWy20atYCKb8fqei3dEIzjxz2v-4?autoplay=0",
        comment: `Definitely don't think that highlight did justice to the amount of ass-kicking I was doing against all these dudes diving me at once.`, 
        image: ana},
        {name: "Flight Artist", 
        embed: 'https://www.youtube.com/embed/9p3I1Qqg7hE?list=PLks73uWy20atYCKb8fqei3dEIzjxz2v-4?autoplay=0',
        comment: `Might ask, "Hey pd, why even take the time to shoot a Hanzo who's already falling to his death anyway?". I actually do have some good reasons, if you really want to know.`, 
        image: pharah},
        {name: "What's An Emoji-Tire?", 
        embed: 'https://www.youtube.com/embed/nELak42ycBA?list=PLks73uWy20atYCKb8fqei3dEIzjxz2v-4?autoplay=0',
        comment: `Have to admit I saw that play done by somebody else before, and it inspired me to just try it out myself. Still didn't make me enjoy it any less.`, 
        image: junkrat},
        {name: "Bravado Goes a Long Way", 
        embed: 'https://www.youtube.com/embed/H8sCVaBeA9E?list=PLks73uWy20atYCKb8fqei3dEIzjxz2v-4?autoplay=0',
        comment: `Definitely started to get the hang of timing really effective Tires after maining him for a bit.
        This particular Tire required me to have some bravado since I had to leave myself so vulnerable.`, 
        image: junkrat},
        {name: 'What Are The Percentages?', 
        embed: 'https://www.youtube.com/embed/FAtLjpXhUaY?list=PLks73uWy20atYCKb8fqei3dEIzjxz2v-4?autoplay=0',
        comment: `Really feel like I had zero margin of error for emerging out of that Soldier's visor alive.`, 
        image: widowmaker}, 
        {name: "Infra-red, Good As Dead", 
        embed: "https://www.youtube.com/embed/W6IOEieXQg0?list=PLks73uWy20atYCKb8fqei3dEIzjxz2v-4?autoplay=0",
        comment: `Just some sniping through trees with good 'ole infra-red.`, 
        image: widowmaker},
        {name: "Air Darts, Baby", 
        embed: 'https://www.youtube.com/embed/mXN1jKwxrTo?list=PLks73uWy20atYCKb8fqei3dEIzjxz2v-4?autoplay=0',
        comment: `I think most serious Ana players would agree, there's not many better feelings than darting a Mercy in mid-air.`,
        image: ana},
        {name: 'Pulse From Above', 
        embed: "https://www.youtube.com/embed/RtW2Nz6UF-k?list=PLks73uWy20atYCKb8fqei3dEIzjxz2v-4?autoplay=0",
        comment: `Freaking wack game with literally the most unhelpful team ever. I dropped that pulse bomb from above with some serious rage.`, 
        image: tracer},
        {name: 'Widow Highlight Reel', 
        embed: "https://www.youtube.com/embed/Kd72ZTDWEes?autoplay=0",
        comment: `Three recent Widow highlights I saved.`, 
        image: widowmaker},
        {name: 'To Kill A Peacockbird', 
        embed: "https://www.youtube.com/embed/M2oiiKO7Ijc?autoplay=0",
        comment: `In general most people hate to go up against enemy Doomfists, Genjis, and Sombras. I've
        actually practiced widow-counters against them enough that I'm happy when I see them on the other team.
        I don't always pull these kinds of plays off, but when I do, they give a very, very satisfying feeling.`, 
        image: widowmaker}],
        modalData: [{
            quote: '"Do you need a hug?"',
            primaryOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/4/4a/Ability_Orisa_Fusion_Driver.png/200px-Ability_Orisa_Fusion_Driver.png?version=9541bd74b99b1f059fbc2aa6eae37432',
            primaryTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/2/22/Ability_Orisa_Halt%21.png?version=614c913ebcf212f86f5e5c44e4ee6fd6',
            abilityOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/f/f6/Ability_Orisa_Fortify.png?version=3d7148130d784cc2ee4e5c5257efddf6',
            abilityTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/9/92/Ability_Orisa_Protective_Barrier.png?version=7446aa5b1614602c243789471631ef8d',
            ultimate: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/a/a4/Ability_Orisa_Supercharger.png?version=ba9e9f1a46b5b60cd52634cc88aae9cb',
            labelOne: 'Fusion Driver',
            labelTwo: 'Halt!',
            labelThree: 'Fortify',
            labelFour: 'Protective Barrier',
            labelFive: 'Supercharger',
            description: `Orisa may be the only hero in the game who is good for only one thing: shields. Yes she has a pretty rapid primary fire,
            and her "Bongo" can be very effective in the right spots, but really the only reason she is ever going to be picked is because her shield ability is so powerful, and she's obnoxiously
            difficult to kill. A higher-level Orisa, however, will also know how to "pull" enemies timely and effectively with the "Halt!" ability.`,
            iframe: 'https://www.youtube.com/embed/8jL7FU98Bcg?autoplay=0',
            backgroundImage: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/8/80/Orisa_Traffic_Safety.png/1600px-Orisa_Traffic_Safety.png?version=f82a84ae40c7f0037070ffa10c88f799'
        }]
    },
    {
        name: ['Reinhardt', 'Reinhardt Wilhelm', 'ReinhardtWilhelm'],
        age: '61',
        height: `2.23m/7'4"`,
        nationality: 'German',
        occupation: ['Crusador (formerly)', 'Overwatch Agent (formerly)', 'Adventurer'],
        voice: 'Darin De Paul',
        class: 'Tank',
        image: ['https://vignette.wikia.nocookie.net/overwatch/images/c/c7/Reinhardt_portrait.png/revision/latest/scale-to-width-down/1000?cb=20160429041744', 'https://pbs.twimg.com/media/CmSpDzLXYAAByLi.jpg'], 
        videos: 
        [{name: 'The Grandma IQ', 
        embed: 'https://www.youtube.com/embed/CMjcKVUp7Cc?autoplay=0', 
        comment: `I guess the DVa sleep at the end didn't really theoretically accomplish that much, but still 
        proud of this play overall.`, 
        image: ana},
        {name: 'Reaper Darted During Bomb', 
        embed: 'https://www.youtube.com/embed/dBLQZGmQiBc?list=PLks73uWy20avynwTtD5zV18Xz68FWlDQ5?autoplay=0', 
        comment: 'Pretty glad I had the presence of mind to let him sleep through that bomb instead of mistakenly waking him up instead.', 
        image: ana},
        {name: 'Suicide Note: "Screw Blizzard..."', 
        embed: 'https://www.youtube.com/embed/gElqgCdR3Hw?list=PLks73uWy20avynwTtD5zV18Xz68FWlDQ5?autoplay=0',
        comment: `Ana: "I'm too freaking old to be trying to nano a Reaper directly in front of me and 
        somehow have the nano still somehow magically fly to a tiny baby DVa that just momentarily flashed
        across my FOV instead. You've had years and years and years to fix this stupid ability,
        Blizzard, so screw you, I'm out."`, 
        image: ana}, 
        {name: 'Pfft. So predictable', 
        embed: 'https://www.youtube.com/embed/szAKrZVaa_U?autoplay=0', 
        comment: '110% knew that Tracer was gonna come out of that door at some point lol.', 
        image: soldier},
        {name: 'Ameizingly Slept', 
        embed: 'https://www.youtube.com/embed/5WiCJ0khDeA?autoplay=0', 
        comment: `I shoot Mei's coming out of ice cube all the time, but darting them is very different because
        the dart is a projectile. The timing on this one felt so good.`, 
        image: ana},
        {name: 'These Hitboxes...', 
        embed: 'https://www.youtube.com/embed/zwFyrDlI_IM?autoplay=0', 
        comment: `The first shot I understand because I guess it "grazed" the wall instead, but did the second
        shot not go right through the top of that Torb's head? After I watched this again, I researched a little
        on Overwatch forums, and I'm not the only one fed up with Blizzard's hitboxes... there are many people
        who straight-up quit the game because of these crazy noregs (btw I understand the concept of lag and multiple
        servers too, but I played Quake2 for a long time about a decade ago, and even that was a million times better).
        I also read for the first time that apparently IF YOU HIT AN ENEMY'S GUN IN OVERWATCH THEN IT DOESN'T COUNT AS
        A HIT. Which is great except for the small fact that THE GUN IS STILL INCLUDED IN EVERY PLAYER'S OUTLINED CARICATURE.
        IF IT'S NOT SUPPOSED TO COUNT AS A HIT WHY NOT TAKE IT OUTSIDE OF THE HITBOX RED/GREEN OUTLINE. This is insane. No
        freaking hitscan is going to analyze each enemy's image before he shoots and make sure he's aiming at anatomical
        body parts instead of a freaking gun in the middle of an intense match (esp when Widows are getting dived
        upon by like 3 enemies constantly). WE RELY ON THE FREAKING OUTLINE TO MAKE DECISIONS ALMOST ENTIRELY AT TIMES.
        I swear Blizzard is some frustrating... (fill-in the blank).`, 
        image: widowmaker},
        {name: 'These Hitboxes Part 2', 
        embed: 'https://www.youtube.com/embed/4Sm6LUaEYko?autoplay=0', 
        comment: `Unlike the video before this one, I'm not gonna talk this one to death, but... is there
        really any debate with this one? Two straight headshots clearly within Junkrat's caricature... I'm
        really the only person in the world who thinks something's fishy with hitboxes in this game, especially
        Hanzo and Junkrat (among others), and there might be some small design flaws with them?`, 
        image: widowmaker},
        {name: 'I Didnt Die? Seriously?', 
        embed: "https://www.youtube.com/embed/7tNdfTCm_xA?list=PLks73uWy20avynwTtD5zV18Xz68FWlDQ5?autoplay=0", 
        comment: `This was probably a thousand times funnier in the moment than on the replay,
        but I, for the life of me, could not figure out how I didn't die at the end of this.`, 
        image: junkrat},
        {name: 'Ana Goes Rock-climbing', 
        embed: "https://www.youtube.com/embed/CpDBiSESn4M?list=PLks73uWy20avynwTtD5zV18Xz68FWlDQ5?autoplay=0", 
        comment: `The first part of the clip demonstrates how triggered I was due to stupid game issues
        (like that crazy lag), but after being rage-chased me off the side of the map with primal, and
        somehow being able to hop myself back to safety after initially thinking I was dead for sure,
        I broke out in laughter.`,  
        image: ana},
        {name: 'Old And Sneaky', 
        embed: "https://www.youtube.com/embed/jTRJjtarr-4?list=PLks73uWy20avynwTtD5zV18Xz68FWlDQ5?autoplay=0",
        comment: `"I've mastered the art of standing so incredibly still that I become invisible to the naked eye."`, 
        image: soldier},
        {name: "...You're Coming With Me!", 
        embed: 'https://www.youtube.com/embed/2BCVFzUMzns?list=PLks73uWy20avynwTtD5zV18Xz68FWlDQ5?autoplay=0', 
        comment: `I still literally laugh out loud every time I see this, no matter how many times it's been. The play
        was complete luck, but got that Reaper in the midst of getting solo-nano-blossomed was hilarious to me, especially
        when picturing the guy playing Reaper face-palming himself afterwards.`, 
        image: tracer},
        {name: "Step 1: Press Q. Step 2: Celebrate.", 
        embed: 'https://www.youtube.com/embed/q3s547VmRuw?list=PLks73uWy20avynwTtD5zV18Xz68FWlDQ5?autoplay=0',
        comment: `After round, said to enemy team, "I thought you guys were having an English tea party up there or something".
        We all enjoyed a good laugh.`, 
        image: pharah},
        {name: 'The Art Of Deception', 
        embed: 'https://www.youtube.com/embed/uK2_xGv0Q6w?list=PLks73uWy20avynwTtD5zV18Xz68FWlDQ5?autoplay=0',
        comment: `Made the enemy widow LOL in public chat after that one. I thought it was worth a good laugh.`, 
        image: widowmaker},
        {name: 'Now Thats What I Call A Trap', 
        embed: "https://www.youtube.com/embed/kALfdCpYtSg?list=PLks73uWy20avynwTtD5zV18Xz68FWlDQ5?autoplay=0",
        comment: `Wish I was smart enough to record the entire scene, but long story short, this Hamster was
        just setting up some master plan to camp in our spawn for a bit and then attack us from behind I guess?
        I back-filled the game late, and emerging out of spawn for the first time, I saw him roll straight
        past me in the opposite direction, thinking to myself "seriously... wtf...?". So I decided to lay this
        master trap for him, and the fact I managed to trap him after minutes of patiently waiting (and the 
        thought of probably surprising the hell out of him), made me die with laughter.`, 
        image: junkrat},
        {name: "Honestly Didn't See It Coming", 
        embed: 'https://www.youtube.com/embed/evMNtrRKgv4?list=PLks73uWy20avynwTtD5zV18Xz68FWlDQ5?autoplay=0',
        comment: `I don't know why, but I legit thought when I charged towards those doors that they would stay closed
        until I hit them, and they halted me. Looking back, I'm not really sure why I thought that, but for some reason,
        I did at the time.`,
        image: reinhardt},
        {name: 'Peripheral Vision Issues?', 
        embed: "https://www.youtube.com/embed/0EExq-yEEsQ?list=PLks73uWy20avynwTtD5zV18Xz68FWlDQ5?autoplay=0", 
        comment: `LOL the visual of that clueless, nerdy Mei walking directly into the pit is simply priceless.`, 
        image: widowmaker},
        {name: 'Do Not Quit Day Job For Ninja Training', 
        embed: 'https://www.youtube.com/embed/stKhHuCtOvA?list=PLks73uWy20avynwTtD5zV18Xz68FWlDQ5?autoplay=0',
        comment: `If you're gonna lay a secret covert-op ninja plan to hide and flank the enemy team out of spawn,
        how are you gonna crouch patiently for so long, and then as soon as they spill out, just bob
        your head up like a goddam gopher to take a quick peak around. Lol I don't even want to be mean,
        but it's just so laughable sometimes.`, 
        image: widowmaker},
        {name: '"Slight" Calculation Error?', 
        embed: 'https://www.youtube.com/embed/4ZVgMu2Z2_Y?list=PLks73uWy20avynwTtD5zV18Xz68FWlDQ5?autoplay=0',
        comment: `"if (goldMedals === 2) {return goldMedals = 3}". Rofl, freaking Blizzard.`, 
        image: zenyatta},
        {name: 'Once A Rein, Always A Rein', 
        embed: 'https://www.youtube.com/embed/YJIRKHWmz8Q?list=PLks73uWy20avynwTtD5zV18Xz68FWlDQ5?autoplay=0', 
        comment: `Proud of myself for the high IQ. Not sure many other Reins would have even noticed the DVa camping
        in that corner to begin with.`, 
        image: reinhardt}, 
        {name: 'Simple Joys Of Stupid Heroes', 
        embed: 'https://www.youtube.com/embed/LwtCH95hGyU?list=PLks73uWy20avynwTtD5zV18Xz68FWlDQ5?autoplay=0',
        comment: `I don't Sym much, but when I do, I think it's the most retarded thing in the world.`, 
        image: symmetra},
        {name: 'Peek-A-Boo', 
        embed: 'https://www.youtube.com/embed/ofjoCakxsnc?list=PLks73uWy20avynwTtD5zV18Xz68FWlDQ5?autoplay=0',
        comment: `It's only funny because Sym and Moira were both trying hide behind the wall under me, and
        I kind of just blind-Tired the general area knowing this. The results ending up being a pleasant surprise.`,
        image: junkrat},
        {name: 'Rude Revival?', 
        embed: 'https://www.youtube.com/embed/egK_CBnxIeQ?list=PLks73uWy20avynwTtD5zV18Xz68FWlDQ5?autoplay=0',
        comment: `Dude gets Res'd and blindly runs straight into a trap/insta-death seconds later. That Mercy must have wanted to slap someone.`,
        image: junkrat},
        {name: 'Chronicles of Liam', 
        embed: 'https://www.youtube.com/embed/0vPWd5PAqPM?list=PLks73uWy20avynwTtD5zV18Xz68FWlDQ5?autoplay=0',
        comment: `Horribly edited video, but this guy on the other team, Liam, did nothing but run out of spawn and die over and over again the entire game.`, 
        image: junkrat},
        {name: 'Silly Ninja, Tricks Are For Kids', 
        embed: 'https://www.youtube.com/embed/wlr2v9P8mTE?list=PLks73uWy20avynwTtD5zV18Xz68FWlDQ5?autoplay=0',
        comment: `Pretty sure the only reason I think this clip is so funny is because it was regarding a Genji. If it was anyone else,
        I really wouldn't have thought twice about it.`, 
        image: junkrat},
        {name: 'Luck Or Skill?', 
        embed: 'https://www.youtube.com/embed/06zq5WsFT4w?list=PLks73uWy20avynwTtD5zV18Xz68FWlDQ5?autoplay=0',
        comment: `Nothing hilarious, but a pretty crazy sequence for sure. After I messed-up my bombpack-jump, I had to go wall-riding for a bit,
        and then somehow I had the presence of mind at the last second to blast myself barely back onto the ledge to safety. I think that was the
        most impressive part of the clip, even over the Tire itself.`, 
        image: junkrat},
        {name: 'Solo-Ult Much?', 
        embed: 'https://www.youtube.com/embed/QlPW4O4nn7U?autoplay=0',
        comment: `If this doesn't qualify as a rage-solo-ult, then I don't even know, lol.`, 
        image: widowmaker},
        {name: 'Solo-Ulted Part 2', 
        embed: 'https://www.youtube.com/embed/8-iSnIY-0rU?autoplay=0',
        comment: `My goodness... at the end of the clip when Reaper paused after solo-ulting me out of the sky,
        he was taking the time to say "**** you" in public chat. I hadn't said a word to him all game long, and 
        I still have no idea what his problem was.`, 
        image: pharah},
        {name: '<3? </3', 
        embed: 'https://www.youtube.com/embed/4fSOlJsA-84?autoplay=0',
        comment: `Just a goofy clip from a while ago. After I said sorry, and the clip ended, the Mercy said
        "Don't be. You put me out of my misery" (to paraphrase) lolol... It's not fun trying to heal on all these
        teams full of clowns sometimes.`, 
        image: ana},
        {name: 'I Love Blizzard', 
        embed: 'https://www.youtube.com/embed/oGIC3zAOKPE?autoplay=0',
        comment: `I really think the clip speaks for itself.`, 
        image: widowmaker}],
        modalData: [{
            quote: '"Precision German engineering."',
            primaryOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/c/c4/Ability-reinhardt1.png/200px-Ability-reinhardt1.png?version=c6df80775dc74395a9709280fc2f88b5',
            primaryTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/9/97/Ability-reinhardt2.png?version=fc9a66d235569838caf5b91056f8e870',
            abilityOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/9/9f/Ability-reinhardt3.png?version=89e95e195ff8516af75b70cbd68772b6',
            abilityTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/9/99/Ability-reinhardt4.png?version=7876798781ffcf541cbf8191ab3e588c',
            ultimate: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/2/22/Ability-reinhardt5.png?version=79b280bf3b0820f786fdae8c923ab4ea',
            labelOne: 'Rocket Hammer',
            labelTwo: 'Barrier Field',
            labelThree: 'Charge',
            labelFour: 'Fire Strike',
            labelFive: 'EarthShatter',
            description: `Reinhardt will always be one of the more controversial heroes in the game, not only regarding his place in the Meta, but 
            also because of the enormous amount of bugs he has that the Blizzard game developers still haven't managed to fix. The biggest two are his
            "Charge" ability, which suck opponents in or repel them away in the most inconsistent fashion, and his infamous "Shatter" ultimate, which
            only seems to do what it's supposed to when it feels like it. Timing is essential to be good at Reinhardt, most notably when using his shield (as well as
            knowing when to hide and regenerate it). Lastly, Reinhardt is unique for a shield tank because of his ability to flank enemy teams effectively, and a good 
            Reinhardt will know how to take advantage of that.`,
            iframe: 'https://www.youtube.com/embed/zLFbm6YckoU?autoplay=0',
            backgroundImage: 'https://i.kym-cdn.com/photos/images/original/001/124/162/54f.jpg'
        }]
    },
    {
        name: ['Roadhog', 'Mako Rutledge', 'makorutledge'],
        age: '48',
        height: `2.2m/7'3"`,
        nationality: 'Australian',
        occupation: ['Enforcer (formerly)', 'Bodyguard'],
        voice: 'Josh Petersdorf',
        class: 'Tank',
        image: ['https://vignette.wikia.nocookie.net/overwatch/images/1/15/Roadhog_portrait_m.png/revision/latest/scale-to-width-down/1000?cb=20160429040723', 'https://cdnb.artstation.com/p/assets/images/images/012/529/619/large/writerbagsu-bag-.jpg?1535255361'], 
        videos: '',
        modalData: [{
            quote: '"Violence is usually the answer."',
            primaryOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/f/f4/Ability-Roadhog1.png/200px-Ability-Roadhog1.png?version=1371b2d70c3474bdc374bf2da0610000',
            primaryTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/f/f4/Ability-Roadhog1.png/200px-Ability-Roadhog1.png?version=1371b2d70c3474bdc374bf2da0610000',
            abilityOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/a/a0/Ability-Roadhog2.png?version=7eaffccfe236bc6da9e0c05788811a7e',
            abilityTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/4/4d/Ability-Roadhog3.png?version=4f0abf824be636661872b76ecde4b430',
            ultimate: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/9/95/Ability-Roadhog4.png?version=2c82c046cbaf0568f6cadc21ec0f79eb',
            labelOne: 'Scrap Gun',
            labelTwo: 'Scrapnel Ball',
            labelThree: 'Take a Breather',
            labelFour: 'Chain Hook',
            labelFive: 'Whole Hog',
            description: `From day one, Roadhog has always had a strong reputation for being one of the most annoying heroes to go up against. His greatest asset is probably
            his sustainability, which can be maddening at times. The "Take a Breather" ability replenishes him with 300 HP almost instantly, basically giving him a free life.
            The "Chain Hook" is often what separates elite 'Hogs from the rest, as it has the power to insta-kill if used well. "Whole Hog" can be surprisingly devastating
            especially in clever spots, such as near wall corners or map edges.`,
            iframe: 'https://www.youtube.com/embed/5URzijwRPfk?autoplay=0',
            backgroundImage: 'data:image/jpeg;base64,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'
        }]
    },
    {
        name: ['Sigma', 'Siebren de Kuiper', 'siebrendekuiper'],
        age: '62',
        height: `unknown`,
        nationality: 'Dutch',
        occupation: ['Astrophysicist'],
        voice: 'Boris Hiestand',
        class: 'Tank',
        image: ['https://vignette.wikia.nocookie.net/overwatch/images/5/54/Sigma_portrait.png/revision/latest?cb=20190724032655', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbIEAGU6emtG84PZVDzccffJ8jbp9eSWBB2OpJ1RVp_D9fdIQp'],
        videos: '',
        modalData: [{
            quote: '"What is that melody?"',
            primaryOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/a/a4/Abilities-sigma1.png?version=968538c87fb926080057f4fc08592f3c',
            primaryTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/5/5d/Abilities-sigma2.png?version=e9ff879de19998505010a8a2ad7bbe05',
            abilityOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/7/7a/Abilities-sigma3.png?version=6053142b210badaae10f6a3a0649ff38',
            abilityTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/9/9c/Abilities-sigma4.png?version=2574489e3b6f51278c5d4a9fd7748035',
            ultimate: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/4/42/Abilities-sigma5.png?version=94e60b39a932d16ef5cace8b90be1be9',
            labelOne: 'Hyperspheres',
            labelTwo: 'Experimental Barrier',
            labelThree: 'Kinetic Grasp',
            labelFour: 'Accretion',
            labelFive: 'Gravitic Flux',
            description: `Blizzard's latest creation, Sigma, has abilities that can change the way the entire game is played. He can release shields
            at will (almost no cooldown), and he's the first hero who can even position them in the air. This is extremely debilitating to opposing damage heroes
            in particular, who end up getting shield after shield thrown in their face regardless of their positioning. Also the concept of "breaking shield" is lost
            with Sigma, given how strong the shields are and how easily a destroyed shield is replaced with another. Other abilities lack imagination and/or appeal,
            which has been a common trend with pretty much all of Blizzard's newer heroes.`,
            iframe: 'https://www.youtube.com/embed/BHsfF9q1mVs?autoplay=0',
            backgroundImage: 'https://static2.gamerantimages.com/wordpress/wp-content/uploads/2019/07/Overwatch-Sigma.jpg?q=50&fit=crop&w=738&h=369'
        }]
    },
    {
        name: ['Winston', 'Winston', 'monkey'],
        age: '29',
        height: `2.2m/7'3"`,
        nationality: 'none',
        occupation: ['Test Subject (formerly)', 'Scientist', 'Adventurer'],
        voice: 'Crispin Freeman',
        class: 'Tank',
        image: ['https://vignette.wikia.nocookie.net/overwatch/images/4/42/Winston_portrait.png/revision/latest/scale-to-width-down/1000?cb=20160429041559', 'https://cdna.artstation.com/p/assets/images/images/002/926/106/large/kaiyuan-lou-01-02.jpg?1467339039'],
        videos: '',
        modalData: [{
            quote: '"Did somebody say... peanut butter?"',
            primaryOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/1/17/Ability-winston1.png/200px-Ability-winston1.png?version=cd698dbcb3e770418a4a690282b4096a',
            primaryTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/6/64/Ability-winston2.png?version=fe80934286c36defe434d9f06036c80d',
            abilityOne: '',
            abilityTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/1/13/Ability-winston3.png?version=f5a6800f8d99ed5c7acbafc2239b74f2',
            ultimate: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/1/10/Ability-winston4.png?version=2d2e5ff2cc5554387ecc208b7e137880',
            labelOne: 'Tesla Cannon',
            labelTwo: 'Jump Pack',
            labelThree: '',
            labelFour: 'Barrier Projector',
            labelFive: 'Primal Rage',
            description: `Formerly a staple of the Meta, Winston's popularity and effectiveness has waned significantly as the game has changed.
            Despite being one of Overwatch's non-mechanical heroes, highly skilled Winston's separate themselves greatly from the rest by being smarter.
            Monkey-mains are very cerebral and must excel at diving opposing teams well, with exact precision and timing. "Barrier" is a crucial
            ability that can protect teammates while also disrupting rhythm, and using "Primal" at the right time can be very decisive. That being said,
            Winston is now mostly considered a situational pick at the competative level.`,
            iframe: 'https://www.youtube.com/embed/JNJ42WCOxV0?autoplay=0',
            backgroundImage: 'http://3.bp.blogspot.com/-rUt38AeO36k/VOfr4aDTDoI/AAAAAAAACuA/71QopNHzzgc/s1600/2015-1_46_OverwatchFanArt_Watermarked2.png'
        }]
    },
    {
        name: ['Wrecking-Ball', 'Hammond', 'wreckingball', 'hamster'],
        age: '14',
        height: `unknown`,
        nationality: 'none',
        occupation: ['Test Subject (formerly)', 'Mech Pilot', 'Mechanic'],
        voice: 'Jonathan Lipow',
        class: 'Tank',
        image: ['https://vignette.wikia.nocookie.net/overwatch/images/8/83/WreckingBall_portrait.png/revision/latest?cb=20190114232714', 'https://i.ytimg.com/vi/gIFki1nOoLk/maxresdefault.jpg'],
        videos: '',
        modalData: [{
            quote: '"Beware of small mammals."',
            primaryOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/9/92/Quad_cannons.png/200px-Quad_cannons.png?version=3ab33001f309abe0c43e3e659908907d',
            primaryTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/f/fe/Grappling_claw.png?version=580253468bbf0921934700d0ff4afc7b',
            abilityOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/9/94/Adaptive_shield.png?version=9072e837b9664d8cc59e4ed89b062542',
            abilityTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/0/0b/Piledriver.png?version=6aeae2ad7ac6774cd20be2dfc375f21f',
            ultimate: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/3/32/Minefield.png?version=e934b16afb03bca76f12e7abcb9846b4',
            labelOne: 'Quad Cannons',
            labelTwo: 'Grappling Claw',
            labelThree: 'Adaptive Shield',
            labelFour: 'Piledriver',
            labelFive: 'Minefield',
            description: `Wrecking-Ball features one of the most diverse skill-sets out of any hero in the game, which has made his recent introduction
            frustrating. To give a tank that already has 300hp the greatest mobility in the game is a little ridiculous, but on top of that, Hammond also has
            the ability to generate his own shields. It is almost impossible to outlast him in a one-on-one situation, and even if you did, he would probably
            just curl back into his ball and roll away at blinding speed back to safety pretty easily. Top Wrecking-Ball-mains have figured out when/how to use "Minefield"
            aggressively (usually by forcing enemies into it), even though it was originally created to be more of a zoning-ult.`,
            iframe: 'https://www.youtube.com/embed/jOCNVe486C4?autoplay=0',
            backgroundImage: 'https://i.redd.it/24md5oyoa7a11.png'
        }]
    },
    {
        name: ['Zarya', 'Aleksandra Zaryanova (Александра Зарянова)', 'aleksandrazaryanova'],
        age: '28',
        height: `1.95m/6'5"`,
        nationality: 'Russian',
        occupation: ['Soldier'],
        voice: 'Dolya Gavanski',
        class: 'Tank',
        image: ['https://vignette.wikia.nocookie.net/overwatch/images/d/d1/Zarya_portrait.png/revision/latest?cb=20160429041121', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/441d3647-7105-40cb-936e-27839a506fe3/dab795l-88ef1c1c-b0bf-401c-962c-73a6a87dd813.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ0MWQzNjQ3LTcxMDUtNDBjYi05MzZlLTI3ODM5YTUwNmZlM1wvZGFiNzk1bC04OGVmMWMxYy1iMGJmLTQwMWMtOTYyYy03M2E2YTg3ZGQ4MTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3VcB50AO7RujHauScq7wdWhF1QhUZPlZ6kWoiYCkC3k'],
        videos: '',
        modalData: [{
            quote: '"Do you even lift?"',
            primaryOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/4/48/Ability-zarya1.png/200px-Ability-zarya1.png?version=c9d166ce994e6ea88064558971b378c9',
            primaryTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/4/48/Ability-zarya1.png/200px-Ability-zarya1.png?version=c9d166ce994e6ea88064558971b378c9',
            abilityOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/7/71/Ability-zarya2.png?version=538b4d60182130ebb7f3f3171fed4ce6',
            abilityTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/9/9e/Ability-zarya3.png?version=7317bb4f7e025ecf7fcae28eb8385c79',
            ultimate: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/5/5d/Ability-zarya4.png?version=8d6905f7a41e16cb1c34825871297008',
            labelOne: 'Particle Cannon',
            labelTwo: 'Explosive Lob',
            labelThree: 'Particle Barrier',
            labelFour: 'Projected Barrier',
            labelFive: 'Graviton Surge',
            description: `Zarya always has been, and likely always will be, one of the most necessary members of the Meta. She provides so much to her team in so
            many ways. Some matches, a Zarya at high charge can be a top damage dealer, while in other games, she can play a more supportive role
            and protect teammates with key bubbles. Regardless, "Grav" will always, always, always be the ult most often relied upon to win team fights.`,
            iframe: 'https://www.youtube.com/embed/gTcKbsKDkWk?autoplay=0',
            backgroundImage: 'https://wallup.net/wp-content/uploads/2017/11/23/509984-heroes_of_the_storm-Zarya_Overwatch-video_games-Overwatch-748x421.jpg'
        }]
    },
    {
        name: ['Ashe', `Elizabeth Caledonia "Calamity" Ashe`, 'elizabethcaledoniaashe', 'calamityashe', 'calamity'],
        age: '39',
        height: `unknown`,
        nationality: 'American',
        occupation: ['Thief', 'Gang Leader'],
        voice: 'Jennifer Hale',
        class: 'Damage',
        image: ['https://vignette.wikia.nocookie.net/overwatch/images/c/c1/Ashe_portrait2.png/revision/latest?cb=20181106125518', 'https://i.pinimg.com/originals/01/af/c9/01afc96fea9f6b29416c2ad7591cad32.jpg'],
        videos: '',
        modalData: [{
            quote: '"Bob, do something!"',
            primaryOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/4/4e/Ability-ashe1.png/200px-Ability-ashe1.png?version=4baf97e1420004f46bb5aef028491998',
            primaryTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/d/da/Ability-ashe2.png?version=109c3fd36bae2d802049ed1d38812d78',
            abilityOne: '',
            abilityTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/8/85/Ability-ashe3.png?version=c4fef058f32a7b8b78d4ec96f1036df4',
            ultimate: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/7/7a/Ability-ashe4.png?version=6856551928f816755e50ba6393d0be4d',
            labelOne: 'The Viper',
            labelTwo: 'Dynamite',
            labelThree: '',
            labelFour: 'Coach Gun',
            labelFive: 'B.O.B.',
            description: `Ashe is Blizzard's only new attempt at hitscan in quite some time. She plays somewhat like a Widow-McCree hybrid, with a scope mode
            that is a little less precise and not as powerful compared to the former, and a shotgun mode that is much the same when compared to the latter. In terms of abilities,
            Ashe has quite an entertaining kit, such as her projectile dynamite, which can do heavy mass damage, as well as her "Coach Gun", which provides
            her with an elusiveness factor that McCree doesn't. Many novice Ashe players tend to rely heavily on Bob as a source of
            production, as he is often overwhelming to enemy teams.`,
            iframe: 'https://www.youtube.com/embed/x5x-8weRI20?autoplay=0',
            backgroundImage: 'https://cdn.vox-cdn.com/thumbor/JqWJLFZH8V_A7VdBKSySvnMor2Y=/0x0:3840x2160/1200x800/filters:focal(1046x111:1660x725)/cdn.vox-cdn.com/uploads/chorus_image/image/62176577/OVR_Ashe_002.0.png'
        }]
    },
    {
        name: ['Bastion', 'SST Laboratories Siege Automaton E54', 'sstlaboratorieseigeautomatone54', 'siegeautomatone54'],
        age: '30',
        height: `2.2m/7'3"`,
        nationality: 'none',
        occupation: ['Battle Automaton (formerly)', 'none'],
        voice: 'Chris Metzen',
        class: 'Damage',
        image: ['https://vignette.wikia.nocookie.net/overwatch/images/6/6a/Bastion_portrait.png/revision/latest?cb=20160429042023', 'https://orig14.deviantart.net/afff/f/2016/167/a/2/bastion_by_the_marker-da6iig6.png'],
        videos: '',
        modalData: [{
            quote: '"Boo doo boo doo!"',
            primaryOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/9/9a/Ability-bastion1.png/200px-Ability-bastion1.png?version=852ffc4cdad65f826a9a056d9ae43d6a',
            primaryTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/f/fc/Ability-bastion2.png/200px-Ability-bastion2.png?version=16aaea61a6b226f3ec003c99c14345e2',
            abilityOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/2/2e/Ability-bastion3.png?version=c23c759ddca138860e409351927bd86f',
            abilityTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/2/24/Ability-bastion4.png?version=3edbc65185e7b181e42f87d201c58f2f',
            ultimate: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/2/2e/Achievement_Charge%21.png/200px-Achievement_Charge%21.png?version=5c165d749eb2397e98f0b1f9847d5445',
            labelOne: 'Configuration: Recon',
            labelTwo: 'Configuration: Sentry',
            labelThree: 'Reconfigure',
            labelFour: 'Self-Repair',
            labelFive: 'Configuration: Tank',
            description: `How to play Bastion: (1) get behind a shield or find a sneaky random corner (2) get in Sentry-mode (3) hold down primary fire at the opposing team
            (4) laugh as they all get triggered (on a related note: excellent work, Blizzard.)`,
            iframe: 'https://www.youtube.com/embed/L4D1C7JU7ts?autoplay=0',
            backgroundImage: 'https://dotesports-media.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2019/09/17131545/OVR_BrickBastion_Eichenwalde_JPA_002b.png'
        }]
    },
    {
        name: ['Doomfist', 'Akande Ogundimu', 'akandeogundimu'],
        age: '45',
        height: `2.18m/7'1"`,
        nationality: 'Nigerian',
        occupation: ['Martial Artist (formerly)', 'Mercenary', 'CEO'],
        voice: 'Sahr Ngaujah',
        class: 'Damage',
        image: ['https://vignette.wikia.nocookie.net/overwatch/images/0/0e/Doomfist_portrait.png/revision/latest?cb=20170807035611', 'https://i.pinimg.com/originals/c3/e5/da/c3e5da160cc8f18584e4f8c9f718a8f2.jpg'],
        videos: '',
        modalData: [{
            quote: '"And they say chivalry is dead."',
            primaryOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/b/bb/Hand_cannon.png/200px-Hand_cannon.png?version=6bc1f25a5cf4773afab98a8df00d162b',
            primaryTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/e/eb/Ability_Doomfist_Seismic_Slam.png?version=20febd2b8e4a648cdb958b418acee236',
            abilityOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/2/2c/Rising_uppercut.png?version=252b1ac44072e830756038baa519988e',
            abilityTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/e/ea/Rocket_punch.png?version=48bf7cac7d8144a2daba5cdd2417f6d1',
            ultimate: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/e/e7/Ability_Doomfist_Meteor_Strike.png?version=ffa423d6b815937e12bb1533c410340b',
            labelOne: 'Hand Cannon',
            labelTwo: 'Seismic Slam',
            labelThree: 'Rising Uppercut',
            labelFour: 'Rocket Punch',
            labelFive: 'Meteor Strike',
            description: `Although Doomfist is one of the newer heroes in the heropool, it seems like he's been around since the beginning. Equipped with a devastating
            skill set that is hard to match one-on-one, Doomfist is a popular pick for gamers who want cheap elims and easy victories. Not only does
            he fly around and deal damage as a blinding rate, but he also generates his own self-shields whenever he makes contact with enemies. "Meteor Strike" is a
            "get-out-of-jail-free" card, and when timed correctly, it can also be an easy insta-kill as it leaves many enemies helpless.`,
            iframe: 'https://www.youtube.com/embed/o79pqCH3QMQ?autoplay=0',
            backgroundImage: 'https://cdn.images.express.co.uk/img/dynamic/143/590x/Overwatch-Doomfist-Terry-Crews-825829.jpg'
        }]
    },
    {
        name: ['Genji', 'Genji Shimada (島田源氏)', 'genjishimada'],
        age: '35',
        height: `1.68m/5'7"`,
        nationality: 'Japanese',
        occupation: ['Adventurer'],
        voice: 'Gaku Space',
        class: 'Damage',
        image: ['https://vignette.wikia.nocookie.net/overwatch/images/0/04/Genji_portrait.png/revision/latest?cb=20160429040512', 'https://i.imgur.com/z5FceWM.jpg'],
        videos: '',
        modalData: [{
            quote: '"You are only human."',
            primaryOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/2/28/Ability-genji1.png/200px-Ability-genji1.png?version=f5acae0899d56301b54aee0e502e26bf',
            primaryTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/0/02/Ability-genji3.png?version=97baa7a886b91f9da9216b3a2d743639',
            abilityOne: '',
            abilityTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/7/70/Ability-genji2.png?version=573acd7a6892b9814e4cce5705209e15',
            ultimate: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/3/38/Ability-genji4.png?version=a099b61a01e7703188ee547453e84b63',
            labelOne: 'Shuriken',
            labelTwo: 'Swift Strike',
            labelThree: '',
            labelFour: 'Deflect',
            labelFive: 'Dragonblade',
            description: `Genji mains have a reputation for being the most egoistic in the game, and it's easy to see why. They tend to believe they are always smarter and better
            than anyone else, and they take things the most personally as well (aka they get butthurt all the time). Ironically, most Genjis rely completely on
            "Dragonblade", which is arguably the most OP ultimate in the game (next to Death Blossom). The highest-level Genjis are deadly accurate with their Shurikens, and have 
            combo-strikes completely in their muscle memory. "Deflect" is also one of the most powerful abilities in the game, beyond being just completely ridiculous.`,
            iframe: 'https://www.youtube.com/embed/lYOjIDhJIG0?autoplay=0',
            backgroundImage: 'data:image/jpeg;base64,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'
        }]
    },
    {
        name: ['Hanzo', 'Hanzo Shimada (島田半蔵)', 'hanzoshimada'],
        age: '38',
        height: `1.73m/5'8'`,
        nationality: 'Japanese',
        occupation: ['Mercenary', 'Assassin'],
        voice: 'Paul Nakauchi',
        class: 'Damage',
        image: ['https://vignette.wikia.nocookie.net/overwatch/images/c/c2/Hanzo_portrait.png/revision/latest?cb=20160429042113', 'https://i.pinimg.com/736x/ee/73/8f/ee738fbeedf4fbe104e2b5d09c261ee6.jpg'],
        videos: '',
        modalData: [{
            quote: '"竜が我が敵を喰らう！(The dragon consumes my enemies!)"',
            primaryOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/e/e3/Ability-hanzo1.png/200px-Ability-hanzo1.png?version=38271f6312b90c6e97e7c81033712f2e',
            primaryTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/7/76/Ability-hanzo2.png?version=ac0a75e021115ff3090c0b18cb9be03b',
            abilityOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/b/bd/Ability-hanzo03.png?version=d627bbef374851f6de9c309fd7d3dcbd',
            abilityTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/5/57/Ability-hanzo01.png?version=09c75fbc8ac246746e9ff274e4b077c3',
            ultimate: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/4/44/Ability-hanzo4.png?version=904697da682f2fa2e66844115685a026',
            labelOne: 'Storm Bow',
            labelTwo: 'Sonic Arrow',
            labelThree: 'Storm Arrows',
            labelFour: 'Lunge',
            labelFive: 'Dragonstrike',
            description: `Hanzos are either sneaky/wussy, complete throwers, or a combination of both. Top-level Hanzos utilize his climbing ability
            to achieve odd positioning where they can peak comfortably all game long, often without ever being detected. Hanzos specialize on being able to
            "charge" their arrows while fully submerged, and then momentarily popping out to fire, before quickly hiding again. This is a technique all
            Hanzo-mains master quickly.`,
            iframe: 'https://www.youtube.com/embed/oOVb9x0zd6M?autoplay=0?autoplay=0',
            backgroundImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAJsVUgKX3xV4MT5jtUpqOL5JMiDNH47c4os368Z3izf55gBXc'
        }]
    },
    {
        name: ['Junkrat', 'Jamison Fawkes', 'jamisonfawkes', 'jr'],
        age: '25',
        height: `1.95m/6'6"`,
        nationality: 'Australian',
        occupation: ['Anarchist', 'Thief', 'Demolitionist'],
        voice: 'Chris Parson',
        class: 'Damage',
        image: ['https://vignette.wikia.nocookie.net/overwatch/images/5/53/Junkrat_portrait.png/revision/latest?cb=20160429040823', 'https://i.kym-cdn.com/photos/images/original/001/318/364/cc0.jpg'],
        videos: 
        [{name: 'Swear I Could Be A Top500 JR', 
        embed: "https://www.youtube.com/embed/RAfgzbDCU1E?autoplay=0", 
        comment: `Junkrat's kit just always feels like a natural fit to me.`},
        {name: 'Called A "God" Again', 
        embed: "https://www.youtube.com/embed/MzI4jCXsOuY?autoplay=0", 
        comment: `This was actually a hilarious video more than anything. Booped their Rein not once, but twice to his death while
        he was charging right at me. At some point in the match he called me a "God", and I was quite flattered, lol.`},
        {name: '"Nuts" Is A Compliment Right?', 
        embed: "https://www.youtube.com/embed/4TmC-uRY3WA?autoplay=0", 
        comment: `Honestly I don't think the teammate that called me "nuts" could have said it much better. Especially towards
        then end of that first round, I seriously just went into Super-Saiyan mode to win that point for our team, and it required
        some pretty extreme, crafty tactics to get it done.`},
        {name: 'Feel Like Now I Need To Re-Tire. Get It?', 
        embed: 'https://www.youtube.com/embed/m0ZbLvoiva4?list=PLks73uWy20at3_42mnnJrrMnVBFIDoRqJ?autoplay=0', 
        comment: `Solid game with a pretty satisfying Tire.`},
        {name: 'IQ > Mechanics', 
        embed: 'https://www.youtube.com/embed/6LcR9-NVmS4?list=PLks73uWy20at3_42mnnJrrMnVBFIDoRqJ?autoplay=0', 
        comment: `This, along with a handful of other games, is among my most priceless because of a few
        high IQ plays that I don't think many other gamers could/would have been able to pull off themselves.`},
        {name: 'Just Bc Of Tracer Alone, This Is Priceless', 
        embed: 'https://www.youtube.com/embed/P087uNtv8tw?list=PLks73uWy20at3_42mnnJrrMnVBFIDoRqJ?autoplay=0', 
        comment: `Never seen a Tracer in any context get owned so repeatedly by a Junkrat in
        my life. Those traps I left in the backline were 100% IQ and not arbitrary luck whatsoever.`},
        {name: '"Can You Just Die"', 
        embed: 'https://www.youtube.com/embed/4Wsq5Pg3M0o?list=PLks73uWy20at3_42mnnJrrMnVBFIDoRqJ?autoplay=0', 
        comment: `This was the funniest Junkrat games I ever played just because this guy kept raging after me
        so hard. He started out as Hog, and after getting triggered, he made the classic rage-swap to
        Doomfist, and... I think the video tells the rest of the story best.`},
        {name: '13k DMG Junk', 
        embed: 'https://www.youtube.com/embed/njMbEHGNvdo?list=PLks73uWy20at3_42mnnJrrMnVBFIDoRqJ?autoplay=0', 
        comment: `High damage-output game.`}],
        modalData: [{
            quote: '"I really blew that one."',
            primaryOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/a/ab/Ability-Junkrat1.png/200px-Ability-Junkrat1.png?version=bd1228de6cd38e2c5cfdeccfc06fb309',
            primaryTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/8/87/Ability-Junkrat2.png?version=da67bc430f9a64212eb1cacc9764026f',
            abilityOne: '',
            abilityTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/9/9c/Ability-Junkrat3.png?version=0247b41a32fbe90237b4a25f4c84a588',
            ultimate: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/3/32/Ability-Junkrat5.png?version=a8b2f51f1f0d5c74374f666037fbbc06',
            labelOne: 'Frag Launcher',
            labelTwo: 'Concussion Mine',
            labelThree: '',
            labelFour: 'Steel Trap',
            labelFive: 'RIP-Tire',
            description: `Junkrat is a fan-favorite, as he is silly, funny, and simple/easy to play. There is a wide gap between a top500 Junkrat
            and an average one, however, as the former knows how to get optimal return from his kit and/or Rip-Tires. Learning to bomb-pack
            well can get a Junkrat out of hotspots consistently or help him find sneaky positioning to rain grenades from. Traps that consistently catch their prey can be among the most
            frustrating things that any opposing team has to deal with.`,
            iframe: 'https://www.youtube.com/embed/mFGQG8I68h8?autoplay=0',
            backgroundImage: 'https://heavyeditorial.files.wordpress.com/2017/08/junkertown-overwatch.jpg?quality=65&strip=all&w=780'
        }]
    },
    {
        name: ['McCree', 'Jesse McCree', 'jessemccree'],
        age: '37',
        height: `1.85m/6'1"`,
        nationality: 'American',
        occupation: ['Criminal (formerly)', 'Overwatch Agent (formerly)', 'Bounty Hunter'],
        voice: 'Matthew Mercer',
        class: 'Damage',
        image: ['https://vignette.wikia.nocookie.net/overwatch/images/f/f3/Mccree_portrait.png/revision/latest?cb=20160429041214', 'https://pm1.narvii.com/6519/cf0621c0462c9c50dc8c3bd133c4fb676975f4b6_hq.jpg'],
        videos: 
        [{name: `McCree, à la Paris`, 
        embed: 'https://www.youtube.com/embed/z1Teu5AW-28?autoplay=0', 
        comment: `Lol.`},
        {name: 'The McCree Saga Begins', 
        embed: 'https://www.youtube.com/embed/H4dLd7o2qmo?autoplay=0', 
        comment: `First time taking McCree seriously in a while, and it 
        feels good so far.`},
        {name: 'Felt Good Until Battery Died', 
        embed: "https://www.youtube.com/embed/tmHo5UB91g0?autoplay=0", 
        comment: `Dang that was some serious flattery, thanks Ana lol.`},
        {name: 'Straight Carry', 
        embed: "https://www.youtube.com/embed/ozt6CSKKwrc?autoplay=0", 
        comment: `Without me... we stand no chance.`},
        {name: '58%KP', 
        embed: "https://www.youtube.com/embed/d0gXzsxBUCw?autoplay=0", 
        comment: `Highest ever full-game KP with McCree?`},
        {name: `Dominant 67% Overall KP`, 
        embed: 'https://www.youtube.com/embed/4NBj3P8spjQ?autoplay=0', 
        comment: `One of most dominant all around performances ever. 
        McCree second round.`},
        {name: 'When Will the Mei OP End', 
        embed: 'https://www.youtube.com/embed/cxgFkVJhyQE?autoplay=0', 
        comment: `The amount of ridiculous ways that Mei's get away with 
        crap and abuse their abilities to just OP their opponents is complete bs.`},
        {name: 'Stay Punny', 
        embed: 'https://www.youtube.com/embed/iqNa6CaW5w8?autoplay=0', 
        comment: `See title.`}],
        modalData: [{
            quote: `"Well, it's high noon somewhere in the world."`,
            primaryOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/0/08/Ability-mccree1.png/200px-Ability-mccree1.png?version=c8fa661183b3e62d6e91b281a21e1219',
            primaryTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/0/08/Ability-mccree1.png/200px-Ability-mccree1.png?version=c8fa661183b3e62d6e91b281a21e1219',
            abilityOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/9/9e/Ability-mccree2.png?version=d02884cf8c85b375dd1f212765435811',
            abilityTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/1/18/Ability-mccree3.png?version=bad65520188846eac06baeed1b2ed866',
            ultimate: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/6/68/Ability-mccree4.png?version=4bbba6ca4e1ba972f137d08e0877215f',
            labelOne: 'Peacekeeper',
            labelTwo: 'Fan the Hammer',
            labelThree: 'Combat Roll',
            labelFour: 'Flashbang',
            labelFive: 'Deadeye',
            description: `There are very few McCree "mains" who actually play the hero correctly. Calvin, IDDQD, Pine, and Wanted may be among the few players who actually
            use McCree as he was meant to be used. Other McCree "mains", however, tend to leave their entire team shorthanded for minutes in order to circle the map and high-noon.
            Without ultimate, they usually lack aim and tend to fire into nothing repeatedly. Anyone with truly good mechanics, however, will take ample advantage
            of McCree's most recent super-buff, which now allows him to headshot an opponent twice in a row within a second or two.`,
            iframe: 'https://www.youtube.com/embed/kq4OlEDiCi8?autoplay=0',
            backgroundImage: 'http://hdqwalls.com/wallpapers/mccree-overwatch-fan-art-xh.jpg'
        }]
    },
    {
        name: ['Mei', 'Mei-Ling Zhou (周美灵)', 'meiling zhou', 'meilingzhou'],
        age: '31',
        height: `1.59m/5'3"`,
        nationality: 'Chinese',
        occupation: ['Climatologist', 'Adventurer'],
        voice: 'Elise Zhang',
        class: 'Damage',
        image: ['https://vignette.wikia.nocookie.net/overwatch/images/3/3b/Mei_portrait.png/revision/latest?cb=20160429040329', 'https://pbs.twimg.com/media/Cknb8JWWkAEYqNS.png'],
        videos: '',
        modalData: [{
            quote: '"I was only trying to help!"',
            primaryOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/d/d8/Ability-mei1.png?version=00269b8c21d0d8735e73c5be4fcb0ad4',
            primaryTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/d/d8/Ability-mei1.png?version=00269b8c21d0d8735e73c5be4fcb0ad4',
            abilityOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/2/2b/Ability-mei2.png?version=4d3addd257e2f2c9d923e44b3b93a376',
            abilityTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/e/ea/Ability-mei3.png?version=ffe86a29e9530245186af260d8fd3659',
            ultimate: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/f/f0/Ability-mei4.png?version=12a57172ec77eed3f921ba834998d3f0',
            labelOne: 'Endothermic Blaster',
            labelTwo: 'Icicle Blaster',
            labelThree: 'Cryo-Freeze',
            labelFour: 'Ice Wall',
            labelFive: 'Blizzard',
            description: `The typical gamer's most prominent memory of Mei might be one of being accidentally trapped into certain death by
            the ice wall of a teammate. Still, Mei has especially recently, despite being largely obnoxious, managed
            to find a significant place in the Meta, even at the professional level. Despite not being equipped to deal "consistent"
            damage, she has one of the most versitile and effective kits in the game for someone who knows how to use it. "Blizzard" is definitely
            near the top of the list of hero ultimates with the power to generate team-kills as well.`,
            iframe: 'https://www.youtube.com/embed/J4hB88uMY8k?autoplay=0',
            backgroundImage: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5ed5a6c5-a24d-4136-8f37-51436c86852f/dag6mm9-f471ccf1-994c-4c42-8c14-f3aa96911493.jpg/v1/fill/w_900,h_507,q_75,strp/mei_fanart_by_vafa10_dag6mm9-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTA3IiwicGF0aCI6IlwvZlwvNWVkNWE2YzUtYTI0ZC00MTM2LThmMzctNTE0MzZjODY4NTJmXC9kYWc2bW05LWY0NzFjY2YxLTk5NGMtNGM0Mi04YzE0LWYzYWE5NjkxMTQ5My5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.KDO1GfNR-JAUrmQj0oqSA7cTG8IgC11jU-zNzcgjuhA'
        }]
    },
    {
        name: ['Pharah', 'Fareeha Amari', 'fareehaamari'],
        age: '32',
        height: `1.8m/5'11"`,
        nationality: 'Egyptian',
        occupation: ['Security Chief'],
        voice: 'Jen Cohn',
        class: 'Damage',
        image: ['https://vignette.wikia.nocookie.net/overwatch/images/f/fe/Pharah_portrait.png/revision/latest?cb=20160429041650', 'https://cdnb.artstation.com/p/assets/images/images/005/891/409/large/graxious-art-pharah-highres.jpg?1494490224'],
        videos: 
        [{name: 'When I Actually Get A Pharmercy', 
        embed: 'https://www.youtube.com/embed/lYEkkuH9kwE?autoplay=0', 
        comment: `Despite consistently destroying every game I've played with Pharah up until now, I think I can 
        count the number of times I've actually gotten Pharmercy on one hand (including times I've had a Mercy 
        on my team who for some reason doesn't feel I deserve it... lol). Anyway, esp after watching the replay and 
        acknowledging that the enemy widow was prbly at least decent for this elo, I guess you could argue that 
        "oh bc your Mercy ignored everyone else the entire time it left them all screwed". My personal opinion, 
        however, is that two noobs really wanted to play some hotshot heroes like Ashe and Hanzo and didn't give a 
        crap about the rest of their team in their path to superstardom. Sounds not only more likely, but typical, no?`},
        {name: 'Yeah We Lost But Like, Seriously...', 
        embed: "https://www.youtube.com/embed/-3-LR30rsHo?autoplay=0", 
        comment: `Don't know how much better I could have played as Pharah in a losing effort.`},
        {name: 'Almost Perfect?', 
        embed: "https://www.youtube.com/embed/2cRCN9x4iJY?autoplay=0", 
        comment: `Note the public chat where the dude gets owned out of spawn, taunts me,
        keeps getting owned, and never says another word before exiting the game.`},
        {name: ['22k Total DMG, Crazy Game', 'Chabco'],
        embed: 'https://www.youtube.com/embed/12fwhnlj0C0?autoplay=0', 
        comment: `Few things to note here: (1) Been queuing with Mr. Charles Cortez (Chabco) recently, and it's been
        fun (2) I had a little under 12k dmg AFTER THE FIRST ROUND ALONE... (3) Wish I recorded while playing,
        but this "TheSilverFox" dweeb started calling me out unprovoked. Round 2, after the solo-ult he blurted out 
        "**** you" for some reason. At the end of the game, he goes "pharah mains are so pathetic" or something
        like that, which amused me since, as I noted to Charles, I honestly had not played a single game of Pharah in
        about two years before this one. This guy was taking himself so seriously over the most idiotic of things, and
        Cortez and I had a good laugh over it in the end.`,
        image: Chabco},
        {name: 'Silver Damage In Just One Round', 
        embed: 'https://www.youtube.com/embed/pojauLPqTZI?autoplay=0',
        comment: `Hmm.`},
        {name: 'Gamers Are Babies', 
        embed: "https://www.youtube.com/embed/sMDu3Pvg5Jo?autoplay=0", 
        comment: `It was pretty funny this entire game because I stayed silent, but I was definitely
        paying attention to these to idiot teammates on the other team blasting each other all
        game long. Finally lost it at the start of round 3 and just tried to humiliate them.`},
        {name: 'I Salivate For Pharah Vs Pharah Matchups', 
        embed: 'https://www.youtube.com/embed/ASEwv-OAWiU?list=PLks73uWy20aueh5AiVpM96AEBwsFegUB8?autoplay=0', 
        comment: `When I was maining Pharah, I prided myself on my Pharah vs Pharah skills because
        it really didn't seem like there was anyone else who was my equal. Most of these
        battles will be forever lost in history, but this is one of the few I managed to preserve.
        This one felt especially good because it wasn't just a Pharah, but an entire Pharmacy, that
        I basically took on alone and defeated.`},
        {name: `Can't Touch This`, 
        embed: 'https://www.youtube.com/embed/ebArZqyg-QA?list=PLks73uWy20aueh5AiVpM96AEBwsFegUB8?autoplay=0', 
        comment: 'yup'}],
        modalData: [{
            quote: '"Play nice, play Pharah."',
            primaryOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/7/78/Ability-parah1.png/200px-Ability-parah1.png?version=477900375b5d570f6a93a79f403ddbd8',
            primaryTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/1/14/Ability-parah2.png?version=16f5106ab202c23d8d442733535a93cf',
            abilityOne: '',
            abilityTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/c/ce/Ability-parah3.png?version=b691db0913c3402f190665587f25b4a3',
            ultimate: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/8/8f/Ability-parah4.png?version=d193b86ef138d2133573bb97897af1a4',
            labelOne: 'Rocket Launcher',
            labelTwo: 'Jump Jet',
            labelThree: '',
            labelFour: 'Concussive Blast',
            labelFive: 'Barrage',
            description: `Pharah used to be a crucial hero until the game kept evolving, and now she often just seems to be an after-thought more than anything else.
            Much of the reason can be attributed to increasingly strong sniper/hitscan play, which can basically turn her into a sitting duck.
            At times, however, a good Pharmacy can still turn the tides of a map/round. One of the most underrated parts of good Pharah play is
            using concussive blasts effectively for sharp, sudden movements that can aid escapability, but also provide aggressive positioning for things like
            "Barrage". Situationally, it can be used more offensively to boop enemies to their deaths as well.`,
            iframe: 'https://www.youtube.com/embed/ks-mLJS0pe8?autoplay=0',
            backgroundImage: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8adefab8-9a4e-4fa7-8ad7-e2e4cf9cf1e9/daxp8sa-9ee43ed2-1ab9-4261-babd-ffad247497d1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhhZGVmYWI4LTlhNGUtNGZhNy04YWQ3LWUyZTRjZjljZjFlOVwvZGF4cDhzYS05ZWU0M2VkMi0xYWI5LTQyNjEtYmFiZC1mZmFkMjQ3NDk3ZDEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-Wqh9ZgTDpbz9rBwU5K9--GdUHpldSAVQV9iyrQ_y5I'
        }]
    },
    {
        name: ['Reaper', 'Gabriel Reyes', 'gabrielreyes'],
        age: '58',
        height: `1.85m/6'1"`,
        nationality: 'American',
        occupation: ['Mercenary'],
        voice: 'Keith Ferguson',
        class: 'Damage',
        image: ['https://vignette.wikia.nocookie.net/overwatch/images/e/ee/Reaper_portrait.png/revision/latest?cb=20160429041404', 'https://cdnb.artstation.com/p/assets/images/images/006/436/417/large/jeeyoung-lee-overwatch-reaper-el.jpg?1498580024'],
        videos: '',
        modalData: [{
            quote: '"If it lives, I can kill it."',
            primaryOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/d/df/Ability-reaper1.png/200px-Ability-reaper1.png?version=3a07c3b1d1693233273bba00e87d41b6',
            primaryTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/6/66/Ability-reaper2.png?version=1a33566cfa5f71da9a816097cadaaf60',
            abilityOne: '',
            abilityTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/9/97/Ability-reaper3.png?version=74fcc0a5268ac38e8c1bf4967184e66c',
            ultimate: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/a/ac/Ability-reaper4.png?version=2bcb5b9807d7ad7e421b2d4a7df763de',
            labelOne: 'Hellfire Shotguns',
            labelTwo: 'Wraith Form',
            labelThree: '',
            labelFour: 'Shadow Step',
            labelFive: 'Death Blossom',
            description: `Reaper is a niche pick for novice players who still want to feel deserving of arrogance. Widely considered the most OP hero in the game since its inception,
            Reaper is by far (especially after his most recent super-buff) the easiest DPS hero for anyone to succeed with. Reaper does adds an element to the game that no
            other hero does, as he has an assassin-like ability to emerge out of shadows and silently eliminate opponents before vanishing again. "Shadow Step" is an incredibly useful way
            to attain surprise positioning, and when combined with "Death Blossom", it can have devastatingly productive results.`,
            iframe: 'https://www.youtube.com/embed/uK4WSF0rCcM?autoplay=0',
            backgroundImage: 'https://pbs.twimg.com/media/CxgxCqQUUAAKU7B.jpg'
        }]
    },
    {
        name: ['Soldier: 76', `John Francis "Jack" Morrison`, 'johnfrancismorrison', 'jack', 'jack morrison', 'jackmorrison'],
        age: 'Mid-to-late 50s',
        height: `1.85m/6'1"`,
        nationality: 'American',
        occupation: ['Overwatch Commander (formerly)', 'Vigilante'],
        voice: 'Fred Tatasciore',
        class: 'Damage',
        image: ['https://vignette.wikia.nocookie.net/overwatch/images/c/c3/Soldier76_portrait.png/revision/latest?cb=20160429041023', 'https://i.pinimg.com/originals/5c/9c/d4/5c9cd4abab900ad0c4128a11dbc7c713.jpg'],
        videos: '',
        modalData: [{
            quote: `"That's 'Sir' to you."`,
            primaryOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/c/cc/Icon-ability.hpr.png/200px-Icon-ability.hpr.png?version=7f7fd0ebf6f46bb6a7a1105b4020a759',
            primaryTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/f/f3/Icon-ability.helixrockets.png?version=856f47956cec7909a4cf95db8caacdfa',
            abilityOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/b/bd/Icon-ability.sprint.png?version=1d17fe6eb379dc4b2d7973911bcff98f',
            abilityTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/5/50/Icon-ability.bioticfield.png?version=fc7c830c60de3339210883792c823564',
            ultimate: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/d/d1/Icon-ability.tacticalvisor.png?version=a6ca6c743799ab24cd74ba83f9c5f75f',
            labelOne: 'Heavy Pulse Rifle',
            labelTwo: 'Helix Rockets',
            labelThree: 'Sprint',
            labelFour: 'Biotic Field',
            labelFive: 'Tactical Visor',
            description: `When first learning the game, Soldier is always the easiest hero to start with. He plays like the typical first-person-shooter,
            with a simple, basic kit that makes easy sense. In the Meta, however, Soldier appears very rarely, as he often lacks the effectiveness to justify
            a pick. Good Soldiers take advantage of his mobility and find high-ground to setup on. Also, Biotic Fields are just
            helpful in aid of teammates as they are used alone. "Tactical Visor" CAN be powerful, especially with nano, but
            it is also one of the most easily negated ults in the game. For example, it should never be used if there is ever an opposing DVa nearby
            that is still in her mech.`,
            iframe: 'https://www.youtube.com/embed/V_0eqEbG7yA?autoplay=0',
            backgroundImage: 'http://img06.deviantart.net/8b04/i/2016/145/a/2/76__by_xwaxwingx-da3snim.jpg'
        }]
    },
    {
        name: ['Sombra', 'Olivia Colomar', 'oliviacolomar'],
        age: '30',
        height: `1.63m/5'4"`,
        nationality: 'Mexican',
        occupation: ['Hacker'],
        voice: 'Carolina Ravassa',
        class: 'Damage',
        image: ['https://vignette.wikia.nocookie.net/overwatch/images/f/fc/Sombra_portrait.png/revision/latest?cb=20170105140023', 'https://i.pinimg.com/originals/1e/8f/cd/1e8fcdd80bc5b7602da332547642de26.jpg'],
        videos: 
        [{name: ['Gold, Silver, 45% KP, & POTG', 'Chabco'],
        embed: 'https://www.youtube.com/embed/TGnb3zn2Hu4?autoplay=0', 
        comment: `Pretty laggy, but not a bad performance (major shout-out to Chabco as well).
        Also, pay attention to the kill-feed and count how many times
        our Genji actually killed someone. Me and Chabco have seriously been getting 
        the worst run of teammates ever.`,
        image: Chabco},
        {name: 'Relatively Dominant', 
        embed: "https://www.youtube.com/embed/-oovWzSmQ8I?autoplay=0", 
        comment: `Sombra was the hero I decided to try out most recently, and the results have been pretty positive thus far. I was afraid of her
        kit for a while because it looked intimidating, but now I feel pretty comfortable calling her one of my mains.`},
        {name: 'Methinks "BegForMercy" Was A Mercy-Main?', 
        embed: "https://www.youtube.com/embed/HRX2Bj4-kj4?autoplay=0", 
        comment: `32 hacked, 15 offensive assists, silver elims. All credit goes to our Mercy though, who saved
        my ass numerous times despite (I assume) also participating in Pharmacy? Pretty sure despite her tag, she's
        a Mercy-main though bc of the obvious reasons, and also the fact that she was quite honestly the best Mercy
        I've ever played with in QP (that I can remember).`},
        {name: 'Still Shaky But Not Bad', 
        embed: "https://www.youtube.com/embed/uSm9RlrYZ2g?autoplay=0", 
        comment: `Baby steps are definitely required to learn Sombra, lol.`},
        {name: 'All Im Asking You To Do Is SOMETHING', 
        embed: 'https://www.youtube.com/embed/Kx4YJM6aZHc?list=PLks73uWy20at974kh-ijifZYsEBAQK7fD?autoplay=0',
        comment: `No exaggeration, if EITHER of our proud, skilled-hero-only teammates were competent to even a fraction of a degree, I would have
        owned this game entirely, possibly without even dying once. I was so surprised after I took out half the team
        and saw Pharah still alive with two snipers in our comp, that I basically just tilted from there. I think in the end I accounted
        for Pharah more times than either of our snipers did? These things can get so frustrating in Overwatch...`},
        {name: 'Felt Awkward But 33 Hacked, Silver Silver', 
        embed: 'https://www.youtube.com/embed/Du3b_Auwr6M?list=PLks73uWy20at974kh-ijifZYsEBAQK7fD?autoplay=0', 
        comment: `Didn't even feel like I played well, but I still ended with silver, silver. I'll
        take it, I guess?`},
        {name: `How... Just How... That's All...`, 
        embed: 'https://www.youtube.com/embed/bQXWhAdvXeU?list=PLks73uWy20at974kh-ijifZYsEBAQK7fD?autoplay=0', 
        comment: `I don't know what I'm supposed to do more than start battles with clean, crucial
        picks on enemy healers... such that I deserve to end up on the losing side somehow.`},
        {name: 'I Need To Stop Solo-Que', 
        embed:'https://www.youtube.com/embed/wwv3lUVWRLI?list=PLks73uWy20at974kh-ijifZYsEBAQK7fD?autoplay=0',
        comment: `Solid hack on enemy shield tank, empty clip into enemy, reload, empty clip again, reload, get enemy to 1, ponders to self: "self,
        why isn't anyone dead yet?", contemplates giving up, (all the while still emptying full clips like a madman), finally gives up and escapes,
        begins fuming at Hanzo and other teammates who just lackadaisically walk around the map all game and accomplish nothing, 
        starts tilting, gets blind-sided by free enemy Reaper with nothing better to do... Truly awesome times.`}],
        modalData: [{
            quote: '"Everything can be hacked."',
            primaryOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/a/a4/Ability_Sombra_Machine_Pistol.png/200px-Ability_Sombra_Machine_Pistol.png?version=e1423379dd602b8148408b64aaf2b0fb',
            primaryTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/6/6d/Ability_Sombra_Hack.png?version=88e47105c3ab411d73205866710678ee',
            abilityOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/3/35/Ability_Sombra_Thermoptic_Camo.png?version=401391c4f152209088fdf5dee6f9363c',
            abilityTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/6/61/Ability_Sombra_Translocator.png?version=77ff058088cbf19ae269c0228e1f2c44',
            ultimate: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/c/c7/Ability_Sombra_EMP.png?version=034446574cc9394703034aafe0ecce10',
            labelOne: 'Machine Pistol',
            labelTwo: 'Hack',
            labelThree: 'Stealth',
            labelFour: 'Translocator',
            labelFive: 'EMP',
            description: `Sombra was quite a game-changer when she was first introduced to the game. At one point, games were completely decided
            by which team's Sombra could pharm EMP quicker and basically nullify the enemy team before the other did. These days, the game has diversified
            more, but Sombra still remains extremely effective. Good Sombras know how to stay close to team fights at all times
            in order not to leave their team too shorthanded regularly. Also Sombras must be good at staying patient, picking their spots,
            identifying easy targets, and, most importantly, hacking the right enemy at the right time. Also, Sombra's machinegun is more
            effective than people think, especially when consistently hitting enemy heads.`,
            iframe: 'https://www.youtube.com/embed/CzmWNIshnXE?autoplay=0',
            backgroundImage: 'https://em.wattpad.com/5444a343b8654b7b07f8b04adff70c4bd97809c5/68747470733a2f2f696d6730302e64657669616e746172742e6e65742f353136302f692f323031362f3331372f652f332f736f6d6272615f5f5f6f76657277617463685f62795f6572656d61735f73752d64616f616d76622e6a7067?s=fit&h=360&w=360&q=80'
        }]
    },
    {
        name: ['Symmetra', 'Satya Vaswani (सत्य वासवानी)', 'satyavaswani'],
        age: '28',
        height: `1.7m/5'7"`,
        nationality: 'Indian',
        occupation: ['Architech'],
        voice: 'Anjali Bhimani',
        class: 'Damage',
        image: ['https://vignette.wikia.nocookie.net/overwatch/images/e/eb/Symmetra_portrait.png/revision/latest?cb=20160429041836', 'https://pbs.twimg.com/media/DN382aZXUAEJHH7.jpg'],
        videos: '',
        modalData: [{
            quote: '"Such a lack of imagination."',
            primaryOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/7/7e/Ability-symmetra1.png/200px-Ability-symmetra1.png?version=b9fd478f06515a5a11f3de229ca0db56',
            primaryTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/f/f4/Ability-symmetra2.png?version=20e03dbf2167e5764f9d50ef0fb1bc5b',
            abilityOne: '',
            abilityTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/e/e0/Ability-symmetra4.png?version=42b2f96a7b705fec479fb9a879124dbc',
            ultimate: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/d/d7/Photon_Barrier.png?version=f13c1364e617e4e853bf015082bedd69',
            labelOne: 'Photon Projector',
            labelTwo: 'Sentry Turret',
            labelThree: '',
            labelFour: 'Teleporter',
            labelFive: 'Photon Barrier',
            description: `Along with Mei, Symmetra is often the hero that gamers love to hate the most. The old Symmetra required absolutely zero mechanics, as her turrets
            and primary fire were both auto-locking. Blizzard has recently "nerfed" her to what she is now (although it hasn't felt like much of a nerf). Symmetras basically
            need good turret placement, aggregating them in sneaky places, such as behind walls, where they can leave opponents helpless. Symmetra has two different styles of 
            primary fire (one tracking and one projectile), and both are equally as effective in the right situations. "Teleporter" has basically turned into a fad that died,
            but the "Photon Barrier" ultimate has emerged as a force in its stead, especially since it lasts 15(!!!) full seconds.`,
            iframe: 'https://www.youtube.com/embed/-0TPg0rgmBo?autoplay=0',
            backgroundImage: 'https://dotesports-media.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2018/08/11094220/952e4fd6-2231-4194-b759-bcdfcfd1015d.jpg'
        }]
    },
    {
        name: ['Torbjörn', 'Torbjörn Lindholm', 'torbjorn'],
        age: '57',
        height: `1.4m/4'7"`,
        nationality: 'Swedish',
        occupation: ['Weapons Designer', 'Chief Engineer (formerly)'],
        voice: 'Keith Silverstein',
        class: 'Damage',
        image: ['https://vignette.wikia.nocookie.net/overwatch/images/e/e5/Torbjorn_portrait.png/revision/latest?cb=20160429041926', 'https://joesdaily.com/wp-content/uploads/2017/08/torbjorn-fan-art.jpg'],
        videos: 
        [{name: 'Frustration Dominance', 
        embed: "https://www.youtube.com/embed/xJmczeAocck?autoplay=0", 
        comment: `Was trying to play a real game out of spawn, until I saw our team run out with some idiot comp and not care.
        So naturally, like the mature person I always claim to be, I decided to fight fire by instigating it and rolled out with Torb
        myself (without the sole intention of trolling my teammates, and nothing else). The game actually ended up going much better
        than I expected, as the replay itself shows.`},
        {name: 'Give Cred to a Good Mercy', 
        embed: "https://www.youtube.com/embed/N_NqxS4uudc?autoplay=0", 
        comment: `I will always dominate with Torb no matter when I pick him, but just in this particular instance, I have to give all the
        credit to our Mercy.`},
        {name: 'Didnt Even Play Well...', 
        embed: "https://www.youtube.com/embed/HRxKvJ1ny9k?autoplay=0", 
        comment: `Even when I don't play well with Torb I still play well.`},
        {name: `Honestly Too Easy Is No Fun`, 
        embed: 'https://www.youtube.com/embed/KKdQkMrwSgQ?list=PLks73uWy20aua2qtSY32M0LRQhBR5cLPl?autoplay=0', 
        comment: `What does it say about Blizzard's "brilliant" game design when there are such a huge
        percentage of heroes out of the overall heropool that at some point get too easy to keep playing seriously.`},
        {name: 'Gotta Love All Gold On 5 DPS Team', 
        embed: 'https://www.youtube.com/embed/7-jlU-9qIak?list=PLks73uWy20aua2qtSY32M0LRQhBR5cLPl?autoplay=0', 
        comment: `Five DPS teammates and in the end the Torb gets all golds. Blizzard developers really have
        to look into this concept known as "game-balance" that is usually considered to be pretty important...`},
        {name: 'Stupid Games With Stupid Gamers...', 
        embed: 'https://www.youtube.com/embed/qaHXoenJnJk?list=PLks73uWy20aua2qtSY32M0LRQhBR5cLPl?autoplay=0', 
        comment: `See title.`},
        {name: 'At Least I Try...', 
        embed: 'https://www.youtube.com/embed/pTcdMUC2T5Q?list=PLks73uWy20aua2qtSY32M0LRQhBR5cLPl?autoplay=0', 
        comment: `Everybody in the game is selfish. I tried for quite a long time to always be team-first,
        until I realized that it's pointless with this demographic of prinkly-faced, puberty-challenged, gamer-punks.
        These days when someone complains about selfishness, I just shrug my shoulders. I probably tried harder than
        anyone for years, and I'm completely through letting myself be the martyr anymore for no good purpose.`},
        {name: '52% KP Torb', 
        embed: 'https://www.youtube.com/embed/djKFBbI3NSo?list=PLks73uWy20aua2qtSY32M0LRQhBR5cLPl?autoplay=0', 
        comment: 'Pretty good game statistically at least?'}],
        modalData: [{
            quote: `"You're making a chicken out of a feather!"`,
            primaryOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/b/b2/Ability-torbjorn1.png/200px-Ability-torbjorn1.png?version=416a016cdc58c4c400cf860e3f08f111',
            primaryTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/3/37/Ability-torbjorn2.png/200px-Ability-torbjorn2.png?version=a5fa67fe2d19b09808a921f48bf79412',
            abilityOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/a/a7/Ability-torbjorn3.png?version=fdefda1d8f0094b4ad1d6aaea27653fa',
            abilityTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/a/af/Ability-torbjorn4.png?version=18eed42b062dee56f7d428cc26dd7585',
            ultimate: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/e/ef/Ability-torbjorn5.png?version=77f0f32f768a6d7d75ec31ac139ca377',
            labelOne: 'Rivet',
            labelTwo: 'Forge Hammer',
            labelThree: 'Deploy Turret',
            labelFour: 'Overload',
            labelFive: 'Molten Core',
            description: `While the new Torb is a definite nerf of the old one, he still remains one of the silliest heroes to play in the game. Solid Torb play
            centers around being clever with turret positioning, much like Symmetra, but what a Torb does away from his turret is usually what separates
            a good Torb from a bad one. One of his new abilities, "Overload", gives him an adrenaline-like shot of energy, which increases his mobility, rate of primary-fire, and sustainability
            for its entire duration. This allows him to jump into battles and take out vulnerable enemies at certain times, and then jump right back out. At the pro level, his turret is
            often used merely as a distraction. Torb's new "Molten Core" can deal massive damage to large groups, and if available, it is often regarded as
            "game-changing" at any level.`,
            iframe: 'https://www.youtube.com/embed/Ev0ZgWhGVuo?autoplay=0',
            backgroundImage: 'http://7wallpapers.net/wp-content/uploads/15_Overwatch-Torbjorn.jpg'
        }]
    },
    {
        name: ['Tracer', 'Lena Oxton', 'lenaoxton'],
        age: '26',
        height: `1.62m/5'4"`,
        nationality: 'British',
        occupation: ['Adventurer Pilot (formerly)', 'Overwatch Agent (formerly)'],
        voice: 'Cara Theobold',
        class: 'Damage',
        image: ['https://vignette.wikia.nocookie.net/overwatch/images/8/86/Tracer_portrait.png/revision/latest?cb=2016042904130', 'https://i.pinimg.com/originals/80/64/63/806463a592aac5d492ef3d2387069e14.jpg'],
        videos: '',
        modalData: [{
            quote: '"Ever get that feeling of déjà vu?"',
            primaryOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/f/ff/Ability-tracer1.png/200px-Ability-tracer1.png?version=91441edba6537e685f5495546ae96353',
            primaryTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/5/54/Ability-tracer2.png?version=f2ebaaaf6d632fa0a18a0e565ba85305',
            abilityOne: '',
            abilityTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/6/63/Ability-tracer3.png?version=7a73ab501ed31c36f0a359267774535d',
            ultimate: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/a/af/Ability-tracer4.png?version=769b3c3822fbb86c0ce1e7f29abc8cc2',
            labelOne: 'Pulse Pistols',
            labelTwo: 'Blink',
            labelThree: '',
            labelFour: 'Recall',
            labelFive: 'Pulse Bomb',
            description: `As evidenced by the game cover itself, Tracer was supposed to be the star hero of the game.
            Her presence in the Meta has drastically faded to date, however, as her effectiveness disappeared with all of
            the game's changes. These days, especially if the enemy team is healing well, it is either impossible, or takes a gargantuan
            effort, for a Tracer to take out any opponent on her own considering how weak her primary fire is. Blizzard has just recently
            (as of 9/29/19), announced what is allegedly an enormous future Tracer-buff in an effort to get her back into
            the scene. Whether that will actually happen in the end or not remains to be seen.`,
            iframe: 'https://www.youtube.com/embed/_SvYmsNCWsw?autoplay=0',
            backgroundImage: 'https://cdna.artstation.com/p/assets/images/images/001/773/960/large/will-murai-tracer.jpg?1452544187'
        }]
    },
    {
        name: ['Widowmaker', 'Amélie Lacroix (née Guillard)', 'amelie lacroix', 'amelielacroix', 'neeguillard', 'nee guillard'],
        age: '33',
        height: `1.75m/5'9"`,
        nationality: 'French',
        occupation: ['Ballet Dancer (formerly)', 'Assassin'],
        voice: 'Chloe Hollings',
        class: 'Damage',
        image: ['https://vignette.wikia.nocookie.net/overwatch/images/0/0b/WIDOW.png/revision/latest?cb=20190226041021', 'https://cdnb.artstation.com/p/assets/images/images/010/578/007/large/alice-mok-kerrigan-widow-final.jpg?1525167366'],
        videos: 
        [{name: `900`, 
        embed: "https://www.youtube.com/embed/LQe5d-is4kY?autoplay=0", 
        comment: `I honestly still have no idea what 900 means, but it was funny to me anyway lol.`}, 
        {name: 'Mei FTW Rofl', 
        embed: "https://www.youtube.com/embed/5nhUOvEZRwg?autoplay=0", 
        comment: `I wasn't really upset about it or anything... but really, Mei? Rofl.`},
        {name: 'Flawless Victory', 
        embed: "https://www.youtube.com/embed/NSYGCtv6PpQ?autoplay=0", 
        comment: `Not the flashiest game, but I enjoyed playing it.`},
        {name: `Not Yourself? Have A Snickers`, 
        embed: "https://www.youtube.com/embed/FAZaEGU5gls?autoplay=0",
        comment: `Funny guy lol.`},
        {name: "Gotta Admit FeltGoodMan", 
        embed: "https://www.youtube.com/embed/JDPmqDsGDpQ?autoplay=0", 
        comment: `Fun game.`},
        {name: `The "Nutty" Game`, 
        embed: "https://www.youtube.com/embed/m6aKcJjToWA?autoplay=0", 
        comment: `In my entire life I've never been referred to as "nutty" before, so when everybody was doing
        it at once at the end, it was definitely cool but also kind of weird... For some reason I just keot thinking
        about peanut butter or spreading some nutella on a cracker or something... this young generation slang just
        seems so silly sometimes, idek lol.`},
        {name: [`"Solo-ulted" Is My Life Story`, `jHoon2`], 
        embed: "https://www.youtube.com/embed/GHL0NLBBpec?autoplay=0", 
        comment: `Idk I guess people just really don't like me very easily.`,
        image: jHoon2},
        {name: 'A Few High-Skill Shots', 
        embed: "https://www.youtube.com/embed/yI2vxhmlZE0?list=PLks73uWy20at61fN_GXo7wzyNif1QZLXD?autoplay=0", 
        comment: `Mostly proud of this game because of a few nasty, high-skill shots, despite the fact
        the stats didn't show anything in the end.`}],
        modalData: [{
            quote: `"C'est la vie."`,
            primaryOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/b/bf/Ability-widowmaker1.png/200px-Ability-widowmaker1.png?version=f2f0f3afd75eb70f8a6e845a4c8371ca',
            primaryTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/5/5b/Ability-widowmaker2.png?version=5e5e9462f2725c7053aaafa48e414a04',
            abilityOne: '',
            abilityTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/0/08/Ability-widowmaker3.png?version=9e58a3a36e46b251db2b11960198349e',
            ultimate: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/9/94/Ability-widowmaker4.png?version=f618c87c8ee30e71593931abc4ae931b',
            labelOne: `Widow's Kiss`,
            labelTwo: 'Grappling Hook',
            labelThree: '',
            labelFour: 'Venom Mine',
            labelFive: 'Infra-Sight',
            description: `When Overwatch was first created, Widowmaker was the sensation that fans paid to see. The most popular players in the game were all elite hitscans,
            and highlights consisted of amazing headshots that a normal human could not even conceive of. Sadly, the game has changed with Blizzard's ambition to make money,
            and as an indirect result, Widowmaker has basically disappeared from the Meta. The best Widowmakers these days still focus largely on mechanics, namely through repeated
            Widow 1v1 headshot deathmatch competition. Also important are positioning and disguising location, as she can
            often be helpless against coordinated dive attacks. "Venom Mines" can often be more helpful than they seem, and "Infra-sight" can be useful, but usually not very spectacular.`,
            iframe: 'https://www.youtube.com/embed/fvPp6XbbTb0?autoplay=0',
            backgroundImage: 'https://i.ytimg.com/vi/0ZQ7faeKYJg/maxresdefault.jpg'
        }]
    },
    {
        name: ['Ana', 'Ana Amari (أنا عماري)', 'anaamari'],
        age: '60',
        height: `1.81m/6'`,
        nationality: 'Egyptian',
        occupation: ['Overwatch Second-In-Command Captain (formerly)', 'Bounty Hunter'],
        voice: 'Aysha Selim',
        class: 'Support',
        image: ['https://vignette.wikia.nocookie.net/overwatch/images/0/0b/Ana_portrait2.png/revision/latest?cb=20181108050042', 'https://static.zerochan.net/Ana.%28Overwatch%29.full.2184432.jpg'],
        videos: 
        [{name: '87% Of Match On Fire', 
        embed: "https://www.youtube.com/embed/T23iBK5O--U?autoplay=0", 
        comment: `Even I didn't realize until after the game that I was anywhere close to 87% on fire. Overall made good
        decisions and made some key plays though.`},
        {name: ['Bash Brothers', 'jHoon'], 
        embed: 'https://www.youtube.com/embed/VlVJK_123YI?autoplay=0', 
        comment: `Dang that was fun, esp the combo on Tracer.`,
        image: jHoon},
        {name: 'Dude Called Me a God', 
        embed: "https://www.youtube.com/embed/gaYul7AXnqY?autoplay=0", 
        comment: `Unfortunately, after the enemy Rein called me a "God" publicly, I suddenly lost the ability to focus and/or do
        anything competently anymore. Switched to Moira as a result but was basically never able to regain my senses again for
        the rest of the game (I guess flattery affects me quite a lot, idrk). Still, everything before the "God" comment was some
        pretty solid Ana play overall.`},
        {name: 'Justified Meanness', 
        embed: 'https://www.youtube.com/embed/cDQWPIjW0wk?list=PLks73uWy20av2y1r_e0WpZL4lDFTVaVM9?autoplay=0', 
        comment: `I only troll others in this game when I feel like they deserve to be trolled. If someone seems like a good
        person (regardless of skill level), then I will always pull punches rather than deal them. But if
        someone is clearly being an obnoxious, self-serving adolescent (which is like 90% of this Overwatch demographic unfortunately),
        then I don't hold anything back, regardless of what anyone else may think. On a side note related to this video, not really 
        sure anyone else could have hit that dart on their Doomfist right of spawn, just by being aware of enemy voice lines, like I managed to.`},
        {name: 'Sick Ana in Crappy Game', 
        embed: "https://www.youtube.com/embed/e6e-LVdC30Q?autoplay=0", 
        comment: `Probably one of my favorite plays of all-time was during this game when I had the presence of mind to use the gondola to survive
        the enemy DVa bomb, whereas any other decision I made would have almost certainly resulted in me dying. Then icing on the cake was when the
        DVa re-meched and rushed right back at me, but I landed a sleep-dart on her that booped her completely off the side and into the canal instead.`},
        {name: 'Good Ana Considering Circumstances', 
        embed: 'https://www.youtube.com/embed/tWlbstFA_Q4?autoplay=0', 
        comment: `Some games I just look at our comp before game-start in spawn, and I can just tell by looking
        that our DPS duo is going to be inept. Mix in lag issues, and I felt like we were up against a mountain
        the entire game. Considering all that, I thought I played ok.`},
        {name: 'Pretty Good Ana But Thanks To Better Team', 
        embed: 'https://www.youtube.com/embed/Owxt4LIT7Eo?list=PLks73uWy20av2y1r_e0WpZL4lDFTVaVM9?autoplay=0', 
        comment: `Made some good plays and enjoyed a fun game, but at the end, I had to admit that it was completely
        due to having such a superior overall team (feelsbad for their Mercy).`},
        {name: 'One Of Best Ana Games', 
        embed: 'https://www.youtube.com/embed/WAar5xJBgOg?list=PLks73uWy20av2y1r_e0WpZL4lDFTVaVM9?autoplay=0', 
        comment: `Right after this game was over, I remember thinking it felt like the best Ana game I ever played. Later on,
        after watching the replay, it didn't seem so special anymore. I'd love it if you could leave your own opinion in the
        forum so I can gain some perspective.`}],
        modalData: [{
            quote: `"It's just a scratch, you'll be fine!"`,
            primaryOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/f/fc/Ability-ana1.png/200px-Ability-ana1.png?version=1101920478ed5840a6a4d4698ee87951',
            primaryTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/5/58/Ability-ana2.png?version=16d255d03319dd3c807fb40cd8ccdd4d',
            abilityOne: '',
            abilityTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/0/0c/Ability-ana3.png?version=9a0fccef6abb2a7fc868ce423c005463',
            ultimate: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/9/97/Ability-ana4.png?version=4863fe518c6f7590d631ab168dde613f',
            labelOne: 'Biotic Rifle',
            labelTwo: 'Sleep Dart',
            labelThree: '',
            labelFour: 'Biotic Grenade',
            labelFive: 'Nano Boost',
            description: `It seems like Ana has been around forever, but she is actually one of the newest support heroes in the game. Ana is often underrated in her ability and
            how much she can do for her team, mostly because she is usually not used to her full potential. ML-17, Jjonak, and Ryujehong tend to do it the best, and when they do,
            their teams usually win. Nano in competitive play can often feel scripted, but it is still game-changing (and has the ability to save lives). Grenades are pivotal in team-fights, as they
            both heal and do damage, while also preventing affected enemies from receiving healing for their duration.`,
            iframe: 'https://www.youtube.com/embed/wZW9uCFc7uk?autoplay=0',
            backgroundImage: 'https://cdnb.artstation.com/p/assets/images/images/004/896/099/large/simon-newport-ana-uplox.jpg?1487055936'
        }]
    },
    {
        name: ['Baptiste', 'Jean-Baptiste Augustin', 'Jeanbaptiste augustin', 'jeanbaptisteaugustin', 'jean'],
        age: '36',
        height: `unknown`,
        nationality: 'Haitian',
        occupation: ['Combat Medic'],
        voice: 'Benz Antoine',
        class: 'Support',
        image: ['https://vignette.wikia.nocookie.net/overwatch/images/5/5d/Baptiste_portrait.png/revision/latest?cb=20190226231221', 'https://cdnb.artstation.com/p/assets/images/images/017/164/783/large/velocity-light-.jpg?1554889145'],
        videos: '',
        modalData: [{
            quote: `"Statistically speaking, I usually get most of my team back alive. But who's counting?"`,
            primaryOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/e/e5/Baptiste-ability5.png/154px-Baptiste-ability5.png?version=6d96a78260cc22680e72c65e5e193adc',
            primaryTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/2/26/Baptiste-ability1.png/200px-Baptiste-ability1.png?version=57cd947f03260a7ee371a4fc8b5b298a',
            abilityOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/b/b3/Baptiste-ability2.png/200px-Baptiste-ability2.png?version=413bc917adff5393854c732a60a63840',
            abilityTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/8/8d/Baptiste-ability3.png/200px-Baptiste-ability3.png?version=6e310f8340ff972018b5e4093a825c91',
            ultimate: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/2/2d/Baptiste-ability4.png/200px-Baptiste-ability4.png?version=5b6255a4054889d93697494730e40aa5',
            labelOne: 'Exo Boots',
            labelTwo: 'Biotic Launcher',
            labelThree: 'Regenerative Burst',
            labelFour: 'Immortality Field',
            labelFive: 'Amplification Matrix',
            description: `Baptiste is Blizzard's latest attempt at support, and he has a skillset that at times seems silly. He is a healer that requires good mechanics,
            both for healing and damage, but it is most important to make good use of Immortality Fields, which makes everyone underneath it unkillable. When
            used effectively, they can change the momentum or swing of fights as drastically as any ability in the game. "Exo Boots" are most useful
            in attaining high-ground, and "Amplification Matrix" is widely considered one of Blizzard's greatest duds as an ultimate (there are very, very, very few instances
            where it will actually be a significant asset of any kind against a competent team).`,
            iframe: 'https://www.youtube.com/embed/pg9xerZ5xog?autoplay=0',
            backgroundImage: 'https://www.gamerbraves.com/wp-content/uploads/2019/03/Baptiste-Overwatch-feature-image.jpg'
        }]
    },
    {
        name: ['Brigitte', 'Brigitte Lindholm', 'brigittelindholm'],
        age: '23',
        height: `unknown`,
        nationality: 'Swedish',
        occupation: ['Mechanical Engineer', 'Adventurer', 'Squire'],
        voice: 'Matilda Smedius',
        class: 'Support',
        image: ['https://vignette.wikia.nocookie.net/overwatch/images/7/7b/Brigitte_portrait.png/revision/latest?cb=20190114232133', 'https://i.pinimg.com/236x/c1/19/49/c11949a444abd618fce24fc71410d4b6.jpg'],
        videos: '',
        modalData: [{
            quote: '"The best offense is a good defence."',
            primaryOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/2/21/Rocket_Flail.png/200px-Rocket_Flail.png?version=fba956a94337375d94de28af5263ccb1',
            primaryTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/0/05/Repair_Pack.png?version=b1a535529185d965da9fa1047386ac4c',
            abilityOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/6/69/Whip_Shot.png?version=bd31d5f59f3238b549c5059afa798b15',
            abilityTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/8/86/Shield_Bash.png?version=592879ded2cb3b0f73e97e92ab50cd7dhttps://gamepedia.cursecdn.com/overwatch_gamepedia/8/86/Shield_Bash.png?version=592879ded2cb3b0f73e97e92ab50cd7d',
            ultimate: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/0/07/Rally.png?version=5a079103264052a4d3963a2ece4af9bc',
            labelOne: 'Rocket Flail',
            labelTwo: 'Repair Pack',
            labelThree: 'Whip Shot',
            labelFour: 'Shield Bash',
            labelFive: 'Rally',
            description: `Blizzard basically dug their own grave the day they decided to create Brigitte. She might be the single reason the game began to die in popularity,
            and she certainly can be blamed for Tracer falling off the map and GOATS coming into existence, at the very least. Her introduction induced a massive outcry from the fans and pros bashing
            her creator, and since then, Blizzard has nerfed her repeatedly. She features her own self-shield, which also can bash and stun any
            opponent in any situation, much like McCree's flashbang (except without requiring any aim). "Rally" is one of the most controversial and OP ultimates in game history.`,
            iframe: 'https://www.youtube.com/embed/npKO8YDCb1c?autoplay=0',
            backgroundImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Ub2Ln1K19KV6yHzF2CWcA37kzoFIlRballK5oQvmH7Cprkjf'
        }]
    },
    {
        name: ['Lúcio', 'Lúcio Correia dos Santos', 'Lucio', 'luciocorreia', 'luciocorreiadossantos'],
        age: '26',
        height: `1.6 m/5'3"`,
        nationality: 'Brazilian',
        occupation: ['DJ', 'Freedom Fighter'],
        voice: 'Jonny Cruz',
        class: 'Support',
        image: ['https://vignette.wikia.nocookie.net/overwatch/images/6/60/Lucio_portrait.png/revision/latest?cb=20160429040926', 'https://www.destructoid.com//ul/393366-2859086-lucio_vafp.jpg'],
        videos: '',
        modalData: [{
            quote: '"Why are you so angry?"',
            primaryOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/b/b8/Ability-Lucio1.png?version=90fc9997140fccaa5477bad8760fb388',
            primaryTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/0/0e/Ability-Lucio5.png?version=55091ea282a1eee9af09eb403c50c579',
            abilityOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/a/a0/Ability-Lucio2.png?version=04bc66ae685d59948ed712e452b1f1c5',
            abilityTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/3/3f/Ability-Lucio3.png?version=1094ab607900ac94fe512c61112178b4',
            ultimate: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/2/24/Ability-Lucio4.png?version=019c8926ca3ab654667d1ab4bebd5489',
            labelOne: 'Sonic Amplifier',
            labelTwo: 'Soundwave',
            labelThree: 'Crossfade',
            labelFour: 'Amp It Up',
            labelFive: 'Sound Barrier',
            description: `Lúcio has been and continues to be a force in the Meta. He also
            happens to be very entertaining to play because the variety of his kit and the versatility of things he can do.
            Wall-riding skills are crucial for all Lúcio-mains, as well as knowing when to speed-boost teammates effectively. "Crossfade"
            (where he basically just pushes someone), is most productive on maps with edges to boop with. "Sound Barrier", along with
            "Transcendence", will always be among the most crucial assets for any team going into a fight, and usually it is being saved for a specific moment.`,
            iframe: 'https://www.youtube.com/embed/ywTNgR3ldFc?autoplay=0',
            backgroundImage: 'https://static.gamespot.com/uploads/screen_kubrick/1585/15855271/3562046-2917004-lucio_009.jpg'
        }]
    },
    {
        name: ['Mercy', 'Angela Ziegler', 'angelaziegler'],
        age: '37',
        height: `1.7m/5'7"`,
        nationality: 'Swiss',
        occupation: ['Field Medic', 'First Responder'],
        voice: 'Lucie Pohl',
        class: 'Support',
        image: ['https://vignette.wikia.nocookie.net/overwatch/images/c/cd/Mercy_portrait.png/revision/latest?cb=20160429042205', 'https://wallpaperstream.com/wallpapers/thumbnails/overwatch/Mercy-Overwatch-Artwork_thumb.jpg'],
        videos: '',
        modalData: [{
            quote: `"Sometimes I don't know why I even bother..."`,
            primaryOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/f/f4/Ability-mercy1.png/200px-Ability-mercy1.png?version=e54e45a4d3315c2d04e53701b6e92bae',
            primaryTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/4/48/Ability-mercy2.png?version=6034a2426bc725771fd5ccceeb3932c3',
            abilityOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/e/ea/Ability-mercy3.png?version=f52ad9d5c546cbe23bc818bc7b8853d7',
            abilityTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/3/3e/Ability-mercy5.png?version=076ee9bc379f7088f0ad4dd5ffc7c911',
            ultimate: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/f/f9/Ability-mercy6.png?version=92792f6490776398dbb56cdc6da4360e',
            labelOne: 'Caduceus Staff',
            labelTwo: 'Caduceus Blaster',
            labelThree: 'Guardian Angel',
            labelFour: 'Resurrect',
            labelFive: 'Valkyrie',
            description: `Mercy was originally the healer that opponents hated to see the most, and then after a string of very significant nerfs, she suddenly
            turned into the opposite. In the pro scene these days, she is often only seen situationally with Pharmacies.
            Her greatest asset is "Resurrect", which can turn tides but also has the longest cooldown (30 secs) of any ability in the game. It is important
            as a Mercy to choose well between healing and damage-assist, and "Valkyrie" is useful, but weak amongst support ults. One benefit can be to use it strategically,
            however, to fly to teammates in peril or requiring Res.`,
            iframe: 'https://www.youtube.com/embed/-l-ytDZWVFI?autoplay=0',
            backgroundImage: 'https://pre09.deviantart.net/6238/th/pre/i/2016/124/0/9/overwatch_mercy_fanart_by_alexnegrea-da0y27s.jpg'
        }]
    },
    {
        name: ['Moira', `Moira O'Deorain`, 'moiraodeorain', 'moira odeorain'],
        age: '48',
        height: `unknown`,
        nationality: 'Irish',
        occupation: ['Geneticist'],
        voice: `Genevieve O'Reilly`,
        class: 'Support',
        image: ['https://vignette.wikia.nocookie.net/overwatch/images/a/a2/Moira_portrait0.png/revision/latest?cb=20181108054744', 'https://i.etsystatic.com/18999562/r/il/c52845/1699243618/il_794xN.1699243618_fass.jpg'],
        videos: '',
        modalData: [{
            quote: '"Science saves the day!... Again."',
            primaryOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/d/d7/Ability_Moira_Biotic_Grasp.png/200px-Ability_Moira_Biotic_Grasp.png?version=1d6a51cfe19a91ee6e5de2a78fc5217a',
            primaryTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/5/5f/Ability_Moira_Biotic_Grasp_Alt_fire.png?version=fd2aac6d9666e0de8986585e67f38d40',
            abilityOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/a/a9/Ability_Moira_Biotic_Orb.png?version=c2872b52cdc32dfaade30b14f54dcbd0',
            abilityTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/4/48/Ability_Moira_Fade.png?version=9cd7b33715c2dac7050f404f9a218a35',
            ultimate: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/0/05/Ability_Moira_Coalescence.png?version=4678ed1e9704a15ab1fc1eb18d59e165',
            labelOne: 'Biotic Grasp (Heal)',
            labelTwo: 'Biotic Grasp (Damage)',
            labelThree: 'Biotic Orb',
            labelFour: 'Fade',
            labelFive: 'Coalescence',
            description: `Moira stirred frustration when she was created because her kit was amateurish and too easy to use. Often, just floating damage orbs into
            battle could produce multiple elims on their own (Moira's orbs cannot be blocked or defended against except by DVa matrix). Having an auto-lock primary
            fire on top of that, as well as above-average mobility and the choice to just vanish into thin air with "Fade", made it hard for Moiras to fail. Moira
            is best-served in tank-heavy comps that can best appreciate her mass-heal abilities, which is tops in the game. "Coalescence"
            is often mistakenly used offensively when it should be used for healing instead.`,
            iframe: 'https://www.youtube.com/embed/sZrsi9x5uZk?autoplay=0',
            backgroundImage: 'https://cdn.vox-cdn.com/thumbor/OZ_td7xfAiKmcdbgPiynIgBtvNI=/0x0:3840x2160/1200x800/filters:focal(793x353:1407x967)/cdn.vox-cdn.com/uploads/chorus_image/image/57635351/Overwatch_Moira_001_png_jpgcopy.0.jpg'
        }]
    },
    {
        name: ['Zenyatta', 'Tekhartha Zenyatta', 'TekharthaZenyatta'],
        age: '20',
        height: `1.72m/5'8"`,
        nationality: 'none',
        occupation: ['Wandering Guru', 'Adventurer'],
        voice: 'Feodor Chin',
        class: 'Support',
        image: ['https://vignette.wikia.nocookie.net/overwatch/images/f/f5/Zenyatta_portrait.png/revision/latest?cb=20160429042336', 'https://i.pinimg.com/originals/c7/43/07/c743077e45dc4a06070d6f72595434af.jpg'],
        videos: '',
        modalData: [{
            quote: '"I will not juggle."',
            primaryOne: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/d/d1/Ability-zenyatta1.png?version=7b01b160f1e2eea0b5b280582ceb4314',
            primaryTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/0/0c/Ability-zenyatta2.png?version=2cfcd78f6d13445cb5c9b69c47bb98e2',
            abilityOne: '',
            abilityTwo: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/0/04/Ability-zenyatta3.png?version=0b00d34a5f3f3f1a67e71956dbe60cc6',
            ultimate: 'https://gamepedia.cursecdn.com/overwatch_gamepedia/5/5e/Ability-zenyatta4.png?version=5926200c3924316294051403b3054b44',
            labelOne: 'Orb of Destruction',
            labelTwo: 'Orb of Harmony',
            labelThree: '',
            labelFour: 'Orb of Discord',
            labelFive: 'Transcendence',
            description: `Much like Lúcio, Zenyatta has been a staple of the Meta since day one, and he has not been nerfed or buffed almost at all either.
            He has so much to offer teams primarily due to just two abilities in particular: discord orbs and "Transcendence". When discord orbs are
            placed used correctly, a team's margin for success increases exponentially. Good Zens must also projectile-volley his orb of destructions well,
            and, just like Lúcio's "Sound Barrier", "Transcendence" is usually saved for specific moments.`,
            iframe: 'https://www.youtube.com/embed/SBXpKdmJBLU?autoplay=0',
            backgroundImage: 'https://1lal3e4eckus2d9p8g17wl8c-wpengine.netdna-ssl.com/wp-content/uploads/2019/06/owl-960x540.jpg'
        }]
    }
]

export default data;