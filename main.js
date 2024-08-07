import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyD_N_5Tjv9zh_eJyfTXxUOICM2XX86--IM",
  authDomain: "datasiswa-aebb3.firebaseapp.com",
  projectId: "datasiswa-aebb3",
  storageBucket: "datasiswa-aebb3.appspot.com",
  messagingSenderId: "1049128187878",
  appId: "1:1049128187878:web:e1879710f4b5252a68c827",
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function ambilDaftarJadwalpelajaran() {
  const refDokumen = collection(db, "absensi");
  const kuery = query(refDokumen, orderBy("nama"));
  const cuplikanKuery = await getDocs(kuery);
  
  let hasil = [];
  cuplikanKuery.forEach((dok) => {
    hasil.push({ 
      id: dok.id,
      tanggal: dok.data().hari,
      nis: dok.data().jam, 
      nama: dok.data().waktu,
      alamat: dok.data().kelas,
      notlpn: dok.data().mapel, 
      kelas: dok.data().namaguru,
    });
  });
  
  return hasil;
}

export function formatAngka(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export async function tambahjadwalpelajaran(hari, jam, waktu, kelas, mapel, namaguru) {
      try {
        const dokRef = await addDoc(collection(db, 'absensi'), {
          hari: hari,
          jam: jam,
          waktu: waktu,
          kelas: kelas,
          mapel: mapel,
          namaguru: namaguru,

        });
        console.log('Berhasil menambah jadwalpelajaran ' + dokRef.id);
      } catch (e) {
        console.log('Gagal menambah jadwalpelajaran ' + e);
      }
    }

    export async function hapusjadwalpelajaran(docid) {
      await deleteDoc(doc(db, "absensi", docid));
    }
    export async function ubahabsensi(docId, hari, jam, waktu, kelas, mapel, namaguru) {
      await updateDoc(doc(db, "absensi", docId), {
        hari: hari,
        jam: jam,
        waktu: waktu,
        kelas: kelas,
        mapel: mapel,
        namaguru: namaguru,

      });
    }

    export async function ambiljadwalpelajaran(docId) {
      const docRef = await doc(db, "jadwal", docId);
      const docSnap = await getDoc(docRef);

      return await docSnap.data();
    }