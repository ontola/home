---
layout: post
title: "Ordered data in RDF: About Arrays, Lists, Collections, Sequences and Bags"
author: joep
permalink: /blog/ordered-data-in-rdf/
---

Sooner or later when working with RDF, you'll need to work with ordered data.
The `subject predicate object` model does not support Arrays, and no - you can't use the order in which triples appear.

However, RDF _does_ support _Collections_ (`rdf:List`) and _Containers_ (`rdf:Bag`, `rdf:Seq`, `rdf:Alt`).
And the open nature of RDF allows for even more alternatives, such as the [Ordered List Ontology](http://smiy.sourceforge.net/olo/spec/orderedlistontology.html).
All these concepts are (subtly) different, and can be quite confusing.
In this article, I'll explain the models behind these concepts, show how they are serialized, and give some insights into when you should use which.

## RDF Collections

Maybe you've seen something like this in JSON-LD:

```json
{
  "@list": [ "Arnold", "Bob", "Catherine" ]
}
```

Or something like this in a Turtle document:

```turtle
someList :b ( "Arnold" "Bob" "Catherine")
```

These are `rdf:Collection`s.
In these serialization formats, Collections appear as regular arrays, but under the hood they have a very different data model.
Collections are [linked lists](https://en.wikipedia.org/wiki/Linked_list) and its chains consist of `rdf:List` nodes:

![RDF:List](/img/posts/ordered/rdflist_basic.png)

Collections always end with an `rdf:nil` namednode, which means they have a _finite amount of items_.
If we'd express the same information in N-Triples, we'd get something like this:

```ntriples
_:b0 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first> "Arnold" .
_:b0 <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:b1 .
_:b1 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first> "Bob" .
_:b1 <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> _:b2 .
_:b2 <http://www.w3.org/1999/02/22-rdf-syntax-ns#first> "Catherine" .
_:b2 <http://www.w3.org/1999/02/22-rdf-syntax-ns#rest> <http://www.w3.org/1999/02/22-rdf-syntax-ns#nil> .
```

This explicitly linked nature means that it's possible to start a list in location A, and have it continue in a completely different domain:

![RDF:List](/img/posts/ordered/rdflist_external.png)

It also means that inserting items is quite easy, as only the node before it has to be adjusted:

![RDF:List](/img/posts/ordered/rdflist_insert.png)

However... This structure can be kind of hard to deal with.
Parsing is non-trivial, and might require a lot of lookups, which is very costly.
Also, appending a single node to a List is hard, because it requires that the link of the item before it is adjusted.

## RDF Containers

There are three types of RDF Containers `rdf:Seq`, `rdf:Bag`, `rdf:Alt`

- An `rdf:Seq` is an _ordered_ container
- An `rdf:Bag` is an _unordered_ container
- An `rdf:Alt` is an _unordered_ set of alternatives, in which the first one is the default option

RDF Containers use a numbered predicate (e.g. `rdf:_1`) to indicate that something is a child / member of the Container:

![RDF:Seq](/img/posts/ordered/rdfseq.png)

This model is often easier to parse and serialize than an `rdf:List`.

```ntriples
_:someSeq <http://www.w3.org/1999/02/22-rdf-syntax-ns#_1> "Arnold" .
_:someSeq <http://www.w3.org/1999/02/22-rdf-syntax-ns#_2> "Bob" .
_:someSeq <http://www.w3.org/1999/02/22-rdf-syntax-ns#_3> "Catherine" .
```

Appending items is easy as well, simply add one new statement and increment the predicate.

Inserting items, contrary to

## Hydra Collections

The Hydra ontology defines the [`hydra:Collection`](https://www.hydra-cg.com/spec/latest/core/#collections).
This ontology introduces standardized pagination, which will become very useful when your arrays will be either too long to serialize, or too computationally heavy to generate run-time.
It seems to be designed with `JSON-LD` serialization in mind, so it relies on JSON arrays, which represent RDF Collections.

## TL;DR

There are no arrays in RDF, and don't use the order in which serialized triples appear.

**RDF Containers:**
- Come in three forms: `rdf:Seq` (ordered), `rdf:Bag` (unordered), `rdf:Alt` (alternatives with default)
- You can add new items by simply adding RDF triples
- Inserting items is hard: requires rewriting *many* statements
- Can span many graphs / machines / servers (decentralized)
- Have a formally unknown length (open world assumption)

**RDF Collections:**
- An ordered chain of `rdf:List` resources
- You have to edit / remove statements before you can add new items
- Inserting items is easy: requires changing *just a few* statements
- Must be stored in a single graph / machine / server (centralized)
- Have a known ending (the `rdf:nil`)

**Hydra Collections**
- Support pagination, so they are useful for larger numbers of items
- Designed with JSON-LD in mind, so it uses arrays.

<!--
## Related:
- [https://www.w3.org/2011/rdf-wg/track/issues/24](ISSUE-24: Should we deprecate RDF containers (Alt, Bag, Seq)?)
- [http://ceur-ws.org/Vol-2496/paper2.pdf](Modelling and Querying Lists in RDF. A Pragmatic Study)
- https://www.oreilly.com/library/view/practical-rdf/0596002637/ch04.html

## Issue for
https://github.com/w3c/json-ld-syntax/issues -->
