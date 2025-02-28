FROM ubuntu:latest
RUN apt-get update && apt-get install apache2 -y
WORKDIR /var/www/html
ADD temp.tgz /var/www/html
EXPOSE 80
CMD ["apache2ctl","-D","FOREGROUND"]
