# AWS Liveness React Demo

This project is a React demo application integrating AWS Amplify UI and AWS Liveness for facial recognition and authentication using Amazon Cognito.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- AWS account with Cognito Identity Pool set up (for environment variables)

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd aws-livness-react-demo
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
REACT_APP_COGNITO_REGION=your-aws-region
REACT_APP_COGNITO_IDENTITY_POOL_ID=your-cognito-identity-pool-id
```

- Replace `your-aws-region` with your AWS region (e.g., `us-east-1`).
- Replace `your-cognito-identity-pool-id` with your Cognito Identity Pool ID.

## Running the Application Locally

Start the development server:

```bash
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

#