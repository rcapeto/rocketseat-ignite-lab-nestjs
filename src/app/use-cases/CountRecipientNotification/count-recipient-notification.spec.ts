import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from '.';

describe('Count recipient notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    for (let i = 0; i <= 1; i++) {
      await notificationsRepository.create(makeNotification());
    }

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'example-recipient-id',
    });

    expect(count).toEqual(2);
  });
});
