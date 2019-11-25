#!/bin/bash
ip=$(curl http://169.254.169.254/latest/meta-data/public-ipv4)
echo "Code Server"
echo "http://$ip:8443"
security_group=$(ec2-metadata -s | cut -d " " -f 2);
aws ec2 authorize-security-group-ingress --group-name $security_group --protocol tcp --port 8443 --cidr 0.0.0.0/0
cs_version="2.1692-vsc1.39.2"
wget https://github.com/codercom/code-server/releases/download/$cs_version/code-server$cs_version-linux-x86_64.tar.gz
tar -xvzf code-server$cs_version-linux-x86_64.tar.gz
mv code-server$cs_version-linux-x86_64 ~/environment/code-server
cd ~/environment/code-server
chmod +x code-server
./code-server --port 8443
