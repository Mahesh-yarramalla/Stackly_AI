pipeline {
    agent any

    environment {
        DOCKER_HUB_USER = "Stackly-ai"
        DOCKER_HUB_PASS = credentials('admin123')  // DockerHub password stored in Jenkins Credentials
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'git@github.com:Mahesh-yarramalla/Stackly_AI.git',
                    credentialsId: 'a0b15e27-48aa-42a9-becb-9d19bc41210a'   // <-- Use the SSH private key you added in Jenkins Credentials
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
