interface ContextProviderProps {
  children: React.ReactNode;
}
export const ContextProvider = (props: ContextProviderProps) => {
  return <div>{props.children}</div>;
};
