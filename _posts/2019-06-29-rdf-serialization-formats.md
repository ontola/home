---
layout: post
title: "What's the best RDF serialization format?"
author: joep
permalink: /blog/rdf-serialization-formats/
---

Contrary to some other datamodels, RDF is not bound by a single serializiation format.
Triple statements (the data atoms of RDF) can be serialized in many ways, which leaves developers with a possibly tough decision: how should I serialize my [linked data](/what-is-linked-data)?

**To answer the title's question: _it depends_, but probably N-Triples / N-Quads.**

So, let's discuss the various formats and when you should use which.
The order in which they appear is chronological, and does not reflect preference.
Skip to the [TL;DR](#tldr) if you're feeling hasty.

## RDF/XML

The first and perhaps most well-known RDF serialization format is [RDF/XML](https://www.w3.org/TR/rdf-syntax-grammar/).
It's also the most [despised](https://github.com/mhausenblas/rdfxml.info/blob/master/input/RDF-XML%20sucks%20-%20praise%20and%20damnation.txt).
Many systems were able to parse, store and serialize XML when RDF was invented almost 20 years ago, so RDF/XML seemed like a logical default.

Unfortunately, RDF/XML is a weird mixture of two fundamentally different concepts: a tree-like document, and a triple-based graph.
This makes RDF/XML conceptually difficult and quite verbose, compared to other standards.
For XML developers, it might look familiar, but since it does not clearly reflect the triple model, it will probably cause confusion.

Use it only if you really need to work with XML.

```xml
<?xml version="1.0"?>

<rdf:RDF
xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
xmlns:schema="http://schema.org/">

<rdf:Description rdf:about="https://www.w3.org/People/Berners-Lee/">
  <schema:birthDate>1966-06-08</schema:birthDate>
  <schema:birthPlace rdf:resource="http://dbpedia.org/resource/London"/>
</rdf:Description>

</rdf:RDF>
```

## RDFa

[RDFa](https://www.w3.org/TR/rdfa-core/) is RDF inside HTML.
By adding attributes to HTML elements, you can give semantic context to content inside your webpages.
Google parses it (amongst [JSON-LD](#JSON-LD), [Microdata](https://w3c.github.io/microdata/#microdata-and-rdf), Microformats and Pagemaps) to [enhance their search previews](https://developers.google.com/custom-search/docs/structured_data), although they [recommend using JSON-LD](https://www.searchenginejournal.com/google-structured-data-preference/297479/).
W3C's own Respec documentation tool [dropped support for RDFa](https://github.com/w3c/respec/issues/1503),
mainly because adoption of RDFa was too low, the required code was messy and even Google didn't parse it correctly.

RDFa is fundamentally different from the other mentioned formats: it combines RDF with view data (HTML).
This means that it makes your HTML documents a bit larger and more complicated, and parsing it for triples will be more costly than parsing an RDF only format like N-Triples.
This makes it less useable if your application relies on a lot of RDF data.

Use RDFa if you want to make your existing website / blog / HTML based application more semantic.

```html
<div about="https://www.w3.org/People/Berners-Lee/">
  <p>
    Tim is born on
    <span property="http://schema.org/birthDate">1955-06-07</span>
    in
    <a
      property="http://schema.org/birthPlace"
      href="http://dbpedia.org/resource/London"
    >
      London
    </a>
  </p>
</div>
```

## Notation3 (.n3)

Tim-Berners Lee wanted something better than RDF/XML, and came up with [N3](https://www.w3.org/TeamSubmission/n3/).
Contrary to RDF/XML, N3 closely resembles the RDF Subject / Predicate / Object model.
This makes N3 very easy on the eyes, and helps to understand how RDF works.
By using @prefixes, N3 can be quite compact.

However, N3 is relatively costly to serialize, which could hinder performance.
It's also quite feature-heavy, since it support [RDF rules](http://www.ninebynine.org/RDFNotes/RDFFactsAndRules.html), which makes it harder to parse.

Unless you need the reasoning / rules features of N3, use its more popular (and very similar) successor Turtle.

```notation3
@prefix tim: <https://www.w3.org/People/Berners-Lee/>.
@prefix schema: <http://schema.org/>.
@prefix dbpedia: <http://dbpedia.org/resource/>.

<tim> schema:birthDate "1955-06-08"^^<http://www.w3.org/2001/XMLSchema#date>.
<tim> schema:birthPlace <dbpedia:London>.
<tim> schema:birthPlace <dbpedia:London>.
```

## Turtle (.ttl)

[Turtle](https://www.w3.org/TR/turtle/), the _Terse RDF Triple Language_, is a subset of N3.

It strips some of the syntactic sugar en features of N3, which makes parsing Turtle a bit simpler.
This, in turn, made Turtle more popular, which means that it's easier to find libraries for it.

Unfortunately, it's still quite costly to parse compared to [N-Triples](#N-Triples).

Turtle is highly human-readable and is therefore a good candidate if you need to edit RDF by hand.

```turtle
@prefix tim: <https://www.w3.org/People/Berners-Lee/>.
@prefix schema: <http://schema.org/>.
@prefix dbpedia: <http://dbpedia.org/resource/>.

<tim> schema:birthDate "1955-06-08"^^<http://www.w3.org/2001/XMLSchema#date>.
<tim> schema:birthPlace <dbpedia:London>.
```

## N-Triples (.nt) and N-Quads (.nq)

[N-Triples](https://www.w3.org/TR/n-triples/) is a very simple subset of Turtle, which in turn is a simple subset of N3.
N-Triples does not support `@prefixes` or any fancy features.
This makes N-Triples trivial to parse / serialize.
Therefore, many libraries for N-Triples are available and you can easily write one yourself.
It also makes serialization and parsing highly performant.

```n-triples
<https://www.w3.org/People/Berners-Lee/> <http://schema.org/birthDate> "1955-06-08"^^<http://www.w3.org/2001/XMLSchema#date>.
<https://www.w3.org/People/Berners-Lee/> <http://schema.org/birthPlace> <http://dbpedia.org/resource/London>.
```

However, the lack of prefixes and shorthands makes the format lengthy and a bit tough to read.
The lenghty URLs also mean that you'll need some form of compression (e.g.g-zip) if you don't want to waste precious bandwith or storage capacity, so make sure to enable that in your server.

Since writing a parser / serializer for N-Triples is so simple, it's a good idea to support this pretty much always.
And since N-Triples is a suset of Turtle and N3, it means that Turtle / N3 parsers know how to deal with N-Triples, too.

[N-Quads](https://www.w3.org/TR/n-quads/) are like N-Turiples, but they have an optional fourth column, which can be used to denote a graph label.
The graph label often refers to the source of the data, e.g. the URL of the HTML document or some external RDF resource.

## JSON-LD (.jsonld)

JSON is without a doubt the most popular way to handle data in webapplications.
[JSON-LD](https://json-ld.org/spec/latest/json-ld/) is an extension of JSON, and is valid JSON as well.
You can turn your regular plain old JSON into RDF by adding [`@context`](https://json-ld.org/spec/latest/json-ld/#the-context).
This object mainly serves as a mapping, so your plain keys get turned into fancy links to RDF Classes and Properties.
You can add context either by adding an `@content` header in your HTTP response, by including the link in your JSON body, or by adding the entire `@context` object to you JSON.
This means that if you want to upgrade your JSON API to JSON-LD, you get to keep your serializers.

```json
{
  "@context": {
    "dbpedia": "http://dbpedia.org/resource/",
    "schema": "http://schema.org/"
  },
  "@id": "https://www.w3.org/People/Berners-Lee/",
  "schema:birthDate": "1955-06-08",
  "schema:birthPlace": {
    "@id": "dbpedia:London"
  }
}
```

JSON-LD is easy to read, and will feel familiar even to those new to RDF and linked data.
Because it's still valid JSON, it's usable to those who don't want to deal with URLs.
JSON arrays are converted to [RDF Lists](/blog/ordered-data-in-rdf/).
I recommend spending some time in the [JSON-LD playground](https://json-ld.org/playground/) to get familiar with how it works.

Unfortunately, JSON-LD [difficult and costly to parse](http://www.dr-chuck.com/csev-blog/2016/04/json-ld-performance-sucks-for-api-specs/) if you need the RDF data instead of the JSON object.
This complexity in parsing limits how many (bugfree) JSON-LD parsers are available, and it also means that parsing JSON-LD takes long.

JSON-LD is a compromise.
It supports RDF, it supports JSON, and it does both _okay_.
Use JSON-LD if you already have a RESTful JSON API, and if performant RDF parsing is not crucial.

## HexTuples

HexTuples is an [NDJSON](http://ndjson.org/) (Newline Delimited JSON) based RDF serialization format.
It is desgined to achieve the best possible performance in a JS context (i.e. the browser).
It uses plain JSON arrays, in which the position of the items denote `subject`, `predicate`, `object`, `datatype`, `lang` and `graph`.

```json
[
  ["https://www.w3.org/People/Berners-Lee/", "http://schema.org/birthDate", "1955-06-08", "http://www.w3.org/2001/XMLSchema#date", null, null],
  ["https://www.w3.org/People/Berners-Lee/", "http://schema.org/birthPlace", "http://dbpedia.org/resource/London", null, null, null]
]
```

HexTuples is designed by Thom van Kalkeren (a colleague of mine) because he noticed that parsing / serialization was unnecessarily costly in our stack, even when using the relatively performant `n-quads` format.
Since HexTuples is serialized in NDJSON, it benefits from the [highly optimised JSON parsers in browsers](https://v8.dev/blog/cost-of-javascript-2019#json).
It uses NDJSON instead of regular JSON because it makes it easier to parse concatenated responses (multiple root objects in one document).
As an added plus, this enables streaming parsing as well, which gives it another performance boost.
Our JS RDF libraries ([link-lib](https://github.com/fletcher91/link-lib/), [link-redux](https://github.com/fletcher91/link-redux/)) have an internal RDF graph model which uses these arrays as well, which means that there is minimal mapping cost when parsing Hex-Tuple statements.
This format is especially suitable for real front-end applications that use dynamic RDF data.
It is not yet properly documented.

## HDT

[HDT](http://www.rdfhdt.org/what-is-hdt/) (Header, Dictionary, Triples) is a compact data structure and binary serialization format for RDF, so it's more than just a way to serialize RDF.
Its data structure saves space and bandwith (it's half the size of gzipped N-Triples).
It's design has indexing built-in, which means it can be searched or browsed efficiently.
Check out the impressive [technical specification](http://www.rdfhdt.org/technical-specification/) if you want to learn more about how it works.
HDT compression is a costly process, so it's not that attractive for highly dynamic data / data that changes over time.
Although some really useful libraries for HDT exist, be sure to check if there exists libraries that work with your stack.

## RDF Binary Thrift

[RDF Binary thrift](https://afs.github.io/rdf-thrift/rdf-binary-thrift.html) is an encoding of RDF data that uses Apache Thrift.
It is used in the Apache Jena RDF store.
It's a binary format, and therefore it's cheap to parse and serialize.
I've never used it, but it sounds interesting, although you'll need Thrift tooling for decoding it.

## Let your users choose a format

Choosing an RDF serialization format for your application or service might be a false dilemma.
Since you control your application, and probably have an internal model, you can offer multiple serialization options.
Therefore, you can implement a serialization library (e.g. our [rdf-serializers](https://github.com/ontola/rdf-serializers) gem for Rails) and use [HTTP Content negotation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation), so your project can handle all kinds of formats.

## TL;DR

- Use HDT if you have big static datasets and want the best performance and compression.
- Use Hex-Tuples if you want high performance in JS with dynamic, non-static data.
- Use N-Triples / N-Quads if you want decent performance and high compatibility.
- Use JSON-LD if you want to improve your exsting JSON API, and don't need performant RDF parsing.
- Use Turtle if you want to manually read & edit your RDF.
- Use Notation3 if you need RDF rules.
- Use RDFa to extend your existing HTML pages.
- Use RDF/XML if you need to use XML.
- If you can, support all of them and use content negotation.
