#!/bin/sh
docker run -dit --restart=unless-stopped -p 8082:3000 -e PORT=3000 --name mywebapp mywebapp