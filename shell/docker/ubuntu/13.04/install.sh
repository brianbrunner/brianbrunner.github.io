sudo apt-get update
sudo apt-get install linux-image-extra-`uname -r`
sudo sh -c "curl https://get.docker.io/gpg | apt-key add -"
sudo apt-get update
sudo apt-get install lxc-docker
sudo docker pull base
