import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notifications-repository';
import { GetAllNotifications } from '.';

describe('Get all notifications', () => {
  it('should be able to get all database notifications', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();
    const getAllNotifications = new GetAllNotifications(
      notificationsRepository,
    );

    const recipientId = 'recipient-test-id';

    for (let i = 0; i <= 1; i++) {
      notificationsRepository.create(makeNotification({ recipientId }));
    }

    const { notifications } = await getAllNotifications.execute();

    expect(notifications.length).toBe(2);

    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId }),
        expect.objectContaining({ recipientId }),
      ]),
    );
  });
});
