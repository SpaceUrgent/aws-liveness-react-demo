export const useEnv = () => {

    return {
        awsCognitoRegion : process.env.REACT_APP_COGNITO_REGION,
        awsCognitoPoolId: process.env.REACT_APP_COGNITO_IDENTITY_POOL_ID
    }
}