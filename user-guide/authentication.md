---
title: Authenticating Users
layout: default
parent: User Guide
nav_order: 6
---

# Authenticating Users

## User access

After database access is granted, Antigen Plus authenticates and authorizes the
user within the software itself. Antigen Plus provides two different methods for
authenticating users of the software: 1) Windows Active Directory
authentication, and 2) usernames and passwords. You can use one of these methods
exclusively, or use them in combination.

Most sites will find it easiest to use Windows Active Directory authentication,
and that is the default. In this mode users are identified by their Windows
login, and no additional authorization is required. If **Automatically create
accounts from Windows logins** is checked in the **Maintain Accounts** window,
then new Antigen Plus accounts will be created automatically whenever a new
Windows user launches the software. Window Active Directory authorization can be
enabled or disabled for a particular user using the **Login automatically from
Windows account** checkbox in the **Account Settings** window.

If Windows Active Directory authorization fails, is disabled, or the user logs
out of the software, then the user will be presented with a username/password
dialog box to login. This password is maintained within Antigen Plus itself, and
is distinct from the user&#39;s Windows account password.

If your site wants to require a separate username/password login each time
Antigen Plus is launched, this can be accomplished by:

1. Unchecking the **Automatically create accounts from Windows logins** box in
   the **Maintain Accounts** window.
2. Unchecking the **Login automatically from Windows account** box or deleting
   the user&#39;s **Windows account** from the Account Settings window.
