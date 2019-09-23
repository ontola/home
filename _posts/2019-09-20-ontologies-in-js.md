---
layout: post
title: "Using ontologies in Javascript apps"
author: joep
permalink: /blog/ontologies-in-js/
---

Ontologies are resources that describe concepts and how several classes and properties in a certain domain relate to each other.
For example, if you're creating a social network app, you might want to use the Friend of a Friend ([FOAF](http://xmlns.com/foaf/spec/)) ontology, which describes things like ["Person"](http://xmlns.com/foaf/spec/#term_Person) and ["knows"](http://xmlns.com/foaf/spec/#term_knows).
When creating linked data applications, you're likely to work a lot with ontologies.
Since ontologies, their classes and their properties all use URLs as identifiers, that means that you might write a lot of long strings.
This is not only bothersome, but also a source of unnecessary typos and a possible performance bottleneck.

That's why we created the [@ontologies](https://github.com/ontola/ontologies) project.
This is an open source repository that converts RDF ontologies into JS exports, pubslihed in NPM for easy re-use.
If your IDE is smart enough, it will auto-import the ontologies and provide and useful tooltips with ontological descriptions for each item.

## How to use it

```sh
## Add it to your project
yarn add @ontologies/core @ontologies/schema
```

```js
// Initialize it once (./init.js)
import { setup } from "@ontologies/core";
setup();
```

```js
// Use it
import "./init";
import { name } from "@ontologies/schema";

document.getElementById("app").innerHTML = `
<h1>Schema URL: ${name.value}</h1>
`;
```

Check out a [running example on CodeSandbox](https://codesandbox.io/s/ontologies-41zgg)

We've currently added ActivityStreams, DCElements, DCTerms, DCMIType, FOAF, OWL, PROV-O, RDF, RDFS, Schema, SHACL, SKOS and XSD.
PRs for new ontologies are welcome!
