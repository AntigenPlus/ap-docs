---
title: Databases
nav_order: 3
layout: default
parent: Deployment Planning
last_modified_date: 2021-01-05 10:29:41
---

# Databases

Antigen Plus supports both cloud databases hosted by Antigen Plus in a Microsoft
Azure datacenter, and local databases hosted within your own network. You may
mix and match local and cloud databases within the limit of your software
license. One cloud database named "default" is provided automatically during
software registration.

You may wish to configure additional databases if you have multiple laboratory
locations with independent test cell inventories. You may also want to have
separate databases for evaluation, validation, and production.

## Cloud databases

Cloud databases have a some advantages over local databases:

- Antigen Plus takes responsibility for hosting, provisioning, and backing up
  cloud databases.
- Users can access a cloud database regardless of their location. For instance,
  a lab manager working from home can access the database to review panels
  created by other technologists.
- If you have questions or techinical difficulties, our staff can examine your
  database to troubleshoot the problem. (Note that all PHI is encrypted, so we
  do not have access to patient information.)

When you register the software, a cloud database named _default_ is
automatically created that you can use immediately. Contact
[customerservice@antigenplus.com](mailto:customerservice@antigenplus.com) for
additional cloud databases.

## Local databases

If you prefer to host your databases locally, you can create one or more
databases on a local SQL Server and
[configure Antigen Plus](/install/configuring-databases.html#local-databases) to
use them by default.

All users of the database should have _db_owner_ access to the Antigen Plus
database. The database schema is installed automatically when the first user
connects to the database. We recommend creating an Active Directory group for
users of Antigen Plus, and then creating a SQL Server login based on this group
that has _db_owner_ access to the Antigen Plus database(s).
