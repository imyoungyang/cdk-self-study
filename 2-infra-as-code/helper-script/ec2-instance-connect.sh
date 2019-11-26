#!/bin/bash
rm mynew_key
ssh-keygen -t rsa -f mynew_key
aws ec2-instance-connect send-ssh-public-key --region us-east-1 --instance-id $1 --availability-zone $2 --instance-os-user ec2-user --ssh-public-key file://mynew_key.pub

# for ssh
# ssh -i mynew_key ec2-user@$3

# for jupyter notebook server forwarder
ssh -i mynew_key -N -f -L 8888:localhost:8888 ec2-user@$3