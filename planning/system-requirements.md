---
title: System Requirements
nav_order: 1
layout: default
parent: Deployment Planning
last_modified_date: 2021-01-05 09:32:31
---

# System Requirements

## Client application

- Windows 7 SP1 or later
- .NET Framework 4.6.1 or later
- 40 MB of disk space for installation

You can check the system requirements for the .NET Framework on
[Microsoft's website](https://docs.microsoft.com/en-us/dotnet/framework/get-started/system-requirements).
We place no restrictions on patching, antivirus, or system management
applications.

## Database server

Antigen Plus uses SQL Server as its database backend. You can expect the Antigen
Plus database to use less than 100 MB of database storage per year of operation.
Several storage options are available:

### Cloud

If you choose to let us host your database in a Microsoft Azure datacenter, then
we take care of database deployment and backups.

We host cloud databases in a shared server instance. If you require a private
cloud server, contact
[customerservice@antigenplus.com](mailto:customerservice@antigenplus.com) for
private server pricing.

### Local

If you prefer to host the database on your own server:

- SQL Server 2008 or later (any edition)

Antigen Plus databases may be hosted on a shared server instance.

### Cloud with local backups

If you would like us to host your database in the cloud, but you also want a
local copy of the database for emergency use (for instance, during internet
outages):

- SQL Server 2016 or later (any edition)
