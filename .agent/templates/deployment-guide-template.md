# Deployment Guide

## Prerequisites
* AWS CLI installed and configured
* Docker installed locally
* Access to the production Kubernetes cluster

## Environment Variables
Ensure the following secrets are set in your CI/CD pipeline or deployment environment:
* `DATABASE_URL`
* `AWS_ACCESS_KEY_ID`
* `AWS_SECRET_ACCESS_KEY`

## Deployment Strategy
We use a **Recreate** strategy (or Rolling Update) for this service.
* **Downtime**: < 1 minute (Rolling)
* **Rollback**: Manual via `kubectl rollout undo`

## Steps to Deploy

### 1. Build and Tag
```bash
docker build -t myapp:latest .
docker tag myapp:latest registry.example.com/myapp:v1.0.1
docker push registry.example.com/myapp:v1.0.1
```

### 2. Update Manifests
Update the image tag in `kubernetes-deployment.yml` to `v1.0.1`.

### 3. Apply Changes
```bash
kubectl apply -f kubernetes-deployment.yml
```

### 4. Verify Deployment
Check the status of the pods:
```bash
kubectl get pods -l app=myapp
kubectl rollout status deployment/myapp
```

## Troubleshooting

### Logs
To view logs for a crashing pod:
```bash
kubectl logs <pod-name> --previous
```

### Rollback
If the deployment fails, roll back to the previous version:
```bash
kubectl rollout undo deployment/myapp
```
