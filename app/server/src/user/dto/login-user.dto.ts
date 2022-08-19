import { PartialType, PickType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class LoginUserDto extends PartialType(PickType(CreateUserDto, ['name', 'password'])) {
}
