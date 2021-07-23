
import { Ebot7Client, Ebot7ConversationClient, Ebot7MessageClient, EEbot7MessageSource} from '@ebot7/sdk';

const MOCK_TOKEN = 'xxx';
const TEST_BASE_URL = 'https://api.e-bot7.de/';
const mockBotId = '60f7e36d669192521d552241';

const client = new Ebot7Client({
    bearerToken: MOCK_TOKEN || '',
    baseURL: TEST_BASE_URL,
  });

try {
  const conversationClient = new Ebot7ConversationClient(client);
  const messageClient = new Ebot7MessageClient(client);

  const conversation = await conversationClient.create({
    botId: mockBotId,
    payload: {},
  });

    const message = await messageClient.create({
      botId: mockBotId,
      convId: conversation.item.id,
      payload: {
        body: 'hello from liveperson',
        source: EEbot7MessageSource.VISITOR,
      },
    }); 
} catch (error) {
  console.log(error);
}