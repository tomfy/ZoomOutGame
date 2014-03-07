#!/usr/bin/perl -w
use strict;

my $input_filename = shift;
my $old_filename = $input_filename . "_prebeautification";
system "mv $input_filename $old_filename";
system "js_beautify.pl $old_filename > $input_filename";


