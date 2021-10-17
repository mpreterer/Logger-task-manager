import { useContext } from "react";
import { StoreContext } from "../pages/_app";

function useStore() {
  return useContext(StoreContext);
}

export default useStore;