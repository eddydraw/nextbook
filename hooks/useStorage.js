import {useState, useEffect} from 'react'
import {projectStorage, projectFirestore, timestamp} from '../../firebase/firebaseConfig'

const useStorage = (file) => {
    const [progress, setProgress]=useState(0);
    const [error, setError]=useState(null);
    const [url, setUrl]=useState(null);
    
  useEffect(() => {
      const collectionRef = projectFirestore.collection('histoires');
        const createdAt = timestamp();
        const name = file.name;
        const title = file.title;
        const body = file.body;
        collectionRef.doc(name).set({ createdAt, name, title, body });
    }, [file]);
  return { progress, url, error };
}

export default useStorage;