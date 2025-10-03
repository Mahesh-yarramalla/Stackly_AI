pipeline {
    agent any

    environment {
        DOCKER_HUB_USER = "Stackly-ai"
        DOCKER_HUB_PASS = credentials('admin123')  // Add in Jenkins Credentials
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Mahesh-yarramalla/Stackly_AI.git'
            }
        }

        stage('Build Django Image') {
            steps {
                sh 'docker build -t $DOCKER_HUB_USER/django-app:latest .'
            }
        }

        stage('Build FastAPI Image') {
            steps {
                sh 'docker build -t $DOCKER_HUB_USER/fastapi-app:latest ./fastapi_app'
            }
        }

        stage('Push to DockerHub') {
            steps {
                sh 'echo $DOCKER_HUB_PASS | docker login -u $DOCKER_HUB_USER --password-stdin'
                sh 'docker push $DOCKER_HUB_USER/django-app:latest'
                sh 'docker push $DOCKER_HUB_USER/fastapi-app:latest'
            }
        }

        stage('Deploy on EC2') {
            steps {
                sh 'docker-compose down || true'
                sh 'docker-compose up -d --build'
            }
        }
    }
}
