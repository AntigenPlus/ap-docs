---
layout: default
title: User Guide
---

Copyright 2020 Rowny Systems, Inc.

Copyright and License Provisions

The ANTIGEN PLUS program is protected by the copyright laws pertaining to
computer software. Copies can be made for backup purposes only. It is illegal to
give copies to another person or duplicate the software by any other means.
Purchase of the ANTIGEN PLUS from Rowny Systems, Inc. or one of its distributors
constitutes a license to install and use the program on computers or a computer
network with multiple stations in a single laboratory facility. ANTIGEN PLUS may
not be shared by facilities in different geographical locations unless each
facility is individually licensed.

Warranty

All warranties, express or implied, including warranties of merchantability and
fitness for a particular purpose, are hereby disclaimed. The distributor makes
no warranties with respect to the program.

Technical Support

Rowny Systems offers free technical support and advice for Antigen Plus for one
year from the date of purchase, Monday-Friday between 9 am and 5 pm U.S. Eastern
Time at (301) 761-3106. International callers please call 001 301 761-3106.
Rowny Systems also offers technical support via Email at
_[help@antigenplus.com](mailto:help@antigenplus.com)_. All support is continued
with renewal of the annual license.

Data Entry Support

Rowny Systems offers automated red cell panels for Antigen Plus. The panels
provided are electronically verified to match with the specification sheets
provided by the supplier. Antigen Plus assumes no responsibility for errors by
the suppliers, but will correct any such errors as soon as possible when they
are discovered.

Liability

Rowny Systems, Inc. dba Antigen Plus and its distributors assume no
responsibility for the use of the ANTIGEN PLUS program. The licensee assumes all
responsibility for the proper use of the program including establishing
appropriate protocols and validation procedures to ensure accurate data entry.
ANTIGEN PLUS makes no decision or final recommendation on the meaning of test
results or on patient care.

# Table of Contents

**Introduction 1**

**Validation 2**

**Installation 2**

For Lab Administrators Only 2

**To Run the Program 3**

**Menus 3**

**File Menu 3**

**Options Menu 4**

SystemOptions 4

Customize Results Columns 7

Rare Cell Inventory 8

Analyzer Connections 8

Exclusion Criteria 9

**View Menu 10**

Donor Note 10

Patients 10

Suppliers 11

**Lot Menu 12**

**Panel Menu 13**

Load Saved Panel 13

Merging panels: 14

Import Analyzer Results 15

Save the Selected Cells Panel 15

Clear Selected Cells Panel 15

Selected Cells Worksheet and Results Worksheet 15

Print Blank Antigram 15

**User Menu 15**

Change Password 16

Account Settings 16

Maintain Accounts 16

View User Activity Log 17

Security Settings for Time Outs and Username/Password Mode 18

**Help Menu 18**

**Authenticating Users 19**

User access 19

**Operation 19**

**Downloading Lots from the Internet 19**

**Downloading Lots with Supplemental Typings 20**

**Download Prompt Option 21**

**Searching and Selecting Cells 22**

Search Pattern 22

Selecting and Deselecting 24

Selecting Expired Cells 25

**Antigen Order for Selected Cells 25**

**Available Arrays 27**

**Selected Cells Panels 28**

Saving and Loading Panels 29

Printing Panels 29

**Patient Information 30**

**Entering and Evaluating Test Results 33**

Count Rows 34

Result Columns 35

Evaluation Text 35

Adsorption Columns 37

Unevaluated Columns 38

Auto Control 38

Conclusions 39

Importing blood analyzer results 39

**Reviewing a Saved Panel 41**

**Printing 41**

**Data Entry 41**

**Donor Note 42**

**Data Entry of Individual Cells 42**

Automated Antigen Order on the Add/Edit Screen 44

**Additional Antigens 45**

**Multiple User Procedures 47**

**Exclusion Policy 48**

**Complete Rule-Out Protocols 49**

**The Case of f 50**

**Technical Information for Further Testing 50**

**Backing Up 53**

**Additional Information About Antigen Plus 53**

**Programming Notes 53**

**Appendix 53**

# Introduction

Antigen Plus is a red blood cell inventory and antigen search program that
allows the user to enter test results that are automatically evaluated to assist
with the interpretation of those results. It is designed to permit fast and easy
data entry of test panels, and to search the data for any combination of
antigens you choose. It is intended to quickly select donor cells with
particular phenotypes for antibody identification studies and to speed up the
interpretation process for the blood bank technologist.

The data stored for each donor are:

- Donor ID
- Optional Donor Note
- Lot Number
- Vial Number
- Expiration Date
- Optional Retesting Information on expired cells
- Supplier Name
- Location (optional)
- Phenotype Designation
- Sex
- Blood Group
- 28 Principal Antigens Phenotype
- Additional Antigens - user-defined special typings
- Frozen flag
- Out-of-Stock flag

Data that can be stored for a patient are:

- ID number \*
- Name (First\*, Middle, Last\*)
- Date of birth
- Short note (held in the patient record only)
- Description on a saved panel
- Phenotype Designation
- Conclusion Antibodies
- Conclusion Notes to appear also on the screen or on saved panels
- Specimen Numbers

\*required fields

Data that can be stored on a saved panel are:

- All the data described above
- Test results (negative or positive reactions to donor cells, auto control
  cell, and check cells) recorded on a Results Worksheet
- Test results evaluations
- Name of technologist and dates of test for each Results column
- Names of up to two panel reviewers

The user may specify any combination of antigens to search for, search the data
and select any cells desired. At this point, the user may immediately print or
save the selected cells panel with or without a patient, or they may enter their
test results into a results worksheet panel and then save it with a selected
patient. The user may store and retrieve the selected panels with any test
results as desired. Antigen Plus Version 8 must be run from inside Microsoft
Windows Vista or later. It requires a printer that can print in Landscape format
(11 x 8½).

# Validation

Antigen Plus provides a template for validation of the software based on the
**N** AACLS

format on its website _[www.antigenplus.com](http://www.antigenplus.com/)_. It
is intended to be modified to meet the protocols and standards of the individual
institution, but may be reliably used as is to validate the software. Antigen
Plus provides technical support for this process.

The panels provided are electronically verified to match with the specification
sheets provided by the supplier. The phenotypic information printed on a
selected or results panel can be validated by assuring that its data exactly
match the data from the suppliers. Part of a laboratory&#39;s validation
procedure should be to print several lot panels and have the responsible
technologist compare them with the supplier&#39;s data sheets.

Antigen Plus makes no decision or final recommendation on the meaning of test
results or on patient care - this is the user&#39;s responsibility. Antigen Plus
uses the logic recommended by the American Association of Blood Banks to
evaluate initial test results in the same way a technologist would do.

# Installation

Antigen Plus will supply your IT department with the installer file and
documentation necessary to deploy the program to an application server or to
individual workstations. once you are set up (these procedures are covered in
our Installation Guides that comes with the installer).

## For Lab Administrators Only

First Use and Set-up:

The first person to use Antigen Plus will have administrator privileges and
should accomplish a few tasks before others use the program. Your IT will have
installed the program according to the instructions in the Installation Guide.
If someone other than you has _ **run** _ the program, you should have that
person assign you administrative rights within the program. Once you are logged
in as an administrator, these are the steps:

Go to Options/System Options/Printing and type the name of the lab the way you
want it to appear on any printouts

Go to Options/Customize result columns and set up the columns in the way you
would like for general use (users can change these for individual work-ups, but
this what they will always start with).

Go to Options/ Exclusion criteria and set the number of rule-outs for each
antigen to exclude the corresponding antibody.

Go to User/Security settings and set the time-out parameters. If you are **not**
using Windows accounts for users to log in, then set the password requirements,
then go to User/Account settings and set up your staff with usernames and
passwords. All of these functions are described in the Menus section below.

# To Run the Program

Double click the Antigen Plus icon to start the program.

# Menus

# F ![](RackMultipart20201123-4-14tdxq2_html_c77049fd6f3bf56d.png) ile Menu

T ![](RackMultipart20201123-4-14tdxq2_html_df4051fd34e931ce.png) he File menu
accesses five functions **: Import Data, Refresh Data, Select database, Save
configuration, Backup, and Exit.**

**Import Data:** Allows the importation of commercial lots from the internet or
the importation of panels in Antigen Plus format from other sources.

**Refresh Data:** If youare doing a search and another user is downloading or
entering cell data at the same time **, Refresh Data** will ensure that the new
data are available to you for search.

**S ![](RackMultipart20201123-4-14tdxq2_html_bfe8352b7fd6e901.png) elect
database:**

This option opens a screen that shows the available databases and allows you to
select one of them.

**Save configuration:** Available to software administrators, this item on first
allows the saving of the configuration file for the software. On subsequent use,
it opens the folder containing the configuration files. Instructions can be
found in &quot;Antigen Plus 8.5 Installation and Configuration.&quot;

**Backup:** Prompts you to select a location to back up all of your Antigen Plus
data. This feature was designed for a locally hosted database but is also useful
for maintaining a local fail-safe back up of the cloud hosted database for use
during an internet outage or in the highly unlikely case of a massive multiple
system failure both in our backup facilities and in Microsoft Azure.

To avoid losing your data in the event of a pc or system failure, we recommend
that you store these data on a drive or storage device that is separate from
your system. The data may be easily retrieved by Antigen Plus using SQL Server
Management Studio. Instructions can be found in &quot;Antigen Plus 8.5
Installation and Configuration.&quot;

# Options Menu

# ![](RackMultipart20201123-4-14tdxq2_html_38027844b737b40e.jpg)

#

##

##

##

##

## SystemOptions

The System Options menu allows you to set and/or change general default
parameters for using Antigen Plus in your lab. There are three tabs on this
menu—one each for General, Search, and Printing options.

**G ![](RackMultipart20201123-4-14tdxq2_html_67ccbecdfd98a534.png) eneral Tab**

**Antigen Display Order for Search, Selected Cells, and Printing** : Sets the
display order for cells on each screen where the antigen array appears. The
antigen array of whichever manufacturer (or alternative) is selected will be the
one you use for searching, selecting, and entering your test results.

![](RackMultipart20201123-4-14tdxq2_html_b5fcfd7be05f69cd.png)

**Display Order of Selected Cells Panel:** Allows you to view your selected
cells in one of three sorted orders in Selected Cells panels and Results
Worksheets.

**Results Scoring System** : Allows you to select one of two scoring systems for
entering your test results in the **Results Worksheet**.

**Prompt When Downloaded Panels Contain Duplicate Cells** : Activates an
automatic check for duplicate cells when you are downloading commercial red cell
panels. If you chose this option, when you download a panel, you will be alerted
to the existence of duplicate donor cells in your database and be given the
option to ignore them, mark them out-of-stock, or delete them (as long as they
are not in any worksheet that you have saved).

**Please note: If you are importing two identical panels (e.g. Quotient panels
that are the same except that one is enzyme treated), both panels will be marked
out-of-stock if you have this feature turned on and choose the out-of-stock
option**

![](RackMultipart20201123-4-14tdxq2_html_58601d6cc4a31ebc.png)

**Display total negative reactions to heterozygous donors:** This option adds a
rule-out count row to the Worksheet to show reactions that that may provide more
evidence toward an exclusion when the required homozygous cells are not
available for testing.

**Require Specimen ID for All Panels** : Makes it a requirement to add a
Specimen ID number to any saved panel. When this is selected, you may not save
any work-up without entering a specimen ID number. Only administrators may set
this option. For more information about adding specimen ID numbers, see page
34??.

**S ![](RackMultipart20201123-4-14tdxq2_html_2d9f7bf4d80cd2.jpg) earch Tab**

**Out of Stock Inventory:** Allows you to include out-of-stock cells in your
searches.

**Display Cells from** _ **Supplier** _ **First in Search Results** : Allows you
to prioritize your search by a single supplier. Normally, when cells are
searched, the search order is freshest to oldest to frozen. This option allows
you to find all the cells from one supplier in that order before other cells are
found. This feature is designed to make cell selection easier for those labs
that rely most heavily on a single supplier or test system and would prefer to
test those cells unless none are available with the required characteristics.

**Include Search by Donor Note** : Activates the search by donor note function
on the Search screen. The text box on the screen will search donors by whatever
text is in an associated note. This is primarily useful for reference labs with
frozen inventories of rare cells and cells they have typed and frozen
themselves.

**Search Automatically When Search Criteria Change** : Removes the Search button
from the **Search Cells** screen. When this is done, cells matching each
criterion entered are found and displayed. As more criteria are added, the cells
change to match the cumulative pattern. Hospitals and blood banks with an
inventory of fewer than 200 cells may find it more convenient to search in this
manner as it eliminates the necessity of hitting the search button to initiate a
search.

![](RackMultipart20201123-4-14tdxq2_html_ba8d9b19cc763acd.png)

**Printing Tab**

**Text to Appear on Printed Cell Lot Panels and Selected Panels** : Allows you
to enter text that will be printed on any printed output to identify your
facility. There are no limits to the amount of text you can enter, but filling
more than the space available will result in overprinting issues.

**Print Review Signature Lines at Bottom of Selected Panel** : Allows you to
print signature review lines on the bottom of the printed Selected Cells Panel
if you are doing manual rule-outs.

**Print Selected Cells in Version 7.4 Format** : Allows the **Selected Cells
Panel** to print in the format used in Version 7.4. This is to satisfy SOP
requirements of reference labs that have been accustomed to this format.

**Print Extended Donor Cell Information** : Enables the printing of extended
information about each donor cell on panel at the end of a selected panel or
worksheet.

**Print Automated Evaluation**

This feature is checked as the default for the software. Unchecking it allows
the printing of the worksheet without the evaluation for those who wish to do
the evaluation manually using the worksheet layout.

**L ![](RackMultipart20201123-4-14tdxq2_html_8c58320d8f5ebc57.png) eave First
Column Blank on Selected Cells Printouts**: Eliminates the text in the first
column of a printed Selected Cells Panel –the selection order number and any out
of date or frozen designation will appear on the screen but not on the printout
to allow space for manual notes.

## Customize Results Columns

In the **Customize Results Columns** screen, administrators may customize the
results columns that will appear in Results Worksheets for all users. The
default results columns are IAT, ENZ, DTT, A, B, C, and D respectively. By
default, A, B, C, and D exclude by the same rules as IAT.

From here, columns may be added, renamed, repositioned, removed, or set to
exclude by different rules. Right-clicking on a column will give you the option
to Add Column or Remove Column. Editing the Abbreviation text will change the
name of the column. By dragging a column with the mouse, it can be repositioned.
The dropdown menu in the Type row allows you to assign each column to exclude by
IAT, Enzymes, DTT, or by Adsorption rules (see page??), or the Unevaluated
column can display results that are not evaluated on the worksheet. The
description field will display any text you enter to identify the column or
testing method on your worksheet.

Finally, selecting or de-selecting the Check Cell box will add or remove a check
cell requirement to each result in that column. The check cell threshold may
then be set by using the Check Cell Threshold dropdown menu at the bottom of the
screen. If you select the check mark at the bottom, your check cell results will
either be a check for postitive, or an &quot;x&#39; for negative.

To restore the default arrangement of results columns, simply select **Restore
Defaults**. Please note that when adding, removing, or editing results columns,
the Results Worksheet will not reflect your changes until it is cleared and a
new one is started.

Please note that Customize Results Columns will set the default columns that
will appear anytime a user opens a Results Worksheet _unless_ the user is
importing results from a blood analyzer machine. In this case only the blood
analyzer result column will appear, and other columns may be added manually.

## ![](RackMultipart20201123-4-14tdxq2_html_64a811817e3c406d.png)Rare Cell Inventory

This option calls up a list of all the special typings (additional antigens) in
your database. You may search for all or some of them and print out a report.

Since BioTest has added Coltons and Diegos to their standard array and Quotient
has added Wra, these additional antigens will not appear on the rare cell
inventory list but can be enumerated by searching for them on the Search screen.

![](RackMultipart20201123-4-14tdxq2_html_fdcc768a9752f135.png)

#

## Analyzer Connections

This option allows you to view and manage your blood analyzer machine
connections. For more information on analyzer connections, see page 38.

##

## Exclusion Criteria

The default exclusion criteria in Antigen Plus are taken from the AABB Technical
Manual. In many cases, laboratories may wish to set stricter criteria to
determine exclusion by their own standards. Therefore, each lab can establish an
acceptable number of rule-outs for the exclusion of specific antigens. Only
administrators may set the exclusion criteria.

![](RackMultipart20201123-4-14tdxq2_html_90159ddb77378867.png)

In the **Exclusion Criteria** menu, you may specify the minimum number of
rule-outs needed to exclude each antigen. The criteria are entered by selecting
the box and typing the number with the keyboard.

![](RackMultipart20201123-4-14tdxq2_html_ce5943bdc851c4a9.png)

This picture is one example of custom exclusion criteria that a user may set.

These minimums must meet or exceed current Antigen Plus standards, which are
based on AABB standards and best practices. These settings will apply only to
newly created panels. Older panels will continue using the standards in effect
at the time they were created. If you load a results worksheet that was saved
before changes were made to your exclusion criteria, a warning will appear at
the top of the screen.

To restore your exclusion criteria back to the default AABB standards, select
**Restore Defaults.**

#

# V ![](RackMultipart20201123-4-14tdxq2_html_c1bc6c33ba2bc467.png) iew Menu

#

## Donor Note

When a donor is selected on the Search screen or Add/Edit screen, the donor note
option allows a note to be inserted that will stay with that donor number
(regardless of lot number) until it is removed.

![](RackMultipart20201123-4-14tdxq2_html_17558909d553de70.jpg)

The donor note will be displayed with the cell on the Add/Edit or Search
screens.

![](RackMultipart20201123-4-14tdxq2_html_d86866db9bac53c8.png)

#

## Patients

The Patients menu opens the **Maintain Patients** screen where patient
information may be viewed and edited.

![](RackMultipart20201123-4-14tdxq2_html_be35eca53a67b4b0.jpg)

The search feature on this screen enables a search by any of the criteria in any
of the columns. Double clicking on a patient will bring up the **Patient
Details** screen. From there you can select Edit to change patient details and
phenotype. When editing patient information, you must enter a reason for the
edit. This will be saved along with the user that made the change and the date
and time of the edit.

For more on working with patient information in Antigen Plus, see _Patient
Information_ on page 30??.

## Suppliers

This option allows entry of a supplier other than the currently licensed
commercial red cell manufacturers. This is primarily for reference laboratories
who are typing their own cells or receiving cells from other sources. Any of the
available antigen arrays may be associated with the new supplier.

![](RackMultipart20201123-4-14tdxq2_html_fa339d244d345bde.png)

##

# Lot Menu

![](RackMultipart20201123-4-14tdxq2_html_899c3738e6b45bd1.png)

The Lot menu connects you with the Antigen Plus server for download of
commercial red cell panels (see Downloading Lots on page 19), and allows for
preview or printing of any lot that is selected on the **Add/Edit** or
**Search** screens.

Selecting **Maintain Lots** opens the Maintain Lots table. On this table you can
delete one or more lots (as long as they have not been used in any saved work in
the last ten years) by highlighting a row (or highlighting several rows by
holding down the CTRL key), clicking on Delete Selected Lots, and then clicking
Save Changes. You may also mark any lot as out-of-stock or enzyme treated. A lot
that is in-stock but has one or more cells that are out-of-stock will be marked
with a square rather than a check mark in the box. Lots can be sorted in
forwards or backwards Lot Number or Expiration Date order by clicking at the top
of the column.

![](RackMultipart20201123-4-14tdxq2_html_7ee1a6965273f548.png)

If you attempt to delete a lot that has been used in a saved workup, you will be
notified that the saved work must be deleted before the lot can be deleted.
Deletion of saved work-ups may only be done after ten years have passed since
the panel was saved. If it is too early or you do not wish to delete the work
and the lot, you may mark the lot as out-of-stock thus removing it from
searchable inventory while saving any work that has been done with it.

![](RackMultipart20201123-4-14tdxq2_html_18ee8976cdd24d8a.png)

#

# P ![](RackMultipart20201123-4-14tdxq2_html_f48ffd9c8c202599.jpg) anel Menu

The Panel Menu brings up a variety of options that are the most frequently used
in Antigen Plus.

If those options are unavailable (i.e. there are no cells selected), they will
be greyed out on the screen.

## Load Saved Panel

This option opens up a table of all saved work-ups (any selected panel that has
been saved with or without test results).

A saved panel may be retrieved for further work or review by selecting its row
and pressing **Load** or by double-clicking on the row. Once the saved panel is
retrieved, all of the information it was saved with will populate the
appropriate screens ( **Search** , **Selected Cells Worksheet** , and **Results
Worksheet** ).

A saved panel may also be deleted from this table if it is ten years old—a
confirmatory warning will appear after Delete is selected.

![](RackMultipart20201123-4-14tdxq2_html_5da1d21f2edc3688.png)

#

#

#

#

#

#

#

#

#

**Duplicate** creates an exact copy of whichever saved panel is currently
selected. That panel may then be saved as a new panel.

**Duplicate with Fresh Cells** also makes a copy of the saved panel but will
also automatically swap out any out-of-date or out-of-stock cells with fresh
cells in your inventory that have antigen profiles that are as close as possible
to the original.

## Merging panels:

Two or more panels can be merged in a work-up for a single patient. The primary
use of this feature is to be able to merge a screen and a full panel that are
run separately in the analyzer, but any set of results for a patient can be
merged into one worksheet—all details of the patient must match including
specimen number if it was used. All columns that were used in the original
panels will appear.

![](RackMultipart20201123-4-14tdxq2_html_443a04fad1353501.png)

## I ![](RackMultipart20201123-4-14tdxq2_html_f5a0239697c65dbf.png) mport Analyzer Results

This menu allows the importing of results from a blood analyzer machine. For
more information about importing blood analyzer results, see page 39.

##

##

##

## Save the Selected Cells Panel

You may save a Selected Panel (with any results included) from this screen. As
this can be done more directly from the Selected Cells Worksheet or Results
Worksheet, the function is here so that you may remember to save current work
when you are loading another panel (there will also be a warning when you are
loading a new panel that one is already in use).

## Clear Selected Cells Panel

Selecting **Clear Selected Cells Panel** will clear all of the currently
selected cells. You will be prompted to either save or discard your current
work.

## Selected Cells Worksheet and Results Worksheet

Selecting Selected Cells Worksheet or Results Worksheet will call up the current
work and open those screens. For more information about Selected Cells and
Results Worksheets, see Operation on page 19.

## Print Blank Antigram

Prints a blank worksheet.

# U ![](RackMultipart20201123-4-14tdxq2_html_aab4557a094dc2fa.png) ser Menu

##

##

##

##

## Change Password

Any user can change his or her password. That change can be overridden by an
administrator changing that user&#39;s password.

## Account Settings

T ![](RackMultipart20201123-4-14tdxq2_html_2037a494c9e5fef6.png) his window
allows a user to change their name and password. Administrators may also assign
administration rights from this window and enable or disable accounts. A new
user may not log in until an administrator has added him or her in the
**Maintain Accounts** table or Windows Active directory is used to authenticate
new users (see Authenticating Users on page?? )

**S ![](RackMultipart20201123-4-14tdxq2_html_655fbfa039e09308.png) witch User**

Logs the current user out and asks for a username and password to continue. A
new database may also be selected from this screen.

## Maintain Accounts

This menu is available only to administrators and is used for managing user
access to Antigen Plus. If **Automatically create accounts from Windows Login**
is checked, Antigen Plus will recognize the user from that user&#39;s log in to
Windows and require a password if the Windows login also requires it. Selecting
Add will call up a fresh Account Settings screen and allow the administrator to
create a new account. Selecting Delete will delete an account if that user has
not saved any work. To remove a user who has saved work in the database, he or
she must be disabled. In order to deactivate and account but keep that user
displayed on saved work-ups, simply uncheck the Enabled box in the Account
Settings window.

![](RackMultipart20201123-4-14tdxq2_html_8783da0cd8f434a1.jpg)

#

Double-clicking on any user will call up the **Account Settings** screen for
that user. Here, an administrator may set access privileges and password
preferences. If the user is not set to automatically log-in with their windows
account, they must be given a password in order to log-in.

The possible roles an Administrator can grant another user are:

**Administrator:** Can maintain users, can save panels, can review panels tested
by self or another technologist, can remove reviews, can add suppliers, can edit
cells, and can edit all patient information. Administrators may also set system
options including custom exclusion criteria, whether or not to require specimen
numbers, and customize the default results columns.

**Full access** : Can save panels, can review panels tested by another
technologist, can add suppliers, and can edit cells. Full access users cannot
edit patient information, but they may add phenotypes to patients.

**Save panels** : Can search, select, enter results and save panels.

**Read only** : Can search, select, and enter results but cannot save any work.

Each user may change his or her own password.

## View User Activity Log

![](RackMultipart20201123-4-14tdxq2_html_9dfdeb15daffcbcd.png)

An administrator will have this feature enabled and selecting it will call up a
log of all user log-ins and all activity involving patient information. This log
is exportable in a csv format.

## Security Settings for Time Outs and Username/Password Mode

![](RackMultipart20201123-4-14tdxq2_html_74199f408741127b.png)

**Timing out** : If you would like to have the program shut down if left
unattended, check the box next to &quot;Exit the Application…&quot; and set your
time parameter. If a user leaves the program unattended for that length of time,
the program will shut down and the work in progress will reappear only when that
user logs back in. This option is available for both automated and manual
password access.

The other options are for manual password configurations and are activated by
checking the boxes on the left of the options and setting the desired parameters
to the right.

# H ![](RackMultipart20201123-4-14tdxq2_html_5fcd040785ee2c90.png) elp Menu

The Help Menu makes text regarding the use of Antigen Plus available to the
user. That text is reproduced in this manual in the appropriately named
sections.

#

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

# Operation

# Downloading Lots from the Internet

When you press _Download Lots from Internet_ from the Lot menu, you will see the
following screen:

![](RackMultipart20201123-4-14tdxq2_html_570f2f6c25cd531b.png)

Available panels are listed in descending order of Expiration Date. They may
also be sorted in ascending order or by Supplier or Lot Number by clicking on
the column title. You may select as many as you wish, the number selected is
displayed at the bottom of the screen as each panel is added to your database
when you click Download Selected Lot(s).

#

#

#

#

# Downloading Lots with Supplemental Typings

I ![](RackMultipart20201123-4-14tdxq2_html_ed62332fb4f2b4ef.png) mmucor provides
supplemental unconfirmed typings with some of their panels. You may download
some or all of these by selecting the SUT box next to the lot number when you
are downloading. You will be given a choice of which typings you wish to see on
your downloaded cells in a dialog box. Your choices will remain and may be
changed or not the next time you download.

While the main panel data are verified electronically and do not require
physical validation (with the current exception of Medion), the supplemental
typings should be checked by donor to ensure that they have all been captured.
Manual entry of any missing ones can be done by pulling up the donor on the
Add/Edit screen.

# Download Prompt Option

If you have selected _Prompt when downloading duplicate cells_ in the **System
Options** menu, you will be notified whenever donors on the downloading panel
exist in your database. You can ignore the notification, mark the duplicate
cells as out of stock, or delete them. If you attempt to delete a cell that has
been stored as part of a saved panel, you will be advised to mark it out of
stock instead.

![](RackMultipart20201123-4-14tdxq2_html_58601d6cc4a31ebc.png)

**Please note: If you are importing two identical panels (e.g. Quotient panels
that are the same except that one is enzyme treated), both panels will be marked
out-of-stock if you have this feature turned on and chose the out-of-stock
option.**

# Searching and Selecting Cells

## Search Pattern

When the program starts, the **Search** **screen** will automatically be
displayed. A search pattern box allows you to enter a search pattern of the 28
principal antigens and/or any additional antigens, search the inventory for
matches, and mark cells or lots for inclusion in a **Selected Cells Panel** or a
**Results Worksheet**. (Some red cell suppliers include additional antigens on
their array and some leave off principal antigens; those arrays are displayed
that way in Antigen Plus if that supplier is chosen. See **Antigen Order for
Selected Cells** on page 25.)

As you search your database, you will notice color-coding that will highlight
the search boxes change as you select and de-select cells. For an explanation of
the color-coding function, see page 36.

![](RackMultipart20201123-4-14tdxq2_html_f549a1ea35fc56e9.jpg)

If _search automatically when search criteria change_ is selected in the
**Search** tab in the **System Options** menu, the search panel will immediately
display how many cells are found in your database that are matches for your
current search pattern. If this option is not selected, you must enter your
search criteria and click **Search** to display the matching cells from your
database. In either case, the number of matches that your current search has
found will display at the bottom of the screen. The number of cells currently
selected will also display at the bottom of the screen and will update each time
you select or deselect a cell.

![](RackMultipart20201123-4-14tdxq2_html_1a872aa50e24793d.png)

To enter a search pattern, click the desired antigen buttons in the search
pattern box. You may set the buttons to 0, +, or blank. A 0 or + setting means
that a matching cell must have a 0 or + in the same place (s or w designations
will be read as + during a search). A blank setting means &quot;don&#39;t
care&quot;, and during a search those antigens will be ignored.

You may also search by the following criteria: **Donor ID,\*\*** Lot Number
**,** Sex **,** Group **,** Frozen **cells, and** Enzyme Treated\*\* cells.
Please note that if you are currently searching by a particular lot, your
searches will only include cells from that lot until you have cleared that lot
from your search criteria.

![](RackMultipart20201123-4-14tdxq2_html_90cf0cf10417e5bb.jpg)

When you search, the inventory will be searched starting with the newest cells
first, that is, in reverse expiration date order. All frozen cells have no
expiration date and will be gathered at the end of the search order unless you
have specified a preferred supplier in **System Options** in which case all
cells from that supplier will be found first in reverse expiration order and be
followed by all other suppliers in reverse expiration order. Clicking on a cell
in your search results will highlight it in light blue and information about
that cell will display above your search results. Please note that Out-of-Stock
cells will not be displayed in your search if _Exclude from Searches_ is
selected in **System Options**.

To clear your current search criteria and start a new search, select **Clear
Search Criteria**.

To add additional antigens to the search pattern, check those desired in the
Additional Antigens box by selecting the arrow on the right of the box to drop
down a list of all the additional antigens in your database. You may select as
many additional antigens as you like, but only the first 8 to 10 (depending upon
their length) will display on the screen and an ellipsis will indicate that more
are selected. If you mouse over any of the selected antigens or the ellipsis, a
box containing all of your selected antigens and their associated ISBT
designations will appear.

![](RackMultipart20201123-4-14tdxq2_html_4d41c3bbee54bb1.jpg)

A ![](RackMultipart20201123-4-14tdxq2_html_47d3c41b9ae59f82.png) table of ISBT
designations used in Antigen Plus can be found in the Appendix. To remove
Additional **Antigens** from the search display box, uncheck the item(s) in the
Additional Antigens drop down list.

## Selecting and Deselecting

To select a cell, check the **Select** box to the right of each cell. To select
all cells in your current search, click **Select ALL Matches**. Cells that are
selected with a check mark are automatically included on Selected Cell and
Results Worksheet panels, which can be called up by choosing the appropriate
option in the Panel menu or by selecting **View Selected Cells** or Open
Worksheet at the bottom of your search screen. When duplicate cells are
selected, they will be highlighted in yellow so that they may be easily
de-selected.

![](RackMultipart20201123-4-14tdxq2_html_5f3ed889bc83c383.png)

Your currently selected cells will remain selected until you uncheck the
**Select** box next to each cell or until you click **Clear All Selected
Cells**. If you choose to clear all selected cells and you have not saved your
current work, a warning box will appear asking if you would like to either
**Save** or **Discard** your current selected cells panel.

![](RackMultipart20201123-4-14tdxq2_html_c0335e729d0a9d1b.png)

## Selecting Expired Cells

W ![](RackMultipart20201123-4-14tdxq2_html_fcd9253ba5716288.png) henever you
select a cell (or cells) with an expiration date that has passed, a dialog box
will appear allowing you to select that cell (or cells) to enter the results of
testing to ensure that cell is still reactive for the specific antigens in
question. You may enter the result for any or all of the positive antigens on
that cell and those results will be maintained with the date of the test and the
name of the tester. You may opt out of this process by selecting **Close** and
the cell will still be selected.

![](RackMultipart20201123-4-14tdxq2_html_a8038e40d63d71a2.png)

# Antigen Order for Selected Cells

![](RackMultipart20201123-4-14tdxq2_html_c3c1ca8fd5c7833.png)

The antigen buttons are displayed in a standard default order of blood groups:
Rh-Hr, Kell, Duffy, Kidd, Lewis, P, MN, Lutheran, and Sex-Linked. Some
suppliers&#39; data sheets list them in a different order, so in order to
simplify searching, selecting, and entering data there are 9 display options
selectable with the 9 option buttons in the **System Options** menu. These
choices stay with any donor displayed in the Search mode (if more than one
supplier is represented, the Additional Antigens box will accommodate any
typings missing from an array; e.g. if you are using the Immucor order that
omits the &quot;f&quot; typing and select an additional cell that has this
typing, the &quot;f-&quot; or &quot;f+&quot; will appear in the Additional
Antigens box (exclusion rules will consider the 28 common typings regardless of
where they appear on the screen).

Please note: If the manufacturer does not provide the &quot;f&quot; typing,
Antigen Plus will make no assumptions and will not rule it out. For more
information, see page 50.

# Available Arrays

Option 1: BioTest

![](RackMultipart20201123-4-14tdxq2_html_f10aa8e8a041c601.jpg)

O ![](RackMultipart20201123-4-14tdxq2_html_91caf2e3c31fe3de.jpg) ption 2:
Immucor

Option 3: Medion/Grifols

![](RackMultipart20201123-4-14tdxq2_html_58f396d6931fcbac.jpg)

![](RackMultipart20201123-4-14tdxq2_html_8920ba03a21bd862.jpg) Option 4: Ortho

O ![](RackMultipart20201123-4-14tdxq2_html_3974d03c400eed98.jpg) ption 5:
Quotient

Option 6: Red Cross Preferred

![](RackMultipart20201123-4-14tdxq2_html_80ce2fd9dd509ce7.jpg)

Option 7: Standard (Johns Hopkins) Option

![](RackMultipart20201123-4-14tdxq2_html_ebdc7ce94150c19d.jpg)

Option 8: Bio-Rad

![](RackMultipart20201123-4-14tdxq2_html_725569cb3e4e3144.png)

O ![](RackMultipart20201123-4-14tdxq2_html_4a55f6ca2bea9047.png) ption 9:
Grifols

# Selected Cells Panels

Your panel of currently selected cells can be called up and reviewed by either
clicking **Preview Selected Cells** at the bottom of the Search screen, or by
going to the Panel menu and choosing **Selected Cells Worksheet.** Either option
will cause your Selected Panel will appear in a separate window.

![](RackMultipart20201123-4-14tdxq2_html_174780a4ac14742.png)

On the Selected Panel screen, you may review all of your currently selected
cells and deselect any cell by unchecking the **Selected** box to the right of
each cell.

You may also assign the Selected Panel to a particular patient by choosing
**Select/Add Patient.** For more about entering patients and patient
information, see page 30.

Your currently selected cells may also be called up in a Results Worksheetby by
either clicking Open Worksheet at the bottom of the Search screen,or going to
the Panel menu and choosing **Results Worksheet**. In the Results Worksheet, you
may enter and evaluate your test results. For more information about entering
and evaluating test results, see page 33.

On any Selected Cells panel or Results Worksheet, the cells will be sorted
according to your preferences in **System Options**.

## Saving and Loading Panels

To save a panel, go to the File menu on a Selected Cells panel or Results
Worksheet and choose **Save Panel**. When saving a panel, you must set a panel
number. You may then add a Patient, add Conclusion Antibodies and Conclusion
Notes, and add a Full Panel Description. In the panel description, you may enter
as much text as you like and it will be saved along with the panel. Please note:
you may save a Selected Cells panel or a Results Worksheet without a patient as
long as no results are entered. Once results are entered on a Results Worksheet,
you must add a patient in order to save the work-up.

## Printing Panels

The Selected Panel Worksheet may be printed at any time by selecting File/ Print
at the top left of the screen. If there are more additional antigens than can
print on one line, more lines will be inserted underneath the cell until all
additional antigens are printed. The worksheet will display the date and time it
was printed. If a patient has been selected with the Selected Panel, the patient
information will display on the print-out. The Selected Panel Worksheet prints
out with eight blank columns on the right for manually entering test results and
additional blank rows beneath the last selected cell to the end of the page.

![](RackMultipart20201123-4-14tdxq2_html_1d2cedbd5678efeb.png)

**Print Blank Antigram:**

Prints a completely blank panel, just like above but with the supplier, donor,
and antigen columns left unpopulated. It will have blank spaces at the top for
writing patient name, patient ID, conclusion, technologist, date collected, and
date tested.

# Patient Information

Information about patients that will display on the Search screen and remain
with saved work-ups is entered on the Search screen by selecting **Select/Add
Patient.** On the Search screen, click on the Select/Add Patient button and
search for a patient to modify, or fill in a new ID, name, and optional date of
birth and short note and press **Add**.

![](RackMultipart20201123-4-14tdxq2_html_7ac1ac922f51d52b.jpg)

You must enter an ID for the patient that will uniquely identify that patient.
The nomenclature or protocol is up to you. When a patient is selected, their ID
and their first and last names will appear at the top of the Search screen as
well as the Selected Cells panel and the Results Worksheet. Saving any work-up
with a particular patient selected will attach that patient to the printed
worksheet as well as the saved lot table.

![](RackMultipart20201123-4-14tdxq2_html_e0cb1de542a6d8b.png)

When a Patient is selected and displayed at the top of the screen, you may
right-click on the patient to either **Change Patient** , **View Patient
Details** , or **Update Patient Information**. **Change Patient** will take you
to the **Select/Add Patient** screen and allow you to switch to a different
patient. **View Patient Details** will bring you to their patient details screen
where you can edit that patient&#39;s information and view the editing history
for that patient.

You may also call up a list of your patients by selecting **Patients** from the
**View** menu. Double-clicking on a patient or highlighting a patient and
clicking Details will call up the **Patient Details** screen for that patient
where their information may be added or edited. Only administrators may edit
patient details.

![](RackMultipart20201123-4-14tdxq2_html_1e00ac2841c4b47.jpg)

The following information may be stored with each patient:

**ID** (required)

**Last name** (required)

**First name** (required)

**Middle Name**

**Date of Birth**

**Short Note**

**Phenotype** : A patient&#39;s phenotype will populate the Auto Control row at
the bottom of the selected cells in the Results Worksheet whenever a patient is
assigned to the worksheet.

**Conclusion Antibodies and Conclusion Notes** : See page 38.

**Specimen Number** : When adding a new patient, there is a space to add the
specimen number that will be associated with that patient&#39;s current workup.
The specimen number will saved with the panel rather than with the patient. For
more on specimen numbers, see page 33.

Each time you edit a patient&#39;s information in their Patient Details screen,
you must enter a reason for the edits. All previous edits to that patient will
be displayed on the Patient Details screen under Editing History. Each saved
panel that the patient is attached to will also display under Editing History.
You may double click on a saved panel to load it, or you may select a saved
panel and choose to Duplicate or Duplicate with Fresh Cells.

**Update Patient Information:** If you load a saved panel with a patient whose
information has been changed, it will be marked Obsolete. Selecting Update
Patient Information from the Patients menu will bring the patient information
current so that it is reflected on the worksheet. Any user may use the update
patient information option.

#

#

#

#

# Entering and Evaluating Test Results

![](RackMultipart20201123-4-14tdxq2_html_665836745eb5344e.png)

Test results may be entered and evaluated using the **Results Worksheet**. The
Results Worksheet may be called up from the Search Screen or Panel menu whenever
selected cells are present. Any antigens that cannot be excluded by the current
selection are highlighted in the **Count** rows at the bottom of the screen.
Results can be recorded as they are read by clicking in the box in the
appropriate test column that is in the same row as the tested cell. The test
column box will be highlighted and a drop down box will appear with a choice of
results that may be entered by clicking on the desired number. The default
choice is 0 through +4 (Agglutination Grading). Result choices may be seen and
entered in the Marsh 0 to 12 scale by choosing that option in the **System
Options** menu. If you are entering results in a column that requires a check
cell entry, the check cell box will appear each time you enter a negative
result. You must confirm that negative result by entering a positive result in
the check cell box. Once a choice is entered the cursor will move down to the
next tested cell and you may repeat the procedure. To remove a result from a
box, click once on the box, then click on the blank space above the zero in the
choices box. To assist in navigation, the row upon which the cursor is resting
is highlighted.

**Specimen Number**

![](RackMultipart20201123-4-14tdxq2_html_8d7eec5fceb3d119.png)

If _Require Specimen Number_ is selected by an administrator in System Options,
you must enter it wherever it appears. If _Require Specimen Number_ is not
selected, the choice to enter a specimen number on your results worksheet is
optional. Whether or not the specimen number is required, once a specimen number
is entered it must be entered every time the results worksheet is opened.

![](RackMultipart20201123-4-14tdxq2_html_821d4c638787bc73.png)

Note: If you retrieve a workup with a specimen number on it that you no longer
have, you can retrieve that specimen number by selecting **File - Print
Preview** on the worksheet.

## Count Rows

The number of homozygous and heterozygous rule-outs for each antigen appear in
the Count rows below the cell rows and above the Evaluation that specifies which
antigens remain to be excluded. Antigens that are never ruled out on a
heterozygous cell are automatically set to 0. Antigens that cannot be excluded
with the cells currently selected are highlighted in the Count rows. For more on
colors and highlighting, see page 36.

![](RackMultipart20201123-4-14tdxq2_html_c602107a12a756db.png)

If selected in system options, another row counting negative reactions to
heterozygous donors may be added to the display.

![](RackMultipart20201123-4-14tdxq2_html_ebe3d19e1aad86b.png)

## Result Columns

Administrators may select the default column settings by going to the _Customize
Results Columns_ screen in the Options menu. However, the current user may edit
their current columns directly from the Results Worksheet by right clicking on a
column. From here you can select **Add Result Column** to insert a new column
directly to the right of the column that you right-clicked on. You may also
select **Edit Result Column** to directly change the column type, abbreviation,
and set a check cell. Here you may enter a column description that will appear
in your evaluation text and on printouts. Finally, selecting **Delete Result
Column** will remove that column from your Results Worksheet as long as there
are no results entered in the column. These columns will be saved with the
worksheet but will not affect the default columns on other worksheets.

![](RackMultipart20201123-4-14tdxq2_html_56ceb434b25af392.png)

##

## Evaluation Text

![](RackMultipart20201123-4-14tdxq2_html_239528d7c35b66fd.png)

The evaluation text at the bottom of the Results Worksheet will keep a running
list of which antigens are not yet excluded. This information is also presented
with color-coding on the Results Worksheet and the Search screen.

The evaluation text will also display any column descriptions that you have
added.

**Color Coding**

Antigen Plus now features dynamic color shading of cells to help guide the user
as they select cells and enter test results. Color shading is changed
automatically in both the search screen and the results worksheet as cells are
selected and deselected, and as test results are entered.

**In the search screen:**

![](RackMultipart20201123-4-14tdxq2_html_38211ded86623dc7.png)

White: The antigen has already been excluded.

Light Orange: The antigen has not yet been excluded, but could be excluded if
the untested selected cells are non-reactive.

Dark Orange: The antigen cannot be excluded by the current panel regardless of
test results. This is an indication that additional cells need to be selected.
When a cell is selected that could lead to an exclusion of that antigen with
test results, the antigen will turn light orange.

**In the test cell area of the Results Worksheet:**

![](RackMultipart20201123-4-14tdxq2_html_5aff809d28f13a48.png)

White: Negative for that antigen

Light Blue: The antigen has been excluded by other test cells.

Dark Blue: The antigen has been excluded, in part because it was ruled out by
this test cell.

Grey: There is a rule-out for that antigen from the result on that row, but
there are not enough rule outs for that antigen elsewhere to warrant an
exclusion based on your exclusion criteria.

Light Orange: The antigen has not been excluded, and is one of several possible
explanations for the positive reaction with this test cell.

Dark Orange: The antigen has not been excluded, and is a likely explanation for
the positive reaction with this test cell because it is the only non-excluded
positive antigen among the 28 antigens that are evaluated by Antigen Plus.

**Mouse- over explanations**

A ![](RackMultipart20201123-4-14tdxq2_html_e3ec9623514ba2bf.png) n added feature
of Antigen Plus is the ability to see how the exclusion rules are being applied
for each rule-out on the screen. Whenever a negative result is entered, you may
mouse-over any positive antigen in that cell to see why it was or why it was not
ruled out. Any other cell on your worksheet that is involved in a successful
rule-out or an unsuccessful rule-out will be highlighted as you mouse-over.

![](RackMultipart20201123-4-14tdxq2_html_d4be196e6f6e370d.png)

##

## A ![](RackMultipart20201123-4-14tdxq2_html_204ad698cf2773a.png) dsorption Columns

Adsorption columns may be added and set up for consideration of specific
antigens. Results in this column will only apply to the designated antigens.

## Unevaluated Columns

![](RackMultipart20201123-4-14tdxq2_html_1dc62d1c0f842d28.png)

The Unevaluated Column type allows the user to enter results without those
results affecting the evaluation text or the color-coding. These results will
display in the Unevaluated column in your Results Worksheet and on printed
copies, but they will have no effect on your evaluation. The abbreviation may be
changed and a description may be added in the Edit Result Column window. The
unevaluated columns are shaded in grey.

##

## Auto Control

If there is a patient phenotype entered for your current patient, this will
automatically populate the Auto Control row at the bottom of your test cells in
any Results Worksheet. A warning will appear in the Evaluation text if a
positive reaction is recorded in the Auto Control row, indicating a possible
autoantibody.

![](RackMultipart20201123-4-14tdxq2_html_a05da89458abd628.png)

##

##

## Conclusions

If, as a result of your workup, you have reached a conclusion about the
patient&#39;s antibodies, you may enter that conclusion when you save the
worksheet. Two fields are available: _Conclusion Antibodies_, which allows you
to select from any of the 28 evaluated antibodies, and _Conclusion Notes_, which
allows free text about your conclusion, including other antibodies and any
comments. Conclusion Antibodies and Conclusion Notes will display at the top of
Results Worksheets next to the patient&#39;s name and in the patient details.

![](RackMultipart20201123-4-14tdxq2_html_d63c4f42ab7d57e0.png)

If you like, you may save the Conclusion Notes text for automatic entry in a
future case. To do this, enter your text in the lower text box next to the Add
button. Clicking Add will place this text in the middle text box, which will
collect all saved Conclusion Notes. When adding Conclusion Notes, you may then
select a saved note (or multiple notes) from this box.

## Importing blood analyzer results

When importing results from a blood analyzer machine, a Results Worksheet will
be generated that only includes the single blood analyzer results column (the
default columns will not appear). The user may then add, edit, and rearrange
additional columns.

For instructions on connecting with a blood analyzer, please see the document
&quot;Antigen Plus: Description, Requirements, and Specifications—What Your IT
Needs to Know&quot; available at
[www.antigenplus.com](http://www.antigenplus.com/) .

Import Analyzer Results Screen:

![](RackMultipart20201123-4-14tdxq2_html_c2e8ee2f438bbee6.png)

![](RackMultipart20201123-4-14tdxq2_html_7d1f2d09f517db35.png)

Imported Results on a Worksheet:

#

# Reviewing a Saved Panel

Once aresult or results have been entered in a Results Worksheet and the
worksheet has been saved, a user with appropriate privileges may review it.
After a panel has been reviewed, no further changes may be made to the
worksheet, unless the reviewer unchecks the review box. Only the user who
reviewed a panel or an administrator can remove the review from that panel.

![](RackMultipart20201123-4-14tdxq2_html_66ae287902efcc2c.png)

A user with &quot;full-user&quot; privileges may only review a panel on which
that she/he has not entered any results i.e. only review someone else&#39;s
work. An administrator may review her/his own work.

A second review may be entered after a first review following the same rules. If
anyone changes reviews on a saved panel, a prior iteration of the panel will be
maintained with the original reviews in **Panel History**.

# Printing

Print and Print Preview menus are accessed from the file menus of the Selected
Cell or Results Worksheets. Antigen Plus allows you to choose the printer and/or
paper size and orientation from either menu. Letter size in landscape mode is
necessary to properly format your print out or PDF file.

# Data Entry

Antigen Plus allows the entry of unique cells and/or lots from suppliers other
than those currently licensed by the FDA to sell red blood cell panels in the
United States. Most hospital transfusion services will rely solely on commercial
suppliers and entry of red cell data may never be necessary or may be restricted
to adding or correcting a typing on an existing cell. Complete red cell
phenotype data entry is described at the end of this section. The user may make
changes to a supplier&#39;s donor phenotype based on additional typing by
calling up the donor on the Add/Edit screen, entering the changes (reactions,
special typings etc.), and clicking the Save button. These changes will not be
maintained for the donor in any subsequent lot, so it is strongly recommended
that you note the change in the Donor Note, which will remain with the donor
regardless of lot.

#

# Donor Note

A ![](RackMultipart20201123-4-14tdxq2_html_4aff9e547fb79e14.png) n optional note
may be stored with each Donor ID by selecting Donor Note from the View menu when
the donor is displayed in the Donor ID box. Type your note in the Donor Note
text box and then select Save and Close.

A Donor Note is associated with the Donor ID only, not the Lot, so it will
appear with every Lot that a donor ID is in. When a Donor ID has a note on file,
that information will be displayed whenever that donor is on the Add/Edit or
Search screens.

![](RackMultipart20201123-4-14tdxq2_html_c2cb591375f2beff.png)

#

# Data Entry of Individual Cells

Data may be entered or changed in a box whenever the cursor is positioned over
that box. The cursor can be moved to another box by pointing to it with the
mouse and clicking the left mouse button. The cursor also moves to the next box
by pressing the Tab key, or to the previous box by pressing the Shift + Tab
keys. Previously saved data can be viewed and selected by clicking the little
down-arrow to the right of the box, or by pressing the Ctrl + Down Arrow keys
while the cursor is in the box. The box will be &quot;opened&quot;, and the data
will be displayed in numerical and alphabetical order. Any item in the list can
be selected with a mouse click, or by highlighting it with the Up or Down Arrow
keys and pressing Enter. Alternatively, items can be scrolled without opening
the box by pressing the Down Arrow key. A list box may be opened at a particular
spot in the list by first entering a character or characters in the box and then
opening it. A button may be activated or &quot;pushed&quot; by clicking it with
the left mouse button, or by moving the cursor to the button and pressing any
key. You can tell when the cursor is on a button because its outline becomes
darker, and if it has writing on it, the writing is surrounded by a dotted line.
As with boxes, the cursor can be moved from button to button by using the Tab or
Shift + Tab keys, or by clicking directly with the mouse. In general, the cursor
moves from left to right and top to bottom on the screen. A donor cell is
identified by its Donor ID and Lot Number. A donor number or lot number may
appear any number of times, but the Donor ID - Lot Number combination must be
unique. In order to save a cell in the database, it must have a non-blank Donor
ID and a non-blank Lot Number. When you are entering several cells from a single
antigram or lot panel, the data boxes are blanked after you Save, but remain
indexed at the last item entered. Therefore, when you enter one cell and save
it, then enter a new Donor ID number, you can Tab to the Lot Number box and
press the Down Arrow to recall the previous Lot. Its expiration date and
supplier will also appear, saving you from having to re-enter the data.

Donor Number

T ![](RackMultipart20201123-4-14tdxq2_html_f67476b763023b3d.png) he Donor No.
box will accept up to 16 characters and may be any combination of capital
letters and characters except apostrophes. Enter a donor ID and press the Tab
key to move on to the Lot Number box. If the donor is already on file, the cell
data will be retrieved and displayed.

Drop-down (or list) boxes have a scroll bar. One donor may be present on several
different panels. If a donor has more than one cell on file, and her previously
existing ID is entered, the most recent one found will be displayed. This is to
facilitate entering duplicate donors - when you wish to enter a donor who is
already on file into a new lot number, the old phenotype will automatically
appear, and you then need to enter only the new lot number, check the expiration
date, and click the Save button. It is assumed that the phenotype will not have
changed from a previous panel.

L ![](RackMultipart20201123-4-14tdxq2_html_97d0a6c73b6d1b0b.png) ot Number

The Lot Number is used to show the supplier&#39;s unique

lot number for this cell&#39;s panel. All cells with a given Lot

Number will have the same supplier and expiration date.

The Lot Number box will accept up to 16 characters

and may be any combination of numbers and capital

letters. Enter a lot number and press the Tab key to move

on to the Vial box. If the lot number was already on file,

the expiration date and supplier will be retrieved and displayed.

Vial

The Vial box will accept any number from 0 through 99. It will also accept a TC
(tech cell) vial.

Enter a vial number or TC and press the Tab key to move on to the Expires box.
Pressing the Up and Down Arrow keys or clicking the little up and down arrows to
the right of the box will automatically raise or lower the displayed vial
number. TC is located below the 0.

Expiration Date

The Expires box is for the expiration date of all cells in the lot number
displayed. You may enter a date in any format that is comfortable for you, such
as &quot;20 Dec 10&quot; or &quot;12-20-11&quot;, then press the Tab key to move
on to the Supplier box. The date will be re-displayed in the format set in the

Windows Control Panel/Regional Settings/Date function. If the date is before the
present system date, a bright red **Out of Date!** will appear under the Expires
box. The expiration date is stored with the lot number, so if you change the
expiration date of a lot number, then ALL cells with that lot number will have
the new expiration date.

Supplier

T ![](RackMultipart20201123-4-14tdxq2_html_4f5a89c8e0cc8f25.png) he Supplier box
is populated with default commercial suppliers and any that you have added in
the Suppliers table found in the View menu.

When a supplier is changed in the Supplier box,

the antigen array below will change to match that

Supplier&#39;s array.

The supplier is stored with the lot number, so if you change the supplier of a
lot number, then ALL cells with that lot number will have the new supplier.

Location

Enter a storage drawer location for a frozen cell. The location is stored
independently and will not affect other cells with the same lot number--should
there be any. The Location box will accept up to 64 characters in any
combination of letters and numbers.

Rh-Hr

Antigen Plus comes with the standard Rh-Hr phenotype designations loaded in the
drop down box that is activated by clicking on the down arrow adjacent to the
Rh-Hr entry box. Choosing one of these designations by clicking on it will place
it in the entry box and will mark the appropriate pluses and negatives in the
Rh-Hr antigen group. If changes are made to that antigen group, the Rh-Hr
phenotype will be cleared when the cell is saved. A user may save the cell again
with the proper phenotype or leave it blank.

Note: Antigen Plus no longer specifies the Cw antigen in Rh-Hr designations
since we cannot predict 100% when C will be on the same gene complex as Cw.

## Automated Antigen Order on the Add/Edit Screen

On the Add/Edit screen, the array will match the supplier currently selected and
appearing in the Supplier Box and will change automatically as the supplier is
changed.

Y ![](RackMultipart20201123-4-14tdxq2_html_6b12d062cfad8125.png) ou may add a
supplier with any one of these arrays from

#

#

#

#

# Additional Antigens

The Additional Antigens box consists of an entry box, checkboxes, and a display
box directly above them containing this cell&#39;s additional antigen phenotype.
You may enter an additional antigen in the Add New entry box, or select one from
the list by clicking the box. To add what is in the entry box to this cell,
check thebox. To remove an antigen from a cell uncheck the appropriate box.

![](RackMultipart20201123-4-14tdxq2_html_c94fee83eae4abf3.png)

T ![](RackMultipart20201123-4-14tdxq2_html_6de8fdd807067af8.png) here is no
limit on how many additional antigens you may enter. However, once the screen
space is used up, further antigens will be stored but not displayed. When there
are more additional antigens than can be displayed on a Lot Panel print out, an
ellipsis (&quot;...&quot;) at the end of the additional antigen list (displayed
alphabetically) will indicate the presence of the additional typings. Mousing
over the display all of the antigens present along with their associated ISBT
designations.

A table of ISBT designations used in Antigen Plus can be found in the Appendix.

The reason for the entry-box method of adding additional antigens is to ensure
consistency: you must be consistent in your notation in order for a search to
work properly. For example, to indicate a Colton b antigen (Cob) as positive,
you may enter Co(b+), CoBPos, or any other notation that is 8 characters or
fewer, but you should use the exact same notation for all cells with this
antigen. The entry box will contain a list of all the additional antigens
previously saved in your inventory, and you should check for an antigen&#39;s
presence before entering a new one. The ISBT designations can be consulted for
more precision in nomenclature. A table of ISBT designations used in Antigen
Plus can be found in the Appendix.

Out Of Stock

To mark a cell as exhausted, click the Out Of Stock button, click OK in response
to the pop-up query, and then click the Save button. The data will remain on
file so that you can recall the phenotype in case the cell shows up in a new
lot, and will remain in any saved panels. The cell will not be available in the
search process unless you mark the Include in Searches feature in the Out of
Stock Inventory box in the System Options menu. When you click the Save button,
you will be given the option of marking the entire lot as out of stock. Click
Yes or No in the popup window, or type y or n, to indicate your choice. Please
note: If you do not click the Save button after marking the cell as out of
stock, the cell will remain in stock and the out of stock flag will not reappear
on the screen when that cell is recalled.

Sex

Clicking the Sex button will change the button from blank to M to F. This is
optional information, and not normally of significance in the selection of panel
cells.

Group

The Group button allows you to enter the blood group of the donor cell. Since
most commercial panel cells are group O, that is the default setting. To change
the blood group to A, B, or AB, click the Group button until one of those
characters appears. To leave the blood group unspecified, click the Group button
until a blank appears.

Frozen

Click the Frozen box to mark a cell as frozen. The expiration date will be
blanked. Frozen cells will be found last in the search process, since searching
is done starting with newest cells first.

Antigens

The 28 principal antigens are displayed with colored labels for easy
identification. When you are entering a new cell, all the antigens will have a
blank setting. You may change a setting to a +, s, w, or blank by clicking the
button with the mouse pointer (right and left mouse clicks scroll through the
choices in opposite orders), or by moving to a button with the Tab key and
pressing any other key. A blank setting indicates that no information is
available. For example, some suppliers may not include the Kell system Kpb and
Jsb, so you may blank these antigens&#39; buttons.

Save

Clicking the Save button will save all the cell data displayed for the unique
Donor No. - Lot Number combination. Any items not previously present in the data
boxes (Donor, Lot, Expiration Date, Supplier, Additional Antigens, and RhHr)
will be added to the lists in those boxes. The cell display is cleared and the
cursor returns to the Donor No. box. The Lot Number, Expiration Date, and
Supplier are saved as a group with the Lot Number. If you have changed the date
or supplier of a lot, then ALL cells with that lot number will have the new date
and supplier. A Donor Note is saved only with the Donor ID, and stays with the
Donor ID regardless of which Lot it is in.

Delete

Clicking the Delete button will prompt you to make sure, then remove the
displayed Donor No. – Lot Number combination from your inventory as long as it
has not been used in the last ten years in any saved work. When a cell is
deleted, any unique lot, additional antigen, or RhHr information it may have had
will also be deleted from the lists in those boxes.

Delete Lot

Clicking the Delete Lot button will prompt you to make sure, then remove ALL
cells with the displayed lot number (the ten year rule applies).

# Multiple User Procedures

There is no restriction on the number of users who can use Antigen Plus and
share its data at the same time. There are, however, some default rules of
precedence in cases when new data are added to the system by one of the users
and where the same data are altered and saved by more than one user in a
session. Your SOP should make note of the following rules:

When a user downloads a new lot into the system, the cells within the lot that
lot will be available for searches by other users and will appear in the
Maintain Lots screen, but will not be available in the Lot drop down list on the
Search or Add/Edit screens until the other user clicks the Refresh Data option
in the File Menu (or simply presses the F5 key).

If two users have the same saved panel open, the second one to save will be the
current panel iteration even if the first user has changed and/or reviewed the
panel. The first user&#39;s panel will be available as a prior iteration, but
will have to be recreated to be a current one (this can be done by opening the
current iteration and making the necessary changes using the prior iteration as
a guide). However, the first user&#39;s saved panel will appear immediately on
the Panel History screen, so to ensure that there are no conflicts, a user who
suspects that there may be someone else working on the same panel can check the
panel history before saving his/her work.

# Exclusion Policy

Antigen Plus - Ab ID excludes antigens in the manner described by the _AABB
Technical Manual, 15\_\_th_ _Edition_, (Ch. 19: pg. 428-9). Cells with apparent
double dose expression (e.g. from apparent homozygous donors) of an antigen are
required for the exclusion in the following blood group systems: Rh, Duffy,
Kidd, MNS. In the presence of anti-D, the program will exclude E and C on
heterozygous cells. Blank antigens will cause the known positive antithetical
partner to be considered heterozygous for exclusion. The blank antigens
themselves are not considered positive or negative and will not be considered
for exclusion.

The blood group antigens that can be excluded on cells from heterozygous donors
are K, Kpa, Jsa, and Lua. The program will not exclude K, Kpa, or Jsa on cells
from heterozygous donors if cells from apparent homozygous on the same panel are
reactive. As the Zygosity of P1 and Xga is not easily determined from most panel
sheets, the program requires 3 examples of each antigen to be non-reactive with
the patient sample before it will exclude either antigen.

It is always advisable to review AABB Technical Manual, 15th Edition, (Ch. 19:
pg. 429-36) for more detailed information on Complex Antibody Identification
including variability of antigen strength, the effect of storage on RBC antigens
and use of autologous cells while considering the antigens excluded or not, by
the program. Any final decision made by the technologist must be consistent with
their facility SOP for Antibody Identification.

The program does not encompass the knowledge of all blood group systems and
their patterns of reactivity. Any technologist using the program to automate the
exclusion process must apply serological expertise to interpret the
program&#39;s lists of antigens excluded versus antigens not excluded. The
program evaluates each column of reactivity independently. Exclusions obtained
from the results recorded in the default column settings will be exactly the
same as those obtained from identical results recorded in the LISS indirect
antiglobulin test (IAT column).

Red cell treatments, when performed correctly, do have a standardized effect
that is well documented. Antigen Plus - Ab ID does employ that information when
the ENZ column and DTT column have results recorded in them. The ENZ column will
not exclude Xga, or Duffy and MNS blood group system antigens. The DTT column
will not exclude Kell or Lutheran blood group system antigens.

High frequency antigens and low incidence antigens, which can be used as a
search parameter to select cells for the results panel, cannot be used in the
exclusion process or listed in the Evaluation box at the bottom of the results
panel. As the antigens listed in the Additional Antigens are entered by the
individual user, they are not pre-coded by the program. A list of technical tips
to assist any technologist who may have an antibody to a high frequency antigen
or to a low incidence antigen is included in the Help utility and is reproduced
on the following pages.

The following text always appears with any results in the Evaluation box:

&quot;These are tentative rule-outs.&quot;

If you have not set up your own rules for exclusion, the following text will
also appear:

&quot;Additional confirmatory data based on your own criteria are
recommended.&quot;

It is the user&#39;s responsibility to record accurate test data and to confirm
that data according to established protocols.

# Complete Rule-Out Protocols

- Rule out D when any cell with D+ has negative reaction

- Rule out C when (all cells with D+ have positive reaction)

and (any cell with D-, C+, c+ has negative reaction)

- Rule out C when any cell with C+, c- has negative reaction

- Rule out E when any cell with E+, e- has negative reaction

- Rule out E when (all cells with D+ have positive reaction)

and (any cell with D-, E+, e+ has negative reaction)

- Rule out c when any cell with C-, c+ has negative reaction

- Rule out e when any cell with E-, e+ has negative reaction

- Rule out Cw when any cell with Cw+ has negative reaction

- Rule out f when any cell with f+ has negative reaction

- Rule out V when any cell with V+ has negative reaction

- Rule out K when any cell with K+, k- has negative reaction

- Rule out k when any cell with K-, k+ has negative reaction

- Rule out Kpa when any cell with Kpa+, Kpb- has negative reaction

- Rule out Kpb when any cell with Kpa-, (Kpb+ or unknown) has negative reaction

- Rule out Jsa when any cell with Jsa+, Jsb- has negative reaction

- Rule out Jsb when any cell with Jsa-, (Jsb+ or unknown) has negative reaction

- Rule out Fya when any cell with Fya+, Fyb- has negative reaction

- Rule out Fyb when any cell with Fya-, Fyb+ has negative reaction

- Rule out Jka when any cell with Jka+, Jkb- has negative reaction

- Rule out Jkb when any cell with Jka-, Jkb+ has negative reaction

- Rule out Lea when any cell with Lea+, Leb- has negative reaction

- Rule out Leb when any cell with Lea-, Leb+ has negative reaction

- Rule out P1 when any cell with P1+ has negative reaction

- Rule out M when any cell with M+, N- has negative reaction

- Rule out N when any cell with M-, N+ has negative reaction

- Rule out S when any cell with S+, s- has negative reaction

- Rule out s when any cell with S-, s+ has negative reaction

- Rule out Lua when any cell with Lua+, Lub+ has negative reaction

- Rule out Lua when any cell with Lua+, Lub- has negative reaction

- Rule out Lub when any cell with Lua-, Lub+ has negative reaction

- Rule out Xga when any cell with Xga+ has negative reaction

- Rule out K when (any cell with K+, (k+ or unknown) has negative reaction)

and (no cells with (K+, k-, and all non-excluded antigens except f are - or
unknown) have positive reaction)

- Rule out Kpa when (any cell with Kpa+, (Kpb+ or unknown) has negative
  reaction)

and (no cells with (Kpa+, Kpb-, and all non-excluded antigens except f are - or
unknown) have positive reaction)

- Rule out Jsa when (any cell with Jsa+, (Jsb+ or unknown) has negative
  reaction)

and (no cells with (Jsa+, Jsb-, and all non-excluded antigens except f are - or
unknown) have positive reaction)

# The Case of **f**

Some manufacturers have stopped typing all or most donors for the f antigen.
While the RhHR phenotype indicates the value of f, it does not do so with 100
percent certainty. Antigen Plus will not make this assumption. Therefore, if f
does not appear on the donor cell or cells, those cells will not be evaluated
for f, and f will appear as not ruled out in the evaluation. Your SOP should
indicate how you wish to handle these situations. You may ignore the lack of
exclusion, or you may add the f to the donor cell supplied by the manufacturer.
Antigen Plus makes no recommendation in this regard.

Because the f is likely to be ignored, we have exempted our Kpa and Jsa
conditional rules (see above) from considering f.

#

# Technical Information for Further Testing

1. If all cells in the first panel are reactive and the autocontrol is negative,
   try chemically treated screen cells and see if this alters the reactivity in
   any way. Chemical treatment of red cells includes: enzymes, DTT, AET or CDP
   (chloroquine diphosphate). Methods and information on obtaining any of the
   products required, can be found in the _American Red Cross Immunohematology
   Methods and Procedures_, D. Mallory, ed. Selecting 2 or 3 cells from the
   panel, or using the screen cells, will save time, save plasma and still
   provide new information. If the information is that nothing changed, go to
   step 2.

[More information on the actions of specific chemicals is listed in step 2,
(iii).]

2. If all cells in the first panel tested are reactive and the auto control is
   negative, perform a common phenotype on the patient&#39;s red cells (patient
   must not have been transfused in the preceding 90 days). Blood group systems
   to include Rh, Kell, Duffy, Kidd and MNS. Select a cell from any of the
   panels or screen cells in your inventory that is negative for the same
   antigens the patient lacks and test it. This is referred to as running a
   phenotype matched cell.

EXAMPLE: PATIENT D+C+E-c+e+, K-, Fy (a+b-), Jk(a-b+), M+N+S-s+.

POSSIBLE MATCHES: D-C-E-c+e+, K-, Fy(a-b-), Jk(a-b+), M-N+S-s+

D+C+E-c-e+, K-, Fy(a+b-), Jk(a-b+), M+N-S-s

i) If the phenotype matched cell does not react with the patient&#39;s plasma,
select a panel of red cells based on one example of each antigen to be excluded
per cell.

EXAMPLE: FOR THE PATIENT LISTED ABOVE THE SELECTION CRITERIA

WOULD BE:

CELL 1 E+, K-, Fy(b-), Jk(a-), S-.

CELL 2 E-, K+, Fy(b-), Jk(a-), S-.

CELL 3 E-, K-, Fy(b+), Jk(a-), S-.

CELL 4 E-, K-, Fy(b-), Jk(a+), S-.

CELL 5 E-, K-, Fy(b-), Jk(a-), S+.

This will confirm or exclude which antibody(ies) to the common antigens the
patient has formed and what is left to form in the future.

ii) If the phenotypically matched cell(s) is reactive with the patient&#39;s
plasma and the

autocontrol is negative, the most probable cause is an antibody to a high
frequency antigen.

Use Antigen Plus to select any examples of high frequency antigen-negative red
cells

in your cell library. I.e... At(a-), k-, Kp(b-), Js(b-) etc.

iii) If you have a limited rare cell library or failed to obtain a negative
reaction with the high

frequency antigen-negative red cells available, consider that various red cell
treatments which

modify or destroy certain antigens on red cells can also be useful. DTT/AET
treatment will destroy: Kell (not Kx), Lutheran, Knopps/McCoy, Cartwright,
Cromer, Dombrock, Auberger, JMH and Lwa. Gerbich is destroyed by DTT but not
AET. ENZYMES (papain, ficin, trypsin, bromelin) will remove: Duffy, MNS, Chido,
Rogers, JMH, Gerbich, Gilfeather, Xga, Pr, Vw, Cartwright, Mia, Cla, Jea, Nya
and most Ena. Chloroquine diphosphate (CDP) will destroy Bg and class I HLA
antigens.

3. If all cells in the first panel tested are reactive and the auto control is
   positive, do a direct antiglobulin test (DAT) on the patient&#39;s cells
   before doing further serum testing.

i) If the DAT is positive, a warm autoantibody should be suspected and may hide
underlying alloantibodies in the patient&#39;s plasma. The autoantibody should
be removed by adsorption before further antibody identification can be achieved.
Adsorption can only be performed using pre-transfusion patient red cells. The
patient must not have been pregnant or transfused in the preceding 90 days. For
further information and testing methods, refer to the _AABB Technical Manual,
Current Edition_, or the _American Red Cross Immunohematology Methods And
Procedures_, D. Mallory, ed.

ii) If the DAT is negative, a cold autoantibody should be considered. A cold
screen tested from room temperature down to 4o C will indicate if an autologous
absorption done at 4o C will be useful to remove the autoantibody. Again, the
patient must be untransfused in the preceding 90 days.

iii) If adsorption, warm or cold, is not possible, there are alternatives.
Allogeneic warm absorption is possible using R1R1, R2R2, and rr cells. A prewarm
method may be useful to remove any cold reactivity. Prewarm methods must be used
with caution preferably after the clinically significant antibodies have been
tentatively identified. Prewarm methods have been documented to remove anti-H
activity in a Bombay phenotype and an example of anti-Vel. References on
request.

4. If all the cells tested are negative, several things must be considered:

i) Repeat the cell that gave the original positive reaction that initiated the
panel, i.e. the antibody screen test or one of the units being crossmatched.
Note where the antibody reacts - immediate spin or IAT? Was the panel tested at
the same phase the reaction occurred in?

ii) How soon after the original testing, was the panel performed? Was the sample
stored properly?

iii) Is the reactive cell double dose (from an apparent homozygous donor) for
any common antigen and is there another cell double dose (from an apparent
homozygous donor) for the same antigen that can be used to repeat the result?

iv) Will enhancement media help reveal a weak reacting alloantibody pattern,
i.e.

Enz, PEG, LISS with a longer incubation time, or polybrene?

v) If none of this adds any information about antibody specificity, you may have
an antibody directed against a low frequency antigen. While the identity of the
antibody is a puzzle, it is rarely a significant problem when looking for
compatible units of red cells for transfusion. If you have time to play with it,
use Antigen Plus to locate as many low incidence antigen positive cells as you
have listed under special antigens. If none of them react, and you still wish to
resolve the specificity, send the sample to a reference lab for crosstesting.
Most reference labs keep their unidentified lows in hopes of finding another
example.

5. If your routine test method can detect weak reacting autoantibodies at any
   phase of testing, positive antibody screen results can lead to a common panel
   result of several weak reactions with no specificity determined. Antigen Plus
   will perform exclusions based on its policy and may well exclude all common
   specificities depending on the number of reactions and phenotype of the cells
   which do not react. The technologist should follow his or her Blood Bank SOP
   for antibody identification which should address this type of panel testing
   outcome. Depending on method used, patient population and number of
   occurrences, the most common choices are likely to include:

i) Try more sensitive method if an alloantibody may be just forming or was not
stimulated in the recent past.

ii) Repeat the original test by a less sensitive method, e.g. from solid phase
testing back to tube LISS-IAT (a common approach to dealing with the very
sensitive capabilities of solid phase testing.)

iii) Seen only at immediate spin – assess possible clinical significance and
drop the IS test if appropriate.

Use the prewarm method only after significant antibodies (anti-Vel, anti-PP1Pk,
anti-H in a Bombay) have been excluded.

#

# Backing Up

If you use Cloud storage for Antigen Plus, your database (s) is backed up on our
Cloud server hosted by Microsoft Azure™ and can be restored at any moment going
back one week. Any problems retrieving data should be immediately brought to our
attention at
[customerservice@antigenplus.com](mailto:customerservice@antigenplus.com).
Backing up locally can be done from inside the application (see page 4) or with
a tool such as SQL Server Management Studio.

# Additional Information About Antigen Plus

Antigen Plus is written using Microsoft Visual Studio and SQL Server. It was
designed for the reference laboratory by Michael W. Lankiewicz, M.D., a
hematologist with an overworked staff, in order to save untold hours of
searching and drudgery; and originally programmed by Peter Rowny, a blood donor,
with additional improvements for the hospital transfusion service designed by
Dawn M. Rumsey, ART (CSMLS) BB(ASCP)CM.

COPYING TEXT FROM THE SCREEN

The text in the Full description box on the Save and Load panel screens and the
text in the Help screens can be copied into another application by highlighting
the text by placing the mouse cursor at the beginning of the text to be copied,
holding down the right mouse button and dragging the cursor across the text to
be copied. The text will be highlighted. Release the mouse button and press the
&quot;Ctrl&quot; and &quot;C&quot; keys on your keyboard simultaneously. The
text will then be copied to the Windows Clipboard and can be copied into any
Windows application that has a Paste function.

COPYING TEXT TO THE FULL DESCRIPTION BOX

Text from the Windows clipboard may be copied into the Full description box on
the Save screen. When the cursor is flashing in that box press the
&quot;Ctrl&quot; and &quot;V&quot; keys on your keyboard simultaneously. The
text you have copied from another application will be pasted into the
description of the panel and may be saved with the Panel Key name by clicking
the Save button on the screen.

# Programming Notes

Antigen Plus is written in Visual Basic Studio and uses a SQL Server database.
Users familiar with SQL Server may open the databases and produce reports, run
queries, and generally explore record layouts and file structure for purposes of
importing data held in other databases. Be sure to back up the original database
before attempting any of these procedures.

# Appendix

Guide to ISBT numbers used in Antigen Plus

(taken from ISBT web site)

[http://www.isbtweb.org/fileadmin/user_upload/WP_on_Red_Cell_Immunogenetics_and/Updates/Table_of_blood_group_antigens_within_systems_v3.3_131028.pdf](http://www.isbtweb.org/fileadmin/user_upload/WP_on_Red_Cell_Immunogenetics_and/Updates/Table_of_blood_group_antigens_within_systems_v3.3_131028.pdf)
