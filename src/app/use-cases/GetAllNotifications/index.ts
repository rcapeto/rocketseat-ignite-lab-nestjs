import { Notification } from '@application/entities/notification';
import { Injectable } from '@nestjs/common';

import { NotificationsRepository } from '@application/repositories/notifications-repository';

interface GetAllNotificationsResponse {
  notifications: Notification[];
}

@Injectable()
export class GetAllNotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(): Promise<GetAllNotificationsResponse> {
    const notifications = await this.notificationsRepository.all();

    return {
      notifications,
    };
  }
}
