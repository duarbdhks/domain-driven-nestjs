const { env: ENV } = process

export const config = {
  env: ENV.NODE_ENV || 'local',
  port: Number(ENV.PORT) || 3030,
  aws: {
    region: ENV.AWS_REGION || 'ap-northeast-2',
    endpoint: ENV.AWS_ENDPOINT || 'localstack',
    access_key_id: ENV.AWS_ACCESS_KEY_ID || 'AWS_ACCESS_KEY_ID',
    secret_access_key: ENV.AWS_SECRET_ACCESS_KEY || 'AWS_SECRET_ACCESS_KEY',
  },
  aws_sqs_queue_url: ENV.AWS_SQS_QUEUE_URL || 'http://localhost:4566/000000000000/example',
  db: {
    connectionString: ENV.DB_URL || 'postgresql://root:root@localhost:35432/ddd',
    max: ENV.DB_POOLSIZE || 1,
  },
  email: ENV.EMAIL || 'duarbdhks@gmail.com',
}
