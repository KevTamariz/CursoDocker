# Ejemplo, Red Social


# Construir imagen en base a nuestro DockerFile
    sudo docker build -t socialclient:v1 .
    sudo docker build -t socialback:v1 .

- "build" es la directriz para construir la imagen
- "-t" crearle un tag
- "." buscara localmente un archivo llamado Dockerfile


# Correr nuestro contenedor
    sudo docker run -d -p 3000:3000 socialclient:v1
    sudo docker run -d -p 8800:8800 socialback:v1
    
# Datos de nuestros contenedores corriendo
    sudo docker ps
    
    
# Descargar la iamgen que se escuentra en: https://hub.docker.com/repository/docker/kevtamariz/app1/general
    sudo docker pull kevtamariz/app1:client.v1.0.0
    sudo docker pull kevtamariz/app1:api.v1.0.0
    
# Correr los contenedores
    sudo docker run -d -p 3000:3000 kevtamariz/app1:client.v1.0.0
    sudo docker run -d -p 8800:8800 kevtamariz/app1:api.v1.0.0
    
 Visita: localhost:3000 en el navegador
    
