function Paragraph({ children } :  Readonly<{
    children: React.ReactNode;
  }>) {
    return <p className="text-gray-700 my-4 text-base">{children}</p>;
  }
  export default Paragraph;