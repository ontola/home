---
layout: post
title: "Full-stack linked data: lessons from building an RDF web app"
author: joep
permalink: /blog/full-stack-linked-data/
---

How might a web application work if it exclusively uses [Linked Data](https://ontola.io/what-is-linked-data/) (RDF) to communicate between server and client?
In this article, I'll tell you about our API journey, why we chose linked data (RDF), the challenges that we faced, and some of the solutions that we came up with.

## About the project

In 2016, we started [Argu.co](https://argu.co): an e-democracy platform.
We wanted more people to become politically engaged, and make sure that their opinions and ideas were heard by decision makers.
We needed a web app where people would discuss issues, vote, share ideas and make decisions together.
We started with Ruby on Rails, and built a traditional server-side monolithic HTML serving app.
This proved to be a quick and effective way to start, but as time passed, we noticed more and more limitations of this approach.

- The HTML pages relied on the internal ORM, so we didn't need an API for internal use. Having **no API** limits what customers can do with their data, and it also means that it's gonna be hard (or impossible) to build a native mobile App.
- Having **interactivity** (menu's that pop up, rich text editors, notifications, live editing, etc.) was difficult to achieve with server-side rendering. We liked react, but using that in a server-rendered Rails app was complex and error-prone.
- **Performance** was not as good as we wanted it to be, as most clicks required some server processing and an HTTP roundtrip.

It was clear that we needed a dedicated client-side single page application and an API.

## Designing a client-server contract (API)

Re-inventing the wheel seems like a bad idea, so we searched for best practices and existing standards in API design.
We initially went with [JSON-API](https://jsonapi.org/) (not just 'a' JSON API, but a formal specification that describes things like pagination).
Since we were already using React, and saw its popularity climbing, we went with that for the front-end.
Now we had to decide how the internal state of the client should look like.
We picked Redux, which uses a single (immutable) JS object which contains all application state (including data).

As we worked on this, our front-end started looking more and more like our back-end.
It now had explicit knowledge of:

- Many of the models from the back-end (Comment / Question / Vote / User)
- The routing logic
- The accessible parameters in endpoints
- Various actions (e.g. notifications / alerts)
- Forms and their validations.

This seemed _wrong_.
We were taught to write DRY code: _don't repeat yourself_, but it seemed like we were repeating ourselves all the time.
This meant that when we wanted some feature changed, we had to adjust _both_ the front and the back-end.
Something seemed off.

## Why we opted for Linked Data

Our CTO Thom van Kalkeren thoroughly studied the principles behind REST, HATEOS and Hypermedia, and concluded that we need to give _everything_ URLs.
Not just the _pages_ that we present to our users, but _every single thing_ that can be used by a client - including menu items, buttons, actions and form fields.
Luckily for us, the good folks at W3C had written quite a bit of specs about how data should look when you use URLs: the RDF specification (and friends).

Linked Data (or RDF) has some unique qualities:

- **Browsable**. Using links for everything in data, means that data can be surfed like how web pages work: just follow the URLs. That's actually really helpful in a web application, since this means that the client no longer needs to be aware of your routing logic.
- **Flexibility**. Everything can be serialized to various formats (JSON, XML, Turtle, N-Triples, and [more](https://ontola.io/blog/rdf-serialization-formats/)), which gives some really nice and flexible export functionality.
- **Self-describing APIs**. Simply use content-type negotiation to fetch a resource as HTML or some RDF format, and browse the data like you would browse a website: by following the links. API docs become kind of unnecessary, since navigating the website shows you all the endpoints.
- **Re-use other linked data**. Because links can point to _anywhere_ (not just your server), you can use all the publicly available linked data! This, for me, has always been the number one reason to believe in Linked Data.
- **Enables true data ownership**. Because of this, it enables _decentralized networks_ where people _own their data_, which can help to combat the existing web oligopoly. That's what the [Solid project](https://solidproject.org/) is all about.

So, we went with Linked Data.

## The cost of being an early adopter

Although the first [RDF spec](https://www.w3.org/TR/rdf11-concepts/) was already 10 years old, there were not many existing libraries (let alone tutorials) for us to get started.
Practically all Linked Data projects functioned as viewers that directly show individual RDF Statements in a table.
We wanted something else, we wanted a user-friendly web app that resembled social media platforms.
We needed interactivity, notifications, forms...
And doing things like that with Linked Data, turned out to be pretty hard.
Luckily for you, we've shared quite a bit of tools, libraries and ideas that could make your life a bit easier if you choose to go Linked Data.

## Getting used to RDF

RDF is a weird data model.
It was primarily designed as a language for the _semantic web_, which aims to (formally, logically) describe our world using _semantic triples_.
The design decisions made to achieve that, however, make things harder for you as a developer:

- RDF uses a lot of very long strings (URLs) instead of keys, which makes selecting values difficult.
- RDF does not have key uniqueness (subject-predicate uniqueness), which means that you could get many values if you want to know a specific property.
- RDF doesn't support native arrays, but has [a bunch of (confusing) ways of representing ordered data](https://ontola.io/blog/ordered-data-in-rdf/).
- RDF knows [many serialization formats](https://ontola.io/blog/rdf-serialization-formats/), which is a blessing and a curse. The most mentioned format in the docs (the earliest one, RDF/XML), is also the most confusing.
- Properties are not linked to specific datatypes, so you have to check datatypes for every single statement.

## Making Ruby on Rails work with RDF

Ruby on Rails is an opinionated MVC framework.
By default, it works great for generating HTML pages (or JSON objects, using Rails-API), but RDF is a whole different beast.
We created our own serializers ([rdf-serializers](https://github.com/ontola/rdf-serializers)), but more importantly, Thom and Arthur Dingemans created [linked-rails](https://github.com/ontola/linked_rails/wiki).
This gem provides some abstractions for working with RDF, including:

- Policies (what users can or can't do)
- Collections (sort / filter / pagination)
- Forms (we'll get to that later)
- Menus for actions and navigation
- Error serialization
- Actions handler (we'll get to that later, too)

Check out the [Wiki](https://github.com/ontola/linked_rails/wiki) if you want to learn more!

## Forms and form validation

Argu was always about getting opinions from people, so it needs a lot of forms.
And these can differ for many reasons:

- The model (of course)
- Specific settings for a tenant (customer)
- User and tenant-specific rights

So, how should the server communicate these forms to the client?

We stumbled upon [SHACL](https://www.w3.org/TR/shacl/), a schema language for RDF (written in RDF), that provides a way to validate RDF graphs.
This seemed like the way to go!
However, it became obvious that forms cannot _entirely_ depend on shapes.
Should you render a radio select, or a dropdown?
How do you describe a multi-page form?
How do you describe interrelated form fields (if x is a, show form option y).
And to make things even more challenging: how do you make these forms _cacheable_, given some fields might render differently for different users?

Again, we had to create our own form abstraction.
We used the SHACL spec where possible, but had to create some new Classes and Properties to solve the challenges that we faced.
The Forms DSL in [linked-rails](https://github.com/ontola/linked_rails/wiki#forms) provides a simple interface to create these forms.

## Turning RDF into HTML

Ultimately, the user needs to show a pretty web app, which means the RDF from the server has to be transformed into HTML.
Step one is fetching the data from the server, and storing it in the client.

We started using [RDFlib.js](https://github.com/linkeddata/rdflib.js), written partially by the inventor of Linked Data (and HTTP, HTML, the WWW...) Tim Berners-Lee himself.
It provided a lot of useful features for dealing with RDF: parse, fetch, serialize, mutate, search...
I was hired by Inrupt to convert it to typescript in 2019.
However, our app had kind of a unique set of requirements (mostly related to performance when dealing with many, dynamic triples), so we started working on a different RDF store.

My colleague Thom wrote two libraries: [link-lib](https://github.com/fletcher91/link-lib) and [link-redux](https://github.com/fletcher91/link-redux).
Link-lib does most of the heavy lifting: it provides a store, deals with parsing, serializing, fetching, sending RDF data, handling the actions, registering the views (more an that in a minute).
Link-redux (should be called link-react, but that name was taken) adds some useful functions for using it in React.

In practice, it works like this:

- When the user requests any URL as HTML (default browser request), they receive a mostly empty HTML page with some cached RDF data (that matches the Subject of the fetched URL) that helps to build the first view as quick as possible.
- The JS app (using Link-lib, link-redux and react) is loaded, and all the existing Views are registered. These Views are React components that will render for one or more RDF Classes, in specific Topologies (e.g. fullpage, in a column, in a menu item).
- The RDF data is added to the store, and the corresponding view is rendered.
- Note that there is no routing going on in the front-end - the rendered component is based on the Class of the resource, not the URL route.
- Depending on the rendered view, new resources might be needed (e.g. a rendered Article might show some Comments). These will be fetched by the front-end, and loading indicators will be shown in the places where data is missing.
- When the user interacts with the content (e.g. click on a link, open a menu item, press a button), they will dispatch an action and modify the internal state - all using RDF. These actions _might_ make changes on the server, and these changes _might_ have an impact on the user after that. The changes are communicated using [linked-deltas](https://github.com/ontola/linked-delta), which describes how single triples have been either changed, removed or added. When a delta is processed, components might re-render, because their properties have changed. This is a flux-like / redux-like pattern.
- Because we a _lot_ of URLs, we need some way to prevent typos. That's where the [@ontologies](https://github.com/ontola/ontologies) library comes in handy!

## Serialization & parsing performance

RDF can be serialized in many ways ([at least 10](https://ontola.io/blog/rdf-serialization-formats/)).
Some formats look like the ones you know (JSON-LD, RDF/XML), some reflect the internal model really well (N-Triples), and some have interesting and complex semantic features (Notation3).
We didn't really care about any of that - we just wanted to make things fast.
Parsing JSON-LD was _extremely_ hard and slow, Parsing Turtle was better (but still slow), so for a while we opted for the with `N-Triples`.
But ultimately, Thom came up with a new format: [HexTuples-NDJSON](https://github.com/ontola/hextuples), which was actually very simple to implement both in the Ruby back-end and in the JS front-end.
It made our _entire_ server app about 2x faster (it was working a _lot_ on serialization), and in the front-end we noticed a similar speed increase.

## Bulk-API, caching and more performance improvements

Still, our app wasn't quick enough.
The core problem: every single resource on screen with has a URL, and needs to be fetched independently.
In other words, opening a single page could require over a 100 round-trips.
Thom came up with a solution: the bulk-API, which would accept a body containing all the URLs that needed to be fetched.
This improved many things, but our back-end was still running each resource request internally with all the existing overhead (checking the user, session, etc.).
Even when that is fixed, we're still performing way too much hard work for every request - we need some form of caching.

That's why were working on a new RDF Triple Strore, written in Rust, and it is _fast_.
It offers three ways of querying:

- Single resource (HTTP GET to the subject URL)
- Bulk-API (list of subjects)
- Triple Pattern Fragments

It's not rolled out yet in production, but we'll open source it soon enough.

## FAQ

### Which triple store do you use?

Although our back-end serializes linked data, we don't use a triple store.
The Rails back-end has a mostly strict schema in SQL tables, but we do have a table in our Postgres schema that stores single triples.
Keep in mind that the RDF representation of data can be created during serialization - so your app can create linked data without using a triple store!
This is often a preferable approach in apps that have business logic or any type constraints.
But as I've mentioned earlier, we're working on a new triple store (written in Rust) that we're planning on open sourcing soon, which we use for caching to keep performance optimal.

### Why not use SPARQL?

SPARQL is the de facto query language for RDF data, so it seems logical to use it somewhere in our stack.
However, we don't.
Getting SPARQL performant is actually pretty difficult, and we don't need the powerful query options that it provides.
Most of the requests from the front-end just ask for all triples about one or multiple subjects, and these kind of queries don't require SPARQL.
SPARQL is useful for more complex graph property traversal queries, but is not necessarily the best approach for simpler queries.

### Just show me the repo's for the tools and protocols

- [link-lib](https://github.com/fletcher91/link-lib) JS lib for managing an RDF store, registering views and handling actions
- [link-redux](https://github.com/fletcher91/link-redux) JS lib for React components, works with link-lib
- [linked-rails](https://github.com/ontola/linked_rails) Ruby gem that does a whole lot of linked data goodness
- [rdf-serializers](https://github.com/ontola/rdf-serializers) Ruby gem that for serializing RDF
- [linked-delta](https://github.com/ontola/linked-delta) for communicating state changes (between server / client, or persisting as event log)
- [@ontologies](https://github.com/ontola/ontologies) - make it easier to use ontologies (schema, owl, dcterms..) in JS projects
- [js.rdf.dev](https://js.rdf.dev/) A whole lot of RDF tools for JS!
- Check out the rest at [Github](https://github.com/ontola/).

If you need any help, [get in touch](mailto:joep@ontola.io)!
