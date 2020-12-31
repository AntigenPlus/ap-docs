---
title: Registration and Company Keys
parent: Installation and Configuration
layout: default
nav_order: 1
last_modified_date: 2020-12-31 13:52:21
---

# Registration and Company Keys

Antigen Plus uses _company keys_ to identify your company to the Antigen Plus
servers and to serve as the master key for PHI encryption. The registration
process creates the RSA-2048 key pair for your company key, registers your
public key with Antigen Plus, and prompts you to save the company key to a file
for installation on additional workstations.

If you are running an independent laboratory with a single location, then you
should register just once and use the same company key on all of your
workstations.

If you are running an organization with multiple laboratory locations, then you
have a choice between creating a single company key for all locations, or
creating a different company key for each location.

A single company key:

- Still allows each location to maintain independent blood cell inventory and
  user permissions by assigning each location a distinct database.
- Allows users from one location to switch databases and view blood cell
  inventory and patient information from another location (subject to user
  permissions).
- Encrypts PHI for all locations with the same master key so that PHI from one
  location can be viewed at other locations.

Multiple company keys:

- Separates databases from different locations so that users cannot easily
  switch databases.
- Encrypts PHI at different locations with different master keys so that even if
  the database can be accessed, PHI from remote locations will not be
  accessible.

## The registration process

Registration is the process of generating a company key and registering that
company key with Antigen Plus. The steps are:

1. Provide contact information.
2. Generate a new company key.
3. Register the company key with Antigen Plus.
4. Save the company key to a file for installation on additional workstations.

### Manual registration

The usual way of registering Antigen Plus is to launch the application on a
workstation that does not already have a company key installed. When Antigen
Plus starts, it will prompt you to either register as a new company or import an
existing company key.

<img srcset="images/first-start.png 2x" src="images/local-database-shortcut.png" alt="First start">

{: .warning}

Only register as a new company if you have not already registered your company,
or if you need to register an additional location. If you already have a company
key, select the _Import_ option instead.

The registration screen asks you to provide basic contact information for your
company or location.

<img srcset="images/register.png 2x" src="images/local-database-shortcut.png" alt="Register Antigen Plus">

The _Company name_ should be a unique name for your company, and possibly the
location within that company. (For example, _Sanguine Labs, Chicago_.) The
contact should be a lab manager at that location that we can reach if we have an
urgent need to contact you about Antigen Plus. This is rare, but might be used
to report an errata in commercial blood testing data or a critical problem in
Antigen Plus itself.

The registration process will prompt you to save the company key to a file for
use on additional workstations. This file has the extension `.APCompanyKey`.

{: .important}

Your company key is an important digital asset, and should be stored securely
and backed up. If you lose your company key, we cannot recover it. We recommend
that you store this file alongside the Antigen Plus installer and any custom
configuration files you have created so that all of the files needed to install
Antigen Plus are together in one place.

When you register, our Antigen Plus server will create a cloud database named
_default_ that you can use immediately. This process takes about 5 minutes to
create and initialize the database. The Windows user who registered will become
the first Antigen Plus administrator of the new database. This user can then
designate additional administrators as needed.

### Bulk registration

Manual registration works well if you only need one company key, or if each
location will be installing and registering Antigen Plus independently.

If you have a central IT department that is preparing deployment for multiple
locations with independent company keys, you may prefer to use our bulk
registration tool. This tool will allow you to generate and register multiple
company keys from a single workstation. Please contact
[customerservice@antigenplus.com](mailto:customerservice@antigenplus.com) for
access to our bulk registration tool.

## Installing company keys on additional workstations

When you install Antigen Plus on additional workstations (other than the
workstation where you initially registered your company key), you will need to
import the company key to the system cryptographic key store where it can be
accessed by all users of that workstation. In order to install the key in the
proper location, this must be done by a Windows administrator.

### Manual import of the company key

One way to import a company key is to log in to a Windows workstation as a
Windows system administrator, and simply launch Antigen Plus. You will see the
same first-start screen that you saw during registration:

<img srcset="images/first-start.png 2x" src="images/local-database-shortcut.png" alt="First start">

This time you should click the _Import_ button, which will prompt you to locate
your company key file with the `.APCompanyKey` extension. If this succeeds,
Antigen Plus will continue startup and connect you to the default cloud
database.

{: .warning}

In order for Antigen Plus to place the company key in the system cryptographic
store for use by all users, the import must be performed by a Windows system
administrator. If you do not have sufficient privileges, you will get a warning
that the key will not be accessible to other users.

### Command-line import of the company key

If you are deploying Antigen Plus to multiple workstations, you may prefer to
use our command-line tool to import the company key. This tool is located in the
Antigen Plus installation folder and can be called from your custom deployment
script. A typical command might be:

```batchfile
"C:\Program Files (x86)\Antigen Plus 8.5\ImportCompanyKey.exe" "N:\Installers\Antigen Plus\Antigen Plus company key for Sanguine Labs.APCompanyKey"
```

Here we're assuming that you have the company key stored on a network share `N:`
in the `Installers\Antigen Plus` folder.

{: .important}

In order for the tool to install the company key in the Windows system
cryptographic store for use by all Antigen Plus users, it must be run as an
administrator. Otherwise, it will print a warning and install the key in the
current user's cryptographic store instead.

## Changing company keys

In normal usage, each Antigen Plus workstation or application server has a
single company key that controls product licensing, database selection, and PHI
encryption. If needed, it is possible to replace the default company key with a
different key, or even to install multiple company keys and access them by name.

### Replacing the company key

You can replace the company key using the `ImportCompanyKey.exe` command-line
tool. Be sure you are running a Command Prompt window as an administrator so
that it can modify the system cryptographic key store.

### Switching between multiple company keys

If you are using multiple company keys, you may find yourself in a situation
where you need to switch between company keys on a single workstation. Although
you can use the `ImportCompanyKey.exe` tool to change company keys, this tool
requires administrative privileges and does not allow multiple keys to be
installed at the same time. If you need to switch rapidly between multiple
company keys, or you need different users on the same application server to use
different company keys, then you can install multiple named keys and switch
between them using application shortcuts.

To install a named company key, run the `ImportCompanyKey.exe` tool as an
administrator and use the `/companyKey` flag to name the installed key.

```batchfile
"C:\Program Files (x86)\Antigen Plus 8.5\ImportCompanyKey.exe" /companyKey Chicago "N:\Installers\Antigen Plus\Antigen Plus company key for Sanguine Labs, Chicago.APCompanyKey"
```

You can use this command several times to import different keys and assign them
different names.

To use this named key, create a shortcut to the Antigen Plus application that
specifies the same company key in the target of the shortcut:

```batchfile
"C:\Program Files (x86)\Antigen Plus 8.5\AntigenPlus8.exe" /companyKey Chicago
```
