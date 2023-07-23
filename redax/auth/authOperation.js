 import firebase from '../../config';

 export const authSignUp = ({ login, email, password }) =>
     async (dispatch, getState) => {
         console.log("mail pass log", email, password, login);
  try {
      const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log("user=", user);
  } catch (error) {
      console.log("error:", error);
      console.log("error.message", error.message);
  }
  };
 export const authSignIn = () => async (dispatch, getState) => {
  };
  export const authSignOut = () => async (dispatch, getState) => {
    
  };


//   import { 
//       createUserWithEmailAndPassword,
//       signInWithEmailAndPassword,
//       onAuthStateChanged,
//       updateProfile
//   } from 'firebase/auth';
//   import { auth } from '../../config';

//   export const authSighUp = async ({ email, password }) => {
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//     } catch (error) {
//       throw error;
//     }
//   };

//  const authStateChanged = async (onChange = () => {}) => {
//          onAuthStateChanged((user) => {
//                  onChange(user);
//          });
//  };

// const loginDB = async ({ email, password }) => {
//   try {
//     const credentials = await signInWithEmailAndPassword(auth, email, password);
//         return credentials.user;
//   } catch (error) {
//     throw error;
//   }
// };

// const updateUserProfile = async (update) => {

//   const user = auth.currentUser;

//   // якщо такий користувач знайдений
//   if (user) {

//   // оновлюємо його профайл
//         try {
//             await updateProfile(user, update);
//         } catch(error) {
//             throw error
//         }
//   }
// };