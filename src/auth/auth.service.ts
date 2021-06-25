import { Metadata } from 'grpc';
import {
  LoginResponse,
  LoginPayload,
} from './../../generated_proto/auth/auth.service_pb';
import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class AuthService {
  private readonly userSvc;

  constructor(@Inject('USER_SVC') private userClient: ClientGrpc) {
    this.userSvc = userClient.getService('UserService');
  }

  async login(
    data: LoginPayload.AsObject,
    metadata: Metadata,
  ): Promise<LoginResponse.AsObject> {
    return this.userSvc.createUser(data);
  }
}
