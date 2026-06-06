---
id: "10"
title: "Who Runs a 150,000 Autonomous Vehicle Fleet?"
excerpt: "The AV industry is announcing fleets 10-100x current scale. Nobody is building the workforce to operate them."
publishedAt: "2026-03-24"
author: "Juan Carlos Aguilera"
tags: ["Autonomous Vehicles", "Fleet Operations", "Workforce", "Remote Operations"]
category: "Autonomous Vehicles"
readTime: 8
featured: false
slug: "J_who-runs-150k-av-fleet"
seo:
  metaTitle: "Who Runs a 150,000 Autonomous Vehicle Fleet? | AV Workforce Gap"
  metaDescription: "The AV industry is targeting 150,000+ vehicles but nobody is building the workforce to operate them. Why the OPITO model from offshore oil offers a blueprint."
  keywords: ["AV workforce", "autonomous fleet operations", "remote operators autonomous vehicles", "OPITO model AV", "AV maintenance workforce", "robotaxi operations staffing", "autonomous vehicle workforce development"]
---

Last month, I wrote about [the hidden workforce behind "driverless" cars](https://open.substack.com/pub/aguilerapjc/p/the-hidden-workforce-behind-driverless): the remote operators, rider support teams, hub crews, and maintenance technicians that every autonomous fleet depends on. The humans.

Since then, the announcements have kept coming. Uber signed a deal with Rivian to [deploy up to 50,000 autonomous R2 SUVs](https://rivian.com/newsroom/article/uber-and-rivian-partner-to-deploy-up-to-50000-fully-autonomous-robotaxis), starting in San Francisco and Miami by 2028, backed by up to $1.25 billion. That's just one deal. Uber is also running robotaxi pilots with [Waymo in Austin](https://www.uber.com/us/en/newsroom/waymo-on-uber-austin/), [Avride in Dallas](https://www.uber.com/us/en/newsroom/avride-on-uber/), [Motional in Las Vegas](https://www.uber.com/us/en/newsroom/motional-on-uber/), and [WeRide across the UAE](https://www.weride.ai/posts/q6narfqgnl66bgf3mdakvxp9) with 1,200 robotaxis committed by 2027. Waymo itself is [scaling its 6th-generation platform](https://waymo.com/blog/2026/02/ro-on-6th-gen-waymo-driver) on Hyundai's IONIQ 5 toward tens of thousands of vehicles per year, while [expanding into four new US cities](https://waymo.com/blog/2026/02/dallas-houston-san-antonio-orlando). In Europe, Bolt has partnered with [Stellantis](https://bolt.eu/en/blog/stellantis-bolt-press-release/) and [Pony.ai](https://bolt.eu/en/blog/bolt-ponyai-autonomous-driving-europe/) with a stated goal of [100,000 robotaxis on European streets](https://bolt.eu/en/blog/bolt-ponyai-autonomous-driving-europe/).

Read through every one of these press releases. You'll find vehicle counts, partnership terms, funding amounts. What you won't find is a single mention of the operations workforce required to put them on the road.

---

## From 3,000 to 150,000

Let's start with what we know.

Waymo operates roughly [3,000 vehicles today](https://waymo.com/blog/shorts/advice-not-control-the-role-of-remote-assistance/) across multiple US cities, serving over 450,000 rides per week. At any given time, [approximately 70 remote assistance agents](https://waymo.com/blog/shorts/advice-not-control-the-role-of-remote-assistance/) support this fleet globally. Assuming around 60% of the fleet is active at any moment (roughly 1,800 vehicles), that gives a ratio of about 1 remote assistance operator for every 25 active vehicles.

That's just remote assistance. It doesn't count rider support, hub operations, maintenance technicians, sensor calibration specialists, safety drivers for new market testing, or the mapping teams that prepare each new operational domain.

Now scale that up.

|                                  | Waymo today   | Single major deal (50K)  | Industry combined |
| -------------------------------- | ------------- | ------------------------ | ----------------- |
| **Fleet size**                   | ~3,000        | ~50,000                  | 150,000+          |
| **Remote assistance (1:25)**     | ~70 per shift | ~1,200 per shift         | ~3,600 per shift  |
| **Maintenance (1:12 active)**    | ~150          | ~2,500                   | ~7,500            |
| **Safety drivers (new markets)** | Dozens        | Hundreds                 | Thousands         |
| **Hub operations**               | Unknown       | Unknown                  | Unknown           |
| **Total operations workforce**   | Low thousands | Tens of thousands        | **Well into six figures** |

The 150,000+ column is not today's reality. It is roughly where current announcements and partnership commitments point if even a handful of major players hit their stated targets by the end of the decade.

These are conservative estimates. The remote assistance ratio of 1:25 reflects Waymo, which is likely the most operationally mature AV company in the world. A company launching in its first or second city, still refining its autonomous driving system, still learning the local operational domain, will almost certainly need a lower ratio. Maybe 1:10. Maybe 1:5.

The maintenance estimate uses traditional fleet benchmarks (roughly 1 technician per 10-15 active vehicles), but AV fleets are more demanding. Sensor arrays need calibration. Compute hardware needs monitoring. The cleaning requirements for LiDAR and camera housings are more exacting than washing a windshield.

And the "unknown" row is the most honest part of this table. Nobody publishes hub operations staffing data. But consider what a single hub requires: technicians for maintenance and sensor calibration, staff for charging and cleaning, logistics coordinators moving vehicles between depot and service area, inspectors clearing vehicles for deployment each day. Some companies are exploring automation for parts of this work (robotic charging, automated inspection), but automating a depot is its own multi-year challenge, and even automated hubs still need human oversight.

In Waymo's Austin operation, this work is spread across separate facilities for charging and for maintenance and recalibration. The vehicles don't charge themselves. Humans plug them in. One company handles cleaning and charging; the AV developer handles technology and maintenance. That's two organizations staffing separate facilities for one city's fleet. The depot capacity far exceeds the active fleet on the road, suggesting significant vehicle downtime for servicing and calibration. And building a charging hub at the 50-100 stall scale needed for larger fleets requires 3-4 year lead times just for utility agreements and permits, before a single person is hired to staff it.

Scale that to 50 cities and the headcount compounds fast, even if nobody can tell you the exact ratio.

---

## A Job That's Never Existed

The workforce gap isn't just about numbers. It's about the nature of the work.

A remote assistance operator spends most of their shift monitoring vehicles that are driving themselves successfully. The AI handles the routine. The human handles the exception. When a vehicle encounters an ambiguous construction zone, an unexpected road closure, or a situation its perception system can't resolve, the operator steps in to provide guidance.

Most of these interventions are straightforward. Confirm the vehicle should proceed. Identify that a hand signal from a construction worker means "go." Recognize that what looks like an obstacle is actually a shadow. Then, without warning, a vehicle freezes at an intersection blocking a bus. A passenger panics. A power outage hits and twelve vehicles need attention simultaneously. The operator goes from monitoring to crisis management in seconds.

This is the defining characteristic of the job: long stretches of low-intensity monitoring punctuated by high-stakes, time-critical decisions. The military has a term for this pattern from decades of drone operations. They call it the vigilance problem. Sustained attention during periods of low stimulation degrades performance. When the critical moment arrives, the operator who has been bored for two hours is measurably slower and less accurate than one who has been moderately engaged.

Boredom is not a comfort. It's a risk factor.

Add to this the cognitive load of context switching between vehicles. An operator might go from assisting a vehicle navigating a detour in Phoenix to one stuck behind a double-parked truck in San Francisco. Different city, different road rules, different operational context. Research on multi-vehicle supervision consistently shows that switching costs are real and cumulative.

So who is suited for this work? The skill profile is genuinely unusual:

- **Calm under sudden pressure** for emergency scenarios
- **Sustained attention** during low-activity periods
- **Technical literacy** sufficient to understand what the vehicle's AI is perceiving and deciding
- **Judgment with incomplete information** when the system needs a human decision
- **Empathy** for passengers who may be confused, frustrated, or scared

This profile exists in other industries. Air traffic controllers manage the same boredom-to-crisis rhythm. Military drone operators pioneered remote vehicle supervision over thirty years of hard lessons.

Some companies are already separating these responsibilities into distinct roles: passenger support on one side, emergency vehicle intervention on the other. That split lowers the qualification bar for each individual role, but it increases the total workforce needed and adds coordination complexity.

But none of these analogies map cleanly. Air traffic controllers don't manage customer experience. The military's drone pipeline is small and struggling with its own retention problems.

The honest answer: there is no existing workforce that fits cleanly. The role is new. The training to prepare people for it is new. The certification to validate competency in it does not exist.

---

## Why City-by-City Won't Scale

Every AV company entering a new city is solving the workforce problem locally. Hire in the market. Train against the local operational domain. Partner with a fleet management company that knows the geography.

This makes sense at small scale. When you're running 50 vehicles in one city, you can recruit, train, and manage a team directly. The workforce needs are specific to your technology, your vehicles, and your operational domain.

But this approach has limits.

Waymo is in 10 US cities and expanding internationally. Uber has AV partnerships spanning multiple providers and geographies. Every new city means a new hiring effort, a new training program adapted to local conditions, and a new set of operational knowledge that lives inside that team.

The operational context genuinely varies. Traffic patterns in Phoenix are different from San Francisco. Regulatory requirements in Germany mandate engineering degrees for technical supervisors. The labor market in Tokyo looks nothing like Austin. A single global playbook doesn't work.

But the core of the job does transfer. The cognitive skills, the decision-making frameworks, the understanding of how autonomous systems behave at their limits. These are not city-specific. They are the foundation on which city-specific operational knowledge gets built.

Right now, every company is building that foundation independently. Proprietary training programs. Internal certification processes. No shared vocabulary for what competency looks like. No transferable credential that says "this person is qualified to supervise autonomous vehicles" in a way that any employer in the industry would recognize.

This problem has played out before. And the industries that solved it offer two very different lessons.

---

## The Cautionary Tale and the Blueprint

The rideshare industry scaled without workforce standards. Uber and Lyft grew from zero to millions of drivers in under a decade, city by city, with no shared definition of driver qualification beyond a license and a background check. The result: regulatory bans, years of litigation, fatal incidents tied to inadequate screening, and city-by-city political fights still playing out more than a decade later. For a service with a human driver behind the wheel, the industry absorbed those consequences and kept going. For autonomous vehicles operating without one, the margin for that kind of chaos is fundamentally narrower.

A better model comes from an industry most people outside of it have never heard of.

When offshore oil and gas expanded rapidly in the 1970s and 80s, the industry faced the same workforce problem the AV industry faces today. Drilling platforms needed specialized workers: subsea engineers, safety officers, drilling operators. The roles were new. The talent pool didn't exist. Every operator was training independently, with no transferable credentials and no shared standard for what competency looked like.

The industry's solution was [OPITO](https://www.opito.com/), a training and certification organization created and owned by the operators themselves. Competing companies, Shell, BP, and dozens of others, agreed on common workforce standards. Not because a regulator forced them to, but because the alternative was more expensive. Every new platform in a new geography meant rebuilding a workforce from scratch. A shared certification reduced that cost for everyone.

OPITO created what the AV industry currently lacks:

- **Transferable credentials.** A safety officer certified in the North Sea could work in the Gulf of Mexico with defined conversion processes. The credential belonged to the worker, not the company.
- **Standardized competency frameworks.** What a drilling technician needed to know was defined at the industry level, not reinvented by each operator for each platform.
- **Training program accreditation.** Schools and vocational programs could train against a recognized standard, creating a pipeline that served the entire industry rather than a single company.
- **A labor market that actually works.** When credentials transfer across employers, people enter the industry knowing their skills won't be trapped inside one organization. That attracts talent. Proprietary-only training repels it.

The key insight: competing companies cooperated on workforce standards because a qualified technician benefits every operator, not just the one that trained them. The industry built it because scaling without it was more expensive than building it.

---

## What the AV Industry Needs Now

Uber's 50,000-vehicle deal with Rivian is not posturing. Waymo scaling to tens of thousands of IONIQ 5s is not aspirational. The technology trajectory supports these numbers. Capital is flowing. Cities are permitting operations.

But between the announcement and the fleet on the road sits an operations workforce that does not exist at anything close to the required scale. And nobody is building the infrastructure to create it at the industry level.

Germany's AFGBV regulation is one of the few frameworks that takes workforce qualifications seriously: engineering-level requirements for technical supervisors in the original text, manufacturer-specific training, annual recertification with simulated failures. There is pressure to relax some of these requirements, and whether that specific bar is right can be debated. But the principle that this is a skilled profession requiring formal qualification is correct.

[Waymo's TechForce scholarship program](https://waymo.com/blog/2026/02/partnering-with-techforce), funding 28 technician scholarships across 9 cities, is an early signal. It acknowledges that the workforce pipeline needs deliberate investment, not just job postings. But 28 scholarships against a future need of tens of thousands of technicians is a proof of concept, not a solution.

Regulation and corporate programs are necessary but insufficient on their own. What's missing is the layer between individual company efforts and regulatory mandates. A consortium, something like PAVE expanded or a new body modeled on OPITO, that brings together AV companies, fleet operators, regulators, and training institutions to define:

- **Core competency frameworks** for remote assistance operators, maintenance technicians, and emergency response teams. Not company-specific. Industry-standard.
- **Transferable certification** that means something across employers and across borders. A credential that a Waymo-trained operator could carry to Zoox or Motional or a European fleet operator.
- **Training program accreditation** so community colleges, vocational schools, and private training providers can build programs against a recognized standard. This is how you create a pipeline at scale.
- **Ongoing qualification requirements** including recertification, simulation-based assessment, and competency validation as systems evolve. The technology changes fast. The workforce qualifications need to keep pace.

This isn't altruism. It's a scaling enabler. Every AV company that enters a new city today has to build a workforce from scratch because there is no transferable standard. That's expensive, slow, and creates quality variance across markets. An industry-standard credential reduces the cost of expansion for everyone.

And for the organization that convenes it, it becomes a revenue-generating platform: certification fees, training accreditation, ongoing compliance. OPITO proved this works. The model isn't just instructive. It's a business.

---

## The Workforce Bottleneck

At 3,000 vehicles, you can solve workforce problems with job postings and internal training. At 50,000, you can't. At the 150,000+ vehicles the industry is collectively targeting, the workforce question becomes the scaling bottleneck.

The companies announcing these fleet sizes know this. They're solving it internally, city by city, partnership by partnership. That's rational. But it's not sufficient.

The offshore oil industry learned this in the 1980s. The rideshare industry never did. The AV industry gets to choose which path it takes. The question is whether it chooses before the vehicles are ready and the people aren't.

---

*Views expressed are my own and do not represent MOIA or Volkswagen Group.*
