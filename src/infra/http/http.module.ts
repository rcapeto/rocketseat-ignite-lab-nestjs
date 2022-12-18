import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

import { SendNotification } from '@application/use-cases/SendNotification';
import { CancelNotification } from '@application/use-cases/CancelNotification';
import { ReadNotification } from '@application/use-cases/ReadNotification';
import { UnreadNotification } from '@application/use-cases/UnreadNotification';
import { CountRecipientNotifications } from '@application/use-cases/CountRecipientNotification';
import { GetRecipientNotifications } from '@application/use-cases/GetRecipientNotifications';
import { GetAllNotifications } from '@application/use-cases/GetAllNotifications';

@Module({
  imports: [DatabaseModule],
  providers: [
    SendNotification,
    CancelNotification,
    ReadNotification,
    UnreadNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    GetAllNotifications,
  ],
  controllers: [NotificationsController],
})
export class HttpModule {}
