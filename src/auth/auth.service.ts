import { Metadata } from 'grpc';
import {
  LoginResponse,
  LoginPayload,
} from './../../generated_proto/auth/auth_pb.d';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async login(
    data: LoginPayload.AsObject,
    metadata: Metadata,
  ): Promise<LoginResponse.AsObject> {
    return {
      id: 1,
      email: data.email,
      password: data.password,
    };
  }
}
