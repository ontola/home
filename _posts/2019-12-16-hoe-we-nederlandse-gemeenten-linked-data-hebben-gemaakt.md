---
layout: post
title: "Hoe we Nederlandse gemeenten Linked Data hebben gemaakt"
author: jurrian
permalink: /blog/nl/hoe-we-nederlandse-gemeenten-linked-data-hebben-gemaakt/
---

Open Raadsinformatie laat je zien wat er besproken is in de Nederlandse gemeenten.
Nooit eerder waren er zoveel gemeenten op één plek doorzoekbaar voor het bredere publiek.
Daardoor kun je nu gemakkelijk vinden wat er allemaal is besproken in jouw stad.
Data die eerst overal verspreid was op allemaal kleine data eilandjes, hebben we samengebracht en uitgebreid.

Al deze open informatie maakt het eenvoudiger voor journalisten, beleidsmakers en geïnformeerde burgers om de overheid te volgen en controleren.
Met de principes van [Linked Data](/what-is-linked-data/) in ons achterhoofd hebben we er voor gezorgd dat onze data open, uniform en herbruikbaar is voor iedereen die erop verder wil bouwen.

Bezoek onze website [openbesluitvorming.nl](https://openbesluitvorming.nl) om **alle publieke documenten** vanaf 2000 van meer dan 127 overheden te vinden.

## Hoe het begon
Eind 2016 begonnen we samen te werken met de Open State Foundation, die het Open Raadsinformatie project waren gestart.
Aan het begin van deze samenwerking waren er enkel 7 gemeenten geïndexeerd.
Uiteindelijk groeide het aantal participanten naar 120 Nederlandse gemeenten, later kwamen daar nog eens 6 provincies bij.
Nieuwe gemeenten deden mee op vrijwillige basis, Open State heeft fantastisch werk verricht door zoveel gemeenten aan boord te krijgen.

In eerste instantie bevatte Open Raadsinformatie alleen maar "platte" JSON bestanden, geïndexeerd in Elasticsearch.
De laatste jaren hebben we vanuit Ontola gewerkt om alles om te zetten in Linked Open Data, met zowel [Json-LD in Elasticsearch](https://api.openraadsinformatie.nl/v1/elastic/_search) als andere RDF formaten in de [ORI API](https://id.openraadsinformatie.nl/).
We hebben gepoogd om de informatie uit de bronsystemen zo goed mogelijk te consolideren, zodat de gebruikte classen en eigenschappen uniform bruikbaar zijn.
Op dit moment stellen we meer dan een miljoen documenten beschikbaar via onze API.
Deze dataset blijft groeien, elke nacht komen er honderden nieuwe documenten bij.

## Van PDF naar verrijkte text
Nederlandse gemeenten produceren een *hoop* informatie, ze gebruiken allemaal een raadsinformatiesysteem om vergaderingen, documenten, moties en rapportages te organiseren en te publiceren.
Er zijn echter verschillende raadsinformatiesystemen beschikbaar die allemaal anders werken en een eigen informatiemodel hebben.
Daarnaast zijn de meeste stukken en documenten opgeslagen in PDF formaat, en vaak niet publiekelijk toegankelijk beschikbaar.
Doordat wij toegang hebben tot al deze systemen, kunnen wij alles samenbrengen in een altijd publiek beschikbare centrale dataset.

De meest interessante informatie zit in PDF bestanden verborgen en kan niet worden doorzocht.
Door de teksten uit al deze miljoenen PDF bestanden te extraheren, hebben we al deze teksten voor het eerst doorzoekbaar gemaakt.
We slaan de bestanden op voor caching in Google Cloud Storage, samen met de bronnen en metadata.
Daardoor kunnen we altijd een specifieke versie terughalen of zien wat er is gewijzigd tussen versies.
Daarnaast hebben we twee zogeheten 'enrichers' die de informatie verrijken:

- ORI thema classificatie: een [machine-learning classifier](https://github.com/openstate/ori-theme-classifier) gemaakt door Open State.
Geeft relevantie scores van een document op basis van een set gespecificeerde thema's waaronder: Economie, Veiligheid en Onderwijs.

- Waaroverheid enricher: gebaseerd op het project [LocLinkVis](https://bitbucket.org/aolieman/loclinkvis/) van onder andere Alex Olieman en de Universiteit van Amsterdam.
Het zoekt straten en locaties in document teksten en koppelt het aan de geografische coördinaten van een buurt of wijk.

Deze enrichers zorgen dat alle gebruikers van Open Raadsinformatie kunnen filteren op thema tags en kunnen zoeken welke documenten er binnen een geografisch gebied vallen.

Er zijn op dit moment al verschillende applicaties die gebruik maken van de vrij beschikbare data via onze API:

## Use cases

### Openbesluitvorming.nl
We hebben de [primaire zoekapplicatie](https://openbesluitvorming.nl) gebouwd, zodat gebruikers kunnen ontdekken wat er is gezegd in hun lokale overheid.
Het mooie van open data is dat iedereen een eigen applicatie kan bouwen op basis van onze API, we hebben gewoonweg een begin gemaakt.

![openbesluitvorming.nl](/img/posts/ori/zoek-openraadsinformatie.jpg "openbesluitvorming.nl")

&nbsp;

### Raadstalk.nl
VNG is de koepelorganisatie voor alle Nederlandse gemeenten en is de drijvende kracht achter het project.
Ze hebben ons gevraagd om een [simpele weergave](https://raadstalk.nl) te bouwen om te kunnen zien welke woorden er trending zijn per maand.

![raadstalk.nl](/img/posts/ori/raadstalk.jpg "Raadstalk.nl")

&nbsp;

### Waaroverheid.nl
[WaarOverheid](https://waaroverheid.nl) toont alle documenten die een locatie bevatten in jouw buurt of wijk.
Op een kaart kun je tussen buurten navigeren om documenten in de daargelegen straten te vinden.

![waaroverheid.nl](/img/posts/ori/waaroverheid.jpg "Waaroverheid.nl")

&nbsp;

### 1848.nl
[1848](https://1848.nl) verzamelt politieke informatie en nieuws van verschillende bronnen.
Door te zoeken en notificaties te onvangen kan men zo op de hoogte blijven van ontwikkelingen.

![1848.nl](/img/posts/ori/1848.jpg "1848.nl")

&nbsp;

## Nu en de toekomst

Het begon allemaal met openraadsinformatie.nl, maar het project bevat al lang niet enkel raadsinformatie meer.
De scope van het project is verbreed naar provinciale data en binnenkort ook nationale data.
Op dit moment werken we samen met De Tweede Kamer der Staten-Generaal om hun nieuwe API in het project te integreren.
Dit heeft geleidt tot een nieuwe naam voor besluitvorming op alle niveaus: [openbesluitvorming.nl](https://openbesluitvorming.nl).

We hebben een hoop positieve en inspirerende reacties gehad van deelnemende partijen.
Ze zeggen dat dit project een mooie manier is om de politiek en bestuur meer open toegankelijk te maken en dichter bij de burger te brengen.
Door nieuwe gemeenten en provincies toe te voegen hopen we het succes nog groter te maken.
Als u een gemeente of provincie vertegenwoordigt en deel zou willen nemen, vragen we u vriendelijk [dit formulier](https://formulieren.vngrealisatie.nl/deelname_openraadsinformatie) in te vullen of een email te sturen naar [Sander Bakker](mailto:sander.bakker@vng.nl) van VNG.
Meedoen aan het project is kosteloos, meer informatie over deelname en het project kunt u [hier](https://www.vngrealisatie.nl/producten/open-raadsinformatie) vinden.

Werken aan dit project is een uitdaging geweest, we hebben een behoorlijk aantal hordes genomen die komen bij het beheren van zulke hoeveelheden data en verschillende systemen.
Onderweg hebben we ervaring opgedaan met ETL processen, Elasticsearch, Kafka en Kubernetes om er een paar te noemen.

[Neem contact met ons op](/contact) om erachter te komen hoe u uw doelen kunt halen in het modelleren en transformeren van grote hoeveelheden Linked Data.
