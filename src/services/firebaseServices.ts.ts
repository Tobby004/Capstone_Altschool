import { firestore } from './firebaseConfig'; 
import { doc, setDoc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';

interface UrlEntry {
  originalUrl: string;
  slug: string;
}

export const addUrl = async (originalUrl: string, slug: string): Promise<string> => {
  try {
    const urlEntry: UrlEntry = { originalUrl, slug };

    const q = query(collection(firestore, 'urls'), where('slug', '==', slug));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs.length > 0) {
      throw new Error('Slug is already in use.');
    }

    await setDoc(doc(firestore, 'urls', slug), urlEntry);
    return slug; 
  } catch (error) {
    console.error('Error adding URL:', error);
    throw new Error('Failed to add URL');
  }
};

export const getUrl = async (slug: string): Promise<string | undefined> => {
  try {
    const docRef = doc(firestore, 'urls', slug);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const urlEntry: UrlEntry = docSnap.data() as UrlEntry;
      return urlEntry.originalUrl; 
    } else {
      return undefined; 
    }
  } catch (error) {
    console.error('Error retrieving URL:', error);
    throw new Error('Failed to retrieve URL');
  }
};
