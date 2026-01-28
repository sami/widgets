# Terraform Infrastructure Template
# Provider Configuration
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }
  required_version = ">= 1.2.0"
}

provider "aws" {
  region = var.aws_region
}

# ----------------------------------------------------------------------
# Variables
# ----------------------------------------------------------------------
variable "aws_region" {
  description = "AWS region for all resources"
  type        = string
  default     = "us-east-1"
}

variable "instance_name" {
  description = "Value of the Name tag for the EC2 instance"
  type        = string
  default     = "AppServerInstance"
}

# ----------------------------------------------------------------------
# Resources
# ----------------------------------------------------------------------
resource "aws_instance" "app_server" {
  ami           = "ami-830c94e3" # Example AMI ID (Ubuntu)
  instance_type = "t2.micro"

  tags = {
    Name = var.instance_name
  }
}

# ----------------------------------------------------------------------
# Outputs
# ----------------------------------------------------------------------
output "instance_id" {
  description = "ID of the EC2 instance"
  value       = aws_instance.app_server.id
}

output "instance_public_ip" {
  description = "Public IP address of the EC2 instance"
  value       = aws_instance.app_server.public_ip
}
