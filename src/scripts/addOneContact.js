import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    // Read the existing contacts
    const contacts = await readContacts();

    // Create a new fake contact
    const newContact = createFakeContact();

    // Add the new contact to the existing contacts
    contacts.push(newContact);

    // Write the updated contacts back to the file
    await writeContacts(contacts);

    console.log('New contact added:', newContact);
  } catch (error) {
    console.error('Error adding contact:', error);
  }
};

addOneContact();
