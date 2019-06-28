#!/bin/sh
docker pull httpd:latest && \ 
docker pull ruby:stretch && \ 
docker pull node:8 && \ 
docker pull node:12 && \ 
docker pull mongo:4.0 && \ 
docker pull nginx:latest