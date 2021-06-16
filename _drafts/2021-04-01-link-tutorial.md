---
layout: post
title: "Tutorial: Building a React front-end app with RDF Data, powered by Link-Redux and Solid"
author: joep
permalink: /blog/rdf-react-tutorial-link-redux/
---

This tutorial will help you build a linked data front-end application, compatible with Tim Berners-Lee's Solid initiative.
Knowledge of React and Typescript / Javascript is assumed, but it's OK if you're new to RDF.
For an introduction to linked data, read [this](https://ontola.io/what-is-linked-data/).

Working with RDF (linked data) can be a bit different from using more conventional JSON REST APIs.
We need tooling to deal with some of the complexities that arise when working with linked data:

- The client (the browser app) does not know in advance what kind of data it will get back from a server. Link will simply fetch a URL using content negotiation, and get some [RDF serialized](https://ontola.io/blog/rdf-serialization-formats/) response.
- Deciding which view to render is often done by checking routes, but this is not possible in a linked data app. Instead, we can fetch the URL and check which `rdf:type` is being set (e.g. `Person` or `Blogpost`).
- Many strings are URLs, which can be a bother to type and might cause typo-related-bugs. To deal with this, we [set URLs programmatically using @ontologies/core](https://ontola.io/blog/ontologies-in-js/).
- [Ordered data in RDF](https://ontola.io/blog/ordered-data-in-rdf/) is a bit more complicated than JSON Arrays, so we'll use tooling to abstract these to arrays.

In this tutorial we're going to use `react` and the `link-lib` + `link-redux` (in short: Link) libraries to create a simple front-end app to render data from a Solid Pod.

# Understanding Link: Store, Views and Topologies

The Link libraries have an interesting, but unconventional way of rendering data.
The first concept to understand, is the LinkedRenderStore (the Store).
The **Store** is responsible for most of the heavy lifting: it contains the stored data, keeps rendered data in sync, parses changes, and stores registered Views.
**Views** are (in this case react) components that render one or more `rdf:Class`es in one or more Topologies.
**Topologies** are contexts in the DOM, such as `Page` or `Card` or `Detail`.

Let's say you want to view your public Solid Pod folder, such as `https://joep.inrupt.net/public/`, as a full page.
First, you pass the subject (the URL of the resource) to a Link `Resource` component.
This will let the LRS check if that resource is already present in the Store.
If not, it will be fetched.
Once it has been fetched and parsed, the resource will be added to the Store.
Then, the Resource component will be notified of new data, and then the Store will try to find the _most suitable View_.
This is done by checking the `rdf:type` of the Resource and the current Topology.
In this case, that type is an `ldp:Container`, and the topology is `fullPage`.
If there is a `fullPage` View registered in the Store for `ldp:Container`, it will render that View.
If there is not such a View, it might try a more generic view.

# Setting up the basics

First, we'll need to set up a react project.
You can use our boilerplate, or you can create one yourself.

## Easy mode: Using the link-solid-boilerplate

You can get started right away using the [`link-solid-boilerplate` on CodeSandbox](https://codesandbox.io/s/github/ontola/link-solid-boilerplate/tree/master/?file=/src/app.tsx).
Alternatively, you can use the [Template feature on Github to fork it](https://github.com/ontola/link-solid-boilerplate/generate), and follow the readme to get it running locally.
Now, let's

## Hard mode: Without using the boilerplate

_(skip this if you're using the boilerplate)_

1. Make sure `node` and `npm` are installed.
1. Start a new react project: `npx create-react-app my-app --template typescript`.
1. Add the type definitions: `yarn add @types/node @types/react @types/react-dom @types/jest `.
1. Add `link-lib` and `link-redux` as dependencies: `yarn add link-lib link-redux @rdfdev/delta @rdfdev/actions @rdfdev/iri @rdfdev/collections`
1. Add their `peerDepdencies`: `yarn add @ontologies/as @ontologies/core @ontologies/schema @ontologies/shacl @ontologies/xsd http-status-codes n-quads-parser`
1. [Set-up the Linked Render Store](https://github.com/fletcher91/link-redux#1-set-up-the-store).
1. Got stuck? Check the [boilerplate](https://github.com/ontola/link-solid-boilerplate) for inspiration.
1. Continue with the rest of this tutorial.

# Loading data

As a data source, we could use multiple back-ends:

- A Solid pod hosted on [Inrupt.net](https://inrupt.net/)
- A [DexPod](https://gitlab.com/ontola/dexpod/), hosted on [dexpods.eu](https://dexpods.eu). Also open source.
- [Atomic-Server](https://github.com/joepio/atomic), which also serializes data to RDF formats.
- Any other public RDF server that supports `n-triples` and has permissive `cors` headers.

But for this tutorial, we'll stick with the Inrupt.net pod.
We'll try to render `https://joep.inrupt.net/public/`, which is an `ldp:Container`.

# Registering a View

Let's create a new file in the `/components` directory.



# Got stuck?

If you encounter a problem, please [create an issue in the Issue tracker on github](https://github.com/ontola/link-solid-boilerplate/issues).
