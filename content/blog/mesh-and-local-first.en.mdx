---
layout: post
title: "PrepNet: a peer-to-peer mesh network that remains functional when the internet fails us"
author: joep
permalink: /blog/prepnet/
description: "We're working on a mesh network, powered by Reticulum, WiFi Halow and Atomic Data. A back-up for the internet that can survive power outages and cyberattacks."
date: "2026-04-09"
---

## We need a backup for when the internet goes down

Our society is rapidbly becoming more reliant on the functioning of the web.
This has made a lot of things very efficient, but it is also fragile.
Although it has been designed to be decentralized, some of the structures that we see today have become centralized.
A small number of companies control most of the servers and services that we use.
We rely on "the cloud", on AWS being online, on Google to host our tools.
Software engineers rely on NPM, Github, automated test lanes, which in their turn also rely on the large datacenters.

What could happen if there is a coordinated attack on AWS servers?
If a destructive virus targets DNS servers?
If some country attacks the big internet cables in the oceans?
If a large solar flare causes a power grid collapse?

There are many ways in which this system can fail.
And if it fails, that means our video calls, calendars, navigation, todo lists, payments...
They will stop working.
And that means a lot of society could stop working.

We live mostly in cities, and we get our food through complicated supply chains.
We won't be able to make digital payments in grocery stores if the bank's servers can't be reached.
Truck drivers won't know where to bring their load if their SAAS tool won't provide the logistics data they need.
A farmer can't replace a part on their digital tractor so they can work their land.

In short, if the internet goes down, we're in trouble.
We need something that stays working without servers and without power.
So we're trying to build something that does that.

## The dream

Building an alternative internet is doable, but we have to change our expectations. We won't be able to stream 4k video feeds, but we will be able to:

- Chat with people nearby (a couple of kilometers, at least)
- Use modern digital tools, like kanban boards and collaborative document editors
- Do digital payments
- Install this app on phones even after the play store / app store is down
- Allow society to function moderately well

So, how do we get there?

## A wireless peer to peer mesh

Our internet is pretty amazing, but for this goal we'll need a different architecture:

- **No client-server model**. We can't rely on some specific server in some other country to be available.
- **No centralized coordination**. We can't rely on ISPs, DNS servers or regional network hubs to hand out IPs or domain names.
- **No cellular infrastructure**. These things have 8 to 24 hours of backup power.
- **True direct peer-to-peer connections**. We use the devices we already have, and make them connect directly to each other.
- **Offline-first apps**. If the server fails, you'll need your own data on your own device. But we want more than just being able to open our data - we want to continue to collaborate on it.

## The technology stack

In order to build this, we need some specific technology:

- **High-bandwidth, long range radio.** Some existing mesh networks use LoRa, but the speed is too low to make a large-scale mesh possible. Luckily for us, a new standard is now emerging that give us exactly this: **Wi-Fi Halow**. It can have kilometers of range, support 3000 simultaneous connections, and handle speeds of up to 50Mb/s.
- **A routing & encryption protocol**. We need software to send messages over a network that is constantly changing, moving and deeply unreliable. We think Reticulum is the most suitable for very large mesh networks. We're working on [porting Reticulum-rs](https://github.com/ontola/reticulum-rs) (the rust implementation) from Tokio to [Embassy](https://embassy.dev), so it can run on low-power devices like the Lilygo T-Halow module.
- **Offline-first software**. That's where [Atomic Data](https://ontola.io/nl/cases/atomic-data/) spec and [Atomic Server](https://github.com/ontola/atomic-server/) implementation come in. We're in the process of making the Atomic ecosystem ready for a mesh network.

Want to help out or chat about this? [Send us a message](joep@ontola.io)!
