---
layout: post
title: "Publishing Dutch governmental meetings as linked data"
author: jurrian
permalink: /blog/publishing-dutch-governmental-meetings-as-linked-data/
---

[Open Decision Making](https://openbesluitvorming.nl) (Open Besluitvorming in Dutch) lets you search through what has been discussed in Dutch governments.
In collaboration with local governments, the VNG and the Open State Foundation, we've built software that standardizes and aggregates the meeting data of more than 120 governments.
All this open information makes it easier for journalists, policymakers and well-informed citizens to get involed in.
With the principles of [linked data](/what-is-linked-data/) we ensured that the data is open, uniform and reusable for anyone that likes to build upon it.

## How it started

In 2014 we started our e-democracy platform [Argu.co](https://argu.co), which aims to engage citizens in decision making processes.
We worked with many governments and hosted online discussions where people shared ideas, opinions and voted on issues.
Although we've seen that e-democracy and civic participation can be very succesful, one key element is often missing: the actual decision making process.
This has to do with the fact that e-democracy discussion tend to happen in parallel of the actual governmental meetings.
We wanted to bring these two worlds together.
In order to achieve that goal, we decided to work on gathering and standardizing the data that these decision makers create: meetings, votes, agenda items and many other documents.

In 2016 we started working with the [Open State Foundation](https://openstate.eu/), who initiated Open Raadsinformatie (Open Municipality Data).
VNG (the Dutch Municipality Union) provided funding, we joined forces, got involved with the technology, and helped to scale the project up from 7 to over 120 municipalities and 6 provinces.

## Going from PDF to enriched text

Dutch municipalities produce a *lot* of information in their meetings.
They use meeting software to organize and distribute their agenda items, documents, motions and reports online.
However, all these application tend to work quite differently, all with their own information schemes.
Also, many of the proceedings and documents are saved in PDF format and are often not publicly accessible to download.
With our access to these systems, and a lot of time to understand and implement the various APIs, we were able to bring everything together and create a standardized, searchable base of information which is always publicly accessible.

Most of the interesting information is hidden away in PDF files.
We wrote ETL (extract, load, transform) software using Python, Celery and Elasticsearch that gets all the source files, standardizes it to a single model and loads the text into various query systems.
We store and cache all these files in Google Cloud Storage, along with the referencing sources and metadata.
This enables us to serve files that are not accessible through the default API of the meeting software sources.
This also makes it possible to see what has changed between versions.

Additionally, two organizations contributed two enrichers that add derived information to the resources:

- Theme classifier: a [machine-learning classifier](https://github.com/openstate/ori-theme-classifier) written by the Open State Foundation.
Scores document relevance to a set of specified themes like: Economy, Safety and Education.

- Location classifier: based on the project [LocLinkVis](https://bitbucket.org/aolieman/loclinkvis/) made by Alex Olieman and the University of Amsterdam.
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

It all started with municipality data, but the scope has now broadened to provincial data and will soon include data from the national level as well.
We are working with the Dutch parliament on integrating their brand new API.

We believe that this is just a preview of what is possible with open governemnt data.
If we can convince goverments to adopt a more data-focused information publishing strategy (using machine readable formats, such as RDF, instead of PDF), we can create even more engaging web applications: imagine clicking on a representative to see which motions they submitted, or compare voting behavior between political parties.

Working on this project has been challenging, we've overcome quite some hurdles that come with managing such amounts of data and systems.
On the way we have learned a great deal about ETL processes, Elasticsearch, Kafka and Kubernetes, to name a few.

[Contact us](/contact) to know how we can help you achieving your goals in modelling and transforming information to linked data.
