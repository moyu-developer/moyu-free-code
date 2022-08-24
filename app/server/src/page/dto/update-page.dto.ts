import { PartialType, OmitType, PickType } from '@nestjs/swagger';
import { PageModelDto } from './schema.dto';

export class UpdatePageDto extends PartialType(PickType(PageModelDto, ['title', 'content', 'status'])) {
}
