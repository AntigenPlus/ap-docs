---
title: Networking
nav_order: 2
layout: default
parent: Deployment Planning
last_modified_date: 2021-01-08 10:38:04
---

# Networking

Antigen Plus uses TCP/IP networking for software licensing, commercial antibody
testing panel data, and database access. The amount of data transferred is quite
small, so we do not have specific latency or bandwidth requirements.

We do not require any remote access to your workstaions or servers. If you
require hands-on assistance with installation, training, or troubleshooting, we
will schedule a remote screen-sharing session with you using GoToMeeting or
other software of your choice.

## Firewall

The Antigen Plus client application requires outgoing firewall access to these
locations:

- api.antigenplus.com TCP port 443
- h5z57ttlmz.database.windows.net TCP port 1433 (cloud databases only)

{: .important}

Because Microsoft Azure is a high-availability service, the domain
`h5z57ttlmz.database.windows.net` has a dynamic IP address that changes over
time. Your firewall rule for this server must be DNS-based rather than IP-based,
or you will lose access to your database when the IP address changes.
