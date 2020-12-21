---
title: Configuring local databases
parent: Installation and Configuration
layout: default
nav_order: 2
last_modified_date: 2020-12-21 09:57:28
---

# Configuring local databases

Antigen Plus supports both cloud databases managed my Antigen Plus, and local
databases managed by your local database administrator. You may use any
combination of cloud and local databases, up to the limit of your software
license.

## Editing `connections.config`

Local databases are configured by editing the file `connections.config` in the
Antigen Plus installation folder, which is normally
`C:\Program Files (x86)\Antigen Plus 8.5`. This file is in XML format. The
default contents of this file are:

```xml
<?xml version="1.0" encoding="utf-8"?>
<connectionStrings>
  <clear />
  <!--
  <add name="Validation" connectionString="Data Source=OurSQLServer;Initial Catalog=AntigenPlusValidation;Integrated Security=True;Connect Timeout=30" providerName="System.Data.SqlClient" />
  <add name="Production" connectionString="Data Source=OurSQLServer;Initial Catalog=AntigenPlusProduction;Integrated Security=True;Connect Timeout=30" providerName="System.Data.SqlClient" />
  -->
</connectionStrings>
```

The symbols `<!--` and `-->` are XML comment delimiters which prevent
the sample `<add` commands from being executed. When you edit the file to
include your own databases, your `<add` commands must be outside of these
delimiters.
{: .warning}

Note that there are three different names used in each connection string,
and each has a distinct purpose:

name

: The connection name that identifies the connection string to
Antigen Plus. This is the name you should use in your Antigen Plus shortcut.

Data Source

: The hostname of the SQL Server.

Initial Catalog

: The name of the database on the SQL Server.

The sample connection strings that we provide are configured to use Active
Directory for user authentication (`Integrated Security=True`), which is
what we recommend.

You can find additional details about connection strings in Microsoft's
documentation for
[SQLConnection.ConnectionString](https://docs.microsoft.com/en-us/dotnet/api/system.data.sqlclient.sqlconnection.connectionstring?view=dotnet-plat-ext-5.0).

## Creating a local database shortcut

By default, Antigen Plus connects to a cloud database named _default_.
If you want users to connect directly to a local Antigen Plus database,
then you should create a custom application shortcut that specifies which
local database to open.

To create a custom application shortcut:

1. Locate the application `AntigenPlus8.exe` in the installation
directory, which is normally `C:\Program Files (x86)\Antigen Plus 8.5`.

2. Right-click on the application and choose _Copy_.

3. Right-click on the Desktop and choose _Paste shortcut_.

4. Right-click on the shortcut and choose _Properties_.

5. Move the text cursor to the end of the `Target` text field and append the text:

   /local _connectionname_

   where _connectionname_ is the name you provided in your `connections.config` file.
   Make sure you leave a space between the double-quote at the end of the existing
   Target text and the `/local`. When you are done it should look like:

   ![Shortcut properties](images/local-database-shortcut.png)

6. Click _OK_ to save your changes.

7. Rename the shortcut as desired.

8. Copy the shortcut to a location where it can be accessed by all Antigen Plus users.
