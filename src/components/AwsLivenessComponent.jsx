import React, { useState } from 'react';
import { FaceLivenessDetectorCore } from '@aws-amplify/ui-react-liveness';
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import {CognitoIdentityClient} from "@aws-sdk/client-cognito-identity";
import {useEnv} from "../useEnv";

export default function AwsLivenessComponent() {
    const [sessionId, setSessionId] = useState(null);
    const [readyStartLiveness, setReadyStartLiveness] = useState(false);
    const { awsCognitoRegion, awsCognitoPoolId } = useEnv();

    const customCredentialsProvider = () => {
        return fromCognitoIdentityPool({
            client: new CognitoIdentityClient({ region: awsCognitoRegion }),
            identityPoolId: awsCognitoPoolId
        })
    }

    if (readyStartLiveness) {
        return(
            <FaceLivenessDetectorCore
                sessionId={sessionId}
                region={awsCognitoRegion}
                onAnalysisComplete={() => {
                    alert('Liveness completed')
                    setReadyStartLiveness(false)
                }}
                onError={(error) => {
                    console.error(error);
                }}
                config={{
                    credentialProvider: customCredentialsProvider(),
                }}
            />
        )
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            setReadyStartLiveness(true);
        }}>
            <label>Enter session id: </label>
            <p/>
            <input onChange={(e) => setSessionId(e.target.value)}/>
            <button type="submit">Start</button>
        </form>
    );
}