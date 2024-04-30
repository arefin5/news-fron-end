// utils/rsnchat.js
import { RsnChat } from 'rsnchat';

const rsnchat = new RsnChat("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");

export const getRsnChatResponse = async (prompt) => {
  const response = await rsnchat.gpt(prompt);
  console.log(response);
  return response.message;
};

// export default getRsnChatResponse;
