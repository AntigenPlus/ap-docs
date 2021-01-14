---
title: Installation and Configuration
nav_order: 2
layout: default
has_children: true
last_modified_date: 2021-01-04 11:02:28
---

# Antigen Plus 8.5 Installation and Configuration

## Pre-installation checklist

- Identify the workstations or application servers that will run the software.
- Install .NET Framework 4.6.1 or later on those workstations.
- Contact your network administrator to ensure that those workstations have outgoing firewall access to:
  - antigenplus.com port 443
  - database.windows.net port 1433 (Note that this is a dynamic IP address and so must be a DNS-based firewall rule rather than an IP-based rule.)

## Installation

Installation should be performed by a Windows system administrator with write access to the system cryptographic store. This is required so that Antigen Plus can install the RSA security keys needed to identify your organization to the Antigen Plus servers and encrypt your PHI.

The basic installation steps for Antigen Plus 8.5 are:

1. Install Antigen Plus on the first workstation using the Windows Installer (.msi) file.
2. Launch the Antigen Plus application, click the _Register_ button, and submit the requested registration information.
3. When prompted, save your company key to a file. You will need this file to install Antigen Plus on additional workstations.
4. Registration and creation of your first database takes 2-3 minutes. When this process is complete, the main application will launch.

To install Antigen Plus on additional workstations:

1. Install Antigen Plus using the Windows Installer (.msi) file.
2. Import the company key using one of these methods:
    1. Launch the Antigen Plus application, click the _Import_ button, and select the file you saved in step 3 above, or
    2. Execute ImportCompanyKey.exe &quot;C:/path/to/company.key&quot; from the command line.

## Adding databases

When you register Antigen Plus you automatically receive one cloud database named &quot;default&quot; which you can begin using immediately. If you need additional cloud databases for evaluation, validation, production, or additional facilities, please contact [customerservice@antigenplus.com](mailto:customerservice@antigenplus.com).

You may also create additional databases on a SQL Server within your network. Ask your database administrator to create an empty database and give all users db\_owner access. Then add the database connection strings to the file _connections.config_ in the Antigen Plus installation folder on each workstation.

Note that the number and use of Antigen Plus databases may be limited by the terms of your Antigen Plus software license.

## Selecting databases

Users are automatically connected to the default cloud database when they launch Antigen Plus. They may then switch to a different database using the &quot;Select database…&quot; command in the File menu.

To send users directly to another database, create a shortcut to AntigenPlus8.exe and add the command-line arguments /cloud name or /local name to the target of the shortcut. (Note that _name_ should match the name attribute in the _connections.config_ file, which is not necessarily the same as the name of the SQL database.)

## Preparing for internet outages

Antigen Plus cloud databases are hosted on Microsoft Azure, which ensures high availability of your data under most circumstances. However, you may want to plan ahead for the possibility that an internet outage would prevent you from reaching our servers and accessing your data.

You can create a local backup of your cloud database that you can restore in the event of an internet outage. We recommend that you perform these backups regularly, and test the restoration procedure periodically to ensure that you are prepared in an emergency.

The steps to use a local copy of a cloud database are:

1. Backup the cloud database to a local disk or fileserver.

 You can use the _File \&gt; Backup…_ menu item in Antigen Plus to perform a manual backup, or you can use any SQL Server compatible backup tool to automate backups. If you want to automate backups, contact customer service to obtain database connection strings.

 Note that backups must be performed regularly and _before_ an internet outage.

2. Restore the .bacpac file to a local SQL Server

 You can use a tool like SQL Server Management Studio to restore the backup to a local server.

 This step can be done when you encounter an internet outage or whenever you want to test your backup procedures.

3. Edit the file _connections.config_ to point to the local database.

 This step only needs to be done once for each database.

4. Create a shortcut to Antigen Plus that specifies the /local name command line arguments to specify that Antigen Plus should connect to the local database instead of the cloud database. The name should match the name you specified in the _connections.config_ file, which is not necessarily the same as the name of the database itself.

 This step only needs to be done once for each database.

In the event of an internet outage, restore the latest backup of your cloud database and then use the shortcut you created in Step 4 to connect to the local database instead of the cloud.
