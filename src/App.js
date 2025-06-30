import AwsLivenessComponent from "./components/AwsLivenessComponent";
import {ThemeProvider} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <div className="App">
        <ThemeProvider>
            <AwsLivenessComponent/>
        </ThemeProvider>
    </div>
  );
}

export default App;
