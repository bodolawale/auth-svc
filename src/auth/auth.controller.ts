import { AuthService } from './auth.service';
import {
  LoginResponse,
  LoginPayload,
} from './../../generated_proto/auth/auth.service_pb';
import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata } from 'grpc';

@Controller('auth')
export class AuthController {
  constructor(@Inject(AuthService) private readonly authService: AuthService) {}

  @GrpcMethod('AuthService')
  login(
    data: LoginPayload.AsObject,
    metadata: Metadata,
  ): Promise<LoginResponse.AsObject> {
    return this.authService.login(data, metadata);
  }
}
