#!/usr/bin/env pwsh
$basedir=Split-Path $MyInvocation.MyCommand.Definition -Parent

$exe=""
if ($PSVersionTable.PSVersion -lt "6.0" -or $IsWindows) {
  # Fix case when both the Windows and Linux builds of Node
  # are installed in the same directory
  $exe=".exe"
}
$ret=0
if (Test-Path "$basedir/sh$exe") {
  # Support pipeline input
  if ($MyInvocation.ExpectingInput) {
    $input | & "$basedir/sh$exe"  "$basedir/../jetifier/bin/jetifier-standalone" $args
  } else {
    & "$basedir/sh$exe"  "$basedir/../jetifier/bin/jetifier-standalone" $args
  }
  $ret=$LASTEXITCODE
} else {
  # Support pipeline input
  if ($MyInvocation.ExpectingInput) {
    $input | & "sh$exe"  "$basedir/../jetifier/bin/jetifier-standalone" $args
  } else {
    & "sh$exe"  "$basedir/../jetifier/bin/jetifier-standalone" $args
  }
  $ret=$LASTEXITCODE
}
exit $ret
