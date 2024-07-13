import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs'
const Component = ({src}:{src:string}) => {
  return (
    <SyntaxHighlighter language="python" style={vs2015}>
      {src}
    </SyntaxHighlighter>
  );
};

export default Component