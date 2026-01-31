# Linked Local-First Data

## The good & bad of the cloud

I'm old enough to remember that owning your data was the default.
Files were stored on your own computer, and software was something that you bought and installed.
This also meant that you had to _manage your data_, which is a big price to pay.

Now most of us work in the Cloud, and for good reason:

- No more file management hassle
- Everything is available from any computer
- Documents sync
- Apps don't need installation

But this has also cost us:

- **Subscription costs**.
- **Vendor lock-in**. Switching from cloud providers can be hard and costly. It's not just that it's a hassle to learn something new - sometimes it's impossible to even export your data, let alone move between services.
- **Privacy**. Your data is being used against you (e.g. targeted ads), or to spy on you (e.g. PRISM)

So ever since the emergence of the cloud, people have been looking for alternative models.

## Altnernatives to the cloud

Various possible solutions have emerged:

- **Private cloud**. Host your own server, and put (free open source) software on that. Thanks to various FOSS innovations and cheaper compute, this is more broadly adopted than ever, but it's still mostly something for tech enthusiasts. Managing a server is still quite a hassle.
- **Semantic web / Linked Data**. Use links to point to data. Standardize how apps work, so it doesn't matter as much who hosts it. Unfortunately, this doesn't solve the problem that the server where it's hosted is a single point of failure. What if the connection is bad? What if it ceases to function?
- **Local-first apps**. Apps that store things on client devices. Kind of like how we used to do this! It's fast, it works without internet. And we can combine the power of the (private) cloud with the freedom and speed of having the data locally.

## Combining all the good parts
