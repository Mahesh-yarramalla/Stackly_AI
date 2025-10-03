pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git(
                    url: 'git@github.com:Mahesh-yarramalla/Stackly_AI.git',
                    branch: 'main',
                    credentialsId: '2d1b721b-7919-479e-a2c8-60add6773ffd'
                )
            }
        }
    }
}
