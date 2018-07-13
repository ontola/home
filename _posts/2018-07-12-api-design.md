---
layout: post
title: "Best practices for RESTful API design"
author: joep
permalink: /blog/api-design/
---

The internet started off as a place for linked documents.
However, where humans are perfectly capable of understanding HTML documents, this does not apply for machines that need a specific piece of information.
That’s why every decent web service has an API, and probably uses it for their website, app, integrations and external services.
But unfortunately, too many APIs are unnecessarily hard to use and unintuitive.
In this article, I'll give some practical advice on designing a RESTful, hypermedia API that follows web conventions.

## Use URLs as IDs
Every thing in your API, every concept, should have its own URL. The URL should serve as both an _identifier_ as well as a _locator_: it is the identity of a thing and it provides a way to fetch information about that thing.

Firstly, URLs make your responses _far easier to navigate_. When a JSON object representing a social media post references some author with an identity of `18EA91FB19`, you don’t know where you can find that author. You need to read the API docs, discover the endpoint for authors and compose your request. If the ID was a URL, you would instantly know where to send that request to. This is not just great for humans, but also for machines, since they can't read your API docs - but they can navigate URLs.

Secondly, URLs are not just unique identifiers in a single system, but also unique across different systems. The domain name takes care of that. This means that _you can use your data across multiple systems_. This is one of the properties [that makes linked data awesome](https://ontola.io/what-is-linked-data).

Make sure that your URLs (and IDs) are stable. [Cool URIs don’t change](https://www.w3.org/Provider/Style/URI). If they really have to change, make sure the old URLs redirect to the new ones. Nobody likes broken links.

## Your API endpoint is your website
You don't need a subdomain for your API, like `api.example.com` or a sub-path, like `example.com/api`. Your endpoint should be the root of your webpage: `example.com`.

This is useful, because as discussed above the URL should be both the identifier as the locator of a single resource. Whether someone is looking for a HTML version or for example a JSON representation of a resource, he should be able to use the same URL. This makes your API easier to use, because someone who navigates your website can know at any time how to access the same resource in some other format.

But if the URL does not change across format, how do you request the right one? This is where [HTTP content negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept) comes in handy. A client can send preferences about what kind of content it wants to receive in the `Accept` HTTP header. The default header for web browsers is `text/HTML`, but for most APIs, a machine readable setting such as `application/json` is more suitable.

But what about API versioning? We want our URLs _not to change_, so we should not use different URLs for different API versions. The solution, again, is to use a HTTP header. Use an `api-version` header or a [specific Mime type](https://developer.github.com/v3/media/) in your requests.

## Use sensible hierarchy in URL paths
Having a URL hierarchy that makes sense is not just important for your website, but also for your API - especially if your API structure resembles your website structure. Try to come up with a sensible URL strategy, discuss it with your colleages and do all of this early in the development process.

A few things to consdier:
* Move from large to small, from generic to specific.
* The user should be able to remove the last part of the URL and arrive at a parent resource.
* Let the hierarchy reflect the UX of navigating the website.
* Try to keep URLs as short as possible.
* Human readable URLs are easier to understand and share, and they are great for SEO.
* [Cool URIs don't change](https://www.w3.org/Provider/Style/URI). Leave out anything that might change, such as author, file name extensions, status or subject.

## Use query parameters correctly
The [URI spec](https://tools.ietf.org/html/rfc3986#section-3.4) tells us to use query parameters only for _non-hierarchical data_.

Don't use query parameters to identify a resource; use a path.

* **Bad**: `example.com/posts?id=123`
* **Good**: `example.com/posts/123`

Use query parameters for _optional_ things like limiting, sorting, filtering and other modifiers:

* **Good**: `example.com/posts?limit=30`
* **Good**: `example.com/posts/123?show_hidden=true`

## Use HTTP methods
Instead of having a bunch of endpoints for various types of actions, use _a single URL for every single resource_ in your application. Distinguish between actions using [HTTP methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods).

* **Bad**: `GET example.com/showPost/123`
* **Bad**: `GET example.com/removePost/123`
* **Good**: `GET example.com/posts/123`
* **Good**: `DELETE example.com/posts/123`

There is a big difference between requests that aim to read content, create content or edit content. Make sure to use the GET, POST, PUT and PATCH HTTP methods correctly. The GET, POST and PUT operations are _idempotent_, which means that they guarantee not to change the state of the server. This distinction is important, because it tells the client whether it can try again if an error occurs. It also helps with caching, since only GET request should be cacheable.

If you want to offer a form to delete or edit a resource, _that form will be a different resource from the resource itself_, so it will need a seperate URL. A nice convention is to nest that form resource below the resource itself. This way, the user just adds `/edit` to the a URL if he wants to edit that resource.

* **Good**: `GET example.com/posts/123/remove`
* **Good**: `GET example.com/posts/123/edit`

## Use HTTP status codes
Pretty much all types of error messages can be categorized in the existing [HTTP status codes](https://developer.mozilla.org/nl/docs/Web/HTTP/Status). These are not just useful to humans, but especially to machines. Status codes can be parsed far quicker than a body text. Another advantage is that they are standardized, so the client library is likely to know what the status code represents. You don’t have to support every single one, but at the very least make sure that you use the five categories:
* **1xx: informational** - just letting you know
* **2xx: successful** - everything’s OK
* **3xx: redirection** - your content is somewhere else
* **4xx: client error** - you’re doing something wrong
* **5xx: server error** - we’re doing something wrong

## Add context to your JSON
Assuming you use JSON as a serialization format, you can use [@context](https://json-ld.org/spec/FCGS/json-ld/20180607/#the-context). The @context object is a nifty little idea to make your API more self-descriptive. An @context object describes what the various keys in your JSON actually represent. It provides links to where the definition can be found.
Make sure all your IDs are actually links, and your context is included. Now all your JSON has become JSON-LD, which is [linked data](https://ontola.io/what-is-linked-data). That means that your JSON data is now convertible to RDF (Turtle, N3, N-triples, etc.), which means it becomes far more reusable.
Keep in mind that the links that you use should preferably resolve to some document that explains what your concept represents. A good starting point to find relevant concepts is [schema.org](https://schema.org).

## Offer various serialization options
Be as flexible as possible in your serialization options. For many MVC frameworks, the amount of effort required to add new serializers is not that bad. For example, we wrote [a library for Ruby on Rails](https://github.com/argu-co/rdf-serializers) to serialize to JSON-LD, RDF/XML, N3, N-triples and Turtle. Use the aforementioned HTTP accept header to handle content negotiation.

## Standardize index pages and pagination
You’re probably going to need index pages that use pagination. How to deal with that? Pagination is not a trivial problem, but luckily for you, you’re not the first to encounter it. Don’t try to reinvent the wheel and use something that already exists, such as [W3C activity stream collections](https://www.w3.org/TR/activitystreams-core/#collections) or [Hydra collections](http://www.hydra-cg.com/spec/latest/core/#collections).

## Don’t require an API key
Your default API (the HTML one) doesn’t need one, so your JSON API [shouldn’t need one](https://ruben.verborgh.org/blog/2013/11/29/the-lie-of-the-api/#api-keys-are-a-lie) as well. Use rate limiting to make sure your servers don’t fry. You can still use API keys or authentication to give access to special parts of your API, of course.

## Use a `doc.` subdomain for API docs
Here's [a clever little idea](https://medium.com/@fletcher91/semantic-documentation-1177d563783c): make your API documentation available at `doc.example.com`. If a user wants to know how your api works for a certain page, he just adds `doc.` in front of his current URL. Show the user a page that tells something useful about how to use the API at that route.

## Use your own API
Finally, and perhaps most importantly: eat your own dog food. Make your API a first-class citizen by using it as the only way to access information from that system. API-driven development forces you to make your API actually work. It helps you document your API properly, since your colleagues need to use it as well. Besides, it helps to make your application more modular and gradually helps you realize a microservice architecture, which has its own set of benefits.

[Let me know](mailto:joep@argu.co) if I'm missing something, or if you want help with API design!
