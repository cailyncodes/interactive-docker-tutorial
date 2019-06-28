#!/bin/sh
docker run -dit --restart=unless-stopped -p 8080:8080 --name mywebapp mywebapp