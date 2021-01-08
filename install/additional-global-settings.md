---
title: Additional global settings
parent: Installation and Configuration
layout: default
nav_order: 3
last_modified_date: 2021-01-08 10:36:59
---

# Additional global settings

Antigen Plus allows you to control some settings by creating a file named
`CustomerSettings.json`. This file should be placed in the application
installation folder, which is normally
`C:\Program Files (x86)\Antigen Plus 8.5`. The file should be installed on
each workstation or application server where Antigen Plus is installed.

If there is no `CustomerSettings.json` file in the installation folder, or if
not all settings are specified, then the following settings will be used:

```json
{
  "AllowPHI": true,
  "LogRawAnalyzerOutput": false,
  "ErytraProfiles": {
    "USW10N.gru": {
      "AutoControl": false,
      "Lots": [{ "CellCount": 2, "LotPrefixes": ["6430", "6435"] }]
    },
    "USW10O.gru": {
      "AutoControl": true,
      "Lots": [{ "CellCount": 2, "LotPrefixes": ["6430", "6435"] }]
    },
    "USW11R.gru": {
      "AutoControl": false,
      "Lots": [{ "CellCount": 3, "LotPrefixes": ["6440", "6447"] }]
    },
    "USW11V.gru": {
      "AutoControl": true,
      "Lots": [{ "CellCount": 3, "LotPrefixes": ["6440", "6447"] }]
    },
    "USW21D.gru": {
      "AutoControl": false,
      "Lots": [{ "CellCount": 11, "LotPrefixes": ["6100", "6120"] }]
    },
    "USW24C.gru": {
      "AutoControl": true,
      "Lots": [{ "CellCount": 11, "LotPrefixes": ["6100", "6120"] }]
    },
    "USW34O.gru": {
      "AutoControl": false,
      "Lots": [{ "CellCount": 4, "LotPrefixes": ["6160"] }]
    },
    "USW34Q.gru": {
      "AutoControl": true,
      "Lots": [{ "CellCount": 4, "LotPrefixes": ["6160"] }]
    },
    "USW34P.gru": {
      "AutoControl": false,
      "Lots": [{ "CellCount": 11, "LotPrefixes": ["6170"] }]
    },
    "USW34V.gru": {
      "AutoControl": true,
      "Lots": [{ "CellCount": 11, "LotPrefixes": ["6170"] }]
    },
    "USW34R.gru": {
      "AutoControl": false,
      "Lots": [
        { "CellCount": 11, "LotPrefixes": ["6100", "6120"] },
        { "CellCount": 4, "LotPrefixes": ["6160"] }
      ]
    },
    "USW34S.gru": {
      "AutoControl": true,
      "Lots": [
        { "CellCount": 11, "LotPrefixes": ["6100", "6120"] },
        { "CellCount": 4, "LotPrefixes": ["6160"] }
      ]
    }
  }
}
```

## Prohibiting entry of PHI

By default, Antigen Plus allows users with the _Administrator_ or _Full access_
roles to enter patient information and save panels for those patients.

If your organization does not want to store PHI in the database, you can disable
this by changing the `AllowPHI` setting to `false`.

```json
{
  "AllowPHI": false
}
```

## Logging raw analyzer output

If you are having trouble with communications between your blood analyzer and
Antigen Plus, you can log the raw analyzer output to troubleshoot the problem.

```json
{
  "LogRawAnalyzerOutput": true
}
```

Log files are stored in the `%APPDATA%\Rowny Systems, Inc\AntigenPlus`
directory, which is a hidden folder inside the current user's home directory.

{: .warning}

LIS output from a blood analyzer may contain unencrypted Patient Health
Information (PHI). You should only log raw analyzer output temporarily in order
to troubleshoot communications problems. Delete the log files when
troubleshooting is complete.

## Custom profiles for Erytra and Eflexis

The
[Ertytra and Eflexis](https://www.diagnostic.grifols.com/en/erytra-eflexis/overview)
blood analyzers from Grifols produce different LIS output depending on how they
have been configured by the manuafacturer. In order to properly interpret the
LIS output, Antigen Plus needs information about this configuration.

These profiles are keyed off of the GRU filename for each antibody screen or
antibody panel test order that is configured in the blood analyzer. For each GRU
file, Antigen Plus needs to know whether the test includes an auto-control, the
number of test cells in each screen or panel, and which Grifols lot number
prefixes are associated with those screens or panels.

For assistance configuring Antigen Plus to work with your Erytra or Eflexis
blood analyzer, contact
[customerservice@antigenplus.com](mailto:customerservice@antigenplus.com).
