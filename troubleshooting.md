---
title: Troubleshooting
nav_order: 4
layout: default
has_children: false
last_modified_date: 2021-02-24 08:08:01
---

# Troubleshooting

## Unable to delete a lot because of an "unsaved panel"

If a user quits Antigen Plus without saving their work, we create an "unsaved
panel" for that user. The unsaved panel is restored the next time that user
launches the application.

Because this unsaved panel contains references to the selected cells in that
panel, it prevents those cells from being deleted from the database.

To resolve this issue, either:

1. Mark the cell or lot as _out-of-stock_ rather than deleting it.

2. Ask the user to log in and clear the selected cells. If there are no other
   references to those cells, they may now be deleted.

## Logging in as a user who has left the organization

If you need to log in as a user who has left the organiztion (perhaps to clear
their unsaved work), you can assign them an Antigen Plus password and then use
the password to log in as that user.

1. Log into Antigen Plus from an administrator account.

2. Choose _Maintain Accounts_ from the _User_ menu.

3. Double-click on the account of the absent user.

4. Use the _Change Password_ button to assign that user a password.

5. Save the changes in the _Change Pasword_ window, the _Account Settings_
   window, and the _Maintain Accounts_ window.

6. Choose _Switch User..._ from the _User_ menu.

7. Log in with the name and password of the absent user.

This will allow you to log in as that user and perform any cleanup tasks, such
as clearing the selected cells to remove the unsaved panel.

After fixing the problem, you may want to return to the administrator account
and disable the account of the absent user.
