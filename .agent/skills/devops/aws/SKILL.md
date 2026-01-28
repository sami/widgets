---
name: AWS
description: Amazon Web Services Cloud Computing
---

# AWS Skill

## Best Practices
1.  **IAM**: Principle of Least Privilege. Never use root account. Create Roles for services.
2.  **Infrastructure as Code**: Managing resources via Terraform/CloudFormation, not the Console.
3.  **Security Groups**: Allow only necessary ports/IPs. `0.0.0.0/0` is a red flag on SSH/RDP.
4.  **Cost**: Use Budgets and Alarms to prevent bill shock.

## Common Pitfalls
*   **Public Buckets**: S3 buckets configured as public by mistake while containing sensitive data.
*   **Secrets**: Hardcoding Access Keys in code. Use IAM Roles (EC2/Lambda) or Secrets Manager.

## References
*   [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/)
