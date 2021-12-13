import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    // firebase 설정과 관련된 개인 정보
    apiKey: "AIzaSyDU8kkl2tgq1R-pp2UmnyRV78RHjXQ4aDc",
    authDomain: "recommend-lunch.firebaseapp.com",
    projectId: "recommend-lunch",
    storageBucket: "recommend-lunch.appspot.com",
    messagingSenderId: "128682535573",
    appId: "1:128682535573:web:72002684f084ea7489899c",
    measurementId: "${config.measurementId}"
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };