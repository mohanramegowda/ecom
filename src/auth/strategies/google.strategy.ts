// google.strategy.ts
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID, //'80626869636-bm6efmokr5apscn0ugnghscossdvt7o7.apps.googleusercontent.com',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, //'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',
      callbackURL: process.env.GOOGLE_CALLBACK_URL, //'http://localhost:3000/auth/callback',
      scope: ['email'],
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
      console.log(`**********inside validate method********`);
    const { name, emails, photos } = profile;

    // Add your user registration and login logic here
    // For example, you can check if the user already exists and register or log them in accordingly.

    const user = {
      email: emails[0].value,
      name: JSON.stringify(name),
      picture: photos[0].value,
      accessToken,
    };

    done(null, user);
  }
}
