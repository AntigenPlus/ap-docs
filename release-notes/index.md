---
layout: default
title: Release notes
---

# _Antigen Plus_ Release notes

{% for post in site.posts %}

## {{ post.title }}

{{ post.date | date: '%B %-d, %Y' }}

{{post.content}}

{% endfor %}
