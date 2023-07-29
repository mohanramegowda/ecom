import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UseGuards, Req } from '@nestjs/common';
import { GoogleOAuthGuard } from './google-oauth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('auth/google')
  @UseGuards(GoogleOAuthGuard)
  async googleAuth() {
    // The GoogleStrategy will handle the authentication process
  }

  @Get('auth/callback')
  @UseGuards(GoogleOAuthGuard)
  async googleAuthCallback(@Req() req) {
    // The user will be redirected here after successful authentication
    return {
      message: JSON.stringify(req.user)
    };
  }
}
