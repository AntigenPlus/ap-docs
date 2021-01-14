---
title: Deployment Planning
nav_order: 1
layout: default
has_children: true
last_modified_date: 2021-01-05 10:13:30
---

# Deployment Planning

Antigen Plus is a Windows fat client application with a SQL Server database
backend. The client application is hosted locally on blood laboratory
workstations or an application server. The database backend can be either hosted
in Microsoft Azure and managed by Antigen Plus, or hosted locally.

## Typical evaluation process

1. [Modify your firewall rules](networking.html) to allow access to the Antigen
   Plus servers.

2. Install the software on a single workstation.

3. Launch the software and [register your company](/install/registration.html)
   with Antigen Plus. This generates a file called the _company key_.

4. Store the company key in a safe location, since it will be needed for
   additional installations.

5. Use and test the software for 30 days using the default cloud database.

## Typical deployment process

1. Decide whether you want to store data in the cloud or on a local SQL Server.

2. If using a local server, configure the server and
   [create 1 or more empty databases](/install/configuring-databases.html#local-databases).
   If using a cloud server, request the appropriate databases from Antigen Plus.

3. [Customize configuration files](/install/configuring-databases.html#editing-connectionsconfig)
   to specify local database connection strings and
   [other global settings](/install/additional-global-settings.html).

4. Install the application on additional workstations or application servers.

5. Copy configuration files to the installation directory.

6. [Import the saved company key](/install/registration.html#installing-company-keys-on-additional-workstations)
   either using the user interface or the provided command-line utility.

7. [Create application shortcuts](/install/configuring-databases.html#creating-a-database-shortcut)
   that connect users to the correct database at startup.

8. Have a blood laboratory manager be the first person to run the software. That
   manager will become the first Antigen Plus administrator for that database.

9. The Antigen Plus administrator can configure additional global settings
   within the software.

10. As other users begin to use the software, the Antigen Plus administrator can
    assign them roles.
