import cdk = require('@aws-cdk/core');
import ec2 = require('@aws-cdk/aws-ec2');

export class AppDlamiStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    // Use default VPC
    const vpc = ec2.Vpc.fromLookup(this, 'VPC', {
      isDefault: true
    })
    
    // security group
    const sgDLAMI = new ec2.SecurityGroup(this, 'sgDLAMI', {
      vpc,
      securityGroupName: 'sgDLAMI',
      description: 'config deeplearning ami security group'
    })
    
    sgDLAMI.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(22), 'ssh any')
    sgDLAMI.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(8888), 'jupyter any')
    
    // deep learning AMI
    const dlami = new ec2.GenericLinuxImage({
      'us-east-1': 'ami-01a471cc6a3cbbaa5',
      'us-west-2': 'ami-0e21bab705444f9e7'
    })
    
    // create instance
    const ec2Instance = new ec2.CfnInstance(this, "dlami-instance", {
      imageId: dlami.getImage(this).imageId,
      instanceType: "t2.micro",
      tags: [
        {"key": "Name", "value": "dlami-instance"}
      ],
      networkInterfaces: [
        {
          deviceIndex: "0",
          associatePublicIpAddress: true,
          subnetId: vpc.publicSubnets[0].subnetId,
          groupSet: [sgDLAMI.securityGroupId]
        }
      ]
    })
    
  }
}
