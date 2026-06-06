---
id: "13"
title: "The Emergency Handoff Problem"
excerpt: "Every AV company has built its own first responder protocol. None of them work the same way. The gap isn't technology. It's interoperability."
publishedAt: "2026-05-19"
author: "Juan Carlos Aguilera"
tags: ["Autonomous Vehicles", "Emergency Response", "Interoperability", "Safety"]
category: "Autonomous Vehicles"
readTime: 7
featured: false
slug: "M_the-emergency-handoff-problem"
seo:
  metaTitle: "The Emergency Handoff Problem | AV First Responder Interoperability"
  metaDescription: "Every AV company has built its own first responder protocol. None work the same way. The cross-operator standardization gap is the real emergency."
  keywords: ["AV emergency response", "first responder autonomous vehicles", "AV interoperability", "autonomous vehicle first responders", "AV standardization", "robotaxi emergency protocols", "AV cross-operator coordination"]
---

In early 2026, during a shooting in Austin, a police officer physically entered a Waymo vehicle, coordinated with Waymo's remote operations team to disconnect the autonomous system, then manually drove it out of the scene. It took about three minutes.

That's the emergency handoff working. It also breaks the moment a different company's vehicle shows up next week.

The coordination succeeded because one specific officer, in one specific moment, knew which company's vehicle he was dealing with, knew who to call, had connectivity, and had enough authority to execute a procedure specific to that operator and that vehicle platform. What happens at scale, across operators?

---

## The Coordination Gap

Most people assume remote operators can drive a stuck vehicle away. They cannot. Remote operations across most of the industry are guidance-only: operators suggest paths, and the vehicle decides whether to execute. (I went deeper on this in [The Hidden Workforce Behind "Driverless" Cars](https://aguilerapjc.substack.com/p/the-hidden-workforce-behind-driverless).) When guidance fails and the vehicle cannot self-resolve, it stays where it is until someone physically arrives. The California Public Utilities Commission (CPUC) formally tracks these as "stoppage events," with towing listed as a standard resolution category. Not an edge case. A routine outcome.

That's the starting condition. Now add the coordination layer.

Every major AV operator has built protocols for first responder interaction. Waymo publishes [detailed emergency guides](https://waymo.com/firstresponders), runs a 24/7 hotline, and has trained over 15,000 first responders. Zoox provides a hotline and can remotely disable its vehicles on request. Nuro, Motional, and Kodiak each publish their own plans.

These protocols exist. They share no common interface, follow no shared standard, and collectively push cross-operator complexity to the responder. A firefighter arriving at an emergency scene needs the blocking vehicle gone. To do that, they must first identify which company operates it, then recall or locate that company's specific procedure, then execute it under pressure. There is no universal mechanism that works the same regardless of which operator's vehicle is blocking the scene.

In 2023, when a second operator was running in San Francisco alongside Waymo, the Fire Department filed 39 formal complaints about autonomous vehicle interference from a combined fleet of a few hundred vehicles. Vehicles blocking firehouse exits. Driving over active fire hoses. Stopping at emergency scenes and staying there. In December 2025, a power outage froze hundreds of Waymo vehicles at intersections across the city. A single operator, a single event, and the remote operations team faced a demand spike it wasn't dimensioned for.

Those experiences helped drive the industry investment in responder protocols visible today. The question now is different: not whether any single company will build adequate procedures, but whether multiple companies' independent procedures can coexist without pushing integration complexity to the responder.

---

## What Scale Does to the Problem

At current fleet sizes, operator-specific protocols mostly work. A vehicle gets stuck, the responder calls the one company they've trained with, someone is dispatched or talks them through it.

But multi-operator cities are already forming. San Francisco has Waymo running commercial rides and Zoox operating a public driverless pilot simultaneously, under separate CPUC permits. Las Vegas has Zoox and Motional serving passengers through different platforms. None of these cities have built a cross-operator coordination layer for first responders.

The problem compounds with operator count, not just fleet size. A second operator doesn't just double the vehicles. It adds a distinct protocol, a separate hotline, a different vehicle access method. Each new entrant layers on cognitive load for responders who already have seconds to act.

One officer learning one company's procedure is training. Thousands of responders navigating multiple operators with incompatible interfaces is a standardization problem, not a negligence problem.

---

## What Each Company Built

Jeffrey Tumlin, then director of the San Francisco Municipal Transportation Agency, described the baseline asymmetry on the [Driverless Digest podcast](https://www.thedriverlessdigest.com/p/robotaxi-lessons-from-san-francisco) in December 2025: with a human-driven vehicle, a firefighter can simply say "turn around, go," or break a window and physically remove it. Autonomous vehicles require a company-mediated process. What that process looks like depends entirely on which company built it.

Waymo's system is the most complete. A three-tier operations structure handles escalation: Remote Assistance provides guidance to the vehicle, an Event Response Team (ERT) coordinates with first responders by phone, and physical Roadside Assistance dispatches to the scene. Their protocol for moving a blocking vehicle is a multi-step authorization sequence: call the 24/7 hotline, identify yourself and your agency, wait for the ERT to remotely authorize manual mode, then follow a vehicle-specific button combination on the steering wheel. On the Jaguar I-PACE, that means pressing the center and right buttons in a specific cluster. On the newer Zeekr RT, it is a different set of buttons on a different steering wheel layout. The system works. It also depends on real-time connectivity, scales with headcount, and cannot be shortcut.

Zoox took a fundamentally different architectural path. Their robotaxi has no steering wheel and no pedals. According to their [published responder documentation](https://zoox.com/first-responders), autonomous mode "can only be disengaged either by a Zoox remote operator or on-scene by the Zoox Support Team." A responder facing a Zoox vehicle blocking a fire lane has exactly one option: call the hotline, wait for a remote operator to disable the system, then arrange a flatbed tow for a vehicle that weighs nearly three tons. If the line is busy or connectivity fails, the vehicle is immovable by anyone on scene.

Motional's Hyundai IONIQ 5, operating in Las Vegas, chose the opposite extreme per their [First Responder Interaction Plan](https://motional.com/sites/default/files/inline-files/Nevada_Motional_Ioniq_5_First_Responder_Interaction_Plan.pdf): a physical emergency stop button and a manual mode key let a responder drive the vehicle away without any phone call or company authorization. That sounds like the obvious solution until you consider what it trades away. Nothing in the mechanism verifies that the person pulling up the E-stop is actually a first responder. A passenger, a bystander, or anyone who can open the door has the same access to full manual control. The design eliminates the authorization bottleneck by eliminating authorization entirely. At scale, in a city where these vehicles carry paying passengers, that tradeoff may look different.

Each of these is a rational design for a single fleet. Together, they create a landscape where procedures range from "drive it yourself" to "call us and wait." A firefighter in a city with three operators would need to identify the vehicle, recall the correct company's protocol, and execute it under time pressure. That cognitive load, multiplied by responders, by shifts, by operator turnover, is the standardization gap.

---

## Why These Systems Won't Converge On Their Own

Convergence won't happen without deliberate intervention.

Authentication. The vehicle must verify that the person requesting manual control has the authority to take it. That verification needs to work in any condition: darkness, rain, glare, while wearing gloves, under time pressure. It cannot depend on a smartphone app or a login sequence. Waymo's phone-based authorization, Zoox's company-only disable, and Motional's zero-verification E-stop each reflect a different answer to the same question. There is no obvious middle ground that all three architectures can adopt without fundamental redesign.

Responder diversity. A police officer at an active shooting takes on exposure risk by stepping out of cover to interact with a vehicle. A paramedic losing two minutes to an authentication process loses time from patient care. A firefighter may not need to drive the vehicle at all, just needs it to roll a few meters. A single protocol must serve all three under time pressure.

Jurisdictional authority. In California, cities currently have no regulatory control over autonomous vehicle operations. They cannot issue citations or mandate response times. A city experiencing chronic stoppage events has no direct lever to require faster resolution. In the U.S. The entity that could mandate interoperability (the state) has not yet done so, though bills are now moving.

The Automated Vehicle Safety Consortium published a standard in 2024 (AVSC-I-01-2024) that defines categories of first responder interaction. Waymo references it in their emergency guides. But it is a taxonomy of interaction types, not an interoperability protocol. It does not mandate that a single procedure work across operators, or that a responder trained on one system can transfer that knowledge to another.

Maryland built the closest thing to a structural answer. When the state designed its AV testing framework, it required emergency responders to participate from inception. State Police and transportation authority police shape the permit conditions for every operator entering the market. The result: any company deploying in Maryland faces the same responder interaction requirements, regardless of its internal architecture. Coordination as a design condition, built into the permit from day one. No other state has replicated this model.

California's [SB 1246](https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260SB1246), introduced in February 2026, represents the first legislative attempt to codify these layers. It mandates tiered response times: immediate remote response, obstruction clearance within five minutes, physical dispatch within ten. It mandates manual override systems, including an emergency steering wheel, in all commercial driverless vehicles, and gives cities enforcement authority over obstruction violations. Whether it passes matters less than what it signals: the problem has crossed from industry discussion into legislative language. The bill addresses response capacity and physical access. It does not address protocol convergence.

---

The Austin officer knew which vehicle, which company, and which sequence. Three minutes. At pilot scale, with one dominant operator per city, that's close enough.

The question is not whether individual companies will keep improving their protocols. They will. It is whether the cross-operator standardization layer, the one that would let a single trained responder handle any vehicle from any fleet, gets built deliberately. The AVSC taxonomy exists. Maryland's model exists. What does not exist is the decision about who scales these into industry infrastructure.

The next officer will face a different vehicle, a different company, a different hotline, a different sequence. The three minutes start over.

---

*Views expressed are my own and do not represent MOIA or Volkswagen Group.*
