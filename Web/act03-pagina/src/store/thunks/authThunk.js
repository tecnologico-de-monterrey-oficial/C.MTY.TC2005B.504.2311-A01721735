import { setLoading, setError, setUser } from '../../store';
import { auth, googleAuthProvider } from '../../firebase';
import { signInWithPopup } from "firebase/auth";

export const signUpWithGoogle = () => async (dispatch) => {
    
  try {
    dispatch(setLoading(true));
    const { user } = await signInWithPopup(auth, googleAuthProvider);
    dispatch(setUser(user));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

