#!/bin/bash


USERS=`cat /etc/passwd | grep "/home" |cut -d: -f1`


for USER in $USERS
do

    finger -m $USER > ~/public_html/finger/$USER

done

finger > ~/public_html/finger/now
