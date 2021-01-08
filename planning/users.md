---
title: User Authentication and Authorization
nav_order: 4
layout: default
parent: Deployment Planning
last_modified_date: 2021-01-05 10:29:41
---

# User Authentication and Authorization

User authentication can be handled either by Active Directory or within Antigen
Plus. Nearly all of our customers choose Active Directory for authentication,
which is what we recommend.

Because Antigen Plus is a fat client application that runs on your local
workstations, it does not require LDAP or other technology to integrate with
Active Directory. It simply relies on the Windows login process to authenticate
the user, and identifies the user by their SID.

If users are sharing a Windows login on laboratory workstations (not
recommended), then you can optionally enable username/password based logins
within Antigen Plus itself so that individual users can be identified within the
software.

Authorization is performed within Antigen Plus by granting each user one of four
roles: administrator, full access, save panels, or read only. Users can be
managed and roles assigned by any Antigen Plus administrator, which does not
require Windows administrative access.
