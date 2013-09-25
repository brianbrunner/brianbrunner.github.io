sudo apt-get update
sudo apt-get install linux-image-extra-`uname -r`
sudo sh -c "curl https://get.docker.io/gpg | apt-key add -"
sudo sh -c "echo deb http://get.docker.io/ubuntu docker main > /etc/apt/sources.list.d/docker.list"
sudo apt-get update
sudo apt-get install -y lxc-docker
sudo docker pull ubuntu
