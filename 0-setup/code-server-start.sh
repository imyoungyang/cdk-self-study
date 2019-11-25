#!/bin/bash
ip=$(curl http://169.254.169.254/latest/meta-data/public-ipv4)
echo "http://$ip:8443"
cd ~/environment/code-server
./code-server --port 8443
