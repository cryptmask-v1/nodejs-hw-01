import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    let contacts = await readContacts();
    contacts = [];
    await writeContacts(contacts);
    console.log('All contacts removed successfully.');
  } catch (error) {
    console.error('Error removing all contacts:', error);
  }
};

removeAllContacts();
