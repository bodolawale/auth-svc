import { AuthService } from './auth.service';
import { LoginResponse } from './../../generated_proto/auth/auth_pb.d';
import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { LoginPayload } from 'generated_proto/auth/auth_pb';
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
