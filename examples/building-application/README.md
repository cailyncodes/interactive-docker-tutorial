```bash
docker run -itd -v $(pwd -P)/src:/usr/app -w /usr/app -p 8081:8000 --name building-application node:8
```