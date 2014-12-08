#!/usr/bin/env bash
curl -sL https://deb.nodesource.com/setup | sudo bash -

apt-get update
sudo apt-get install -y nodejs
sudo debconf-set-selections <<< 'mysql-server-5.5 mysql-server/root_password password rootpass'
sudo debconf-set-selections <<< 'mysql-server-5.5 mysql-server/root_password_again password rootpass'
sudo apt-get update
sudo apt-get -y install mysql-server-5.5

if [ ! -f /var/log/databasesetup ];
then
    echo "CREATE USER 'auser'@'localhost' IDENTIFIED BY 'secretpassword'" | mysql -uroot -prootpass
    echo "CREATE DATABASE assignments" | mysql -uroot -prootpass
    echo "GRANT ALL ON assignments.* TO 'auser'@'localhost'" | mysql -uroot -prootpass
    echo "flush privileges" | mysql -uroot -prootpass

    touch /var/log/databasesetup

    if [ -f /vagrant/data/schema.sql ];
    then
        mysql -uroot -prootpass assignments < /vagrant/schema.sql
    fi
fi