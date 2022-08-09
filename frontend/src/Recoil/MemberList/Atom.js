import { atom } from "recoil";

/**
 * State management in this react application
 * 
 * Recoil is a light-weight state management library and was utilized within this project as
 * the amount of boiler-plate code that needed to be written was non-existent (unlike redux).
 * 
 * Furthermore, the simplicity of Recoil, and the simplicity of this project (only having to really state manage the member list obtained from an axios call)
 * made Recoil a good decision.
 */
const Atom = atom({
    key : 'memberListState',
    default : {
        members : [],
        isLoading : false
    }
});

export default Atom