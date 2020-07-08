---
layout: post
title: "The future of the URL: HTTP, IPFS, Hypercore"
author: joep
permalink: /blog/future-of-url/
---

The URL is arguably one of the most important innovations of the last decades.
It's a simple concept: combine the _identifier_ of some thing (such as an article) with a _locator_.
The URL allows anyone that possesses it, to retrieve the content that it represents.
It was invented by the same man who also invented the Web Browser, HTTP and the Web Server: Tim Berners-Lee.

Although some things have changes (we now use the more secure HTTPS, and the more performant HTTP/2), most of our web activities still rely on the same fundamental idea.
The HTTP URL points to some _machine_ through a centralized Domain Name Server.
That's all good, but

## From local identifiers to global identifiers

Almost every information management system (whether its an Excel sheet, database, or global web) needs a way to separate concepts from each other, using identifiers.
Unfortunately, most developers still opt for creating _local identifiers_, which means that they only make sense in some closed world.

## HTTP

- Defacto standard
- Points to a machine, and is therefore _fast_ to resolve
- Caching is hard
- Not P2P friendly, central point of failure

## IPFS

Content-addressing.
The hash of the content is used as the URL.
That means that URLs can _never_ change.

## Hypercore

Public key addressing.
