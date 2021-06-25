import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

const middlewares = ClientsModule.register([
  {
    name: 'USER_SVC',
    transport: Transport.GRPC,
    options: {
      package: 'user',
      protoPath: join(__dirname, 'proto/user/user.service.proto'),
      url: 'localhost:7002',
    },
  },
]);

export default middlewares;
