// firebaseServices.ts
import { firestore } from './firebaseConfig'; // Adjust the import path if necessary
import { doc, setDoc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';

interface UrlEntry {
  originalUrl: string;
  slug: string;
}

// Function to add a new shortened URL
export const addUrl = async (originalUrl: string, slug: string): Promise<string> => {
  const urlEntry: UrlEntry = { originalUrl, slug };

  // Check if slug is already in use
  const q = query(collection(firestore, 'urls'), where('slug', '==', slug));
  const querySnapshot = await getDocs(q);
  if (querySnapshot.docs.length > 0) {
    throw new Error('Slug is already in use.');
  }

  // Add the URL entry to Firestore
  await setDoc(doc(firestore, 'urls', slug), urlEntry);
  return slug; // Return the slug as the identifier for the shortened URL
};

// Function to retrieve an original URL given a slug
export const getUrl = async (slug: string): Promise<string | undefined> => {
  const docRef = doc(firestore, 'urls', slug);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const urlEntry: UrlEntry = docSnap.data() as UrlEntry;
    return urlEntry.originalUrl; // Return the original URL
  } else {
    return undefined; // Slug not found
  }
};
