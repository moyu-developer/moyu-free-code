import { PickType } from '@nestjs/swagger';
import { PageModelDto } from './schema.dto';

export class CreatePageDto extends PickType(PageModelDto, ['title', 'content', 'status']) {
}
