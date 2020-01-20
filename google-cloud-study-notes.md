# Google Cloud Architect Certification

Notes on Google Cloud Architect Certification.

## Ch1,2 Basics, Identity & Access Management
IAM roles (Least privilege principle). For example, testing user knowledge on billing account roles, storage access roles, compute engine role, etc. 
How to list and describe the roles using CLI
How to filter the roles and members using GCP console

## Ch 9 App Engine
How to deploy applications on App Engine using CLI.
Use cases on App Engine Versions functionality
How to split the traffic between multiple versions in the App Engine.

## Ch 14 Virtual Private Clouds (Networking)
How to configure firewalls and use cases
Shared VPC
VPC peering vs VPN vs Interconnect 
Types of load balancers and use cases

## Ch 3 Projects
How to create projects
Linking projects with the billing accounts
How to list and describe the existing configurations
How to create and manage projects via CLI

## Ch 3 Billing Accounts
Required roles to create and manage the billing accounts 
Understanding the relation between Billing accounts & Projects & Organizations

## Ch 4 Compute Engine
The understanding of market place uses cases (Ex: If the user wants to deploy functional software packages without having to manually configure the software or Virtual machine instances)
Auto-scaling types (Selecting best scaling type based on the given scenario)
When to use External IP address (Static external vs Ephemeral external IP)
Importance of metadata and labels
High availability (Spreading the resources across the Global vs Regional)
Understanding Managed and Unmanaged instance groups.

## Ch 11 Cloud Storage (Object-based)
When to use different storage classes available in GCP (Ex: Multi-regional vs Regional vs Nearline vs Coldline)
Changing or conversion of storage classes. (Ex: Multi-regional to Nearline, Multi-regional to Coldline, etc)
Automatic deletion of objects and Objects transfer between the different storage classes using lifecycle policies

## Ch 7 Kubernetes Engine
The deployment process of a docker file
How to create a docker file and understanding of container registry
Autoscaling in Kubernetes
Working of cluster nodes and services

## Databases
Relational databases: SQL vs Spanner
When to use BigQuery and Cloud Bigtable

## Loading Data Into Storage


## Bigdata Tools
Difference between Dataproc vs Dataperp
Questions based on Pub/Sub use cases and integration with other services
Data Analytics tools use cases

## Image-based Questions: 2 Questions
Provided the sample company cloud architecture diagram with blanks and asked to fill the blanks with suitable GCP services as per requirement demand

## Stackdriver
Importance of Stackdriver in the Google cloud and how it works
Creating and configuring the workspaces
How to add projects form different GCP accounts to single Stackdriver account via GCP console