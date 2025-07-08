import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class UserDto {
  @IsEmail({}, { message: 'Email is not valid.' })
  email: string;

  @IsNotEmpty({ message: 'Password cannot be empty.' })
  @MinLength(4, { message: 'Password must be at least 4 characters long.' })
  password: string;
}
