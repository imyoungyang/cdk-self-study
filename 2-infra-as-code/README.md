# CDK deployments

## CDK deployment environment

Please read this [ref](https://docs.aws.amazon.com/cdk/latest/guide/environments.html):

* Here we use AWS credentials profile, so that you don't need to hardcode your account id.
* In cloud9, turn off the auto credentials:
  * Preferences -> AWS Settings -> aws managed temporary credentials (turn off)

## Use browser to ssh your ec2 instnace

## Setup Jupyter server
* [Step by Step](https://docs.aws.amazon.com/dlami/latest/devguide/setup-jupyter-config.html)
* Commands on ec2 instance:

  ```
  curl http://169.254.169.254/latest/meta-data/public-ipv4
  jupyter notebook password
  mkdir -p ~/ssl && cd ~/ssl
  openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout mykey.key -out mycert.pem
  cd ~
  jupyter notebook --certfile=~/ssl/mycert.pem --keyfile ~/ssl/mykey.key
  ```
* Commands on mac
  ```
  ssh -i ~/mykeypair.pem -N -f -L 8888:localhost:8888 ec2-user@ec2-###-##-##-###.compute-1.amazonaws.com
  ```

## EC2 connection

* [New: Using Amazon EC2 Instance Connect for SSH access to your EC2 Instances](https://aws.amazon.com/de/blogs/compute/new-using-amazon-ec2-instance-connect-for-ssh-access-to-your-ec2-instances/)
* 
