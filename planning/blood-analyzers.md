---
title: Interfacing with blood analyzers
nav_order: 6
layout: default
parent: Deployment Planning
last_modified_date: 2021-02-10 13:19:13
---

# Interfacing with blood analyzers

Antigen Plus can import antibody testing data from a wide variety of blood
analyzers. Importing antibody test results from a blood analyzer speeds
interpretation and avoids transcription errors.

Antigen Plus supports these blood analyzers:

- Galileo Echo from Immucor
- Erytra Eflexis from Grifols
- IH-1000, NEO & Tango from Bio-Rad
- VISION from Ortho

The blood analyzer interface requires a workstation running Antigen Plus that is
physically cabled to the analyzer. Data imported by this workstation is then
available from any workstation running Antigen Plus. When planning a deployment
that will interface with blood analyzers, you should start by asking these
questions:

1. What is the make, model, and location of each analyzer?
2. Are the analyzers currently connected to a laboratory information system
   (LIS)?
3. Are the connections to the current LIS using serial or ethernet?
4. Where will the workstations running Antigen Plus be located?

For more detailed installation and configuration instructions, see
[Connecting Antigen Plus to a Blood Analyzer](/install/blood-analyzers.html).

## Serial connections

The vast majority of blood analyzers are connected to LIS systems using an
RS-232 serial interface for simplicity and security. Antigen Plus connects to
these systems by "evesdropping" on the conversation between the blood analyzer
and the LIS using a combination of a serial Y-cable (splitter) and a one-way
extension cable.

The constraints on serial connections are:

- The total cabling between the analyzer, LIS, and Antigen Plus workstation must
  not exceed 50 feet unless special hardware is used.
- The Antigen Plus workstation must have a free serial port for each analyzer
  connected to that workstation.
- The serial cable connecting the workstation to the blood analyzer must be
  modified to prevent serial interference. (We will assist you in constructing
  the correct cabling.)
- Antigen Plus must be running when antibody test data is exported from the
  analyzer.

## Ethernet connections

When using an ethernet connection, Antigen Plus acts as a proxy server between
the blood analyzer and the LIS system.

{: .important}

Many labs use serial to ethernet converters in order to connect the blood
analyzer to a LIS system over distances greater than 50 feet. For our purposes
these are serial connections! Please check the connection on the analyzer itself
(not at the wall jack) when deciding whether your analyzer is currently using a
serial or an ethernet connection.

The constraints on ethernet connections are:

- One Antigen Plus workstation may connect to any number of blood analyzers that
  are on the same network.
- The Antigen Plus workstation may be distant from the analyzers, as long as it
  is on the same network.
- Antigen Plus must be running on the workstation any time the analyzer is
  exporting data to Antigen Plus or communicating with the LIS.
- The network must allow incoming TCP/IP access to the Antigen Plus workstation
  on a user-specified port, and outgoing access to the LIS.
- The blood analyzers must be reconfigured to direct their LIS communications to
  the Antigen Plus workstation instead of the LIS.
- The LIS must be configured to accept communications from the Antigen Plus
  workstation.
