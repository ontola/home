---
layout: post
title: "Comparing RDF, CSV, JSON and XML"
author: joep
permalink: /blog/comparing-rdf-json-and-xml/
---

XML, CSV and JSON are probably the most popular serialization formats in which data is expressed.
RDF is a bit different, as RDF is not a serialization format, but a data model.
In other words, there are [various serizliation formats available for RDF](/blog/rdf-serialization-formats).
XML, CSV, and JSON, on the other hand, are both serialization formats AND data models.
To make things even more confusing: it's possible to express RDF data in both JSON ([JSON-LD](https://json-ld.org/), [RDF/JSON](https://www.w3.org/TR/rdf-json/)) and XML (RDF/XML, RDFa).

In this article, I'll try to explain how the fundamental models of RDF, JSON and XML relate to each other.
I won't be looking at serialization or syntax.
If you want to compare human readability or parsing / serialization performance, check out [this article](https://blog.mbedded.ninja/programming/serialization-formats/a-comparison-of-serialization-formats/).

## JSON

Every JSON resource starts with a single `object`.
An `object` consists of a set of `key-value` pairs.
Each `key` must be unique to the `object`.
The `value` can be a `string`, `number`, `boolean`, `array` or `object`.
An `array` is a set of `values`.

## XML

Every XML `document` starts with a single `element` (or `tag`).
An `element` consists of a name, a set of `attributes` (key-value pairs), and an optional `child`.
Each `attribute` must be unique to the `element`.
The `child` of an element can either be a string, or an array of `element`s.

- Although XML has no support for arrays, you can use the order in which child elements appear to create ordered data. In practice, this means that an XML element supports only a single one to many relation.

## CSV

## RDF

Every RDF `graph` consists of a set of `statements`.
Each statement has a `subject`, a `predicate` and an `object`.
The `subject` can be either a URI or a `blank node`.
The `predicate` is always a URI.
An `object` value can be either a `URI` (a link), or a `literal` value.
A `literal` value consists of a required string representing the value, an optional string for `language` and an optional URI for `datatype`.

- The order of RDF triples has no semantic value, and there is no support for something like `arrays`, which means that ordered data in RDF is kind of complicated. Read more about [ordered data in RDF in my previous article](/blog/ordered-data-in-rdf/).
- Contrary to `key-value` constructs in XML and JSON, `subject-predicate` combinations do not have to be unique in RDF.
- RDF `graphs` can be easily merged without conflicts. This is not possible with `JSON` or `XML`.
- The `datatype` field makes the RDF format highly extendible.

## Feature comparison

| Format | Arrays                                                 | URIs | keys are | Parsing cost | extendible datatypes              | Validation schema                                                  |
|--------|--------------------------------------------------------|------|----------|--------------|-----------------------------------|--------------------------------------------------------------------|
| JSON   | native arrays                                          | no   | strings  | low          | no                                | [JSON-schema](https://github.com/json-schema-org/json-schema-spec) |
| XML    | multiple children                                      | no   | strings  | high         | yes, element children with `type` | XSD                                                                |
| RDF    | no, but [it's complicated](/blog/ordered-data-in-rdf/) | yes  | URIs     | can be low   | yes, all objects using `datatype` | SHACL, SHEX                                                        |

## Takeaways

We tend to make sense of our world by ordering information as 'things' with 'properties'.
The models in which we express all kinds of data tend to relfect this.
