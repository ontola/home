---
layout: post
title: "A brief introduction to linked data"
date: 2018-06-06
author: joep
image: "/img/posts/team.jpg"
---

Linked data is a great way to publish information and share knowledge. As its name suggests, linked data is all about using _links_. To understand linked data, and why you should use it, let’s take a piece of information and upgrade it's data quality along the way.

## Human Language
```
Tim is born in London on the 8th of June, 1955.
```
Humans understand what this sentance means, but to a computer this is just a string of characters. If we, for example, wanted an application to show Tim's birthdate, we'd need the computer to understand English. A simpler solution would be to structure our information.

## Tables
If we put the information it in a table, we can simply instruct the computer to read the `BirthDate` field. Yay!

| name    | birthDate      | birthPlace |
|---------|----------------|------------|
| Tim     | 06-08-1955     | London     |

But now someone else wants to use this data, and has a couple of questions.

* Who is Tim?
* Which London do you mean, the big one in the UK or the smaller one in Canada?
* Does `06-08` mean June 8th or August 6th?

## Links
Now, let's add links to our data:

| name    | [birthDate](http://schema.org/birthDate)      | [birthPlace](http://schema.org/birthPlace) |
|---------|----------------|------------|
| [Tim](https://www.w3.org/People/Berners-Lee/)     | 1955-06-08     | [London](http://dbpedia.org/resource/London)     |

By adding these links, we've solved all three problems:

* **Links provide extra information.** Follow the link to Tim to find more about him.
* **Links remove ambiguity.** We now know exactly which London we're talking about.
* **Links add standardization.** The birthDate link tells us we need to use the YYYY-MM-DD notation.

## Triples
We're making two seperate statements about Tim: one about his birthdate and one about his birthplace. In linked data, such a statement is called a _triple_. That's becase every statement has three parts: a _subject_, a _predicate_ and an _object_.

| Subject    | Predicate     | Object |
|---------|----------------|------------|
| [Tim](https://www.w3.org/People/Berners-Lee/)     |[birthDate](http://schema.org/birthDate) | 1955-06-08     |
| [Tim](https://www.w3.org/People/Berners-Lee/)     |[birthPlace](http://schema.org/birthPlace) | [London](http://dbpedia.org/resource/London)     |


Using these triples, we can describe pretty much anything. We call this data model RDF: the Resource Description Framework.

## RDF
For a computer, the two triples from the table above would probably look something like this:

``` turtle
<https://www.w3.org/People/Berners-Lee/> <http://schema.org/birthDate> "1955-06-08".
<https://www.w3.org/People/Berners-Lee/> <http://schema.org/birthPlace> <http://dbpedia.org/resource/London>.
```

Since we use large parts of the URL multiple parts, we can use _namespaces_ (denoted with  `@prefix`) to make the data a bit more readable.

``` turtle
@prefix tim:  <https://www.w3.org/People/Berners-Lee/>.
@prefix schema:  <http://schema.org/>.

<tim> schema:birthDate "1955-06-08".
<tim> schema:birthPlace <http://dbpedia.org/resource/London>.
```

The above syntax is called _N3_, which is one of the RDF serialization formats. There's a difference between the RDF data model and its various serialization formats. You could express exactly the same RDF data as JSON-LD:

``` json
{
  "@context": {
    "schema": "http://schema.org/",
    "dbpedia": "http://dbpedia.org/resource/"
  },
  "@id": "https://www.w3.org/People/Berners-Lee/",
  "schema:birthDate": "1955-06-08",
  "schema:birthPlace": {
    "@id": "dbpedia:London"
  }
}
```
