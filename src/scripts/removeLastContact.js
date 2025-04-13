import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    let contacts = await readContacts();
    contacts.pop();
    await writeContacts(contacts);
    console.log('Last contact removed successfully.');
  } catch (error) {
    console.error('Error removing last contact:', error);
  }
};

removeLastContact();
