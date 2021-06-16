---
layout: post
title: "Tutorial: Building a React front-end app with RDF Data, powered by Link-Redux and Solid"
author: joep
permalink: /blog/rdf-react-tutorial-link-redux/
---

Working with RDF (linked data) can be a bit different from using more conventional JSON REST APIs.

- Many strings are URLs, which can be a bother to type and might cause typo-related-bugs. To deal with this, we [set URLs programmatically using @ontologies/core](https://ontola.io/blog/ontologies-in-js/).
- The client (the browser app) does not know in advance what kind of data it will get back from a server. It will simply fetch a URL using content negotiation, and get some [RDF serialized](https://ontola.io/blog/rdf-serialization-formats/) response.
-


## Using the link-solid-boilerplate (easy)



## Without using the boilerplate (less easy)

1. Make sure `node` and `npm` are installed.
1. Start a new react project: `npx create-react-app my-app --template typescript`.
1. Add the type definitions: `yarn add @types/node @types/react @types/react-dom @types/jest `.
1. Add `link-lib` and `link-redux` as dependencies: `yarn add link-lib link-redux @rdfdev/delta @rdfdev/actions @rdfdev/iri @rdfdev/collections`
1. Add their `peerDepdencies`: `yarn add @ontologies/as @ontologies/core @ontologies/schema @ontologies/shacl @ontologies/xsd http-status-codes n-quads-parser`
1. [Set-up the Linked Render Store](https://github.com/fletcher91/link-redux#1-set-up-the-store).
