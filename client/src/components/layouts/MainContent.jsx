const MainContent = ({ children, isRegisterCardOpened }) => {
  return <main className={`p-8 ${isRegisterCardOpened}`}>{children}</main>;
};

export default MainContent;