---
layout: post
title: "Publishing Dutch governmental meetings as Linked Data"
author: jurrian
permalink: /blog/How-we-published-Dutch-governmental-meetings-as-Linked Data/
---

Open Decision Making (Open Besluitvorming in Dutch) lets you see what has been discussed in Dutch governments.
Never before so many municipalities were searchable on one place for the greater public, making it easy to see what has been discussed in your city.
We brought together and expanded data that was scattered around on tiny data islands, inaccessible for those not knowing where to look.

All this open information makes accountability of governance more accessible for journalists, policymakers and well-informed citizens.
With the principles of [Linked Data](/what-is-linked-data/) we ensured that our data is open, uniform and reusable for anyone that likes to build upon it.

Visit our site [openbesluitvorming.nl](https://openbesluitvorming.nl) to find **all public documents** that has been produced since 2000.

## How it started

In 2014 we started our e-democracy platform [Argu.co](https://argu.co), which aims to engage citizens in decision making processes.
We worked with many governments and hosted online discussions where people shared ideas, opinions and voted on issues.
However, we wanted to engage the decision makers as well - the local leaders and representatives.
In order to achieve that goal, we decided to work on gathering and standardizing the data that these decision makers create: meetings, votes, agenda items and many documents.

In 2016 we started working with the [Open State Foundation](https://openstate.eu/), who initiated Open Raadsinformatie (Open Municipality Data).
VNG (the Dutch Municipality Union) provided funding, we joined forces, got involved with the technology, and helped to scale the project up from 7 to over 120 municipalities and 6 provinces.

## Technology

- About aggregating the data from various sources (SOAP / REST JSON / Scraping).
- Try Neo4j, Aranago, more
- Python

At first, Open Raadsinformatie contained plain Json documents indexed in Elasticsearch.
Last years Ontola has been working towards Linked Open Data using [Json-LD in Elasticsearch](https://api.openraadsinformatie.nl/v1/elastic/_search) and various RDF formats in the [ORI API](https://id.openraadsinformatie.nl/).
We have tried to consolidate the different information systems as best as we could so that the classes and properties used are uniform.
Currently we share over a million of documents through our API and counting, each night hundreds of new items are added.

## Going from PDF to enriched text

Dutch municipalities produce a *lot* of information in their meetings.
They use information systems to organize and distribute their agenda items, documents, motions and reports online.
However, all these information systems tend to work quite differently, all with their own information schemes.
Also, many of the proceedings and documents are saved in PDF format and are often not publicly accessible to download.
With our access to these systems, and a lot of time to understand and implement the various APIs, we were able to bring everything together and create a standardized, searchable base of information which is always publicly accessible.

Most of all the interesting information is hidden away in PDF files since the text in there can't be searched.
We have made it possible to search those PDF files by extracting text from millions of files.
We store and cache all these files in Google Cloud Storage, along with the referencing sources and metadata.
Enabling to always serve a particular version of a resource or to be able to see what changed between versions.
Additionally, there are currently two so called 'enrichers' which add derived information to our resources:

- ORI theme classifier: a [machine-learning classifier](https://github.com/openstate/ori-theme-classifier) written by the Open State Foundation.
Scores document relevance to a set of specified themes like: Economy, Safety and Education.

- WaarOverheid enricher: based on the project [LocLinkVis](https://bitbucket.org/aolieman/loclinkvis/) made by Alex Olieman and the University of Amsterdam.
It finds streets and locations in document texts and translates it into geographical coordinates of city neighborhoods and districts.

These enrichers allow all users of Open Decision Making to filter documents by theme tags and use geographical information to pinpoint which locations are mentioned.

Several applications now actively use the free available data from Open Decision Making:

## Use cases

### OpenBesluitvorming.nl
We have built the [primary open source search application (Dutch)](https://openbesluitvorming.nl) for users to discover and explore what is being said in their local government.
The beauty of open data is that everyone can build their own application based on the same API.

![openbesluitvorming.nl](/img/posts/ori/zoek-openraadsinformatie.jpg "openbesluitvorming.nl")

&nbsp;

### Raadstalk.nl
VNG is the Dutch umbrella organization for all municipalities and has been the driving force in this project.
They've asked us to create a [widget](https://raadstalk.nl) to see what words are trending for all municipalities in each month.

![raadstalk.nl](/img/posts/ori/raadstalk.jpg "Raadstalk.nl")

&nbsp;

### Waaroverheid.nl
[WaarOverheid](https://waaroverheid.nl) shows all documents that mention a location in your neighborhood and district.
It provides a map interface to navigate from neighborhood to neighborhood to find documents in streets located there.

![waaroverheid.nl](/img/posts/ori/waaroverheid.jpg "Waaroverheid.nl")

&nbsp;

### 1848.nl
[1848](https://1848.nl) gathers political information from different sources to search and receive alerts to be able to stay on top of things.

![1848.nl](/img/posts/ori/1848.jpg "1848.nl")

&nbsp;

## Going forward

It all started with openraadsinformatie.nl which translates to "open municipality information".
However, the scope has now broadened to provincial data and will soon include the national level as well.
At this moment we are working together with the Dutch parliament, De Tweede Kamer der Staten-Generaal, on integrating their brand new API.
This required a new name that will incorporate all bodies: [openbesluitvorming.nl](https://openbesluitvorming.nl).

We've had a lot of positive responses from the participating organizations.
They feel that this project is an effort in bringing politics and decision making closer to the civilian.
We hope to make this success even bigger by inviting more participants on the local as well as the provincial level.

Working on this project has been challenging, we've overcome quite some hurdles that come with managing such amounts of data and systems.
On the way we have learned a great deal about ETL processes, Elasticsearch, Kafka and Kubernetes, to name a few.

[Contact us](/contact) to know how we can help you achieving your goals in modelling and transforming large amounts of Linked Data.