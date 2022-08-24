import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PageService } from './page.service';

@Controller('page')
@ApiTags('page')
export class PageController {
  constructor(private readonly pageService: PageService) {}
}
