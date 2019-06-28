```bash
docker run -d -v $PWD/data:/usr/local/apache2/htdocs/ -p 8080:80 --name apache-example httpd:latest
```
