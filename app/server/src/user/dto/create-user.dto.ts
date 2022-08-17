import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  
  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  avatar?: string;


  @ApiProperty({ minimum: 6 })
  password: string;
}
