// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { deleteDoc, getFirestore } from "firebase/firestore";
import { getDocs, collection, addDoc, doc, setDoc,  } from "firebase/firestore";
import { getAuth } from "firebase/auth"

import { getStorage, ref, uploadBytes, listAll, getDownloadURL, getMetadata,deleteObject } from "firebase/storage";
///pinia



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwGu0nt3t5I_4wGCRL3NXaeOUytX-1ASU",
    authDomain: "peloterosfc-c496a.firebaseapp.com",
    databaseURL: "https://peloterosfc-c496a.firebaseio.com",
    projectId: "peloterosfc-c496a",
    storageBucket: "peloterosfc-c496a.appspot.com",
    messagingSenderId: "864437364837",
    appId: "1:864437364837:web:0f5636a079823f820d3e8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth(app)



export {
    db, auth
}










export const listarArchivos = async(name) => {

  const storage = getStorage();
  let arrayimages = []
  // Create a reference under which you want to list
  const listRef = ref(storage, `elektra-web/${name}`);
  
  // Find all the prefixes and items.
  listAll(listRef)
    .then((res) => {
      res.items.forEach((itemRef,i) => {
        // All the items under listRef.
        console.log(itemRef.fullPath,i);
        
      });
    }).catch((error) => {
      // Uh-oh, an error occurred!
    });
}



//TRAER TODA LA LISTA DE PRODUCTOS 
export const getAllProducts = async () => {
    const prodST = useProductStore()
    prodST.limpiarProductos()//limpia previa
    prodST.limpiarOfertas()//limpia previa
    const querySnapshot = await getDocs(collection(db, "elektra-web"));
    querySnapshot.forEach((doc) => {
        prodST.llenarProductos({ id: doc.id, data: doc.data() })
        // console.log(doc.data().oferta);
        doc.data().oferta?prodST.llenarOfertas({ id: doc.id, data: doc.data() }):0
    });

    return prodST.groupProducts
}


//TRAER TODA LA LISTA DE PRODUCTOS que seran puestos para el buscador
export const getAllProductsFind = async () => {
  const prodST = useProductStore()
  prodST.limpiarProductosSearch()//limpia previa
  const querySnapshot = await getDocs(collection(db, "elektra-web"));
  querySnapshot.forEach((doc) => {
      
     if(isActiveOffer()){
      prodST.llenarProductosSearch({ id: doc.id, data: doc.data() })
     }else{
       doc.data().oferta==false?prodST.llenarProductosSearch({ id: doc.id, data: doc.data() }):0

     }
      // console.log(doc.data().oferta);
  });

  return prodST.groupProductsSearch
}


//TRAER TODA LA INFORMACION DEL CONTENIDO 
export const getAllContentHome = async () => {
  const infoPageST = useProductStore()
  infoPageST.limpiarInfopage()//limpia previa
  const querySnapshot = await getDocs(collection(db, "elektra-web-contenido"));
  querySnapshot.forEach((doc) => {
      // prodST.llenarProductos({ id: doc.id, data: doc.data() })
      infoPageST.llenarInfopage(doc.data())
      //  console.log(doc.data());
  });
}





