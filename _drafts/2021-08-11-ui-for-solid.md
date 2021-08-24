---
layout: post
title: "Designing a UI for a Personal Online Datastore"
author: joep
permalink: /blog/ui-for-pods/
---

In this article, we'll discuss an open source, creative commons set of UI designs for a web-based personal data store.

- Click through [the demo](https://www.figma.com/proto/wkc2XEA6Lddai8n4PUU83C/Solidstarter-Prototype?page-id=327%3A0&node-id=335%3A32985&viewport=289%2C241%2C0.04754795879125595&scaling=scale-down) on figma
- View the [style book](https://zeroheight.com/756e7c07f/p/919ed8-solid-ui-kit) on ZeroHeight
- Check out the [Github Repository](https://github.com/ontola/solid-ui-designs), containing the source files

## Why we need Personal Online Datastores

30 Years ago, the first website was created by Tim Berners-Lee.
The web was designed to be decentralized, where people would have their own servers to share their thoughts on an open internet.
But today, our web has become more centralized than every before.
A few large tech companies control most of our personal data.
Using cloud applications enabled us to access our data from every machine, but it took away a great deal of control.
Moving data from one app to the other is often difficult (or impossible), as many cloud apps have a tight integration between client and server.
For example, we can only view our facebook posts using official Facebook apps.
On the other hand, standards like e-mail, RSS, and HTML allow users to choose how they view and edit their data - we can pick our own e-mail apps, RSS readers and our own web browsers.
Wouldn't it be awesome if we could do the same thing with our social media posts, our chat messages, our todo apps and more?

One approach to solve this problem, is having a _personal online data store_, a Pod.
This is a computer that is always online, and contains your personal data.
It is similar to a service such as Dropbox or Google Drive, but it does a bit more.
Instead of only dealing with files, it deals with _structured standardized data_.
This enables a higher degree of interoperability, which means it becomes easier for app developers to re-use data.
It also hosts your online identity, stores notifications and more.

One notable project that aims to provide such a standard, is Solid.
This project was started by Tim Berners-Lee himself.
At this time, the specification is being formalized and various implementations are being worked on (such as our own [DexPod Server](https://gitlab.com/ontola/dexpod)).
The majority of the Solid community is focused on making all of this work, which mostly means getting the technology and the specification in good shape.

## Designing a user interface for Pods

But the user-side of things generally receive less attention.
How would a Pod look like? How would you interact with it? What kind of UI challenges and opportunities does a Pod present?
That's why we've partnered up with studio [Jager & Prooi](https://jagerenprooi.nl/) to design a user interface for Pods.
Thanks to the dutch [SIDN Fonds](https://www.sidnfonds.nl/nieuws/techneuten-en-ontwerpers-bundelen-krachten-8-projecten-van-start) for funding this project.

We started our project off by interviewing two groups: Solid developers, and potential early adapters.
That way, we'd have a good grasp on technical opportunities and limitations, and what aspects of the UI would be most important for making the first group of users happy.

We realized that designing a Pod would pose an interesting challenge, even for experienced designers.
A Pod is not just one of many apps - it is a place where many apps could run.
It is similar to an Operating System, such as Windows or iOS: where you launch and manage apps, manage your data and manage your system.
