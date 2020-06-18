#sequalize:basics

Open MySQL shell
$ mysql -u root

Inside MySQL shell,create db,user and grant rights
create database sampledb1;
create user sampleuser1 identified by 'samplepass1';
grant all privileges on sampledb1.* to sampleuser1;
