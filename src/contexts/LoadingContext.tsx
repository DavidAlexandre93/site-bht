import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import PageLoading from "../components/PageLoading";

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  entryCircle: boolean;
  setEntryCircle: Dispatch<SetStateAction<boolean>>;
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: true,
  setIsLoading: () => {},
  entryCircle: false,
  setEntryCircle: () => {},
});

type LoadingContextProviderProps = {
  children: ReactNode;
};
const LoadingContextProvider = (props: LoadingContextProviderProps) => {
  const { children } = props;

  const [isFirstLoading, setIsFirstLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [entryCircle, setEntryCircle] = useState(false);

  useEffect(() => {
    if (!isFirstLoading) {
      setEntryCircle(true);
    }

    if (isLoading) {
      const hidePreloader = () => {
        setTimeout(() => {
          setIsLoading(false);
          if (isFirstLoading) return setIsFirstLoading(false);
          setEntryCircle(false);
        }, 1000);
      };

      hidePreloader();

      return () => hidePreloader();
    }
  }, [isLoading]);

  return (
    <LoadingContext.Provider
      value={{ isLoading, setIsLoading, entryCircle, setEntryCircle }}
    >
      <PageLoading />
      {children}
    </LoadingContext.Provider>
  );
};

export { LoadingContext, LoadingContextProvider };
