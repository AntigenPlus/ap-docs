---
title: Exclusion policy
layout: default
parent: User Guide
nav_order: 8
---

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
exclusion process must apply serological expertise to interpret the program's
lists of antigens excluded versus antigens not excluded. The program evaluates
each column of reactivity independently. Exclusions obtained from the results
recorded in the default column settings will be exactly the same as those
obtained from identical results recorded in the LISS indirect antiglobulin test
(IAT column).

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

> These are tentative rule-outs.

If you have not set up your own rules for exclusion, the following text will
also appear:

> Additional confirmatory data based on your own criteria are recommended.

It is the user's responsibility to record accurate test data and to confirm that
data according to established protocols.

## Complete Rule-Out Protocols

- Rule out D when any cell with D+ has negative reaction
- Rule out C when (all cells with D+ have positive reaction) and (any cell with
  D-, C+, c+ has negative reaction)
- Rule out C when any cell with C+, c- has negative reaction
- Rule out E when any cell with E+, e- has negative reaction
- Rule out E when (all cells with D+ have positive reaction) and (any cell with
  D-, E+, e+ has negative reaction)
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
- Rule out K when (any cell with K+, (k+ or unknown) has negative reaction) and
  (no cells with (K+, k-, and all non-excluded antigens except f are - or
  unknown) have positive reaction)
- Rule out Kpa when (any cell with Kpa+, (Kpb+ or unknown) has negative
  reaction) and (no cells with (Kpa+, Kpb-, and all non-excluded antigens except
  f are - or unknown) have positive reaction)
- Rule out Jsa when (any cell with Jsa+, (Jsb+ or unknown) has negative
  reaction) and (no cells with (Jsa+, Jsb-, and all non-excluded antigens except
  f are - or unknown) have positive reaction)

## The Case of **f**

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
