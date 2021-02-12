---
layout: default
title: Upgrades
nav_order: 4
last_modified_date: 2021-02-12 11:30:21
---

# Upgrades

The steps needed to upgrade Antigen Plus depend on the version you are upgrading
from. Here are the major versions that affect the upgrade process:

| Version         | Upgrade process                                                                               |
| --------------- | --------------------------------------------------------------------------------------------- |
| 8.5 and later   | Update the software in-place. Check for possible database migration.                          |
| 8.0             | Install and register 8.5 alongside 8.0. Copy and migrate database.                            |
| 7.5             | Install and register 8.5 alongside 7.5. Send database to Antigen Plus for conversion.         |
| 7.4 and earlier | Install and register 8.5 alongside old version. Send database to Antigen Plus for conversion. |

## Database migrations

If you are upgrading from Antigen Plus 7.5 or earlier, then your database will
need to be converted manually by our staff. Contact
[customerservice@antigenplus.com](mailto:customerservice@antigenplus.com) for
help planning your upgrade.

If you are upgrading from Antigen Plus 8.0 or later, consult the following table
to see if database migration is required. Find your current version of Antigen
Plus and the version you will be upgrading to. If they are in the same row of
the table, no database migration is required. If they are in different rows then
you will need to perform a migration to upgrade the software.

| Database versions |
| ----------------- |
| 8.5.11 and later  |
| 8.5.7 – 8.5.10    |
| 8.5.0 – 8.5.6     |
| 8.0.93 – 8.0.113  |
| 8.0.92            |
| 8.0.67 – 8.0.91   |
| 8.0.54 – 8.0.66   |
| 8.0.44 – 8.0.53   |
| 8.0.33 - 8.0.43   |
| 8.0.31 – 8.0.32   |
| 8.0.22 – 8.0.30   |
| 8.0.21            |
| 8.0.16 – 8.0.20   |
| 8.0.2 – 8.0.15    |
| 8.0.1             |

You can find additional details about database migrations in our
[Release notes](/release-notes.html).

### If no migration is required

If no migration is required, then the upgrade process is quite flexible. You can
install the new version of Antigen Plus on individual workstations, and they can
connect to the same database as the old version of Antigen Plus. Just make sure
that no one is running Antigen Plus on that workstation, and run the new
installer to upgrade Antigen Plus. Antigen Plus will upgrade in-place and
maintain any customized settings or configuration files.

### If a migration is required

1. Backup and archive your current database so it can be restored if there is
   any problem with the migration process.
2. If upgrading from 8.0 to 8.5:
   - Confirm that you know your 8.0 company password, which is required for
     migration.
   - Make a duplicate copy of your database on the server.
   - Install Antigen Plus 8.5 on at least one workstation. (Note that 8.5 can be
     installed alongside 8.0 without interference.)
   - Register Antigen Plus 8.5 and configure it to connect to the duplicate
     database.
3. Get all users to exit Antigen Plus.
4. Upgrade all workstations to the new version of Antigen Plus.
5. Have _**one user**_ launch the new version of Antigen Plus. That user will be
   prompted to start the database migration. This may take several minutes.
6. When the migration is complete, Antigen Plus will open normally.
7. Other users may now resume using Antigen Plus.

{: .important}

Once your database has been migrated to a newer version, older versions of
Antigen Plus will no longer be able to connect to the database. You should plan
your upgrade so that all workstations accessing the same database will be
upgraded at the same time.
