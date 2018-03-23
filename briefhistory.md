---
title: A Brief History of CTF
revealOptions:
    transition: 'none'
theme: white
verticalSeparator: \n^--$\n
---

<!-- .slide: data-background="images/ctf.jpg" -->
# A Brief History of CTF

<small>[@psifertex](https://twitter.com/psifertex)</small>

note: Talk slowly!

--

<!-- .slide: data-background="images/un.jpg" -->
# UNbio

A non-exhaustive list of things I am NOT:

- the best CTF player (talk to Loki or Geohot)
- the winningest DEF CON player (talk to PPP)
- the organizer of the longest running CTF (talk to Shellphish)
- the longest-continuous CTF player (talk to Chris Eagle)
- even a currently active CTF player (thus, "history")

Notes: No this is not my United Nations Biography, that's my un-bio -- a list of things that I am not. (Yes, be prepared for bad puns)

--

<!-- .slide: data-background="images/face.jpg" data-background-size="20%" data-background-position="bottom right" -->
# Bio

- ten years of playing DEF CON CTF finals (even won a few times)
- helped build [CGC](http://archive.darpa.mil/cybergrandchallenge/)
- captain of team behind [Ghost in the Shellcode](http://ghostintheshellcode.com/)
- creator of [captf.com](https://captf.com/), a collection of archived CTF challenges
- erstwhile organizer of the [Golden Flag Awards](http://golden-flags.com/)
- one of the devs of ![BinaryNinja](images/bn.png)

Notes: a non-exhaustive list of some of the things I have done though that are relevant to this talk. 

--

<!-- .slide: data-background="images/survey.jpg" -->
# Survey

- Who has heard of CTF?
<!-- .element: class="fragment" -->
- Who has played a CTF?
<!-- .element: class="fragment" -->
- Who knows their team's current ctftime rank?
<!-- .element: class="fragment" -->
- Who has organized a CTF?
<!-- .element: class="fragment" -->
- Who has retired from CTF because they got old and irrelevant?
<!-- .element: class="fragment" -->

Notes: A disclaimer -- my view of CTF is of course skewed by the CTFs I have participated in. I'd love to hear more though from others about things I don't know. I worry that much of our community is currently in the folk-lore stage, or on old blog that are eventually lost and I'd like to make sure we do a better job keeping some historical record of our past. I think too many people take it for granted that the internet saves everything when it, in actuality, does not.  If you've retired, come find me after this talk, we'll put together an old-person's team for the CTF this evening maybe. :-P 

--

<!-- .slide: data-background="images/ctf4.jpg" -->
# Types of CTF

- Blue Team (CCDC, CDX)
- Red Team  (Jeopardy, Game-board)
- Full Spectrum / Attack-Defense

Notes: I'm sure this is old news to most everyone, but most CTFs can be categorized into three different styles. Blue team, or defensive CTFs are, in my opinion, the most boring of all and thankfully from what I can tell seem to be only a disease that has infected the US, with Europe and Asia not wasting a lot of time on them. Red team or pure offensive CTFs are sometimes jeopardy style or gameboard, are pure solving or offensive challenges. The most complicated and stressful are the full spectrum or attack-defense CTFs where you are actively engaged in both attack and defense.

---

<!-- .slide: data-background="images/vintage_phone.jpg" -->
# In the beginning...

Notes: We submitted keys via DTMF (actually happened in DefCon 14). But actually, the earliest CTFs are much older than that. DEF CON though still gets a lot of publicity as one of the biggest events, and as far as I know, the longest running CTF, though the organizers have changed several times.

---

<!-- .slide: data-background="images/defcon.png" -->
# DEF CON Timeline

![](./images/history-of-defcon.png)


Notes: here's an overview of the different events, don't want to cover them all, but here are a few of my favorite highlights. Raw URL: https://docs.google.com/spreadsheets/d/1xy_Yak_rbYO1g0di54bNrHD3uoK0F6insWAOPgFvM08/edit?usp=sharing

--

# Wifi Badge

![](./images/badge.jpg)

<!-- http://www.routards.org/2014/08/defcon-22-ctf-badger.html -->
<!-- https://legitbs.net/2014/ -->
Notes: this badge is a beautiful piece of design. I know that badge design especially at DEF CON is itself now an entire subculture of its own right, but this badge pre-dated the influx of common badges, and even amongst all the cool designs this still remains one of the most impressive. Routards the only team to land, great team of CTF players who unfortunately were always so close to winning and always seemed to end up getting second place.

--

![](./images/clemency.png)

Notes: crazy amount of work went into clemency, development started over a year and a half before it was released

- https://github.com/legitbs/cLEMENCy
- https://blog.legitbs.net/2017/10/clemency-showing-mercy.html
- https://2017.notmalware.ru/89dc90a0ffc5dd90ea68a7aece686544/clemency-201707271159.pdf


---

<!-- .slide: data-state="chart1" -->
# Total CTFs

<canvas id="chart1" width="800" height="400"></canvas>

Notes: Numbers extracted from CTFTime's archive section

---

<!-- .slide: data-background="images/scoreboard.jpg" -->
# Scoring Mechanisms
(attack defense)

- service pollers
- crypto backdoor
- out-of-band, or in-band?

Notes: arguably one of the hardest, and most important things to get right. There's a lot of different ways to do it so here's my biased descriptions. Service pollers are notoriously easy to game and hard to get right in attack defense. 

--

<!-- .slide: data-background="images/scoreboard.jpg" -->
## Scoring Mechanisms
(jeopardy)

- self-adjusting?
- unique flags?

Notes: much easier problems to deal with compared to attack defense -- possibly unique key values if possible to detect/mitigate collusion, self-adjusting scores help author-bias

--

<!-- .slide: data-background="images/superman.jpg" -->
## Superman Defenses

- service redirection
- syscall filtering
- virtualized services
- network shenanigans

Notes: any time you give the defenders lots of control over their environment (or even just sufficient advance notice about the environment), they can always come up with really neat generic defenses. From back in the early defcon days when Immunix fielded a custom hardened Linux operating system to generically protect services (early form of AppArmor), to many of the more recent attack-defense CTFs where a huge number of techniques have been applied. 

---

<!-- .slide: data-background="images/world.jpg" -->
# Real World Impact

Notes: go see infiltrate talk

---

<!-- .slide: data-background="images/games.jpg" -->
# Gamification

Notes: if you've seen my infiltrate talk you've seen a bunch of examples of the intersection between gaming and CTFs, but I think there's a /TON/ more work to be done in this area. Here's a quick highlight of some of my favorites. PlaidCTF included a game-type interface to their ctf in 2012 and 2013, but the CTF itself wasn't really about the game interface at all.

--

# Choose Your PwnAdventure

```You are eaten by a grue.```

Notes: A pure text-based game

--

<!-- .slide: data-background="images/bear_wine.jpg" -->
# PwnAdventure 2

Notes: Unity based, dot-net is good for easy access to decompilers. In fact, it sounds like the upcoming CTF later tonight has a Unity based engine in it, so definitely make sure to check that out. 

--

<!-- .slide: data-background="images/pa3.png" -->
## PwnAdventure 3

<!-- <iframe src="http://pwnadventure.com/" width="800" height="600" />
-->
<iframe data-src="https://www.youtube.com/embed/PHZJ443zVM0?autoplay=1" width=800 height=600></iframe>

Notes: Unreal Engine definitely harder than PwnAdventure2, just finished a reverse engineering workshop that uses a modified version of this game, but you don't have to take our workshop to play with the

--

<!-- .slide: data-background="images/paz.gif" -->
## PwnAdventureZ

Notes: there have been so many others such as multiple circuits designed in minecraft (my favorite being permadeath bit you could set in the minecraft level so that if someone tried the challenge and died their level was deleted, though of course it's easily recovered via downloading from the score-server)

--

## PwnAdventureZ

<iframe data-src="https://www.youtube.com/embed/G6t94p2anVA?autoplay=1" width=800 height=600></iframe>

Note: you can try playing PwnAdventureZ outside as SCRT has setup an original NES console to play on! Note that because of the NTSC/PAL differences unfortunately the sound isn't quite right and it plays about 20% slower than normal, but otherwise should be just fine.

---

# Visualizations

--

--

--

--

---

<!-- .slide: data-background="images/storytime.jpg" -->
# Story Time!

A quick summary of some of my favorite stories -- let me know yours, I'd love to archive/collect these. 

--

<!-- .slide: data-background="images/tools.jpg" -->
# Tool Breaking

 - libpcap / wireshark
<!-- .element: class="fragment" -->
 - flooding listeners
<!-- .element: class="fragment" -->
 - curl command-injection (9447 v. hates irony, samurai v. apt8)
<!-- .element: class="fragment" -->

--

<!-- .slide: data-background="images/epic.jpg" -->
# Nearly EPIC

 - VOIP scoreboard
<!-- .element: class="fragment" -->
 - cLEMENCy breakout
<!-- .element: class="fragment" -->
 - Crypto Backdoor
<!-- .element: class="fragment" -->

Notes: long and storied tradition of infrastructure breaking, here's some /nearly/ epic hacks that all failed.

--

<!-- .slide: data-background="images/adc.jpg" -->
# Actually EPIC

```
=============================================================================
FreeBSD-SA-11:05.unix                                       Security Advisory
                                                          The FreeBSD Project

Topic:          Buffer overflow in handling of UNIX socket addresses

Category:       core
Module:         kern
Announced:      2011-09-28
Credits:        Mateusz Guzik
Affects:        All supported versions of FreeBSD.

[...]

II.  Problem Description

When a UNIX-domain socket is attached to a location using the bind(2)
system call, the length of the provided path is not validated.  Later,
when this address was returned via other system calls, it is copied into
a fixed-length buffer.

Linux uses a larger socket address structure for UNIX-domain sockets
than FreeBSD, and the FreeBSD's linux emulation code did not translate
UNIX-domain socket addresses into the correct size of structure.
```

Notes: lollerskaters from rofl copters dropped an epic BSD escape to cause major havoc in 2011

--

<!-- .slide: data-background="images/fnat.jpg" -->
# TCP/IP Timestamp

Notes: there was another hack that same year that wasn't quite as interesting but turned out to be quite helpful. Bellovin's research, didn't work to completely identify service poller, blocked specific throwing boxes

--

<!-- .slide: data-background="images/guitar-hero-logo.jpg" data-background-size="contain"  -->
# Guitar Hero Ownage

Notes: in-memory patcher and backdoor, because of drop-privs being the wrong order

---

<!-- .slide: data-background="images/volunteer.png" class="higher" -->
# Contributing
<!-- .element: class="higher" -->

Notes: there's a lot of work that could benefit the community. If you've had your life made better by playing CTFs (and I know many of us have) then I strongly encourage you to give back by helping out the community, there's lots of ways! 

--

# captf.com

<iframe src="https://captf1.captf.com/" width="800" height="600" />

Notes: could definitely use someone to help me scrounge up more CTFs to mirror, they're a precious resource, let's not lose them! 

--

<!-- .slide: data-background="images/mentor.jpg" -->
# Mentor

Note: There's always someone who is further along and always someone further behind. Look for those you can help and playing in a team helps you find others who can help you too. 

--

<!-- .slide: data-background="images/ctf2.jpg" -->
# Run a CTF

Note: It's a ton of work, but well worth it. Only way to get better at it is to simply do it.

--

<!-- .slide: data-background="images/goldenflags.png" -->
http://golden-flags.com/

--

<!-- .slide: data-background="images/ctftime.png" -->
# ctftime 2.0? 

- Federated login
- Individual stats
- Community-directed
 - ranking system
 - event scoring
- host writeups/mirrors locally

Notes: debate comes up every year or two and is debated heavily. kyprizel does a great job of it, but it feels like it should be more of a community resource, though that supposes the community is actually willing to step it up 
---

<!-- .slide: data-background="images/credit.jpg" -->
# CREDITS

- [Lovely series of CTF photos from Wikihow](https://www.wikihow.com/Play-Capture-the-Flag) licensed [(CC) by-nc-sa](https://creativecommons.org/licenses/by-nc-sa/3.0/)
- Slides created with [reveal.js](https://revealjs.com/#/) and [reveal-md](https://github.com/webpro/reveal-md)
- Other slide backgrounds from various CC licensed material, exact URLs available in github repository
- CTF Organizers world-wide -- very few people know how much of your time, effort, and often times cash go into these events which can be very ephemeral events. It's truly a labor of love and the community benefits a ton from it!

---

<!-- .slide: data-background="images/questions.jpg" -->
# Questions?

SLIDES: https://github.com/psifertex/a-brief-history-of-ctf

[(CC) by-nc-sa](https://creativecommons.org/licenses/by-nc-sa/3.0/)

---

# Bonus Content

- CTF Resources/References

---

## Resources (1/3)

- https://www.defcon.org/html/links/dc-ctf-history.html
- https://ctftime.org/ (main website for event tracking)
- https://trailofbits.github.io/ctf/ (CTF field guide)
- http://captf.com/maxims.html (organizer guide)

--

## Resources (2/3)

- https://www.youtube.com/watch?v=8ev9ZX9J45A (And any other video by LiveOverflow)
- https://github.com/ctfs (Writeup archive)
- https://ctfs.github.io/resources/
- https://github.com/pwning/docs/blob/master/suggestions-for-running-a-ctf.markdown

--

## Resources (3/3)

- http://captf.com/practice-ctf/ (Wargames/practice)
- https://www.youtube.com/watch?v=okPWY0FeUoU (old DEF CON talk of mine)
- https://www.youtube.com/watch?v=O8oJ5CMXo3k (Kenshoto behind the scenes)
- https://www.blackhat.com/presentations/bh-asia-04/bh-jp-04-pdfs/bh-jp-04-eller/bh-jp-04-eller.pdf (GH's captain)
- https://www.youtube.com/watch?v=MbIDrs-mB20 (DEF CON CTF organizer panel)

---

<!-- .slide: data-background="images/pwnadventurez.jpg" -->

<iframe data-src="https://www.youtube.com/embed/QXLP-L2ZgpQ?start=844" width=800 height=600></iframe>

Notes: The "proper" runthrough as intended was much longer!