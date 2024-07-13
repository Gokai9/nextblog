import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark, docco, vs, vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs'
const Component = ({ children }: { children: React.ReactNode }) => {
  const codeString = '(num) => num + 1';
  const {props} = children
  console.log(children)
  return (
    <SyntaxHighlighter language="python" style={vs2015}>
      {[props['children']]}
    </SyntaxHighlighter>
  );
};

export default Component