---
layout: post
title: "Comparing RDF, CSV, JSON and XML"
author: joep
permalink: /blog/comparing-rdf-json-and-xml/
---

Whenever we share or store data, we have to serialize it in some way.
XML, CSV and JSON are probably the most popular serialization formats.
RDF (the data model for [Linked Data](/what-is-linked-data)) is a bit different, as RDF is _not_ a serialization format.
It's a datamodel which can be serialized to [various formats](/blog/rdf-serialization-formats).
XML, CSV, and JSON, on the other hand, are both serialization formats _and_ data models.
That's why when thinking about data formats, we tend to conflate the two.
JSON data, for example, can also be serialized using NDJSON or BSON.
To make things even more confusing: it's possible to express RDF data in both JSON ([JSON-LD](https://json-ld.org/), [RDF/JSON](https://www.w3.org/TR/rdf-json/)) and XML (RDF/XML, RDFa).
Seperating the serialization format from the data model can be a bit weird at first, but I think it's essential for understanding how all these formats relate to each other.

In this article, I'll try to explain how the fundamental models of RDF, JSON and XML work and how they differ.
I won't be looking at serialization or syntax.
If you want to compare human readability or parsing / serialization performance, check out [this article](https://blog.mbedded.ninja/programming/serialization-formats/a-comparison-of-serialization-formats/).

## JSON

Every JSON resource starts with a single `object`.
An `object` consists of a set of `key-value` pairs.
Each `key` must be unique to the `object`.
The `value` can be a `string`, `number`, `boolean`, `array` or `object`.
An `array` is a set of `values`.

- JSON has these five native datatypes, and has no native explicit extension mechanism for datatypes.

## XML

Every XML `document` starts with a single `element` (or `tag`).
An `element` consists of a name, a set of `attributes` (key-value pairs), and an optional `child`.
Each `attribute` must be unique to the `element`.
The `child` of an element can either be a string, or an array of `element`s.

- Although XML has no support for arrays, you can use the order in which child elements appear to create ordered data. In practice, this means that an XML element supports only a single one to many relation.

_Defined by [W3C/XML](https://www.w3.org/TR/xml/)

## CSV

A CSV `document` can start with an optional `header`, which contains a list of `fields`.
Every `record` consists of a set of `fields`.
Each `field` is a string - CSV does not support any other datatype.

_Defined by [RFC 4810](https://tools.ietf.org/html/rfc4180)_

- Because of the table-like structure, every record has the same set of properties.

## RDF

Every RDF `graph` consists of a set of `statements`.
Each statement has a `subject`, a `predicate` and an `object`.
The `subject` can be either a URI (which is most often a link) or a `blank node`.
The `predicate` is always a URI.
An `object` value can be either a `URI`, or a `literal` value.
A `literal` value consists of a required string representing the value, an optional string for `language` and an optional URI for `datatype`, which defaults to [`xsd:string`](https://www.w3.org/TR/xmlschema-2/#string).

_Defined by [RFC 4810](https://tools.ietf.org/html/rfc4180)_

- Every single statement has a subject, so every thing has an explicit identifier.
- It has native support for `URIs` (i.e. links), which makes sense as it's linked data.
- Ordered data in RDF is kind of complicated. Read more about [ordered data in RDF in my previous article](/blog/ordered-data-in-rdf/).
- Contrary to `key-value` constructs in XML and JSON, `subject-predicate` combinations do not have to be unique in RDF.
- RDF `graphs` can be easily merged without conflicts. This is not possible with `JSON` or `XML`.
- The `datatype` field makes the RDF format highly extendible.
- Because the URI is a native datatype, relations between things in RDF are explicit and standardized.
- The order of the document is not important. Every single statement stands on itself.

## Feature comparison

| Format | Ordered data support                                   | Native URIs | keys are | extendible datatypes              | Validation schema                                                                   |
|--------|--------------------------------------------------------|-------------|----------|-----------------------------------|-------------------------------------------------------------------------------------|
| JSON   | native arrays                                          | no          | strings  | no                                | [JSON-schema](https://github.com/json-schema-org/json-schema-spec)                  |
| XML    | multiple children                                      | no          | strings  | yes, element children with `type` | XSD                                                                                 |
| CSV    | no                                                     | no          | strings  | no                                | [CSV-SCHEMA](https://digital-preservation.github.io/csv-schema/csv-schema-1.2.html) |
| RDF    | no, but [it's complicated](/blog/ordered-data-in-rdf/) | yes         | URIs     | yes, all objects using `datatype` | SHACL, SHEX                                                                         |

## Takeaways

We tend to make sense of our world by ordering information as 'things' with 'properties'.
The models in which we express all kinds of data tend to relfect this.
